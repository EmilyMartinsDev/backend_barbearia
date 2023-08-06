import { Request, Response } from "express";
import { CreateScheduleService } from "../../services/schedule/CreateScheduleService";

class CreateScheduleController{
    async handle(req: Request, res: Response ){
        const userId = req.userId

        const { haircutId, custumer  } = req.body

        const createScheduleService = new CreateScheduleService()
        const schedule = await createScheduleService.execute({
            custumer,
            haircutId,
            userId
        });
        
        return res.json(schedule)

    }
}

export { CreateScheduleController }