import React, {Component} from 'react';
import './css/header.css';
import vwWhite from './Photo/vwwhite.png'; 

export default class Header extends Component {
    render(){
        return (
            <>
            <div className='header'>
                <a href='#home' className='vwwhite'><img id='vwwhite' src={vwWhite} alt='VolksWagen Logo' /></a>
                <div className='navLinks'>
                    <a href='#newCars'>New Cars</a>
                    <a href='#models'>Models</a>
                    <a href='#menu'>Menu</a>
                </div>
            </div>
            <div className='mediaHeader'>
                <a href='#home'>
                    <span class="material-symbols-outlined">home</span>
                    <p>Home</p>
                </a>
                <a href='#newCars'>
                    <span class="material-symbols-outlined">directions_car</span>
                    <p>New Cars</p>
                </a>
                <a href='#models'>
                    <span class="material-symbols-outlined">menu_book</span>
                    <p>Models</p>
                </a>
                <a href='#menu'>
                    <span class="material-symbols-outlined">menu</span>
                    <p>Menu</p>
                </a>
            </div>
            </>
        )
    }
}