import axios from "axios";
import useAuth from "./useAuth";

export default function useAxios() {
  const { accessToken } = useAuth();

  const privateAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return privateAxios;
}
