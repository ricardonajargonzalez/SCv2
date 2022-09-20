//yarn add mapbox-gl
import { React, useRef, useEffect, useState } from 'react';

import { Grid,Box  } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { StarOutlined  } from "@mui/icons-material";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import HorizontalLinearStepper from './wizard';
import HorizontalNonLinearStepper from './wizard';

// import MapContainer from "./Map";




//  const style = {
//   width: '100%',
//   maxWidth: 360,
//   bgcolor: 'background.paper',
// };





export const NothingSelectedView = () => {


  return (
    <>
    {/* <MapContainer /> */}
    < HorizontalNonLinearStepper />
    <Box
        sx={{
         bgcolor: 'rgb(245, 245, 245)',
          position: 'absolute',
          top: 240,
          left: 10,
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          zIndex: 11111111
        }}
      >
       <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="BarBerShop Negrito"
            name="radio-buttons-group">
            <FormControlLabel value="BarBerShop Negrito" control={<Radio />} label="BarBerShop Negrito" />
            <FormControlLabel value="BarBerShop Beto" control={<Radio />} label="BarBerShop Beto" />
            <FormControlLabel value="BarBerShop OGs" control={<Radio />} label="BarBerShop OGs" />
            <FormControlLabel value="BarBerShop Saulihno" control={<Radio />} label="BarBerShop Saulihno" />
          </RadioGroup>
      </FormControl>
    </Box> 
    </>

  )



}
