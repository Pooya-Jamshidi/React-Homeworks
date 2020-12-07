import React, { Component } from 'react';


import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";
import Hero from "../views/IndexSections/Hero";
import Slider from "nouislider";

import buzz1 from './asset/MetronomeSound.wav';
import buzz2 from './asset/MetronomeSound.wav';

import {
    FormGroup,
    Input,
    Container,
    Row,
    Col, 
    Button,
    Form
} from "reactstrap";

export default class App5 extends Component {
    state = {
        bpm: 100.0,
        playing: false,
        count: 0,
        beat: 4
    };
    buzz1 = new Audio(buzz1);
    buzz2 = new Audio(buzz2);
    componentDidMount() {
        if (this.state.playing)
        {
            clearInterval(this.timer);
            this.updateInterval();
            var slider = this.refs.slider;
            Slider.create(slider, {
            start: [0.0],
            connect: [true, false],
            step: 0.01,
            range: { min: 60.0, max: 240.0 }
            }).on(
            "update",
            function(values, handle) {
                this.setState({ bpm: values[0] , count : 0});
            }.bind(this)
            );
        }else{
            var slider = this.refs.slider;
            Slider.create(slider, {
            start: [0.0],
            connect: [true, false],
            step: 0.01,
            range: { min: 60.0, max: 240.0 }
            }).on(
            "update",
            function(values, handle) {
                this.setState({ bpm: values[0] });
            }.bind(this)
            );
        }
        
    }

    onStop = () =>
    {
        let playing = true;
        this.updateInterval();
        this.setState({
            count: 0,
            playing
        }, this.playClick);
    }

    playClick = () =>
    {
        if (this.state.count === 0) 
            this.buzz2.play();
        else
            this.buzz1.play();
        this.setState({
            count: this.state.count + 1
        });
    }
    updateInterval = () => 
    {
        const bmpSpeed = 60 * 1000 / this.state.bpm;
        this.timer = setInterval(this.playClick, bmpSpeed);
    }

    onPlay = () =>
    {
        clearInterval(this.timer);
        let playing = false;
        this.setState(oldState => {

            let newState = {...oldState,
            playing};
            return newState;
        });
    }

    render() {
        return (
            <div>
                <DemoNavbar />
                <main ref="main">
                    <Hero />
                    <div className="py-9 lg-secondary">
                        <Row>
                            <Col lg="3" md="6"/>
                            <Col lg="3" md="6">
                                <div className="input-slider-container">
                                    <div className="slider" ref="slider" />
                                    <Row className="mt-3 d-none">
                                        <Col xs="6">
                                        <span className="range-slider-value">
                                            {this.state.bpm}
                                        </span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col lg="3" md="6"/>
                            <Col lg="3" md="6">
                                {this.state.playing ? 
                                <Button className="btn-1 ml-1" color="warning" type="button" onClick={this.onPlay}>
                                    Stop
                                </Button>
                                : 
                                <Button className="btn-1 ml-1" color="success" type="button" onClick={this.onStop}>
                                    Play
                                </Button>
                                }
                                
                            </Col>
                        </Row>
                    </div>
                    
                    
                </main>
                <CardsFooter />
            </div>
        );
    }

}
