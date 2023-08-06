import { Request, Response } from "express";
import { ListHaircutService } from "../../services/haircut/ListHaircutService";

class ListHaircutController{
    async handle(req: Request, res: Response){
        const userId = req.userId
        const status = req.query.status as string

        const listHaircutService = new ListHaircutService()
        const haircuts = await listHaircutService.execute({
            userId,
            status
        })

        return res.json(haircuts)
    }
}

export {ListHaircutController }