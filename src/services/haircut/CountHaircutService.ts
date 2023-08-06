import prismaClient from "../../prisma";

interface CountRequest{
    userId: string
}

class CountHaircutService{
    async execute({ userId }:CountRequest){
        const count = await prismaClient.haircut.count({
            where:{
                userId: userId
            },
        });

        return count
    }
}

export { CountHaircutService }