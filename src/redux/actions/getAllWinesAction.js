export const GET_ALLWINES = "GET_ALLWINES";

export const getAllWinesAction = () => {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");
    fetch("http://localhost:3001/bottles", {
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
          type: GET_ALLWINES,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
};
