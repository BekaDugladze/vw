import React, { Component } from "react";
import './css/models.css';
import suvone from './Photo/suvone.jpg';
import id2 from './Photo/id2.jpg';
import id1 from './Photo/id1.jpg';
import id3 from './Photo/id3.jpg';
import id4 from './Photo/id4.jpg';
import id5 from './Photo/id5.jpg';
import id6 from './Photo/id6.jpg';
import id17 from './Photo/id7.jpg';
import id8 from './Photo/id8.jpg';
import id9 from './Photo/id9.jpg';
import id10 from './Photo/id10.jpg';
import id11 from './Photo/id11.jpg';
import es1 from './Photo/es1.jpg';
import es2 from './Photo/es2.jpg';
import es3 from './Photo/es3.jpg';
import es4 from './Photo/es4.jpg';
import es5 from './Photo/es5.jpg';
import es6 from './Photo/es6.jpg';
import es7 from './Photo/es7.jpg';
import es8 from './Photo/es8.jpg';
import es9 from './Photo/es9.jpg';
import es10 from './Photo/es10.jpg';
import es11 from './Photo/es11.jpg';
import es12 from './Photo/es12.jpg';
import a1 from './Photo/a1.jpg';
import a2 from './Photo/a2.jpg';
import a3 from './Photo/a3.jpg';
import a4 from './Photo/a4.jpg';
import a5 from './Photo/a5.jpg';
import a6 from './Photo/a6.jpg';
import a7 from './Photo/a7.jpg';
import a8 from './Photo/a8.jpg';
import a9 from './Photo/a9.jpg';
import a10 from './Photo/a10.jpg';
import a11 from './Photo/a11.jpg';
import a12 from './Photo/a12.jpg';
import t1 from './Photo/t1.png';
import t2 from './Photo/t2.png';
import t3 from './Photo/t3.png';
import t4 from './Photo/t4.png';
import t5 from './Photo/t5.png';
import t6 from './Photo/t6.png';
import t7 from './Photo/t7.png';
import t8 from './Photo/t8.png';
import t9 from './Photo/t9.png';
import t10 from './Photo/t10.png';
import t11 from './Photo/t11.png';
import t12 from './Photo/t12.png';
import ta1 from './Photo/ta1.png';
import ta2 from './Photo/ta2.png';
import ta3 from './Photo/ta3.png';
import ta4 from './Photo/ta4.png';
import ta5 from './Photo/ta5.png';
import ta6 from './Photo/ta6.png';
import ta7 from './Photo/ta7.png';
import ta8 from './Photo/ta8.png';
import ta9 from './Photo/ta9.png';
import ta10 from './Photo/ta10.png';
import ta11 from './Photo/ta11.png';
import ta12 from './Photo/ta12.png';
import j1 from './Photo/j1.png';
import j2 from './Photo/j2.png';
import j3 from './Photo/j3.png';
import j4 from './Photo/j4.png';
import j5 from './Photo/j5.png';
import j6 from './Photo/j6.png';
import j7 from './Photo/j7.png';
import j8 from './Photo/j8.png';
import j9 from './Photo/j9.png';
import j10 from './Photo/j10.png';
import j11 from './Photo/j11.png';
import j12 from './Photo/j12.png';
import s1 from './Photo/s1.png';
import s2 from './Photo/s2.png';
import s3 from './Photo/s3.png';
import s4 from './Photo/s4.png';
import s5 from './Photo/s5.png';
import s6 from './Photo/s6.png';
import s7 from './Photo/s7.png';
import s8 from './Photo/s8.png';
import s9 from './Photo/s9.png';
import s10 from './Photo/s10.png';
import s11 from './Photo/s11.png';
import s12 from './Photo/s12.png';
import q1 from './Photo/q1.webp';
import q2 from './Photo/q2.webp';
import q3 from './Photo/q3.webp';
import q4 from './Photo/q4.webp';
import q5 from './Photo/q5.webp';
import q6 from './Photo/q6.webp';
import q7 from './Photo/q7.webp';
import g1 from './Photo/g1.png';
import g2 from './Photo/g2.png';
import g3 from './Photo/g3.png';
import g4 from './Photo/g4.png';
import g5 from './Photo/g5.png';
import g6 from './Photo/g6.png';
import g7 from './Photo/g7.png';
import g8 from './Photo/g8.png';
import g9 from './Photo/g9.png';
import g10 from './Photo/g10.png';
import g11 from './Photo/g11.png';
import g12 from './Photo/g12.png';
import h1 from './Photo/h1.png';
import h2 from './Photo/h2.png';
import h3 from './Photo/h3.png';
import h4 from './Photo/h4.png';
import h5 from './Photo/h5.png';
import h6 from './Photo/h6.png';
import h7 from './Photo/h7.png';
import h8 from './Photo/h8.png';
import h9 from './Photo/h9.png';
import h10 from './Photo/h10.png';
import h11 from './Photo/h11.png';
import h12 from './Photo/h12.png';
import id77 from './Photo/id77.mp4';
import idbus from './Photo/idbus.mp4';

