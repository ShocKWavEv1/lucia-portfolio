import { extendTheme } from "@chakra-ui/react";
import { getColors } from "./colors/getColors";
import colorsToken from "./colors/colors.json";

const breakpoints = {
  xs: "414px",
  sm: "550px",
  md: "744px",
  lg: "1024px",
  xl: "1280px",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = getColors({ colors: colorsToken.color });

const theme = extendTheme({
  config,
  colors,
  components: {},
  styles: {
    global: {
      body: {
        bg: "primary.500",
        width: "100%",
      },
    },
  },
});

export default theme;
