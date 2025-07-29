// Format a number as a percentage string with +/- sign and two decimal places
export const formatPercentage = (percentage) => {
  const num = parseFloat(percentage);
  return num > 0
    ? `+${num.toFixed(2)} %`
    : `${num.toFixed(2)} %`;
};

// Return a color style object based on whether the percentage is positive, negative, or neutral
export const percentageValue = (value) => {
  const numericValue = parseFloat(value);
  return numericValue > 0
    ? { color: "rgb(134 239 172)" }  // Green for positive
    : numericValue < 0
      ? { color: "rgb(244 63 94)" }    // Red for negative
      : { color: "white" };            // White for neutral/zero
};
