import React, { Component } from 'react'
import gsap from 'gsap'

import './hippo.scss';

import HippoSVG from './svg/hippo';
class Hippo extends Component{
    constructor(props){
        super(props);
        this.state = {
            posX: '',
            posY: '',
            rightEar: 0,
        };
    }
    componentDidMount() {
        // this.interval = setInterval(() => this.setState((pre) => ({
        //     ...pre,
        //     rightEar: pre.rightEar === 0 ? 5 : 0
        // })), 1000)
        const earWiggle = gsap.timeline({ paused: true, repeat: 2 });
        earWiggle.set('.ear-right', { transformOrigin:"center center" });
        earWiggle.to('.ear-right', {duration: 0.1, rotation: 45});
        earWiggle.to('.ear-right', {duration: 0.1, rotation: 0});
        this.interval = window.setInterval(() => earWiggle.play(0), 2500);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    earUpdate(){
        this.setState((pre) => ({
            ...pre,
            rightEar: pre.rightEar === 0 ? 5 : 0
        }))
    }
    // onMouseMove(e){
    //     const { screenX, screenY, pageX, pageY} = e;
    //     console.log(e)
    //     let radianDegrees = Math.atan2(pageX - screenX, pageY - screenY);
    //     // console.log(radianDegrees);
    //     let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
    //     // console.log(radianDegrees)
    // }

    updateEyePosition(e) {
        const { clientX, clientY } = e;
        const eyeLeftPupil = document.querySelector('.eye-left-pupil');
        const eyeLeftInner = document.querySelector('.eye-left-inner');
        const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
        const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
        const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
        const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
        const xMovement = (innerEyeWidth - pupilWidth)/2;
        const yMovement = (innerEyeHeight - pupilHeight)/2;
        const mousePercentX = clientX / document.body.clientWidth;
        const mousePercentY = clientY / document.body.clientHeight;
        const posX = (mousePercentX * 2 - 1) * xMovement;
        const posY = (mousePercentY * 2 - 1) * yMovement;
        this.setState((pre) => ({
            ...pre,
            posY,
            posX,
        }));
      }

    render(){
        // const earWiggle = gsap.timeline({ paused: true, repeat: 2 });
        // earWiggle.set('.ear-right', { transformOrigin:"center center" });
        // earWiggle.to('.ear-right', {duration: 0.1, rotation: 45});
        // earWiggle.to('.ear-right', {duration: 0.1, rotation: 0});
        // const interval = window.setInterval(() => earWiggle.play(0), 2500);

        // clearInterval(interval);
        const { posX, posY, rightEar } = this.state;
        return(
            <div className="hippo" onMouseMove={(e) => this.updateEyePosition(e)}>
                <button>
                    <HippoSVG x={posX} y={posY} ear={rightEar}/>
                </button>  
            </div>
        )
    }
} 
export default Hippo