import React, { Component } from 'react';

import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";
import Hero from "../views/IndexSections/Hero";

import {
    FormGroup,
    Input,
    Container,
    Row,
    Col, 
    Button,
    Form, 
    Table
} from "reactstrap";

export default class App1 extends Component {
    
    weight = null;
    height = null;
    state = {bmi : '', row : 0, color : ''}
    bmiCal = (event) => {
        event.preventDefault();
        if (!this.weight || !this.height)
            return;
        let weight = parseInt(this.weight);
        let height = parseInt(this.height);
        

        let bmi = weight / ((height * height) / 10000);
        let row, color;
        if (bmi < 18.5){
            row = 1;
            color = 'yellow';
        }
        else if(bmi <=25 && bmi >= 18.5){
            row = 2;
            color = 'lightgreen'
        }
        else if (bmi > 25 && bmi < 30){
            row = 3;
            color = '#f5365c'
        }
        else {
            row = 4;
            color = 'darkred'
        }

        this.setState(oldState => {

            let newState = {...oldState,
            bmi, row, color};
            return newState;
        });
    }
    render() {
        return (
            <div>
                <DemoNavbar />
                <main ref="main">
                    <Hero /><div className="py-5"></div>
                    <div className="py-5 bg-secondary">
                        <Container>
                            <div className="mb-3">
                                <small className="text-uppercase font-weight-bold">
                                    BMI Calculation
                                </small>
                            </div>
                            <Row>
                                <Col lg="4" sm="6">
                                    <Form onSubmit={this.bmiCal}>
                                    
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="Please Enter Your Weight (kg)"
                                                type="text"
                                                onChange={e => this.weight = e.target.value}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                className="form-control-alternative"
                                                placeholder="Please Enter Your Height (cm)"
                                                type="text"
                                                onChange={e => this.height = e.target.value}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Button className="btn-1 ml-1" color="danger" type="button" onClick= {e => this.bmiCal(e)}>
                                            Calculation
                                            </Button>
                                        </FormGroup>
                                        
                                    </Form>
                                </Col>
                                <Col>
                                {this.state.bmi != '' ?
                                <small className="text-uppercase text-muted font-weight-bold">
                                    Your BMI is <br/>
                                    {this.state.bmi} <br/>
                                    for more information please Check the table..
                                </small>
                                :null}
                                </Col>
                                <Col>
                                    {this.state.bmi != '' ? 
                                    <Table >
                                        <thead>
                                            <tr>
                                                <th>BMI</th>
                                                <th>Weight Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.row == 1 ?
                                            <tr style={{backgroundColor : this.state.color}}>
                                                <th>Below 18.5</th>
                                                <th>UnderWeight</th>
                                            </tr>
                                            :
                                            <tr>
                                                <th>Below 18.5</th>
                                                <th>UnderWeight</th>
                                            </tr>
                                            }
                                            {this.state.row == 2 ?
                                            <tr style={{backgroundColor : this.state.color}}>
                                                <th>18.5-25</th>
                                                <th>Normal</th>
                                            </tr>
                                            :
                                            <tr>
                                                <th>18.5-25</th>
                                                <th>Normal</th>
                                            </tr>
                                            }
                                            {this.state.row == 3 ?
                                            <tr style={{backgroundColor : this.state.color}}>
                                                <th>25-30</th>
                                                <th>OverWeight</th>
                                            </tr>
                                            :
                                            <tr>
                                                <th>25-30</th>
                                                <th>OverWeight</th>
                                            </tr>
                                            }
                                            {this.state.row == 4 ?
                                            <tr style={{backgroundColor : this.state.color}}>
                                                <th>above 30</th>
                                                <th>Obese</th>
                                            </tr>
                                            :
                                            <tr>
                                                <th>above 30</th>
                                                <th>Obese</th>
                                            </tr>
                                            }
                                        </tbody>
                                    </Table>
                                    : null}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </main>
                <CardsFooter />
            </div>
        );
    }

}
