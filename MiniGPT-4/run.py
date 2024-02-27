import time
import subprocess

while True:
    subprocess.call(['python', 'alist.py', '--cfg-path', 'eval_configs/minigpt4_llama2_eval.yaml', '--gpu-id', '0'])
    time.sleep(30)  # 休息60秒