'use client';
import {createTask} from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

const SubmitBtn = () => {
  const {pending} = useFormStatus();

  return (
    <button type="submit" 
    className="btn btn-secondary join-item" 
    disabled={pending}
    >
      {pending ? "creating..." : "add task"}
    </button>
  )
};

export default function TodoForm() {
  return (
    <form action={createTask}>
      <div className="join join-vertical sm:join-horizontal w-full p-1 mb-10">
        <input type="text" name="content" required placeholder="Type here" className="join-item input input-bordered w-full"/>
        <SubmitBtn/>
      </div>
    </form>
  )
}
