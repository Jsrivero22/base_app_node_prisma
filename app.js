// import { PrismaClient } from "@prisma/client";
import Server from "./models/server.js";

( async () => {

    /* Example of Prisma usage creating a new user */
    // const prisma = new PrismaClient();

    // const newUser = await prisma.userModel.create({
    //     data: {
    //         email: "antoniosalcedo92@gmail.com",
    //         name: "Antonio Salcedo",
    //     }
    // })

    // Example of Prisma usage getting all users
    // const users = await prisma.userModel.findMany();
    // console.log(users);

    const server = new Server();
    server.listen();

}) ();