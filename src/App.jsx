import React, { useEffect } from 'react';
import { Header } from './Components/header';
import { Highlights } from './Components/Highlights/highlights';
import { Navbar } from './Components/Navbar/navbar';
import { fetcher } from './services';
import { Grid, GridItem } from './ui/Grid';

function App() {
  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher('photos');
      console.log(response);
    };

    makeRequest();
  }, []);

  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights/>
      </GridItem>
    </Grid>
  );
}

export default App;
