import axios from "axios";

export function fetchCameras() {
  return (
    axios
      .get("http://localhost:3000/api/v1/cameras", { params: { _sort: "rover_id" } })
      .then((response) => response.data)
  );
}