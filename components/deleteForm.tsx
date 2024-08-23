import { deleteTask } from "@/utils/actions";

export default function DeleteForm({id}:{id : string}) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-outline btn-error btn-sm">Delete</button>
    </form>
  )
}
