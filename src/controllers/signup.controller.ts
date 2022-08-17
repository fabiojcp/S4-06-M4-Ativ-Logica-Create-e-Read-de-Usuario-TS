import { Request, Response } from "express";
import { signupService } from "../services/signup.service";

export default class signupController {
    static async createUser (request:Request, response:Response) {
        const data = request.body
        
        try {
            const servDAta = await signupService(data)
            return response.status(201).json({
                ...servDAta
            })
        }
        catch (error:any) {
            return response.status(400).json({
                message: error.message,
              });
        }
    }

}