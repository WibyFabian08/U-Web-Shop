import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './Component/NavigationBar';
import ListKategori from './Component/ListKategori';
import ListMenu from './Component/ListMenu'
import axios from 'axios';
import swal from 'sweetalert';

class App extends React.Component {

  state = {
    dataProduk: [],
    dataKategori: [],
    dataKeranjang: [],
    pilihKategori: 'Semen'
  }

  componentDidMount() {
    axios.get('http://localhost:3004/products?category.nama=' + this.state.pilihKategori)
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

  handlePilihKategori = (kategori) => {
    this.setState({
      pilihKategori: kategori,
      dataProduk: []
    })

    axios.get('http://localhost:3004/products?category.nama=' + kategori)
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
  }

  handleTambahKeranjang = (dataKeranjang) => {
    axios.get('http://localhost:3004/keranjangs?produk.id=' + dataKeranjang.id)
    .then((response) => {
      if(response.data.length === 0) {
        const dataInputKeranjang = {
          jumlahPesan: 1,
          hargaTotal: dataKeranjang.harga,
          produk: dataKeranjang
        }

        axios.post('http://localhost:3004/keranjangs', dataInputKeranjang)
        .then((response) => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          swal({
            title: "Sukses Ditambahkan Keranjang",
            text: `${dataKeranjang.nama} sukses ditambahkan`,
            icon: "success",
            button: "OK",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        const dataInputKeranjang = {
          jumlahPesan: response.data[0].jumlahPesan + 1,
          hargaTotal: response.data[0].hargaTotal + dataKeranjang.harga,
          produk: dataKeranjang
        }

        axios.put('http://localhost:3004/keranjangs/' + response.data[0].id, dataInputKeranjang)
        .then((response) => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          swal({
            title: "Sukses Ditambahkan Keranjang",
            text: `${dataKeranjang.nama} sukses ditambahkan`,
            icon: "success",
            button: "OK",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
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
          <ListKategori dataKategori={this.state.dataKategori} handlePilihKategori={this.handlePilihKategori} pilihKategori={this.state.pilihKategori}></ListKategori>
          <Col className='mt-2'>
            <h3>Daftar Menu</h3>
            <hr></hr>
            <Row>
              {
                this.state.dataProduk.map((dataProduk, index) => (
                  <ListMenu dataProduk={dataProduk} key={index} handleTambahKeranjang={this.handleTambahKeranjang}></ListMenu>
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
