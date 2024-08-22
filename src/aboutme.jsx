import { useState, useEffect } from 'react';
import './App.css';

export function AboutMe() {
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
        <div className="aboutme w-full bg-red absolute z-10" style={{ height: viewPortSize.height }}>
            <h1>About Me</h1>
        </div>
    );
}