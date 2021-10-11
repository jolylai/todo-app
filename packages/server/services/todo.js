import model from "../models";

class Todo {
  async list({ offset = 0, limit = 10 }) {
    const { count, rows } = await model.Todo.findAndCountAll({
      offset,
      limit,
      order: [
        ["createdAt", "desc"],
        ["id", "desc"],
      ],
    });

    return { total: count, list: rows };
  }

  async find(id) {
    const todo = await model.Todo.findByPk(id);
    if (!todo) {
      throw (404, "todo not found");
    }
    return todo;
  }

  async create(todo) {
    return model.Todo.create(todo);
  }

  async update({ id, updates }) {
    const todo = await model.Todo.findByPk(id);
    if (!todo) {
      throw new Error(404, "todo not found");
    }
    return todo.update(updates);
  }

  async remove(id) {
    const todo = await model.Todo.findByPk(id);
    if (!todo) {
      throw new Error(404, "todo not found");
    }

    return todo.destroy();
  }
}

export default Todo;
