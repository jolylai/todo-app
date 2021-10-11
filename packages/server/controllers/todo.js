import service from "../services";

class Todo {
  async list(ctx, next) {
    const list = await service.todo.list({ limit: 10, offset: 1 });

    ctx.body = list;
  }

  async create(ctx, next) {
    const todo = await service.todo.create(ctx.request.body);
    ctx.body = todo;
  }

  async remove(ctx, next) {
    const { params } = ctx.request;

    if (!params.id) {
      ctx.status = 400;
      ctx.body = "缺少 id";

      return;
    }

    ctx.body = await service.todo.remove(params.id);

    console.log("params: ", params);
  }

  async update(ctx, next) {}
}

export default Todo;
