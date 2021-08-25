export const marks = Array(12).fill();

export const getRomanNumeral = (index) => {
  const numerals = [
    "XII",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
  ];

  return numerals[index];
};
