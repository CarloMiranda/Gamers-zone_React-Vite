import { IonIcon } from '@ionic/react';
import '../assets/css/layout.css';
import About from './About';
import gallery1  from '/images/gallery-img-1.jpg';
import gallery2  from '/images/gallery-img-2.webp';
import gallery3  from '/images/gallery-img-3.webp';
import gallery4  from '/images/gallery-img-4.jpg';
import gallery5  from '/images/gallery-img-5.webp';
import gallery6  from '/images/gallery-img-6.jpg';
import gallery7  from '/images/gallery-img-7.webp';
import gallery8  from '/images/gallery-img-8.webp';
import gallery9  from '/images/gallery-img-9.webp';
import teamMember1 from '/images/team-member-1.png';
import teamMember2 from '/images/team-member-2.png';
import teamMember3 from '/images/team-member-3.png';
import teamMember4 from '/images/team-member-4.png';
import teamMember5 from '/images/team-member-12.png';
import teamMember6 from '/images/team-member-6.png';
import teamMember7 from '/images/team-member-7.png';
import teamMember8 from '/images/team-member-8.png';
import teamMember9 from '/images/team-member-9.png';
import teamMember10 from '/images/team-member-10.png';
import teamMember11 from '/images/team-member-11.png';
import { playCircle, linkOutline } from 'ionicons/icons';


function Home() {

    return (

        <section>
        
            {/* HEAD */}
        
            <section className="hero" id="hero">
                <div className="container">
        
                    <p className="hero-subtitle">EVOLUTION</p>
            
                    <h1 className="h1 hero-title">VALORANT</h1>
        
                    <div className="btn-group">
            
                        <button className="btn btn-primary">
                            <span>Watch live</span>
                
                            <IonIcon icon={playCircle} />
                        </button>
            
                        <button className="btn btn-link">Dream making</button>
            
                    </div>
            
                </div>
            </section>        
        
        
            <div className="section-wrapper">
        
                {/* ABOUT */}
        
                < About />
        
        
        
                {/* GALLERY */}
        
                <section className="gallery">
                    <div className="container">
            
                        <h2 className="h2 section-title">CHARACTERS GALLERY</h2>
            
                        <ul className="gallery-list has-scrollbar">
            
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery1}alt="Gallery image" />
                                </figure>
                            </li>
                
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery2} alt="Gallery image" />
                                </figure>
                            </li>
                
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery3} alt="Gallery image" />
                                </figure>
                            </li>
                
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery4}alt="Gallery image" />
                                </figure>
                            </li>
                
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery5} alt="Gallery image" />
                                </figure>
                            </li>
                
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery6}alt="Gallery image" />
                                </figure>
                            </li>
                
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery7} alt="Gallery image" />
                                </figure>
                            </li>
                
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery8} alt="Gallery image" />
                                </figure>
                            </li>
                
                            <li>
                                <figure className="gallery-item">
                                    <img src={gallery9} alt="Gallery image" />
                                </figure>
                            </li>
            
                        </ul>
            
                    </div>
                </section>
        
        
        
        
        
                {/* TEAM */}
        
                <section className="team" id="team">
                    <div className="container">
            
                        <h2 className="h2 section-title">Active Team Members</h2>
            
                            <ul className="team-list">
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember1} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember2} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember3} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember4} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember5} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember6} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember7} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember8} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember9} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember10} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
                
                            <li>
                                <a href="#" className="team-member">
                                <figure>
                                    <img src={teamMember11} alt="Team member image" />
                                </figure>
                
                                <IonIcon icon={linkOutline} />
                                </a>
                            </li>
            
                        </ul>
            
                        <button className="btn btn-primary">view all members</button>
            
                    </div>
                </section>
        
        
            </div>
        </section> 
    )
}

export default Home;