import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './Component/NavigationBar';
import ListKategori from './Component/ListKategori';
import ListMenu from './Component/ListMenu'
import axios from 'axios';

class App extends React.Component {

  state = {
    dataProduk: [],
    dataKategori: [],
    dataKeranjang: []
  }

  componentDidMount() {
    axios.get('http://localhost:3004/products')
    .then((response) => {
      const dataProduk = response.data;
      this.setState({
        dataProduk: dataProduk
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get('http://localhost:3004/categories')
    .then((response) => {
      const dataKategori = response.data;
      this.setState({
        dataKategori: dataKategori
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get('http://localhost:3004/keranjangs')
    .then((response) => {
      const dataKeranjang = response.data;
      this.setState({
        dataKeranjang: dataKeranjang
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  render() {
    return (
      <Container>
        <NavigationBar dataKeranjang={this.state.dataKeranjang}></NavigationBar>
        <Row>
          <ListKategori dataKategori={this.state.dataKategori}></ListKategori>
          <Col className='mt-2'>
            <h3>Daftar Menu</h3>
            <hr></hr>
            <Row>
              {
                this.state.dataProduk.map((dataProduk, index) => (
                  <ListMenu dataProduk={dataProduk} key={index}></ListMenu>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
