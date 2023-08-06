import prismaClient from "../../prisma";

interface HaircutRequest{
    userId: string
    status: boolean | string
}


class ListHaircutService{
    async execute({ userId, status}: HaircutRequest){

        const haircuts = await prismaClient.haircut.findMany({
            where:{
                userId: userId,
                status: status === 'true'  ? true : false
            }
        });

        return haircuts
    }
}

export { ListHaircutService }