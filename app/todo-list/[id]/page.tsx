import React from 'react'
import { DrinkH } from '@/components/definitions';
import Link from 'next/link';
import EditForm from '@/components/editForm';
import { getTask } from '@/utils/actions';


export default async function Drink({params} : {params : any}) {

  const task = await getTask(params.id)

  if (!task) {
    return 
    <div>
            <Link href="/todo-list" className="btn btn-primary my-8">Back</Link>

    </div>
  }
  return (
    <div className='mb-16'>
      <Link href="/todo-list" className="btn btn-primary my-8">Back</Link>

      <EditForm task={task}/>
    </div>
  )
}
