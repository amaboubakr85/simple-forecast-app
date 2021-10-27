import { Container} from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CityScreen from "./screens/CityScreen";
import Footer from "./components/Footer";
import {BrowserRouter as Router , Route} from "react-router-dom"

const  App= ()=> {
  return (
  <Router>
    <Header/>
      <main className={'py-2'}>
          <Container>
          <Route component={HomeScreen} path='/'  exact/>
              <Route component={CityScreen} path='/cities/:name' />
          </Container>
      </main>
      <Footer />
  </Router>
  );
}

export default App;
