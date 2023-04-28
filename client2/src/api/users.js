import axios from "axios";

export function fetchUsers() {
  return (
    axios
      .get("http://localhost:3000/api/v1/users", { params: { _sort: "first_name" } })
      .then((response) => response.data)
  );
}

export function postUser(user) {
  return (
    axios
      .post("http://localhost:3000/api/v1/users", user)
      .then((response) => response.data)
  );
}