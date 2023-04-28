import axios from "axios";

export function fetchUsers() {
  return (
    axios
      .get("/users")
      .then((response) => response.data)
  );
}

export function postUser(user) {
  return (
    axios
      .post("/users", user)
      .then((response) => response.data)
  );
}