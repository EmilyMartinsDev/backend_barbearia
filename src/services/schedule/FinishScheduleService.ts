import prismaClient from "../../prisma"

interface FinishSchedule{
    scheduleId: string
    userId: string
}

class FinishScheduleService{
    async execute({ scheduleId, userId}: FinishSchedule){

        if(!scheduleId || !userId){
            throw new Error("error")
        }

        try{

           const belongsUser = await prismaClient.service.findFirst({
            where:{
                id: scheduleId,
                userId: userId,
             },
           });

           if(!belongsUser){
                throw new Error("not authorization")
           }


           await prismaClient.service.delete({
            where: {
                id: scheduleId
                },
           })

           return { message: "OK"}

        }catch(err){
            console.log(err)

            throw new Error("error in delete")
        }

    }
}

export { FinishScheduleService }