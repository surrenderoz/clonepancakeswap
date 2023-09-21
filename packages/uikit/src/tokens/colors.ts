export const baseColors = {
  white: "white",
  failure: "#ED4B9E",
  failure33: "#ED4B9E33",
  primary: "#fcce6e", //changed
  primary0f: "#1FC7D40f",
  primary3D: "#1FC7D43D",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  success: "#31D0AA",
  success19: "#31D0AA19",
  warning: "#FFB237",
  warning2D: "#ED4B9E2D",
  warning33: "#ED4B9E33",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#cf3828",
  secondary80: "#cf3828",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  text99: "#280D5F99",
  textDisabled: "#BDC2C4",
  textSubtle: "#7A6EAA",
  disabled: "#E9EAEB",
  gradientBubblegum: "#000", //changed
  gradientInverseBubblegum: "#121212", //changed
  gradientCardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
  gradientBlue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
  gradientViolet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
  gradientVioletAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  gradientGold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  gradientBold: "linear-gradient(#53DEE9, #cf3828)",
};

export const darkColors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#cf3828",
  secondary80: "#cf3828",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#000", //changed
  backgroundAlt2: "#000",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#121212",  //changed
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#fff",  //changed
  text99: "#F4EEFF99",
  textDisabled: "#666171",
  textSubtle: "#fff", //changed
  disabled: "#524B63",
  gradientBubblegum: "#000",
  gradientInverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
  gradientCardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
  gradientBlue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
  gradientViolet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
  gradientVioletAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  gradientGold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  gradientBold: "linear-gradient(#53DEE9, #9A6AFF)",
};
