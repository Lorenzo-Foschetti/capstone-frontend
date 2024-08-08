export const UPDATE_BOTTLE = "UPDATE_BOTTLE";

export const updateBottleAction = (id, updatedBottle) => {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:3001/bottles/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBottle),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response was not ok.");
        }
      })
      .then((data) => {
        dispatch({
          type: UPDATE_BOTTLE,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
};
