import axios from "axios";

export function fetchRovers() {
  return (
    axios
      .get("http://localhost:3000/api/v1/rovers", { params: { _sort: "external_id" } })
      .then((response) => response.data)
  );
}