export const getGradeStyle = (grade) => {
  const colors = {
    5: { bg: "#E6F2ED", text: "#027A48" },
    4: { bg: "#E6F2ED", text: "#027A48" },
    3: { bg: "#FEF6E8", text: "#F4A118" },
    2: { bg: "#FEEFF0", text: "#EC5962" },
    1: { bg: "#FEEFF0", text: "#EC5962" },
  };
  return colors[grade] || { bg: "#f5f5f5", text: "#757575" };
};
