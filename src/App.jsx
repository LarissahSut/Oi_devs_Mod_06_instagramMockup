import React, { useEffect } from 'react';
import { Feed } from './Components/feed';
import { Header } from './Components/header';
import { Highlights } from './Components/Highlights/highlights';
import { Navbar } from './Components/Navbar/navbar';
import { Grid, GridItem } from './ui/Grid';

function App() {
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
        <Feed />
      </GridItem>
    </Grid>
  );
}

export default App;
