import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { Login } from "../interfaces";

export const signinService = ({email, password}:Login) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("email or password is invalid");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error("email or password is invalid");
  }

  const token = jwt.sign({ email: user.email }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: user.id,
  });

  return { token: token, userId: user.id };
};