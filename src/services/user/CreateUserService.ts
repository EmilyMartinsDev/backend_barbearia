import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'
interface UserRequest{
    name: string
    email: string
    password: string
}


class CreateUserService{
    async execute({name, email, password}: UserRequest){
        
        if(!email || !name || !password){
            throw new Error("invalid inputs")
        }

       const alreadyUser = await prismaClient.user.findFirst({
        where:{
            email: email
        }
       })

       if(alreadyUser){
        throw new Error("user already exists")
       }

       const passwordHash = await hash(password, 8)

       const user = await prismaClient.user.create({
        data:{
            email: email,
            name: name,
            password: passwordHash
        },
        select:{
            id: true,
            email: true,
            name: true
        }
       })

       return user
    }
}

export { CreateUserService }