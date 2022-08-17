import { Request, Response } from "express";
import {signinService} from "../services/signin.service";


export default class signinController {
    static async createUser (request:Request, response:Response) {
        const data = request.body
        
        try {
            const servDAta = await signinService(data)
            return response.status(200).json({
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