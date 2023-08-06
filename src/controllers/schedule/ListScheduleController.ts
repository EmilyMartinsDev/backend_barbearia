import { Request, Response } from "express";
import { ListScheduleService } from "../../services/schedule/ListScheduleService";

class ListScheduleController{
    async handle(req: Request, res: Response){
        const userId = req.userId

        const listScheduleService = new ListScheduleService()
        const schedules = await listScheduleService.execute({
            userId
        });

        return res.json(schedules)
    }
}

export { ListScheduleController }