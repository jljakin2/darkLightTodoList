import headerLight from "../images/bg-desktop-light.jpg";
import headerDark from "../images/bg-desktop-dark.jpg";
import headerLightMobile from "../images/bg-mobile-light.jpg";
import headerDarkMobile from "../images/bg-mobile-dark.jpg";

const lightTheme = {
  background: "hsl(236, 33%, 92%)",
  cardBackground: "#fff",
  header: "#fff",
  text: "hsl(235, 19%, 35%)",
  createTodo: "#9495A5",
  footerText: "#9495A5",
  subtext: "#d2d3db",
  subtextHover: "#494C6B;",
  border: "#e4e5f1",
  completedText: "#D1D2DA",
  emptyState: "#D1D2DA",
  shadow: "rgba(194,195,214,0.50)",
  primary: "#3A7CFD",
  gradientLight: "#57ddff",
  gradientDark: "#c058f3",
  backgroundImage: headerLight,
  backgroundImageMobile: headerLightMobile,
  regular: "400",
  bold: "700",
};

const darkTheme = {
  background: "#161722",
  cardBackground: "#25273c",
  header: "#fff",
  text: "#fafafa",
  createTodo: "#767992",
  footerText: "#5B5E7E",
  subtext: "#777a92",
  subtextHover: "#E3E4F1",
  shadow: "#25273D",
  border: "#e4e5f1",
  completedText: "#4D5067",
  emptyState: "#4D5067",
  primary: "#3A7CFD",
  gradientLight: "#57ddff",
  gradientDark: "#c058f3",
  backgroundImage: headerDark,
  backgroundImageMobile: headerDarkMobile,
  regular: "400",
  bold: "700",
};

export { lightTheme, darkTheme };
