'use server';

import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export async function createTask(formData: { get: (arg0: string) => any; }){

    const content = formData.get('content');
    
      await prisma.task.create({
      data:{
        content: content
      }
      })  ;
    revalidatePath('/todo-list');
}

export async function getAllTask(){
    const allTasks = await prisma.task.findMany({
        orderBy:{
            createdAt: 'desc'
        }
    });
    return allTasks;
}

export async function deleteTask(formData: { get: (arg0: string) => any; }){
  const id = formData.get('id');

  await prisma.task.delete({
      where:{
        id: id
      }
  });
  revalidatePath('/todo-list');

}

export async function getTask(id : string){
  const task = prisma.task.findUnique({
      where:{
          id: id
      }
  });
  return task;
}

export async function editTask(formData: { get: (arg0: string) => any; }){

  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed')

  await prisma.task.update({
    where:{
      id: id
    },
    data: {
      content,
      completed : completed === 'on'
    }
});
  redirect('/todo-list');
}