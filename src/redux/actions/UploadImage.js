export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";

export const uploadImage = (file, bottleId) => {
  return (dispatch) => {
    const token = localStorage.getItem("authToken");
    const formData = new FormData();
    formData.append("avatar", file);

    console.log("Uploading image for bottle:", bottleId);
    console.log("FormData:", formData.get("avatar"));
    fetch(`http://localhost:3001/bottles/${bottleId}/avatar`, {
      method: "PATCH",
      body: formData,
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
        console.log("Upload success:", data);
        dispatch({
          type: UPLOAD_IMAGE_SUCCESS,
          payload: data.message,
        });
      })
      .catch((error) => {
        console.error("Upload error:", error);
        dispatch({
          type: UPLOAD_IMAGE_FAILURE,
          payload: error.message,
        });
      });
  };
};
