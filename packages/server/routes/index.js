import Router from "@koa/router";

import controller from "../controllers";

const router = new Router({
  prefix: "/api",
});

// todo
router.post("/todo/list", controller.todo.list);
router.post("/todo", controller.todo.create);
router.put("/todo", controller.todo.update);
router.delete("/todo/:id", controller.todo.remove);

export default router;
