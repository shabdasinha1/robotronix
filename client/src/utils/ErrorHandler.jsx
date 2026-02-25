export const GetApiErrorMessage = (error) => {
  // Axios response error
  if (error?.message) {
    const data = error.message;
    // console.log("Data from error : ", data);
    // Common backend patterns

    if (Array.isArray(data)) {
      return data[0];
    }

    return (
      // data.details.password[0] ||

      data ||
      data.message ||
      data.error ||
      data.data?.message ||
      "Something went wrong"
    );
  }

  // Timeout
  if (error?.code === "ECONNABORTED") {
    return "Request timed out. Please try again.";
  }

  // Network / unknown
  return "Network error. Please check your connection.";
};
