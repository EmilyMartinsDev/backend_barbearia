import prismaClient from "../../prisma"

interface HairCutRequest{
    userId: string
    name: string
    price: number
}

class CreateHairCutService{
    async execute({userId, name, price}: HairCutRequest){

        if(!name || !price){
            throw new Error("Error")
        }
        //VERFICAR QUANTOS MODELOS O USUARIO CADASTROU

        const myHaircuts = await prismaClient.haircut.count({
            where:{
                userId: userId
            }
        })

        const user = await prismaClient.user.findFirst({
            where: {
                id: userId
            },
            include: {
                subscriptions: true
            }
        })

        if(user?.subscriptions?.status !== 'active' && myHaircuts > 3){
            throw new Error("Not authorization")
        }

        

       const haircut = await prismaClient.haircut.create({
            data:{
                name: name,
                userId: userId,
                price: price
            }
       });


        return haircut   
    }
}

export { CreateHairCutService }