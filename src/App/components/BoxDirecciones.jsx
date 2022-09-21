
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box  } from "@mui/material";

export const BoxDirecciones = () => {
  return (
    <>
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
