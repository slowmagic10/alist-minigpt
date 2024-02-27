import sqlite3

# 连接到数据库（替换为你的数据库路径）
conn = sqlite3.connect('./data/data.db')
cursor = conn.cursor()

# 执行 SQL 语句来添加列
alter_query = "ALTER TABLE x_search_nodes ADD COLUMN description TEXT;"
cursor.execute(alter_query)

# 提交更改并关闭连接
conn.commit()
conn.close()
