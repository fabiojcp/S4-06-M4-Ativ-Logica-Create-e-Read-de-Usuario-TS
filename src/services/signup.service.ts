import users from "../database";
import { CreateUser, User } from "../interfaces";
import { v4 as uudiv4 } from "uuid";
import * as bcrypt from "bcrypt";

export const signupService = async ({email, password, name}:CreateUser) => {
    const hashPassword = await bcrypt.hash(password, 10);

    const userData:User = {
        id: uudiv4(),
        email,
        name,
        password: hashPassword,
        createdOn: new Date(),
        updatedOn: new Date(),
      };
      users.push(userData);
      return userData;
}