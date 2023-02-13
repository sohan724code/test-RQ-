import { Box } from "@mui/material";
import React from "react";
import { Posts } from "../Posts/Posts";
import { SimpleSlider } from "../SimpleSlider/SimpleSlider";

export const Home = () => {
  return (
    <Box>
      {/* <SimpleSlider /> */}
      <Posts />
    </Box>
  );
};
