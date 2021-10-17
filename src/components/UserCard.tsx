import { VFC } from "react";
import { UserProfile2 } from "../types/userProfile2";

type Props = {
  user: UserProfile2;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;

  const style = {
    border: "solid 1px #ccc",
    borderRadius: "10px",
    padding: "0 15px",
    margin: "8px"
  };
  return (
    <div style={style}>
      <dl>
        <dt>name</dt>
        <dd>{user.name}</dd>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>address</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
