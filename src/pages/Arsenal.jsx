import { IonIcon } from '@ionic/react';
import '../assets/css/content.css';
import vandal from '/arsenal/vandal.webp';
import { informationCircleOutline } from 'ionicons/icons';

function Arsenal() {

    return (
        
        <div className="section-wrapper">
            
            {/* ARSENAL */}

            <section className="gears" id="gears">
                <div className="container">
    
                <h2 className="h2 section-title">arsenal</h2>
    
                <ul className="gears-list">
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="arsenal-img" src={ vandal } alt="arsenal image" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>vandal</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View skin</span>
                            </a>
        
                        </div>
                    </li>
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="arsenal-img" src={ vandal } alt="arsenal image" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>vandal</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View skin</span>
                            </a>
        
                        </div>
                    </li>
    
                    <li>
                        <div className="gears-card">
        
                            <div className="card-banner">
        
                                <a href="#">
                                    <img className="arsenal-img" src={ vandal } alt="arsenal image" />
                                </a>
            
                                <div className="card-name-wrapper">
                                    <span>vandal</span>
                                </div>
        
                            </div>
        
                            <a className="btn btn-primary">
                                <IonIcon icon={informationCircleOutline} />
                                
                                <span>View skin</span>
                            </a>
        
                        </div>
                    </li>

                </ul>
    
                </div>
            </section>

        
        </div>
        
    )
}

export default Arsenal;