import React, {Component} from 'react';
import './css/newCars.css';
import leftOne from './Photo/leftOne.webp'
import newsec from './Photo/newsec.webp';
import newthrd from './Photo/newthrd.webp';


export default class NewCars extends Component {
    render() {
        return(
            <div className='newCars'>
            <h1 id='newCars'>New Cars</h1>
            <div className='left'>
                <img src={leftOne} alt='ID.4'/>
                <div className='lefthp'>
                    <h3>3.9% APR ⁠1 for 72 months plus a $1,000 ⁠2 Customer Bonus For highly qualified customers through Volkswagen Credit.</h3>
                    <p>2023 all‑electric ID.4 models are available with financing customers who finance through Volkswagen Credit. Plus a $1,000 ⁠2 Customer Bonus. Offer ends 10/31/23⁠1</p>
                    <a href='#models'>See More</a>
                </div>
            </div>
            <div className='right'>
                <img src={newsec}  id='media' alt='Volkswagen'/>
                <div className='righthp'>
                    <h3>Lower maintenance. Smarter choice.</h3>
                    <p>Great news: the 2023 Volkswagen Atlas, Atlas Cross Sport, Tiguan, Taos and ID.4 EV cost less to maintain than their respective Toyota, Honda, and Subaru competitors.⁠3 It’s not only a smart choice for your lifestyle; it could also be a smart choice for your wallet.Check out how the other Volkswagen models stack up.</p>
                    <a href='#models'>See More</a>
                </div>
                <img src={newsec} id='norm' alt='Volkswagen'/>
            </div>
            <div className='left'>
                <img src={newthrd} alt='Volkswagen'></img>
                <div className='lefthp'>
                    <h3>The future of electric is here.</h3>
                    <p>Assembled locally in Chattanooga, TN the 2023 Volkswagen ID.4 SUV is truly something to behold. With a striking, aerodynamic road presence and a spacious, comfortable interior, it'll transform how you think about electric cars. Best of all, it comes loaded with value. Oh, and qualifying individuals may be eligible for up to a $7500 federal tax credit.⁠</p>
                    <a href='#models'>See More</a>
                </div>
            </div>
            </div>
        )
    }
}