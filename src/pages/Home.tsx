import React from 'react'
import UiCard from '../components/Card'
import Cards from '../components/Cards'
import Layout from '../components/Layout'
import movies from '../data/movies.json'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Home = () => {
    return (
        <Layout>
            <div>
                <Grid container item spacing={2}>
                    {movies && movies.map((movie: any) => <UiCard movie={movie} />)}
                </Grid>
            </div>
        </Layout>
    )
}

export default Home