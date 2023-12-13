import { IonIcon } from '@ionic/react';
import about from '/images/about-img.png'
import character1 from '/images/character-1.png';
import character2 from '/images/character-2.png';
import character3 from '/images/character-3.png';
import { arrowForwardCircleOutline } from 'ionicons/icons';

function About() {

    return (
        <section className="about" id="about">
            <div className="container">
    
                <figure className="about-banner">
    
                <img src={about} alt="M shape" className="about-img" />
    
                <img src={character1} alt="Game character" className="character character-1" />
    
                <img src={character2} alt="Game character" className="character character-2" />
    
                <img src={character3} alt="Game character" className="character character-3" />
    
                </figure>
    
                <div className="about-content">
    
                <p className="about-subtitle">Find team member</p>
    
                <h2 className="about-title">Experience just for gamers <strong>offer</strong> </h2>
    
                <p className="about-text">
                    Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum
                    viverra felis nunc
                    et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
                </p>
    
                <p className="about-bottom-text">
                    <IonIcon icon={arrowForwardCircleOutline} />
    
                    <span>Will sharpen your brain and focus</span>
                </p>
    
                </div>
    
            </div>
        </section>
    )
}

export default About;