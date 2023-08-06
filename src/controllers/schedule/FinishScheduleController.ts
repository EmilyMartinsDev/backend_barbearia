import { Request,Response } from "express";
import { FinishScheduleService } from "../../services/schedule/FinishScheduleService";

class FinishScheduleController{
    async handle(req: Request, res: Response){
        const userId = req.userId
        const scheduleId = req.query.scheduleId as string

        const finishScheduleService = new FinishScheduleService()
        const finish = await finishScheduleService.execute({
            userId,
            scheduleId
        });

        return res.json(finish)
    }
}

export { FinishScheduleController }