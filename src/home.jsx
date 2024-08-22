import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import homefigma from './assets/figma/homeImagefigma.json';

import './App.css';
import { AboutMe } from './aboutme';



export function Home() {
    const [viewPortSize, setViewportSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [aboutMeTop, setAboutMeTop] = useState(viewPortSize.height);
    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        const handleScroll = () => {
            const currentTopElement = document.getElementById('home');
            const computedStyle = window.getComputedStyle(currentTopElement);
            console.log(computedStyle.top);

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const newTop = Math.max(viewPortSize.height - scrollTop, 0);
            console.log(newTop);
            setAboutMeTop(newTop);
        };

        window.addEventListener('scroll', handleScroll);


        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);


    }, [viewPortSize.height]);
    return (
        <>
            <div className='home md:flex justify-between items-center' id='home' style={{ height: viewPortSize.height }}>
                <div className='bold-header w-1/2 pl-8'>
                    <h1>Hello, 👋🏻</h1>
                    <h1>I&apos;m Sourav, a</h1>
                    <TypeAnimation
                        sequence={[
                            'Competitive Programmer',
                            1000,
                            'Fullstack Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold' }}
                        repeat={Infinity} />
                    <br />
                    <span>
                        Always strive to improve myself by 0.01% every day, no matter how small or insignificant it may seem. And that 0.01% makes all the difference in the long run.
                    </span>
                </div>
                <Lottie animationData={homefigma} className='figmaDp' />
                <div className='text-end pr-8'>
                    <h2>6</h2>
                    <p>Months of Experience</p>
                    <br />
                    <h2 className='text-black'>⭐</h2>
                    <p>5 Stars at Codechef</p>
                </div>
            </div>
        </>
    );
}


