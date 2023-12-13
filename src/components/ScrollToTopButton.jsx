import React, { useState, useEffect } from 'react';
import '../assets/css/layout.css';
import { IonIcon } from '@ionic/react';
import { chevronUpOutline } from 'ionicons/icons';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []); // Empty the dependency array ensures that the effect runs only once


    return (

        <a href='#top' className={`btn btn-primary go-top ${ isVisible ? 'active' : ''}`} >
            <IonIcon icon={chevronUpOutline} />
        </a>

    )
}

export default ScrollToTopButton;