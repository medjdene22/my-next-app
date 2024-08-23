import prisma from '../../utils/db'

const getAllTasks = async (content : string) => {
  /*await prisma.task.create({
    data:{
      content: content
    }
  })      */                          
  
  /*await prisma.task.update({
    where: {
      id: "4b61b58c-7169-4ce8-a88e-c8a3102152a8"
    },
    data:{
      completed: true
    }
  })*/

  /*await prisma.task.delete({
    where: {
      id: "4b61b58c-7169-4ce8-a88e-c8a3102152a8"
    }
  })*/


  const allTasks = await prisma.task.findMany();
  return allTasks;
}



export default async function Prisma() {
  const tasks = await getAllTasks("Pick up kids");

  return (
    <div>
      <h1 className='text-7xl'>Tasks</h1>
      {tasks.map((task)=>(
        <h2 key={task.id} className='text-xl py-2'>{task.content}</h2>
      ))}
    </div>
  )
}
