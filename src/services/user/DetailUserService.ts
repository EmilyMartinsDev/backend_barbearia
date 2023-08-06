import prismaClient from "../../prisma"

interface UserDetailRequest{
    userId: string
}

class DetailUserService{
    async execute({userId}: UserDetailRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                id: userId
            },
            select:{
                name: true,
                email: true,
                endereco: true,
                id: true,
                subscriptions: {
                    select:{
                        id: true,
                        status: true,
                        priceId: true,
                    }
                }               
            }
        });

        return user
    }
}
export { DetailUserService }