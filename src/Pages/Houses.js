import React, { Fragment } from 'react';
import NavigationBar from '../Component/Umum/NavigationBar';
import ListRumah from '../Component/Houses/ListRumah';
import Copyright from '../Component/Umum/Copyright';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Houses extends React.Component {

    state = {
        dataRumah: []
    }

    componentDidMount() {
        axios.get('http://localhost:3004/rumah')
        .then((response) => {
        const dataRumah = response.data;
            this.setState({
                dataRumah: dataRumah
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
                    <div className="header">
                        <NavigationBar className='bg-primary'></NavigationBar>
                    </div>
                    <div className="body">
                        <h2>Daftar Referensi Rumah</h2>
                        <hr/>
                        <Row className='d-flex justify-content-center'>
                            <ListRumah dataRumah={this.state.dataRumah}></ListRumah>
                        </Row>
                    </div>
                    <Copyright></Copyright>
                </Container>
            </Fragment>
        )
    }
}

export default Houses;