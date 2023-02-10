import { Navbar } from './Components/Navbar/navbar';
import { Header } from './Components/header';
import { Grid, GridItem } from './ui/Grid';

function App() {
  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
      </GridItem>
    </Grid>
  );
}

export default App;
