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
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
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
            <Link to={`zuizihad.github.io`}>
                Zihadul Islam
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

interface State {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    showPassword: boolean;
    agree: boolean;
}

const Signup = () => {

    const [values, setValues] = React.useState<State>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        showPassword: false,
        agree: false
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
                        Sign up
                    </Typography>
                    <form style={{
                        width: "100%",
                        marginTop: theme.spacing(3)
                    }} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={values.firstName}
                                    onChange={handleChange('firstName')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange('email')}
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
                                    control={<Checkbox checked={values.agree ? true : false}
                                        value={values.agree} onChange={() => setValues({ ...values, agree: !values.agree })} color="primary" />}
                                    label="I agree to the privacy policy, website terms and user terms"
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
                            Sign Up
                        </Button>
                        <Grid >
                            <Grid item>
                                <Link to='/login'>
                                    Already have an account? Sign in
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

export default Signup;