import React, { Component } from "react";
import './css/footer.css';
import vwwhite from './Photo/vwwhite.png'

export default class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active: 'tab1'
        }
    }
    handleMenu(tab) {
        this.setState({ active: tab})
    }
    render(){
        return(
            <div className="footer">
                <ul className="menu" id="menu">
                    <li><button 
                    onClick={() => {this.handleMenu('tab1')}}
                    style={{
                        background: this.state.active === 'tab1' ? 'white' : 'none',
                        color: this.state.active === 'tab1' ? '#001E50' : 'white' }}>About Volkswagen</button></li>
                    <li><button
                    onClick={() => {this.handleMenu('tab2')}}
                    style={{background: this.state.active === 'tab2' ? 'white' : 'none',
                    color: this.state.active === 'tab2' ? '#001E50' : 'white'}}>Shopping Tools</button></li>
                    <li><button
                    onClick={() => {this.handleMenu('tab3')}}
                    style={{background: this.state.active === 'tab3' ? 'white' : 'none',
                    color: this.state.active === 'tab3' ? '#001E50' : 'white'}}>Owners</button></li>
                    <li><button
                    onClick={() => {this.handleMenu('tab4')}}
                    style={{background: this.state.active === 'tab4' ? 'white' : 'none',
                    color: this.state.active === 'tab4' ? '#001E50' : 'white'}}>Social Media</button></li>
                </ul>
                <ul className="menuObject">
                    {this.state.active === 'tab1' ?
                    <>
                    <li><a href="https://www.vw.com/en/corporate.html" target="_blank" rel="noreferrer">Corporate</a></li>
                    <li><a href="https://www.vw.com/en/newsroom.html" target="_blank" rel="noreferrer">Newsroom</a></li>
                    <li><a href="https://www.vw.com/en/help-center.html" target="_blank" rel="noreferrer">Help Center</a></li>
                    </>
                    : <div></div>}
                    {this.state.active === 'tab2' ?
                    <>
                    <li><a href="https://www.vw.com/en/carefree-shopping.html" target="_blank" rel="noreferrer">Carefree Shopping</a></li>
                    <li><a href="https://www.vw.com/en/financial-services.html" target="_blank" rel="noreferrer">Financial Services</a></li>
                    <li><a href="https://www.vw.com/en/cpo.html" target="_blank" rel="noreferrer">Certified Pre-Owned</a></li>
                    <li><a href="http://www.vwpartnerprogram.com/" target="_blank" rel="noreferrer">Partner Program</a></li>
                    <li><a href="http://vwcorporatefleet.com/" target="_blank" rel="noreferrer">Corporate Fleet</a></li>
                    </>
                    : <div></div>}
                    {this.state.active === 'tab3' ?
                    <>
                    <li><a href="https://www.vw.com/en/carefree-coverage.html" target="_blank" rel="noreferrer">Carefree Coverage</a></li>
                    <li><a href="https://knowyourvw.com/" target="_blank" rel="noreferrer">Know Your VW</a></li>
                    <li><a href="https://www.vw.com/en/software-update.html" target="_blank" rel="noreferrer">Software Updates</a></li>
                    <li><a href="https://www.vw.com/en/owners.html" target="_blank" rel="noreferrer">myVW</a></li>
                    <li><a href="https://www.vwserviceandparts.com/" target="_blank" rel="noreferrer">Service & Parts</a></li>
                    <li><a href="https://www.vw.com/en/emissions.html" target="_blank" rel="noreferrer">TDI Emissions Modification Lookup</a></li>
                    </>
                    : <div></div>}
                    {this.state.active === 'tab4' ?
                    <>
                    <li><a href="https://www.facebook.com/VW" target="_blank" rel="noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com/vw" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://www.youtube.com/user/Volkswagen" target="_blank" rel="noreferrer">Youtube</a></li>
                    <li><a href="https://instagram.com/vw/" target="_blank" rel="noreferrer">Instagram</a></li>
                    </>
                    : <div></div>}
                </ul>
                <div className="author">
                    <img src={vwwhite} alt="VolksWagen" />
                    <span>© 2023 <a href="https://www.linkedin.com/in/beqa-dugladze-266374268/" rel="noreferrer"> Beka Dugladze</a></span>
                </div>
            </div>
        )
    }
}