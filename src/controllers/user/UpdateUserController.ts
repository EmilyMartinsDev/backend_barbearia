import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController{
    async handle(req: Request, res: Response){
        const  { name, endereco } = req.body
        const userId = req.userId
        const updateUserService = new UpdateUserService()
        const updatedUser = await updateUserService.execute({
            endereco,
            name,
            userId
        })

        return res.json(updatedUser)
    }
}

export { UpdateUserController }