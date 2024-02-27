import argparse
import os
import random

import numpy as np
import torch
import torch.backends.cudnn as cudnn
import gradio as gr

from transformers import StoppingCriteriaList


from minigpt4.common.config import Config
from minigpt4.common.dist_utils import get_rank
from minigpt4.common.registry import registry
from minigpt4.conversation.conversation import Chat, CONV_VISION_Vicuna0, CONV_VISION_LLama2, StoppingCriteriaSub

# imports modules for registration
from minigpt4.datasets.builders import *
from minigpt4.models import *
from minigpt4.processors import *
from minigpt4.runners import *
from minigpt4.tasks import *


def parse_args():
    parser = argparse.ArgumentParser(description="Demo")
    parser.add_argument("--cfg-path", required=True, help="path to configuration file.")
    parser.add_argument("--gpu-id", type=int, default=0, help="specify the gpu to load the model.")
    parser.add_argument(
        "--options",
        nargs="+",
        help="override some settings in the used config, the key-value pair "
        "in xxx=yyy format will be merged into config file (deprecate), "
        "change to --cfg-options instead.",
    )
    args = parser.parse_args()
    return args


def setup_seeds(config):
    seed = config.run_cfg.seed + get_rank()

    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)

    cudnn.benchmark = False
    cudnn.deterministic = True


# ========================================
#             Model Initialization
# ========================================

conv_dict = {'pretrain_vicuna0': CONV_VISION_Vicuna0,
             'pretrain_llama2': CONV_VISION_LLama2}

print('Initializing Chat')
args = parse_args()
cfg = Config(args)

model_config = cfg.model_cfg
model_config.device_8bit = args.gpu_id
model_cls = registry.get_model_class(model_config.arch)
model = model_cls.from_config(model_config).to('cuda:{}'.format(args.gpu_id))

CONV_VISION = conv_dict[model_config.model_type]

vis_processor_cfg = cfg.datasets_cfg.cc_sbu_align.vis_processor.train
vis_processor = registry.get_processor_class(vis_processor_cfg.name).from_config(vis_processor_cfg)

stop_words_ids = [[835], [2277, 29937]]
stop_words_ids = [torch.tensor(ids).to(device='cuda:{}'.format(args.gpu_id)) for ids in stop_words_ids]
stopping_criteria = StoppingCriteriaList([StoppingCriteriaSub(stops=stop_words_ids)])

chat = Chat(model, vis_processor, device='cuda:{}'.format(args.gpu_id), stopping_criteria=stopping_criteria)
print('Initialization Finished')


import os
import sqlite3
import schedule
import time
from PIL import Image
from webdav3.client import Client

# 创建WebDAV客户端
options = {
    'webdav_hostname': 'http://localhost:5244/dav',
    'webdav_login':    'admin',
    'webdav_password': 'admin'
}
client = Client(options)

def job():
    # 创建一个数据库连接
    conn = sqlite3.connect('/home/nick/alist/data/data.db')
    
    # 创建一个游标对象
    cur = conn.cursor()

    # 查询满足条件的元素
    cur.execute("SELECT name FROM x_search_nodes WHERE name LIKE '%.jpg' AND description IS NULL")
    rows = cur.fetchall()

    for row in rows:
        full_file_name = row[0]
        file_name, file_extension = os.path.splitext(full_file_name)
        file = file_name

        # 下载图片到临时文件
        temp_file = './pic/' + file
        client.download_sync(remote_path=file, local_path=temp_file)

        # 打开图片并添加到img_list
        image = Image.open(temp_file)

        img_list = []

        chat_state = CONV_VISION.copy()
        llm_message = chat.upload_img(image, chat_state, img_list)
        chat.encode_img(img_list)
        chat.ask("Describe the most prominent feature in two words only", chat_state)

        llm_message = chat.answer(conv=chat_state,
                                  img_list=img_list,
                                  num_beams=1,
                                  temperature=1,
                                  max_new_tokens=300,
                                  max_length=2000)[0]
        print(llm_message)

        # 插入llm_message
        cur.execute("UPDATE x_search_nodes SET description = ? WHERE name = ?", (llm_message, file))

        # 提交事务
        conn.commit()

        # 关闭连接
        conn.close()

# 每10分钟执行一次job
schedule.every(10).minutes.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
