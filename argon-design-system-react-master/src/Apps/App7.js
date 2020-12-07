import React, { Component } from 'react';


import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";
import Hero from "../views/IndexSections/Hero";

import './asset/App7.scss';

import {
    Container,
    Row,
    Col,
    Button,
    FormGroup
} from "reactstrap";

export default class App7 extends Component {
    state = {
        bases : [], 
    }
    base_convert = (number, initial_base, change_base) =>
    {
        if ((initial_base && change_base) <2 || (initial_base && change_base) > 16)
            return 'Base between 2 and 16';
        
        return parseInt(number + '', initial_base)
        .toString(change_base);
    }

    clearAll = () =>
    {
        this.state.bases.map(item => item.value = '');
    }

    setInputs2 = () =>
    {
        if (!this.state.bases[0].value)
        {
            this.clearAll();
            return;
        }
            
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[0].value, 2, i++);
            });
    }

    setInputs3 = () =>
    {
        if (!this.state.bases[1].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[1].value, 3, i++);
            });
    }

    setInputs4 = () =>
    {
        if (!this.state.bases[2].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[2].value, 4, i++);
            });
    }

    setInputs5 = () =>
    {
        if (!this.state.bases[3].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[3].value, 5, i++);
            });
    }

    setInputs6 = () =>
    {
        if (!this.state.bases[4].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[4].value, 6, i++);
            });
    }

    setInputs7 = () =>
    {
        if (!this.state.bases[5].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[5].value, 7, i++);
            });
    }

    setInputs8 = () =>
    {
        if (!this.state.bases[6].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[6].value, 8, i++);
            });
    }

    setInputs9 = () =>
    {
        if (!this.state.bases[7].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[7].value, 9, i++);
            });
    }

    setInputs10 = () =>
    {
        if (!this.state.bases[8].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[10 - 2].value, 10, i++);
            });
    }

    setInputs11 = () =>
    {
        if (!this.state.bases[9].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[9].value, 11, i++);
            });
    }

    setInputs12 = () =>
    {
        if (!this.state.bases[10].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[10].value, 12, i++);
            });
        console.log(x);
    }

    setInputs13 = () =>
    {
        if (!this.state.bases[11].value)
            return;
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[11].value, 13, i++);
            });
    }

    setInputs14 = () =>
    {
        if (!this.state.bases[12].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[12].value, 14, i++);
            });
    }

    setInputs15 = () =>
    {
        if (!this.state.bases[13].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[13].value, 15, i++);
            });
    }

    setInputs16 = () =>
    {
        if (!this.state.bases[14].value)
        {
            this.clearAll();
            return;
        }
        let i = 2;
        let x = this.state.bases.map(item => 
            {
                item.value = this.base_convert(this.state.bases[14].value, 16, i++);
            });
    }

    
    render() {

        return (
            <div>
                <DemoNavbar />
                <main ref="main">
                    <Hero />
                    <div className="py-9 lg-secondary" >
                        <Container>
                            <div className="mb-3">
                                <small className="text-uppercase font-weight-bold">
                                    Base Changer
                                </small>
                            </div>
                            <Row>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 2</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 2 "
                                                ref={el => this.state.bases[0] = el}
                                                onChange={this.setInputs2}
                                        />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 3</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 3 "
                                                ref={el => this.state.bases[1] = el}
                                                onChange={this.setInputs3}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 4</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 4 "
                                                ref={el => this.state.bases[2] = el}
                                                onChange={this.setInputs4}
                                        />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 5</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 5 "
                                                ref={el => this.state.bases[3] = el}
                                                onChange={this.setInputs5}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 6</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 6 "
                                                ref={el => this.state.bases[4] = el}
                                                onChange={this.setInputs6}
                                        />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 7</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 7 "
                                                ref={el => this.state.bases[5] = el}
                                                onChange={this.setInputs7}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 8</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 8 "
                                                ref={el => this.state.bases[6] = el}
                                                onChange={this.setInputs8}
                                        />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 9</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 9 "
                                                ref={el => this.state.bases[7] = el}
                                                onChange={this.setInputs9}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 10</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 10 "
                                                ref={el => this.state.bases[8] = el}
                                                onChange={this.setInputs10}
                                        />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 11</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 11 "
                                                ref={el => this.state.bases[9] = el}
                                                onChange={this.setInputs11}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 12</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 12 "
                                                ref={el => this.state.bases[10] = el}
                                                onChange={this.setInputs12}
                                        />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 13</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 13 "
                                                ref={el => this.state.bases[11] = el}
                                                onChange={this.setInputs13}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 14</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 14 "
                                                ref={el => this.state.bases[12] = el}
                                                onChange={this.setInputs14}
                                        />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 15</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 15 "
                                                ref={el => this.state.bases[13] = el}
                                                onChange={this.setInputs15}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" sm="6">
                                    <div className="form-group">
                                        <span>Base 16</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="Please Enter a number in Base 16 "
                                                ref={el => this.state.bases[14] = el}
                                                onChange={this.setInputs16}
                                        />
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col>
                                    <FormGroup>
                                        <Button className="btn-1 ml-1" color="warning" type="button" onClick= {this.clearAll}>
                                            Clear
                                        </Button>
                                    </FormGroup>
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
