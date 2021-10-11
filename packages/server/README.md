## build image

```shell
$ docker build --tag todo-server .
```

## run container

```shell
$ docker run --rm -d -p 3000:3000 --name todo-server todo-server
```

## 数据库

```shell
docker run
--name mysql
-e MYSQL_ROOT_PASSWORD=12345678 \
-d mysql
```
