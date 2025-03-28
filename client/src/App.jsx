import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

const App = () => {
    console.log("App is rendering!");
    return (
        <Container maxWidth="lg">
            <AppBar position ="static" color ="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" width="60" />
            </AppBar>
            <Grow in={true}>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing ={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App