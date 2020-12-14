import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { numberWithCommas } from '../../Utils/FormatNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import swal from 'sweetalert';

class TotalBayar extends React.Component {

    submitTotalBayar = (totalBayar) => {
        const pesanan = {
            totalBayar: totalBayar,
            pesanan: this.props.dataKeranjang
        }

        axios.post('http://localhost:3004/pesanans', pesanan)
        .then((response => {
            swal({
                title: "Pembayaran Sukses",
                text: `Sukses Dipesan`,
                icon: "success",
                button: "OK",
              });
            this.props.history.push('/sukses');
        }))
    }

    peringatan = () => {
        swal({
            title: "Anda Belum Memesan",
            text: `Silahkan Pesan Sesuatu`,
            icon: "error",
            button: "OK",
          });
    }

    isBayar = (totalBayar) => {
        if(totalBayar === 0) {
            this.peringatan()
        } else {
            this.submitTotalBayar(totalBayar)
        }
    }

    render() {

        const totalBayar = this.props.dataKeranjang.reduce(function(result, item) {
            return result + item.hargaTotal
        }, 0);

        return (
            <Fragment>
                <h5>Total Price <strong className='float-right'>Rp. {numberWithCommas(totalBayar)}</strong> </h5>
                <Button variant="primary" block onClick={() => this.isBayar(totalBayar)}>
                    <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon><strong> PAY NOW</strong>
                </Button>
            </Fragment>
        )
    }
}

export default TotalBayar;