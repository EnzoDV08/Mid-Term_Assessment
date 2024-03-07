import React from 'react';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import PolarChart from '../charts/PolarChart';
import RadarChart from '../charts/RadarChart';
import PieChart from '../charts/PieChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Chart.css';

function Chart() {
    return (
        <div className='fullpage'>
            <Container>
                <Row>
                    <Col className='col-custom'>
                        <div className='chart-container'>
                            <BarChart />
                        </div>
                    </Col>
                    <Col className='col-custom'>
                        <div className='chart-container'>
                            <LineChart />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='lower col-custom'>
                        <div className='chart-container'>
                            <PieChart />
                        </div>
                    </Col>
                    <Col className='lower col-custom'>
                        <div className='chart-container'>
                            <RadarChart />
                        </div>
                    </Col>
                    <Col className='lower col-custom'> 
                        <div className='chart-container'>
                            <PolarChart />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Chart;