export default class Models extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active: 'tab1',
            suv: [
                {
                img: [suvone, id11, id2, id1, id3, id4, id5, id6, id17, id8, id9, id10],
                currentImageIndex: 0,
                alt: 'suv ID.4',
                className: 'Electric',
                h2: 'ID.4',
                h3: 'MSRP starting at $38,995'
                },
                {
                    img: [es1, es2, es3, es4, es5, es6, es7, es8, es9, es10, es11, es12],
                    currentImageIndex: 0,
                    alt: 'suv Atlas',
                    className: 'New',
                    h2: 'Atlas',
                    h3: 'MSRP starting at $37,725'
                },
                {
                    img: [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12],
                    currentImageIndex: 0,
                    alt: 'suv Atlas Cross Sport',
                    className: 'New',
                    h2: 'Atlas Cross Sport',
                    h3: 'MSRP starting at $36,715',
                },
                {
                    img: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12],
                    currentImageIndex: 0,
                    alt: 'suv Tiguan',
                    className: 'New',
                    h2: 'Tiguan',
                    h3: 'MSRP starting at $28,505'
                },
                {
                    img: [ta1, ta2, ta3, ta4, ta5, ta6, ta7, ta8, ta9, ta10, ta11, ta12],
                    currentImageIndex: 0,
                    alt: 'suv Taos',
                    className: 'New',
                    h2: 'Taos',
                    h3: 'MSRP starting at $23,995'
                },
            ],
            jetta: [
                {
                    img: [j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, j11, j12],
                    currentImageIndex: 0,
                    alt: 'Jetta',
                    className: 'New',
                    h2: 'Jetta',
                    h3: 'MSRP starting at $21,435'
                },
                {
                    img: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12],
                    currentImageIndex: 0,
                    alt: 'Jetta GLI',
                    className: 'New',
                    h2: 'Jetta GLI',
                    h3: 'MSRP starting at $28,085'
                },
                {
                    img: [q1, q2, q3, q4, q5, q6, q7],
                    currentImageIndex: 0,
                    alt: 'Arteon',
                    className: 'New',
                    h2: 'Arteon',
                    h3: 'MSRP starting at $43,010'
                },
            ],
            compact: [
                {
                    img: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12],
                    currentImageIndex: 0,
                    alt: 'Golf R',
                    className: 'New',
                    h2: 'Golf R',
                    h3: 'MSRP starting at $45,455'
                },
                {
                    img: [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12],
                    currentImageIndex: 0,
                    alt: 'Golf GTI',
                    className: 'New',
                    h2: 'Golf GTI',
                    h3: 'MSRP starting at $31,765'
                },
            ],
            electric: [
                {
                    img: [suvone, id11, id2, id1, id3, id4, id5, id6, id7, id8, id9, id10],
                    currentImageIndex: 0,
                    alt: 'suv ID.4',
                    className: 'Electric',
                    h2: 'ID.4',
                    h3: 'MSRP starting at $38,995',
                    type: 'img'
                    },
                {
                    img: [id77],
                    currentImageIndex: 0,
                    alt: 'ID.7',
                    className: 'Electric',
                    h2: 'ID.7',
                    h3: 'Soon',
                    type: 'video'
                },
                {
                    img: [idbus],
                    currentImageIndex: 0,
                    alt: 'suv ID.BUZZ',
                    className: 'Electric',
                    h2: 'ID.BUZZ',
                    h3: 'Soon',
                    type: 'video'
                },
            ]
        }
    }
    handleTabClick = (tab) => {
        this.setState({ active: tab });
    };
    handleImageRotation = (index) => {
        const suv = this.state.suv[index];
        const currentImageIndex = suv.currentImageIndex;
        const nextImageIndex = (currentImageIndex + 1) % suv.img.length;
    
        this.setState((prevState) => {
          prevState.suv[index].currentImageIndex = nextImageIndex;
          return { suv: prevState.suv };
        });
      };
    
    
      rightClickFunction = (index) => {
        const suv = this.state.suv[index];
        const currentImageIndex = suv.currentImageIndex;
        const nextImageIndex = (currentImageIndex - 1 + suv.img.length) % suv.img.length;
    
        this.setState((prevState) => {
          prevState.suv[index].currentImageIndex = nextImageIndex;
          return { suv: prevState.suv };
        });
      };
      
      handleJettaRotation = (index) => {
        const jetta = this.state.jetta[index];
        const currentImageIndex = jetta.currentImageIndex;
        const nextImageIndex = (currentImageIndex + 1) % jetta.img.length;
    
        this.setState((prevState) => {
          prevState.jetta[index].currentImageIndex = nextImageIndex;
          return { jetta: prevState.jetta };
        });
      };
    
    
      rightJettaFunction = (index) => {
        const jetta = this.state.jetta[index];
        const currentImageIndex = jetta.currentImageIndex;
        const nextImageIndex = (currentImageIndex - 1 + jetta.img.length) % jetta.img.length;
    
        this.setState((prevState) => {
            prevState.jetta[index].currentImageIndex = nextImageIndex;
            return { jetta: prevState.jetta };
          });
      };

      handleGolfRotation = (index) => {
        const compact = this.state.compact[index];
        const currentImageIndex = compact.currentImageIndex;
        const nextImageIndex = (currentImageIndex + 1) % compact.img.length;
    
        this.setState((prevState) => {
            prevState.compact[index].currentImageIndex = nextImageIndex;
            return { compact: prevState.compact };
          });
      };
    
    
      rightGolfFunction = (index) => {
        const compact = this.state.compact[index];
        const currentImageIndex = compact.currentImageIndex;
        const nextImageIndex = (currentImageIndex - 1 + compact.img.length) % compact.img.length;
    
        this.setState((prevState) => {
            prevState.compact[index].currentImageIndex = nextImageIndex;
            return { compact: prevState.compact };
          });
      };
      handleERotation = (index) => {
        const electric = this.state.electric[index];
        const currentImageIndex = electric.currentImageIndex;
        const nextImageIndex = (currentImageIndex + 1) % electric.img.length;
    
        this.setState((prevState) => {
            prevState.electric[index].currentImageIndex = nextImageIndex;
            return { electric: prevState.electric };
          });
      };
    
    
      rightEFunction = (index) => {
        const electric = this.state.electric[index];
        const currentImageIndex = electric.currentImageIndex;
        const nextImageIndex = (currentImageIndex - 1 + electric.img.length) % electric.img.length;
    
        this.setState((prevState) => {
            prevState.electric[index].currentImageIndex = nextImageIndex;
            return { electric: prevState.electric };
          });
      };
      
    render() {
        return(
            <div id="models">
            <h1>All Models</h1>
            <ul>
                <li><button 
                onClick={() => {this.handleTabClick('tab1')}}
                style={{
                    background: this.state.active === 'tab1' ? '#001E50' : 'white',
                    color: this.state.active === 'tab1' ? 'white' : '#001E50',}}
                >SUV</button></li>
                <li><button 
                onClick={() => {this.handleTabClick('tab2')}}
                style={{
                    background: this.state.active === 'tab2' ? '#001E50' : 'white',
                    color: this.state.active === 'tab2' ? 'white' : '#001E50',}}
                >Sedan</button></li>
                <li><button
                onClick={() => {this.handleTabClick('tab3')}}
                style={{
                    background: this.state.active === 'tab3' ? '#001E50' : 'white',
                    color: this.state.active === 'tab3' ? 'white' : '#001E50',}}
                >Compact</button></li>
                <li><button
                onClick={() => {this.handleTabClick('tab4')}}
                style={{
                    background: this.state.active === 'tab4' ? '#001E50' : 'white',
                    color: this.state.active === 'tab4' ? 'white' : '#001E50',}}
                >Electic</button></li>
            </ul>
            
            {this.state.active === 'tab1' ?
            <div className="catalog">
                {this.state.suv.map((suvItem, index) => (
                    <div className="cars" key={index}>
                    <img
                    src={suvItem.img[suvItem.currentImageIndex]}
                    alt={suvItem.alt}
                    onContextMenu={(event) => 
                            {event.preventDefault(); 
                            event.stopPropagation();
                            this.rightClickFunction(index)}}
                    onClick={() => this.handleImageRotation(index)}
                    className="ew-resize"
                    />
                    <div className={suvItem.className}>
                        <h3>{suvItem.className}</h3>
                    </div>
                    <h2>{suvItem.h2}</h2>
                    <h3>{suvItem.h3}</h3>
                    <a href="mailto: info@volkswagen.ge">Contact Us</a>
                    </div>
                ))}
            </div>
            : <div></div>}

                {this.state.active === 'tab3' ?
            <div className="catalog">
                {this.state.compact.map((suvItem, index) => (
                    <div className="cars" key={index}>
                    <img
                    src={suvItem.img[suvItem.currentImageIndex]}
                    alt={suvItem.alt}
                    onContextMenu={(event) => 
                            {event.preventDefault(); 
                            event.stopPropagation();
                            this.rightGolfFunction(index)}}
                    onClick={() => this.handleGolfRotation(index)}
                    className="ew-resize"
                    />
                    <div className={suvItem.className}>
                        <h3>{suvItem.className}</h3>
                    </div>
                    <h2>{suvItem.h2}</h2>
                    <h3>{suvItem.h3}</h3>
                    <a href="mailto: info@volkswagen.ge">Contact Us</a>
                    </div>
                ))}
                
            </div>
            : <div></div>}

            {this.state.active === 'tab2' ?
            <div className="catalog">
                {this.state.jetta.map((suvItem, index) => (
                    <div className="cars" key={index}>
                    <img
                    src={suvItem.img[suvItem.currentImageIndex]}
                    alt={suvItem.alt}
                    onContextMenu={(event) => 
                            {event.preventDefault(); 
                            event.stopPropagation();
                            this.rightJettaFunction(index)}}
                    onClick={() => this.handleJettaRotation(index)}
                    className="ew-resize"
                    />
                    <div className={suvItem.className}>
                        <h3>{suvItem.className}</h3>
                    </div>
                    <h2>{suvItem.h2}</h2>
                    <h3>{suvItem.h3}</h3>
                    <a href="mailto: info@volkswagen.ge">Contact Us</a>
                    </div>
                ))}
            </div>
            : <div></div>} 
                     
                     {this.state.active === 'tab4' ?
            <div className="catalog">
                {this.state.electric.map((suvItem, index) => (
                    <div className="cars" key={index}>
                        {suvItem.type === 'img' ? 
                    <img
                    src={suvItem.img[suvItem.currentImageIndex]}
                    alt={suvItem.alt}
                    onContextMenu={(event) => 
                            {event.preventDefault(); 
                            event.stopPropagation();
                            this.rightEFunction(index)}}
                    onClick={() => this.handleERotation(index)}
                    className="ew-resize"
                    />
                    : <video 
                    src={suvItem.img[suvItem.currentImageIndex]}
                    alt={suvItem.alt}
                    muted 
                    autoPlay
                    loop></video>}
                    <div className={suvItem.className}>
                        <h3>{suvItem.className}</h3>
                    </div>
                    <h2>{suvItem.h2}</h2>
                    <h3>{suvItem.h3}</h3>
                    <a href="mailto: info@volkswagen.ge">Contact Us</a>
                    </div>
                ))}
            </div>
            : <div></div>} 

            </div>
        )
    }
}
