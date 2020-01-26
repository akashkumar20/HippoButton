import React, { Component } from 'react';
import gsap from 'gsap';

import '../../scss/hippo.scss';

import HippoSVG from '../../Components/Hippo/HippoSVG';

class Hippo extends Component<any, any> {
    interval: number;

    constructor(props:any) {
        super(props);
        this.state = {
            posX: '',
            posY: '',
            rightEar: 0,
        };
    }

    componentDidMount() {
        const earWiggle = gsap.timeline({ paused: true, repeat: 2 });
        earWiggle.set('.ear-right', { transformOrigin: 'center center' });
        earWiggle.to('.ear-right', { duration: 0.1, rotation: 45 });
        earWiggle.to('.ear-right', { duration: 0.1, rotation: 0 });
        this.interval = window.setInterval(() => earWiggle.play(0), 2500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    earUpdate() {
        this.setState((pre:any) => ({
            ...pre,
            rightEar: pre.rightEar === 0 ? 5 : 0,
        }));
    }

    updateEyePosition(e:any) {
        const { clientX, clientY } = e;
        const eyeLeftPupil = document.querySelector('.eye-left-pupil');
        const eyeLeftInner = document.querySelector('.eye-left-inner');
        const innerEyeWidth = eyeLeftInner ? eyeLeftInner.getBoundingClientRect().width : 0;
        const innerEyeHeight = eyeLeftInner ? eyeLeftInner.getBoundingClientRect().height : 0;
        const pupilWidth = eyeLeftPupil ? eyeLeftPupil.getBoundingClientRect().width : 0;
        const pupilHeight = eyeLeftPupil ? eyeLeftPupil.getBoundingClientRect().height : 0;
        const xMovement = (innerEyeWidth - pupilWidth) / 2;
        const yMovement = (innerEyeHeight - pupilHeight) / 2;
        const mousePercentX = clientX / document.body.clientWidth;
        const mousePercentY = clientY / document.body.clientHeight;
        const posX = (mousePercentX * 2 - 1) * xMovement;
        const posY = (mousePercentY * 2 - 1) * yMovement;
        this.setState((pre:any) => ({
            ...pre,
            posY,
            posX,
        }));
    }

    render() {
        const { posX, posY, rightEar } = this.state;
        return (
            <div className="hippo" onMouseMove={e => this.updateEyePosition(e)}>
                <button type="button">
                    <HippoSVG x={posX} y={posY} ear={rightEar} />
                </button>
            </div>
        );
    }
}
export default Hippo;
