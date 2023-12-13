import { IonIcon } from '@ionic/react';
import '../assets/css/content.css';
import sunset from '/maps/sunset.jpg';
import { informationCircleOutline } from 'ionicons/icons';

function Maps() {

    return (
        
    <div className="section-wrapper">
        
        {/* MAPS */}

        <section className="gears" id="gears">
            <div className="container">

            <h2 className="h2 section-title">MAPS</h2>

            <ul className="gears-list">

                <li>
                    <div className="gears-card">
    
                        <div className="card-banner">
    
                            <a href="#">
                                <img className="maps-img" src={ sunset } alt="Maps images" />
                            </a>
        
                            <div className="card-name-wrapper">
                                <span>SUNSET</span>
                            </div>
    
                        </div>
    
                        <a className="btn btn-primary">
                            <IonIcon icon={informationCircleOutline} />
                            
                            <span>View gallery</span>
                        </a>
    
                    </div>
                </li>

                <li>
                    <div className="gears-card">
    
                        <div className="card-banner">
    
                            <a href="#">
                                <img className="maps-img" src={ sunset } alt="maps images" />
                            </a>
        
                            <div className="card-name-wrapper">
                                <span>SUNSET</span>
                            </div>
    
                        </div>
    
                        <a className="btn btn-primary">
                            <IonIcon icon={informationCircleOutline} />
                            
                            <span>View gallery</span>
                        </a>
    
                    </div>
                </li>

                <li>
                    <div className="gears-card">
    
                        <div className="card-banner">
    
                            <a href="#">
                                <img className="maps-img" src={ sunset } alt="maps images" />
                            </a>
        
                            <div className="card-name-wrapper">
                                <span>SUNSET</span>
                            </div>
    
                        </div>
    
                        <a className="btn btn-primary">
                            <IonIcon icon={informationCircleOutline} />
                            
                            <span>View gallery</span>
                        </a>
    
                    </div>
                </li>

                

            </ul>

            </div>
        </section>

    
    </div>
    )
}

export default Maps;