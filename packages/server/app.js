import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

import router from "./routes";
import config from "./config";

const PORT = config.port;

const app = new Koa();

app.use(cors()).use(bodyParser()).use(router.routes());

app.listen(PORT, () => {
  console.log(`server listen at: localhost://${PORT}`);
});
