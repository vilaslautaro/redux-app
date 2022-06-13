import axios from "axios";
import { userSlice } from "../store/slices/users";

export const fetchAllUsers = () => {
    const { setUserList } = userSlice.actions

    return (dispatch) => {
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((response) => {
          dispatch(setUserList(response.data.data))
        })
        .catch((error) => console.log(error));
    };
  };