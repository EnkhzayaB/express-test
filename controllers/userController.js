import { getUsers } from "../models/userModels.js";

export const getAllUsers = (_req, res) => {
  const users = getUsers();
  res.json(users);
};
