import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './Component/NavigationBar';
import ListKategori from './Component/ListKategori';
import ListMenu from './Component/ListMenu'

function App() {
  return (
    <Container>
      <NavigationBar></NavigationBar>
      <Row>
        <ListKategori></ListKategori>
        <Col className='mt-2'>
          <h3>Daftar Menu</h3>
          <hr></hr>
          <Row>
            <ListMenu></ListMenu>
            <ListMenu></ListMenu>
            <ListMenu></ListMenu>
            <ListMenu></ListMenu>
          </Row>
        </Col>

      </Row>
    </Container>
  );
}

export default App;
