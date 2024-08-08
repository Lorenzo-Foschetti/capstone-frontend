export const GET_WINES = "GET_WINES";

export const getWinesByCategory = (category) => {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");
    fetch(`http://localhost:3001/bottles/bottlecategory/${category}`, {
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
          type: GET_WINES,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
};
