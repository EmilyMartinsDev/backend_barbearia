import prismaClient from "../../prisma"


interface UserUpdateRequest{
    userId: string
    name: string
    endereco: string
}

class UpdateUserService{
    async execute({userId, name, endereco}: UserUpdateRequest ){

        try{
           const user = await prismaClient.user.findFirst({
                where:{
                    id: userId
                }
            });

           if (!user){
            throw new Error("user not found")
           }

           const userUpdated = await prismaClient.user.update({
                where:{
                    id: userId
                },
                data:{
                    name: name,
                    endereco: endereco
                },
                select:{
                    name: true,
                    email: true,
                    endereco: true
                }
           });

           return userUpdated


        }catch(err){
            console.log(err)
            throw new Error("error an update the user ")
        }


    }
}

export { UpdateUserService }