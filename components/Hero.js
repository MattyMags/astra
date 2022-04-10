import AnimatedLogo from "./AnimatedLogo";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AnimatedLogo />
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: {
            xs: "3rem",
            sm: "4rem",
            md: "5rem",
            lg: "5rem",
            xl: "5rem",
          },

          fontFamily: "Roboto",
        }}
        textAlign="center"
        variant="h1"
        noWrap
      >
        {" "}
        MATTHEW
      </Typography>
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: {
            xs: "3rem",
            sm: "4rem",
            md: "5rem",
            lg: "5rem",
            xl: "5rem",
          },
          fontFamily: "Roboto",
        }}
        textAlign="center"
        variant="h1"
        noWrap
      >
        {" "}
        MAGNOTTA
      </Typography>
      <Typography
        sx={{
          //   fontWeight: 900,
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
            md: "2rem",
            lg: "2rem",
            xl: "2rem",
          },

          fontFamily: "Roboto",
        }}
        variant="h3"
      >
        {" "}
        Developer | Designer | Universal Problem Solver
      </Typography>
      {/* <img
        style={
          {
            //   position: "absolute",
            //   left: 10,
            //   bottom: 100,
            //   transform: "rotate(20deg)",
          }
        }
        // width={"200rem"}
        src="/rocketLaunch.svg"
      /> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#292c30"
          fill={
            theme.palette.mode === "dark"
              ? "#292c30"
              : theme.palette.primary.secondary
          }
          fill-opacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,112C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Hero;
