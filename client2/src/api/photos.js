import axios from "axios";

export function fetchPhotos() {
  return (
    axios
      .get("http://localhost:3000/api/v1/photos", { params: { _sort: "rover_id" } })
      .then((response) => response.data)
  );
}