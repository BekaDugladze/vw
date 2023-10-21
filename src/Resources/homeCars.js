import React, {Component} from 'react';
import './css/homeCars.css';
import firstImg from './Photo/First.webp';
import sec from './Photo/Sec.webp';
import thrd from './Photo/thrd.webp';
import vid from './Photo/vid.mp4';

export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          multimediaContent: [
            {
              type: 'image',
              src: firstImg,
              text: 'The 2024 Golf GTI is one powerful hatch',
              buttonText: 'See more on GOLF GTI',
            },
            {
                type: 'video',
                src: vid,
                text: 'The 2024 JETTA GLI - The Performance Sedan',
                buttonText: 'See more on JETTA GLI',
              },
            {
                type: 'image',
                src: sec,
                text: 'The 2023 ID.4 is a game changer',
                buttonText: 'See more on ID.4',
            },
            {
                type: 'image',
                src: thrd,
                text: 'The 2024 JETTA - The Compact Sedan',
                buttonText: 'See more on JETTA',
            },
          ],
          currentIndex: 0,
        };
      }
    
      componentDidMount() {
        this.startContentCycle();
      }
    
      startContentCycle() {
        setInterval(() => {
          const { currentIndex, multimediaContent } = this.state;
          const nextIndex = (currentIndex + 1) % multimediaContent.length;
    
          this.setState({ currentIndex: nextIndex });
        }, 5000); // Change content every 5 seconds (5000 milliseconds)
      }
    render() {
        const { multimediaContent, currentIndex } = this.state;
        const currentContent = multimediaContent[currentIndex];
        return(
            <div className='home' id='home'>
                {currentContent.type === 'video' ? (
                    <video className='homeImg' src={currentContent.src} alt="Golf TDI" muted loop autoPlay />
                    ) : (
                    <img className='homeImg' src={currentContent.src} alt="Golf TDI" />
                    )}
                    <div className='homeTxt'>
                    <h2>{currentContent.text}</h2>
                    <button>{currentContent.buttonText}</button>
                    </div>
            </div>
        )
    }
}