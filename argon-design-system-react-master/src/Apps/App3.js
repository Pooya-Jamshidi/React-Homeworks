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

export default class App3 extends Component {
    
    render() {
        return (
            <div>
                <DemoNavbar />
                <main ref="main">
                    <Hero />
                    <div className="py-5 bg-secondary">

                    </div>
                </main>
                <CardsFooter />
            </div>
        );
    }

}
