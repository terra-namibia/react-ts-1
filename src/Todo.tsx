export const Todo = (props) => {
  const {title, userid} = props;
  return (
    <p>{`(title: ${title}, userid: ${userid})`}</p>
  )
}