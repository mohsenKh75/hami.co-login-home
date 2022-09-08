import axios from "axios";
import { toast } from "react-toastify";
import { mockUsers } from "./mockUsers";

export const INFOS_URL = "https://jsonplaceholder.typicode.com/users";

// This is a Simulator for Login Request.
const login = async ({ email, password }) => {
  const user = mockUsers.find((user) => user.email === email);

  if (user && user.password === password) {
    return {
      email: user.email,
      token: "someToken",
      id: user.id,
    };
  }

  throw toast.error("Incorrect Password or Email");
};

const infos = async () => {
  const response = await axios.get(INFOS_URL);
  return response.data;
};

const authService = { login, infos };

export default authService;
