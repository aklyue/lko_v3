export const getStatusColor = (status) => {
  if(status) {
    return { color: "#027A48", bg: "#E6F2ED" };
  } else {
    return { color: "#F4A118", bg: "#FEF6E8" };
  }
};
