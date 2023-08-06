import { Request, Response } from "express";
import { CreateHairCutService } from "../../services/haircut/CreateHairCutService";

class CreateHairCutController{
    async handle(req: Request,res: Response ){

        const userId = req.userId
        const { name, price } = req.body

        const createHairCutService = new CreateHairCutService()
        const haircut = await createHairCutService.execute({
            name,
            price,
            userId
        });

        return res.json(haircut)
    
    
    }
}

export { CreateHairCutController }