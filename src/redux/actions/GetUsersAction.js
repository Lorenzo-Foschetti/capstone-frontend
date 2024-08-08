export const GET_USERS = "GET_USERS";

export const getUsersAction = () => {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");
    fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("response was not ok.");
      })
      .then((data) => {
        dispatch({
          type: GET_USERS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
};
