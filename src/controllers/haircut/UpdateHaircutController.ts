import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutService";

class UpdateHaircutController{
    async handle(req: Request, res: Response){
        const userId = req.userId
        const { name, price, status, haircutId } = req.body
        
        const updateHaircutService = new UpdateHaircutService()
        const updateHaircut = updateHaircutService.execute({
            userId,
            price,
            name,
            status,
            haircutId
        });

        return res.json(updateHaircut)

    }
}

export { UpdateHaircutController }