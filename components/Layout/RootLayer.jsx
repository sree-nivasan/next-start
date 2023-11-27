import {
  AccountCircle,
  Draw,
  Mail as MailIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
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
} from "@mui/material";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const [auth, setAuth] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//https://www.geeksforgeeks.org/react-mui-drawer-navigation/
//https://codesandbox.io/p/sandbox/material-demo-forked-0r67w9?file=%2Fdemo.js%3A127%2C9-127%2C23
//https://codesandbox.io/p/sandbox/sharp-zeh-qgsmnz?file=%2Fsrc%2FDemo.tsx%3A128%2C13


//AppBar ->Toolbar ->IconButton ->MenuIcon->Typography
  //.MuiDrawer-paper

  return (
    <>
<Box display='flex' width="100%" height="100vh" >
    <AppBar position="fixed" >
        <Toolbar>

        </Toolbar>
    </AppBar>
    <Box component='nav' sx={{width:240 , flexShrink:0 }} > <Drawer variant='permanent'  sx={{ display:'block' , '& .MuiDrawer-paper':{ boxSizing:'border-box' , width:240 } }} open > SideBar Content </Drawer> </Box>
    <Box component='main' sx={ {width:'calc(100% - 240px)' , flexGrow:1}  }  >
    Hello dev 
    </Box>
</Box>
    </>
  );
};

export default RootLayout;
