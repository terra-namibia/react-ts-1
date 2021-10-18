import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
import { UserCard } from "./components/UserCard";
import { UserProfile2 } from "./types/userProfile2";
import { User2 } from "./types/user2";

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

  const [userProfiles, setUserProfiles] = useState<Array<UserProfile2>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onclickFetchUsers = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<User2>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }));
      setUserProfiles(data);
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));
  };

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
      <button onClick={onclickFetchUsers}>usersデータ取得</button>
      {error ?
        (
          <p style={{ color: "red" }}>Failed fetching data</p>
        ) :
        loading ?
          (
            <p>Loading</p>
          ) :
          (
            <>
              {userProfiles.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </>
          )
      }
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