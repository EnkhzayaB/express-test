import express, { request, response } from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const port = 8000;
const server = express();
server.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "users.json");

server.get("/users", (_req, res) => {
  const data = fs.readFileSync(`users.json`, `utf-8`);
  //console.log("data", data);
  const users = JSON.parse(data);
  // console.log("parsed data", users);
  res.json(users);
});

server.post(`/users`, (req, res) => {
  const users = fs.readFileSync(`users.json`, `utf-8`);
  const data = JSON.parse(users);

  const { name, email } = req.body;

  const newUser = {
    id: Date.now().toString(),
    name: name,
    email: email,
    createdAt: new Date(),
  };

  data.push(newUser);
  console.log("newUser", data);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.json(newUser);
});

server.put("/users/:id", (req, res) => {
  const users = fs.readFileSync(`users.json`, `utf-8`);
  const data = JSON.parse(users);

  const userId = req.params.id;
  const { name, email } = req.body;

  const updatedUsers = data.map((user) => {
    if (user.id === userId) {
      return { ...user, name, email };
    }
    return user;
  });

  fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));
  res.json(updatedUsers);
});

server.listen(port, () => {
  console.log("http://localhost:8000 deer bn");
});

// data.map((client) => {
//   if (client.id == newUser.id) {
//     client.name = newName;
//     client.email = newEmail;
//   }
// });
