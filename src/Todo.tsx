import { TodoType } from "./types/todo";
import { VFC } from "react";

// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const {title, userId, completed} = props;
  const completedMark = completed ? "[完]" : "[未]" ;
  return (
    <p>{`${completedMark} title: ${title}, userid: ${userId}`}</p>
  )
}