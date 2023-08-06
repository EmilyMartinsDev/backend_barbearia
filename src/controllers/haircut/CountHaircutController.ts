import { Request, Response } from "express"
import { CountHaircutService } from "../../services/haircut/CountHaircutService"

class CountHaircutController{
    async handle(req: Request, res: Response){
        const userId = req.userId

        const countHaircutService = new CountHaircutService()
        const count =  await countHaircutService.execute({
            userId
        });

        return res.json(count)
    }

}

export { CountHaircutController }