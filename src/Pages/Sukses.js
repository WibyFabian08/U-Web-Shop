import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            <div className="mt-4 text-center">
                <Image src='asset/images/sukses.png' width='500'></Image>
                <h2>Sukses</h2>
                <h6>Terimakasih Sudah Memesan</h6>
                <Button variant='primary' as={Link} to='/'> 
                    Kembali
                </Button>
            </div>
        )
    }
}

export default Sukses;