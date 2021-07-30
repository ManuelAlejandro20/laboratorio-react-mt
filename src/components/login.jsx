import React from 'react'
import {Grid, Paper, Avatar, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';

export function Login(props){

    const {email, 
        setEmail,
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError} = props;

    const paperStyle = {padding :20, height:'64vh', width:400, margin:"20px auto"};
    const avatarStyle = {backgroundColor:'#1bbd7e'};

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Ingresa</h2>
                </Grid>
                <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                        <TextField 
                            label="Correo electrónico" 
                            placeholder="Ingresa tu correo electrónico" 
                            variant="outlined" type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}                             
                            fullWidth required autoFocus/>
                        <p className="errorMsg">{emailError}</p>
                    </Grid>
                    <Grid item>
                        <TextField 
                            label="Contraseña" 
                            placeholder="Ingresa tu contraseña" 
                            variant="outlined" type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}                             
                            fullWidth required autoFocus/>     
                        <p className="errorMsg">{passwordError}</p>           
                    </Grid>   
                    <Grid item>
                        {hasAccount ? (
                            <>
                                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>Iniciar sesión</Button>
                                <p className="msg">
                                    ¿No tienes una cuenta?
                                    <span className="miniMsg" onClick={() => setHasAccount(!hasAccount)}>   Registrate</span>
                                </p>
                            </>
                        ) :(
                            <>
                                <Button variant="contained" color="secondary" fullWidth onClick={handleSignup}>Registrarse</Button>
                                <p className="msg">
                                    ¿Ya tienes una cuenta?
                                    <span className="miniMsg" onClick={() => setHasAccount(!hasAccount)}>   Inicia sesión</span>
                                </p>
                            </>
                        )}                                   
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}