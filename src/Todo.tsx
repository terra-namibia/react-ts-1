type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
}

export const Todo = (props: TodoType) => {
  const {title, userId, completed} = props;
  const completedMark = completed ? "[完]" : "[未]" ;
  return (
    <p>{`${completedMark} title: ${title}, userid: ${userId}`}</p>
  )
}