import prismaClient from "../../prisma";

interface DetailHaircut{
    haircutId: string
}

class DetailHaircutService{
    async execute({haircutId}: DetailHaircut){
        const haircut = await prismaClient.haircut.findFirst({
            where:{
                id: haircutId,
            },
        });

        return haircut
    }
}

export { DetailHaircutService }