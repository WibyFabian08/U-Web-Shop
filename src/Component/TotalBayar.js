import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { numberWithCommas } from '../Utils/FormatNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class TotalBayar extends React.Component {

    submitTotalBayar = (totalBayar) => {
        const pesanan = {
            totalBayar: totalBayar,
            pesanan: this.props.dataKeranjang
        }

        axios.post('http://localhost:3004/pesanans', pesanan)
        .then((response => {
            this.props.history.push('/sukses');
        }))
    }

    render() {

        const totalBayar = this.props.dataKeranjang.reduce(function(result, item) {
            return result + item.hargaTotal
        }, 0);

        return (
            <Fragment>
                <h5>Total Harga <strong className='float-right'>Rp. {numberWithCommas(totalBayar)}</strong> </h5>
                <Button variant="primary" block onClick={() => this.submitTotalBayar(totalBayar)}>
                    <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon><strong> BAYAR</strong>
                </Button>
            </Fragment>
        )
    }
}

export default TotalBayar;