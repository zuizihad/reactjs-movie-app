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
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    Chip,
    SelectChangeEvent,
    Rating,
    FormGroup
} from "@mui/material";
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const CreateMovie = () => {
    const currencies = [
        {
            value: 'Comedy',
            label: 'Comedy',
        },
        {
            value: 'Drama',
            label: 'Drama',
        },
        {
            value: 'Romance',
            label: 'Romance',
        },
        {
            value: 'Horror',
            label: 'Horror',
        },
    ];
    const [title, setTitle] = React.useState('');
    const [released, setReleased] = React.useState('');
    const [director, setDirector] = React.useState('');
    const [imdbVotes, setImdbVotes] = React.useState('');
    const [moviePlot, setMoviePlot] = React.useState('');
    const [personName, setPersonName] = React.useState<string[]>([]);
    const [genre, setGenre] = React.useState('Comedy');
    const [country, setCountry] = React.useState('Afghanistan');
    const [language, setLanguage] = React.useState('English');
    const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value);
    };

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event.target.value);
    };
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];
    const countries = [
        {
            value: 'Afghanistan',
            label: 'Afghanistan',
        },
        {
            value: 'Aland Islands',
            label: 'Aland Islands',
        },
        {
            value: 'Albania',
            label: 'Albania',
        },
        {
            value: 'Algeria',
            label: 'Algeria',
        },
        {
            value: 'American Samoa',
            label: 'American Samoa',
        },
        {
            value: 'Andorra',
            label: 'Andorra',
        },
        {
            value: 'Angola',
            label: 'Angola',
        }
    ]

    const languages = [
        {
            value: 'English',
            label: 'English',
        },
        {
            value: 'Hindi',
            label: 'Hindi',
        },
        {
            value: 'Urdu',
            label: 'Urdu',
        },
        {
            value: 'Punjabi',
            label: 'Punjabi',
        },
        {
            value: 'Bengali',
            label: 'Bengali',
        },
        {
            value: 'Marathi',
            label: 'Marathi',
        },
        {
            value: 'Tamil',
            label: 'Tamil',
        }
    ]
    const theme = useTheme();

    const handleActorsChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    function getStyles(name: string, personName: readonly string[], theme: Theme) {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    const labels: { [index: string]: string } = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(title, released, director, imdbVotes, moviePlot, personName, genre, country, language, value);
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
                    <MovieIcon style={{
                        margin: theme.spacing(1),
                        // backgroundColor: theme.palette.secondary.light,
                        fontSize: "100px"
                    }}></MovieIcon>
                    <Typography component="h1" variant="h5">
                        Movie information
                    </Typography>
                    <form style={{
                        width: "100%",
                        marginTop: theme.spacing(3)
                    }} noValidate onSubmit={handleSubmit}>


                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    autoComplete="title"
                                    name="title"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-select-genre"
                                    select
                                    fullWidth
                                    label="Select"
                                    value={genre}
                                    onChange={handleChange}
                                    helperText="Please select genre"
                                >
                                    {currencies.map((option: any) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={released}
                                    onChange={(e) => setReleased(e.target.value)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="date"
                                    id="released"
                                    label="Released"
                                    name="released"
                                    autoComplete="released"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-select-genre"
                                    select
                                    label="Select"
                                    fullWidth
                                    value={country}
                                    onChange={handleCountryChange}
                                    helperText="Please select Country"
                                >
                                    {countries.map((option: any) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-select-genre"
                                    select
                                    fullWidth
                                    label="Select"
                                    value={language}
                                    onChange={handleLanguageChange}
                                    helperText="Please select Language"
                                >
                                    {languages.map((option: any) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    value={director}
                                    onChange={(e) => setDirector(e.target.value)}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="director"
                                    label="Director"
                                    name="director"
                                    autoComplete="director"
                                />
                            </Grid>

                            <FormControl sx={{ m: 1, width: 450 }} style={{ marginLeft: '17px', marginTop: '20px' }}>
                                <InputLabel id="demo-multiple-chip-label">Actors</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    fullWidth
                                    value={personName}
                                    onChange={handleActorsChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Actors" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles(name, personName, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            {/* <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="actors"
                                    label="Actors"
                                    type="text"
                                    id="actors"
                                    autoComplete="actors"
                                />
                            </Grid> */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    value={imdbVotes}
                                    onChange={(e) => setImdbVotes(e.target.value)}
                                    autoComplete="imdbVotes"
                                    name="imdbVotes"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="imdbVotes"
                                    label="Imdb Votes"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    size={'large'}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                {value !== null && (
                                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                )}
                                {/* <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="imdbRating"
                                    label="Imdb Rating"
                                    name="imdbRating"
                                    autoComplete="imdbRating"
                                /> */}
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    value={moviePlot}
                                    onChange={(e) => setMoviePlot(e.target.value)}
                                    id="outlined-multiline"
                                    label="Plot"
                                    multiline
                                    rows={4}
                                    defaultValue="Write Plot"
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
                            Submit
                        </Button>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </Layout>

    );
}

export default CreateMovie;