import { Router} from "express";
import signinController from "../controllers/signin.controller";
import signupController from "../controllers/signup.controller";

const users = Router()

users.get("")
users.post("/signup", signupController.createUser)
users.post("/signin", signinController.createUser)

export default users