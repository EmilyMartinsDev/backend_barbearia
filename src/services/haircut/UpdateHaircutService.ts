import prismaClient from "../../prisma";

interface UpdateHaircutRequest{
    name: string
    haircutId: string
    price: number
    userId: string
    status: string | boolean
}


class UpdateHaircutService{
    async execute({ name, price, userId, status = true, haircutId }:UpdateHaircutRequest){
        const user = await prismaClient.user.findFirst({
            where: {
                id: userId,
            },
            include:{
                subscriptions: true,
            },
        });

        // somente usuarios assinantes possuem acesso ao update dos cortes

        if (user?.subscriptions?.status !== 'active'){
            throw new Error("Not authorization")
        }

        const updateHaircut = await prismaClient.haircut.update({
            where: {
                id: haircutId
            },
            data:{
                name: name,
                price: price,
                status: status === 'true' ? true : false
            }
        });

        return updateHaircut
    }
}

export { UpdateHaircutService }