
import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";



export const SideBar = ({ drawerWith = 240, mostrar = 0 }) => {
  return 
   mostrar == 0 ?
  
  (
    <Box
    component='nav'
    sx={{
         width:{ sm:  drawerWith },
         flexShrink: { sm: 0 },
         backgroundColor: 'primary.main',
       }}
    >
        <Drawer
        variant="permanent" //temporary
        open={ true }
        //onClose
        sx={{ 
            display : { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith }
         }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    SC
                </Typography>
            </Toolbar>

            <Divider />

            <List>
                {
                    ['itemUno', 'itemDos', 'itemtres', 'itemcuatro', 'itemcinco', 'itemSeis'].map(
                        text =>(
                           <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ text } secondary="sdfsdfs" />
                                    </Grid>
                                </ListItemButton>
                           </ListItem> 
                        )
                    )
                }
            </List>

        </Drawer>
    </Box>
  ) :
  <></>
}
