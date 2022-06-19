import React from 'react';
import {
    AppBar,
    colors,
    Avatar,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    Box,
    Grid,
    Button,
    SvgIcon,
    FormControlLabel,
    Checkbox,
    TextField,
    createTheme,
    Theme,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";
// Create a theme instance.

const theme = createTheme({
    palette: {
        primary: {
            main: "#556cd6"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: colors.red.A400
        },
        background: {
            default: "#fff"
        }
    }
});


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link to={`https://zuizihad.github.io`}>
                Zihadul Islam
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
    rememberMe: boolean;
}

const Login = () => {

    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
        rememberMe: true
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(values);
    }

    return (
        <Layout>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={{
                    marginTop: theme.spacing(8),
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Avatar style={{
                        margin: theme.spacing(1),
                        backgroundColor: theme.palette.secondary.main
                    }}></Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form style={{
                        width: "100%",
                        marginTop: theme.spacing(3)
                    }} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{ width: '45ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        required
                                        fullWidth
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox checked={values.rememberMe ? true : false} value={values.rememberMe}
                                        onChange={() => setValues({ ...values, rememberMe: !values.rememberMe })}
                                        color="primary" />}
                                    label="remember me!"
                                    value={values.rememberMe}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{
                                margin: theme.spacing(3, 0, 2)
                            }}
                        >
                            Login
                        </Button>
                        <Grid >
                            <Grid item>
                                <Link to='/register'>
                                    Create an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </Layout>

    );
}

export default Login;