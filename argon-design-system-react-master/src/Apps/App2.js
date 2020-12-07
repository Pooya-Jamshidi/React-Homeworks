import React, { Component } from 'react';

import { SketchPicker, PhotoshopPicker } from 'react-color';

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

export default class App2 extends Component {
    
    state = {color : {hex : '#fff'}};
    handleChangeComplete = (color) => 
    {
        this.setState(oldState => {
            let newState = {...oldState,
            color};
            return newState;
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <DemoNavbar />
                <main ref="main">
                    <Hero />
                    <div className="py-9 lg-secondary" style={{backgroundColor : this.state.color.hex}}>
                    <div className="py-5" >
                        <Container>
                            <Row>
                                <Col>
                                
                                <PhotoshopPicker
                                        color={ this.state.color }
                                        onChangeComplete={ this.handleChangeComplete }
                                    />
                                </Col>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <Col>
                                    <SketchPicker
                                        color={ this.state.color }
                                        onChangeComplete={ this.handleChangeComplete }
                                    />
                                </Col>
                            </Row>
                        </Container>
                    
                    </div>
                    </div>
                    
                </main>
                <CardsFooter />
            </div>
        );
    }

}
