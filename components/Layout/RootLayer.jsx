//https://ali-atwa.medium.com/getting-started-with-material-ui-for-react-59c82d9ffd93

import { useToggleColorMode } from "@/providers/ThemeProvider";
import {
  AccountCircle,
  Draw,
  AccountBox as AccountBoxIcon,
  Search as SearchIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  Analytics as AnalyticsIcon,
  Chat as ChatIcon,
  Rectangle,
  FileCopy as FileCopyIcon,
} from "@mui/icons-material";
import {
  Divider,
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
  Box,
  Menu,
  CssBaseline,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  List,
  Input,
  InputAdornment,
  Stack,
  Button,
  Switch,
} from "@mui/material";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useState } from "react";

const sampleIcons = [AccountBoxIcon, SearchIcon, MailIcon, MenuIcon];

const links = [
  { label: "analytics", Icon: AnalyticsIcon },
  { label: "chat", Icon: ChatIcon },
  { label: "files", Icon: FileCopyIcon },
  { label: "market", Icon: AccountBoxIcon },
];

const RootLayout = ({ children }) => {
  const [mode, toggle] = useToggleColorMode();
  console.log(mode);
  return (
    <div>
      <Box component="div" position="fixed">
        <AppBar>
          <Toolbar>
            <IconButton size="large" color="inherit">
              <MenuIcon fontSize="inherit" />
            </IconButton>
            <Typography flexGrow={1} variant="h6">
              Analytics
            </Typography>
            <Switch onChange={toggle} />
          </Toolbar>
        </AppBar>
        <Box component="div">{children}</Box>
      </Box>
    </div>
  );
};

export default RootLayout;
