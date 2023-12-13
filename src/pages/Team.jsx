import { IonIcon } from '@ionic/react';
import '../assets/css/content.css';
import aboutImg from '/images/about-img.png';
import { informationCircleOutline } from 'ionicons/icons';

function Team() {

    return (
        
        <div className="section-wrapper">
            
            {/* TEAM */}

            <section className="gears" id="gears">
                <div className="container">
    
                <h2 className="h2 section-title">teams</h2>
    
                <ul className="gears-list">
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="team-img" src={ aboutImg } alt="Team images" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>team name</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View members</span>
                            </a>
        
                        </div>
                    </li>
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="team-img" src={ aboutImg } alt="Team images" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>team name</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View members</span>
                            </a>
        
                        </div>
                    </li>
    
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="team-img" src={ aboutImg } alt="Team images" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>team name</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View members</span>
                            </a>
        
                        </div>
                    </li>
    
    
                </ul>
    
                </div>
            </section>
        
        </div>

    )
}

export default Team;