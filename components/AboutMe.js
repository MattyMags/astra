import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const AboutMe = () => {
  const theme = useTheme();

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",

        backgroundColor:
          theme.palette.mode === "dark"
            ? "#292c30"
            : theme.palette.primary.secondary,
      }}
    >
      <Box
        sx={{
          maxWidth: "50rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 2rem 10rem 2rem",
        }}
      >
        <Typography
          variant="h2"
          color="white"
          textAlign="center"
          sx={{
            fontWeight: 900,
            fontSize: "1.5rem",
          }}
        >
          Hi, I'm Matt. Nice to meet you.
        </Typography>
        <Typography
          textAlign="center"
          variant="body-1"
          color="white"
          textAlign="center"
          lineHeight="1.75"
          sx={{
            fontWeight: 200,
            fontSize: "1rem",
          }}
        >
          I am a front-end developer with industry experience crafting
          responsive & elegant websites. I specialize in JavaScript and I have
          professional experience working in React, NextJS, Typescript, Redux &
          Material-UI.
        </Typography>
      </Box>
      <Box
        maxWidth="xl"
        sx={{
          position: "absolute",
          top: 175,
          width: "90%",
          maxWidth: "80rem",
          background: theme.palette.primary.main,
          borderRadius: "1rem",
          height: "50rem",
          border: theme.palette.border,
        }}
      ></Box>
    </Box>
  );
};

export default AboutMe;
