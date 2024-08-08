export const DELETE_BOTTLE = "DELETE_BOTTLE";

export const deleteBottleAction = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:3001/bottles/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch({
            type: DELETE_BOTTLE,
            payload: id,
          });
        } else {
          throw new Error("Response was not ok.");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
};
