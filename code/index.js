import express, { request, response } from "express";
import bodyParser from "body-parser";
import fs from "fs"; // file system
import path from "path"; // path ner awdg and path ruugaa handah
import { fileURLToPath } from "url"; // full folder path awdg

const port = 8000;
const server = express();
server.use(bodyParser.json());

// file tohirgoo 3 shat
const __filename = fileURLToPath(import.meta.url);
console.log("__filename", __filename);
///Users/25LP0861/Desktop/Backend/express/index.js

const __dirname = path.dirname(__filename);
console.log("__dirname", __dirname);
///Users/25LP0861/Desktop/Backend/express - folder iin ner

const file = path.join("__dirname", "users.json");
console.log("file", file);
// shineer uusgeh user.json gdg file g omnoh express gdh folder dotor uusgn
// file tohirgoo end //

//4// To-do List
// let task = [];
// let currentId = 0;

// server.get("/", (_request, response) => {
//   response.json({ success: true, data: task });
// });

// server.post("/task", (request, response) => {
//   const date = new Date();
//   const newTask = {
//     id: currentId++,
//     title: request.body.title,
//     status: request.body.status,
//     createDate: date.toDateString(),
//   };

//   if (
//     (newTask.status == "backlog" ||
//       newTask.status == "complete" ||
//       newTask.status == "inProgress") &&
//     newTask.title !== ""
//   ) {
//     task.push(newTask);
//     //console.log(_request.body.title, _request.body.id, _request.body.status);

//     response.json(task);
//   } else {
//     response.json({ success: "Error: Zuw medeelel oruulna uu", data: task });
//   }
// });

// server.put("/task/:id", (request, response) => {
//   const id = request.params.id;
//   const newTitle = request.body.title;
//   const newStatus = request.body.status;

//   if (
//     (newStatus == "backlog" ||
//       newStatus == "complete" ||
//       newStatus == "inProgress") &&
//     newTitle !== ""
//   ) {
//     task.map((task) => {
//       if (task.id == id) {
//         task.status = newStatus;
//         task.title = newTitle;
//       }
//       return task;
//     });
//     response.json({ success: true, data: task });
//   } else
//     response.json({ success: "Error: Zuw medeelel oruulna uu", data: task });
// });

// server.delete("/task/:id", (request, response) => {
//   const id = request.params.id;
//   task = task.filter((task) => task.id != id);

//   response.json({ success: true, data: task });
// });

// server.listen(port, () => {
//   console.log("http://localhost:8000 deer bn");
// });

//3// let users = [];

// server.get("/", (_request, response) => {
//   response.json({ success: true, data: users });
// });
// server.post("/user", (request, response) => {
//   users.push(request.body);
//   response.json({ success: true, data: users });
// });
// server.put("/users/:name", (request, response) => {
//   const name = request.params.name;
//   const rename = request.body.name;
//   users = users.map((user) => {
//     if (user.name === name) {
//       user.name = rename;
//     }
//     return user;
//   });

//   response.json({ success: true, data: users });
// });
// server.delete("/users/:name", (request, response) => {
//   const name = request.body.name;

//   users = users.filter((user) => user.name !== name);

//   response.json({ success: true, data: users });
// });
// server.listen(port, () => {
//   console.log("http://localhost:8000 deer bn");
// });

//2// let count = 0;

// server.get("/", (_request, response) => {
//   response.send(count);
// });
// server.post("/increase", (_request, response) => {
//   count = count + 1;
//   response.send(count);
// });
// server.delete("/decrease", (_request, response) => {
//   count = count - 1;
//   response.send(count);
// });
// server.listen(port, () => {
//   console.log("http://localhost:8000 deer bn");
// });

//1//let name = "nomin";

// localhost:8888
// server.get("/name", (request, response) => {
//   response.send(`tanii ner = ${name}`);
// });

// server.delete("/name", (request, response) => {
//   name = "";
//   response.send(`tanii ner ustlaa ${name}`);
// });

// server.put("/name", (_request, response) => {
//   name = "dulmaa";
//   response.send(`tanii ner soligdloo ${name}`);
// });

// server.listen(port, () => {
//   console.log("http://localhost:8888 deer bn");
// });
