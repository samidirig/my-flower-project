import PropTypes from "prop-types";
import Header from "./header";
import { Box } from "@mui/material";

export const HEADER = {
  H_MOBILE: 64,
  H_DESKTOP: 80,
  H_DESKTOP_OFFSET: 80 - 16,
};

export default function AuthLayout({ children }) {
  return (
    <Box className="flex flex-col h-screen">
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <div className="h-full">
          {children}
        </div>
      </Box>
    </Box>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};
