import { TodoType } from "./types/todo";

// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
export const Todo = (props: Omit<TodoType, "id">) => {
  const {title, userId, completed} = props;
  const completedMark = completed ? "[完]" : "[未]" ;
  return (
    <p>{`${completedMark} title: ${title}, userid: ${userId}`}</p>
  )
}