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
  subtextHover: "#9394a5",
  border: "#e4e5f1",
  completedText: "#e4e5f1",
  shadow: "rgba(194,195,214,0.50)",
  primary: "	#3a7bfd",
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
  subtextHover: "#fafafa",
  shadow: "#25273D",
  border: "#e4e5f1",
  completedText: "#e4e5f1",
  primary: "	#3a7bfd",
  gradientLight: "#57ddff",
  gradientDark: "#c058f3",
  backgroundImage: headerDark,
  backgroundImageMobile: headerDarkMobile,
  regular: "400",
  bold: "700",
};

export { lightTheme, darkTheme };
