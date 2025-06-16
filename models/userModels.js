import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const port = 8000;
const server = express();
server.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "task.json");

export const getUsers = () => {
  const data = fs.readFileSync(`users.json`, "utf-8");
  return JSON.parse(data);
};

export const saveUser = (data) => {
  return fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
