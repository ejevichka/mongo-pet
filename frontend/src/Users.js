import { useContext } from "react";
import { Context } from "./App";
import Form from "./Form";

export default function Users() {
    const users = useContext(Context);
  
    return (
        <div>
          <h2>Fetched userssss</h2>
          {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
          <Form />
        </div>
    );
  }