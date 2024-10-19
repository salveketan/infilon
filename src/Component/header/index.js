import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { styled } from "@mui/system";
import Logo from "../asset/Logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Custom styles using Material-UI's styled utility
const AppBarStyled = styled(AppBar)({
  backgroundColor: "#043873", // Dark blue background
});

const LogoTypography = styled(Typography)({
  display: "flex",
  alignItems: "center",
  marginRight: "16px",
});

const LoginButton = styled(Button)({
  backgroundColor: "#FDE8A9", // Yellow button
  color: "#0A3161",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#f4d87f",
  },
});

const FreeButton = styled(Button)({
  backgroundColor: "#A6D5FA", // Light blue button
  color: "#0A3161",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#8ec3f0",
  },
});

const ToolbarStyled = styled(Toolbar)({
  width: "80%",
  margin: "auto",
});

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (label) => (
    <div>
          <Button color="inherit" onClick={handleMenuClick} endIcon={<KeyboardArrowDownIcon />}>
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
      </Menu>
    </div>
  );

  return (
    <AppBarStyled position="static">
      <ToolbarStyled>
        {/* Logo */}
        <LogoTypography variant="h6">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "30px", marginRight: "8px" }}
          />
        </LogoTypography>

        {isMobile ? (
          // Mobile view with hamburger menu
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            style={{ marginLeft: "4rem" }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          // Desktop view with menus
          <>
            <div style={{ marginLeft: "200px", display: "flex" }}>
              {renderMenu("Products")}
              {renderMenu("Solutions")}
              {renderMenu("Resources")}
              {renderMenu("Pricing")}
            </div>

            {/* Buttons */}
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <LoginButton>Login</LoginButton>
              <FreeButton>Try Whitepace free</FreeButton>
            </Box>
          </>
        )}
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
