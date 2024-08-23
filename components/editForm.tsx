import React from 'react'
import { Task } from '@prisma/client'
import { editTask } from '@/utils/actions';

export default function EditForm(task :{task : Task}) {
    const {id,content, completed } = task.task;
  return (
    <form action={editTask} className='max-w-md p-12 border border-base-300 rounded-lg shadow-lg mx-auto'>
        <input type="hidden" name="id" value={id}/>
        <input type="text" name="content" defaultValue={content} required className='input input-bordered w-full'/>
        <div className='form-control my-4'>
            <label className="cursor-pointer label">
                <span className="label-text">completed</span>
                <input type="checkbox" defaultChecked={completed} name='completed' className="checkbox checkbox-success" />
            </label>
        </div>
        <button type="submit" className="btn btn-info btn-block btn-md">Update task</button>
    </form>
  )
}
