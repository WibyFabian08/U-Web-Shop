import React, { Fragment } from 'react';
import { Button, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../Component/Umum/NavigationBar';

class Sukses extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3004/keranjangs')
        .then((response) => {
            const keranjang = response.data;
            keranjang.map(function(item) {
                axios.delete('http://localhost:3004/keranjangs/' + item.id)
                .then((response) => console.log(response))
                .catch((err) => console.log(err)) 
            })
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <div className='header'>
                        <NavigationBar></NavigationBar>
                    </div>
                    <div className="mt-5 text-center body">
                        <Image src='asset/images/sukses.png' width='500'></Image>
                        <h2>Sukses</h2>
                        <h6>Terimakasih Sudah Memesan</h6>
                        <Button variant='primary' as={Link} to='/home'> 
                            Kembali
                        </Button>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Sukses;