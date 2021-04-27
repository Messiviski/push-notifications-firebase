import express from "express";
import * as admin from "firebase-admin";
import "./shared/container";
import "./database";
import { Env } from "./configs/Env";
import { router } from "./routes";

Env.configure();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const app = express();

app.use(express.json());

app.use(router);

app.listen(Env.PORT, () => console.log("Server is running!"));
