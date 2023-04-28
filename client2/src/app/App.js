import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import NewUserForm from "../features/users/NewUserForm";

import "./App.css";

function App() {
  const usersQuery = useQuery({
    queryKey: ["users"], // ["users"] -> can be any unique identifier
    queryFn: fetchUsers,
  })

  if (usersQuery.isLoading) return <h1>Loading...</h1>;

  if (usersQuery.isError) {
    return (
      <pre>
        { JSON.stringify(usersQuery.error) }
      </pre>
    );
  }

  return (
    <div id="app">
      <NewUserForm />
      {/* {
        usersQuery.data.map(({ email, first_name, id, last_name }) => (
          <div id="users" key={id}>
            <p>{ first_name }</p>
            <p>{ last_name }</p>
            <p>{ email }</p>
          </div>
        ))
      } */}
    </div>
  );
}

export default App;