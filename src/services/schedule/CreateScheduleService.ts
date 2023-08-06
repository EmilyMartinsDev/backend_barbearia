import prismaClient from "../../prisma"

interface ScheduleService{
    userId: string
    haircutId: string
    custumer: string
}

class CreateScheduleService{
    async execute({userId, haircutId, custumer}: ScheduleService){
        if(!custumer || !haircutId){
            throw new Error('ERROR')
        }

        const schedule = await prismaClient.service.create({
            data:{
                custumer: custumer,
                haircutId: haircutId,
                userId: userId
            }
        });

        return schedule
    }
}   

export { CreateScheduleService }