import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
import { UserCard } from "./components/UserCard";
import { UserProfile2 } from "./types/userProfile2";

export const Page1 = () => {

  const onclickAction1 = () => calcTotal(1000);
  const onclickAction2 = () => console.log(getTotal(1000));

  // const calcTotal = (num) => {
  // const calcTotal = (num: number) => {
  const calcTotal = (num: number): void => {
    const total1 = num * 1.1;
    console.log(total1);
  }

  const getTotal = (num: number): number => {
    let total2: number = 0; 
    total2 = num * 1.1;
    return total2;
  }

  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onclickFetchTodos = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
      setTodos(res.data);
    })
  }

  const user: User = {
    name: "apple",
    hobbies: ["aa", "bb"],
  }
  const user2: UserProfile2 = {
    id: 1,
    name: "apple",
    email: "abc@example.com",
    address: "Shibuya, Tokyo, Japan",
  }

  return (
    <div>
      <p>タイトル</p>
      <button onClick={onclickAction1}>ボタン1実行</button>
      <br />
      <button onClick={onclickAction2}>ボタン2実行</button>
      <UserProfile user={user}/>
      <br />
      <UserCard user={user2}/>
      <br />
      <Text color="green" fontSize="18px" />
      <br />
      <button onClick={onclickFetchTodos}>todosデータ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  )
}