import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./deleteForm";
import { getAllTask } from "@/utils/actions";

export default async function Todos() {

    const allTasks = await getAllTask();

    if (allTasks.length === 0) {
        return (
            <div>
                <h2 className="font-medium text-lg">No tasks to show</h2>
            </div>
        )
    }
    return (
        <ul>
            {allTasks.map( (task) => (
                <li key={task.id} className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg" >
                    <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>{task.content}</h2>
                    <div className="flex gap-6 items-center pl-6">
                        <Link href={`/todo-list/${task.id}`} className="btn btn-accent btn-outline btn-sm">edit</Link>
                        <DeleteForm id={task.id}/>
                    </div>
                </li>
            ))}
        </ul>
    )
}
