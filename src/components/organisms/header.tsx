import {  Box, Button, CSSObject, IconButton, MenuItem, Theme, Toolbar, Typography, styled, useTheme, Divider, ListItem, List, CssBaseline, ListItemButton, ListItemIcon, ListItemText, Drawer } from "@mui/material";
import { useGetName } from "../../hooks/useGetName"
import { useGetStorageToken } from "../../hooks/useGetStorageToken"
import { LogoutButton } from "../atoms/logoutButton";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";


export const Header = () =>{
    const token = useGetStorageToken();
    const name = useGetName(token);
    const onClickLogoutButton = () =>{
        sessionStorage.removeItem("token")
        window.location.reload()
        navigate("/")
    }
    
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    const navigate = useNavigate();

    const onClickHome = () =>{
        navigate("/")
        setOpen(false);
    }
    
    const onClickReview = () =>{
        navigate("/new")
        setOpen(false);
    }

    const onClickUser = () =>{
        navigate("/profile")
        setOpen(false);
    }
  

 


    return(
            <Box sx={{display:"flex",margin:"8px"}} >
                <CssBaseline />
                <AppBar position="fixed" open={open} >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            Books
                        </Typography>
                        {token!="Bearer null"?<div>{name}</div>:<Button color="inherit">Login</Button>}
                        <LogoutButton onClick={onClickLogoutButton}/>
                    </Toolbar>
                </AppBar>
                {window.innerWidth<=650?
                <Drawer variant="persistent" anchor="left" open={open}>
                    <DrawerHeader  >
                        <IconButton onClick={handleDrawerClose} >
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                
                    <Divider />
                    <List >
                        {open?<ListItem>
                            <ListItemButton onClick={onClickHome} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>
                            :<ListItem sx={{display:"block"}}>
                            <ListItemButton onClick={onClickHome} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <HomeIcon />
                                        {open?<p></p>:<SIcon>Home</SIcon>}
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>}

                        {open?<ListItem>
                            <ListItemButton onClick={onClickReview} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <MenuBookIcon />
                                </ListItemIcon>
                                <ListItemText primary="書籍レビュー"/>
                            </ListItemButton>
                        </ListItem>
                            :<ListItem sx={{display:"block"}}>
                                <ListItemButton onClick={onClickReview} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <MenuBookIcon />
                                        {open?<p></p>:<SIcon>Review</SIcon>}
                                </ListItemIcon>
                                <ListItemText primary="書籍レビュー"/>
                            </ListItemButton>
                        </ListItem>}
                            
                        {open?<ListItem>
                            <ListItemButton onClick={onClickUser} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="ユーザー情報"/>
                            </ListItemButton>
                        </ListItem>
                            :<ListItem sx={{display:"block"}}>
                                <ListItemButton onClick={onClickUser} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <SettingsIcon />
                                        {open?<p></p>:<SIcon>User</SIcon>}
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>}
                    </List>
                </Drawer>
                :                
                <CDrawer variant="permanent" anchor="left" open={open}>
                    <DrawerHeader  >
                        <IconButton onClick={handleDrawerClose} >
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                
                    <Divider />
                    <List >
                        {open?<ListItem>
                            <ListItemButton onClick={onClickHome} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>
                            :<ListItem sx={{display:"block"}}>
                            <ListItemButton onClick={onClickHome} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <HomeIcon />
                                        {open?<p></p>:<SIcon>Home</SIcon>}
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>}

                        {open?<ListItem>
                            <ListItemButton onClick={onClickReview} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <MenuBookIcon />
                                </ListItemIcon>
                                <ListItemText primary="書籍レビュー"/>
                            </ListItemButton>
                        </ListItem>
                            :<ListItem sx={{display:"block"}}>
                                <ListItemButton onClick={onClickReview} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <MenuBookIcon />
                                        {open?<p></p>:<SIcon>Review</SIcon>}
                                </ListItemIcon>
                                <ListItemText primary="書籍レビュー"/>
                            </ListItemButton>
                        </ListItem>}
                            
                        {open?<ListItem>
                            <ListItemButton onClick={onClickUser} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="ユーザー情報"/>
                            </ListItemButton>
                        </ListItem>
                            :<ListItem sx={{display:"block"}}>
                                <ListItemButton onClick={onClickUser} sx={{minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5}}>
                                <ListItemIcon sx={{display:"block",textAlign:"center"}}>
                                        <SettingsIcon />
                                        {open?<p></p>:<SIcon>User</SIcon>}
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>}
                    </List>
                </CDrawer>
}
            </Box>
    )
}



const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  

const DrawerHeader = styled('div')(({ theme }:any) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const CDrawer = styled(MuiDrawer, { shouldForwardProp: (prop:string) => prop !== 'open' })(
    ({ theme, open }:any) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


  const SIcon = styled('div')(({ theme }:any) => ({
    textAlign:"center",
    padding: 0,
    margin:"auto",
    position:"relative"
  }));

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }