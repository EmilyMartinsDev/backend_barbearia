import prismaClient from "../../prisma"


interface ListSchedule{
    userId: string

}

class ListScheduleService{
    async execute({userId}:ListSchedule){

        const schedules = await prismaClient.service.findMany({
            where:{
                userId: userId
            },
            select:{
                haircutId: true,
                id: true,
                custumer: true,
            },
        });

        return schedules
    }
}

export { ListScheduleService }