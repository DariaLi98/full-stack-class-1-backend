import {prisma} from '../client'
const main = async () => {
    await prisma.user.create({
        data:{
            name: 'Steven',
            email: 'test1@gamil.com'
        }
    })

}

main();