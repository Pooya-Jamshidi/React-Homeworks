import React, { Component } from 'react';


import DemoNavbar from "../components/Navbars/DemoNavbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";
import Hero from "../views/IndexSections/Hero";

import './asset/App7.scss';
import './asset/App6.scss';
import './asset/App6-2.css'


import melli from './asset/Pics/melli.jpg';
import keshavarzi from './asset/Pics/keshavrzi.jpg';
import mehr from './asset/Pics/mehr.jpg';
import mellat from './asset/Pics/mellat.jpg';
import pasargad from './asset/Pics/pasargad.jpg';
import refah from './asset/Pics/refah.jpg';
import saman from './asset/Pics/saman.jpg';
import sepah from './asset/Pics/sepah.jpg';
import sina from './asset/Pics/sina.jpg';
import tejarat from './asset/Pics/tejarat.jpeg';


import {
    FormGroup,
    Row,
    Col, 
    Button,
} from "reactstrap";

export default class App6 extends Component {
    state = 
    {
        pics : 
        [
            melli,
            keshavarzi,
            mehr,
            mellat,
            pasargad,
            refah,
            saman,
            sepah,
            sina,
            tejarat
        ],
        cartNumber : null,
        bank : null,
        expire : null,
        cvv2 : null,
        fullName : null,
        show : false,
        imgSrc : null
    };

    onSelect = () =>
    {
        if (!this.state.show)
            return;
        this.showCart();
    }

    showCart = () =>
    {
        let show = true;
        let imgSrc = this.state.pics[parseInt(this.state.bank.value)];
        this.setState(oldState => {
            let newState = {...oldState,
            show, imgSrc}
        return newState;
        })
    };

    render() {
        return (
            <div>
                <DemoNavbar />
                <main ref="main">
                    <Hero />
                    <div className="py-9 lg-secondary">
                        <Row>
                            <Col>
                            <div>
                                <Col></Col>
                                <Row>
                                    <Col lg="12" sm="6">
                                        <div className="form-group">
                                            <span>شماره کارت</span>
                                            <input  className="form-field" 
                                                    type="text" 
                                                    placeholder="شماره کارت را وارد کنید"
                                                    ref={el => this.state.cartNumber = el}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                <Col lg="12" sm="6">
                                <div className="form-group">
                                        <span>اسم</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="نام و نام خانوادگی"
                                                ref={el => this.state.fullName = el}
                                                />
                                    </div>
                                </Col>
                                <Col></Col>
                                </Row>
                                <Row>
                                <Col lg="12" sm="6">
                                    <div className="select">
                                        <select id="standard-select" ref={el => this.state.bank = el} onChange={this.onSelect}>
                                            <option value="0">بانک ملی</option>
                                            <option value="3">بانک ملت</option>
                                            <option value="6">بانک سامان</option>
                                            <option value="7">بانک سپه</option>
                                            <option value="2">بانک مهر</option>
                                            <option value="5">بانک رفاه</option>
                                            <option value="4">بانک پاسارگاد</option>
                                            <option value="8">بانک سینا</option>
                                            <option value="9">بانک تجارت</option>
                                            <option value="1">بانک کشاورزی</option>
                                        </select>
                                        <span className="focus"></span>
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg="12" sm="6">
                                <div className="form-group">
                                        <span>تاریخ انقضا</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="شماره کارت را وارد کنید  "
                                                ref={el => this.state.expire = el}
                                                />
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col lg="12" sm="6">
                                <div className="form-group">
                                        <span>CVV2</span>
                                        <input  className="form-field" 
                                                type="text" 
                                                placeholder="cvv2 را وارد کنید  "
                                                ref={el => this.state.cvv2 = el}
                                                />
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Button className="btn-1 ml-1" color="success" type="button" onClick= {this.showCart}>
                                            مشاهده کارت
                                        </Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            </div>
                            </Col>
                            
                            <Col>
                                {this.state.show ?
                                this.state.bank.value == "8" ? 
                                <div className='imageContainer'>
                                    <img src={this.state.imgSrc} style={{width:'100%'}} width= '300' height= '200'/>
                                    <div className='expireSina'>{this.state.expire.value}</div>
                                    <div className='cartNumberSina'>{this.state.cartNumber.value}</div>
                                    <div className='cvv2Sina'>{this.state.cvv2.value}</div>
                                    <div className='fullNameSina'>{this.state.fullName.value}</div>
                                </div>
                                :
                                this.state.bank.value == "2" ? 
                                <div className='imageContainer'>
                                    <img src={this.state.imgSrc} style={{width:'100%'}} width= '300' height= '200'/>
                                    <div className='expireMehr'>{this.state.expire.value}</div>
                                    <div className='cartNumberMehr'>{this.state.cartNumber.value}</div>
                                    <div className='cvv2Mehr'>{this.state.cvv2.value}</div>
                                    <div className='fullNameMehr'>{this.state.fullName.value}</div>
                                </div>
                                :
                                this.state.bank.value == "1" ? 
                                <div className='imageContainer'>
                                    <img src={this.state.imgSrc} style={{width:'100%'}} width= '300' height= '200'/>
                                    <div className='expireK'>{this.state.expire.value}</div>
                                    <div className='cartNumberK'>{this.state.cartNumber.value}</div>
                                    <div className='cvv2K'>{this.state.cvv2.value}</div>
                                    <div className='fullNameK'>{this.state.fullName.value}</div>
                                </div>
                                :
                                <div className='imageContainer'>
                                    <img src={this.state.imgSrc} style={{width:'100%'}} width= '300' height= '200'/>
                                    <div className='expire'>{this.state.expire.value}</div>
                                    <div className='cartNumber'>{this.state.cartNumber.value}</div>
                                    <div className='cvv2'>{this.state.cvv2.value}</div>
                                    <div className='fullName'>{this.state.fullName.value}</div>
                                </div>
                               :
                                null
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
