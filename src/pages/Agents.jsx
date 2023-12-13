import { IonIcon } from '@ionic/react';
import '../assets/css/content.css';
import agents from '/images/character-1.png';
import { informationCircleOutline } from 'ionicons/icons';

function Agents() {

    return (

        <div className="section-wrapper">
            
            {/* AGENTS */}

            <section className="gears" id="gears">
                <div className="container">
    
                <h2 className="h2 section-title">AGENTS</h2>
    
                <ul className="gears-list">
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="agents-img" src={ agents } alt="agents" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>reyna</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View Info</span>
                            </a>
        
                        </div>
                    </li>
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="agents-img" src={ agents } alt="agents" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>ASTRA</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View Info</span>
                            </a>
        
                        </div>
                    </li>
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="agents-img" src={ agents } alt="agents" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>kill joy</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View Info</span>
                            </a>
        
                        </div>
                    </li>
    
                    
    
                </ul>
    
                </div>
            </section>

        
        </div>

    )
}

export default Agents;