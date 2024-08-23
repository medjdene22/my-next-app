import db from '@/utils/db'

export const GET = async (reqest : any) => {
    const tasks = await db.task.findMany();
    return Response.json({data : tasks});

}

export const POST = async (reqest : any) => {

    const data = await reqest.json();
    const task = await db.task.create({
        data:{
            content : data.content
        }
    })
    return Response.json({data : task});

}

