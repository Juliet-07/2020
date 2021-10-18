export const randomColors = text => {
  const letter = text.toUpperCase();
  return letter === "A" || letter === "F" || letter === "G" || letter === "H"
    ? "#FF6600"
    : letter === "B" || letter === "I" || letter === "J" || letter === "K"
    ? "#2E5BFF"
    : letter === "C" || letter === "L" || letter === "M" || letter === "O"
    ? "#ffc107"
    : letter === "D" || letter === "Z" || letter === "P" || letter === "R"
    ? "#17a2b8"
    : letter === "E" || letter === "Q" || letter === "S"
    ? "#6C006C"
    : "#777";
};
