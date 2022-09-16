
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";



            

export const LoginPage = () => {
  return (
     <AuthLayout title="Inicio de sesion">
         <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
              label="Correo electronico"
              type="email"
              placeholder="Ingresa tu correo"
              fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2,mt: 1 }}>
                <Grid item xs={ 12 } sm={ 6 } >
                  <Button variant="contained" fullWidth >
                    Enter
                  </Button>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } >
                  <Button variant="contained" fullWidth sx={{ pl: 2, pr: 2, backgroundColor: 'color1.main' }}>
                    <Google />
                    <Typography sx={{ ml: 1}}>Google</Typography>
                  </Button> 
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={ RouterLink } color="primary.main" to="/auth/register">
                Crear cuenta
              </Link>
            </Grid>

          </Grid>
        </form>
     </AuthLayout>
  )
}
