export const GET_BOTTLE_DETAILS = "GET_BOTTLE_DETAILS";
export const GET_BOTTLE_DETAILS_LOADING = "GET_BOTTLE_DETAILS_LOADING";
export const GET_BOTTLE_DETAILS_ERROR = "GET_BOTTLE_DETAILS_ERROR";

export const getBottleDetailsAction = (bottleId) => {
  return (dispatch) => {
    dispatch({ type: GET_BOTTLE_DETAILS_LOADING });

    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:3001/bottles/${bottleId}`, {
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
          type: GET_BOTTLE_DETAILS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        dispatch({
          type: GET_BOTTLE_DETAILS_ERROR,
          payload: error.message,
        });
      });
  };
};
