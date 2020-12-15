import React, { Fragment } from 'react';
import DetailHouse from './DetailHouse';
import { Card, Button } from 'react-bootstrap';

class ListRumah extends React.Component {

    state = {
        showDetail: false,
        dataRumah: []
    }

    handleShow = (data) => {
        this.setState({
            showDetail: true,
            dataDetailRumah: data
        })
    }

    handleCLose = () => {
        this.setState({
            showDetail: false
        })
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.dataRumah.map((data, index) => (
                        <Card style={{ width: '18rem' }} className='ml-3 mb-3 shadow list-rumah' key={index}>
                            <Card.Img variant="top" src={"asset/images/Rumah/" + data.gambar + '.jpg'} />
                            <Card.Body>
                                <Card.Title>{data.nama}</Card.Title>
                                <Card.Title>{data.kode}</Card.Title>
                                <Button variant="secondary" onClick={() => this.handleShow(data)}>Show Detail</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
                <DetailHouse showDetail={this.state.showDetail} handleClose={this.handleCLose} dataDetailRumah={this.state.dataDetailRumah}></DetailHouse>
            </Fragment>
        )
    }
}

export default ListRumah;