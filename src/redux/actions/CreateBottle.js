export const CREATE_BOTTLE = "CREATE_BOTTLE";

export const CreateBottle = (data) => {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");
    fetch("http://localhost:3001/bottles", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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
          type: CREATE_BOTTLE,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
};
