import React, { Component } from 'react';
import './index.css';

class Banner extends Component {
   
    render() { 
        return (  
            <div>
                  <section id="home" className="banner-section">
                      <div className="banner-container">
                          <div className="banner-body">

                         <img className="banner-image" src="https://res.cloudinary.com/dtu2furcy/image/upload/v1589056377/Lock%20and%20code/picture_ceidtr.png"
                            alt="A lady doing excercise"/>

                         <p className = "first-banner-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Atque repellat sequi ex nesciunt fugit sint recusandae dolorem fugiat id.
                                Maiores corrupti accusamus placeat possimus odio officia ex explicabo eligendi, 
                                sed ab provident asperiores libero laudantium rerum consectetur sapiente expedita ullam.</p>
                            <button className = "banner-button">Learn More</button>
                         </div>


    
                        </div>
                    </section>
            </div>
        );
    }
}
 
export default Banner;