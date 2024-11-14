import React from 'react';
import Ivan from '../Images/Ivan.jpg';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="alfa-text">
                <div className="text-home">
                    <h1>Привет,это сай от 24Веб <br/>
                        и скорее всего будет <br/>
                        использоваться для локальных целей.</h1>
                </div>
                <div className="img">
                    <img src={Ivan} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Home;
