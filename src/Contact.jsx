import React, { Component } from 'react';
import './index.css'

class  Contact extends Component {
  
    render() { 
        return ( 
            <div>
                <section id="contact" className = "contact-section">
                    <div className="contact-container">
                     <div className="contact-body">
                         <img className="contact-image" src="https://res.cloudinary.com/dtu2furcy/image/upload/v1589056592/FCC%20PROJECTS/undraw_forgot_password_gi2d_gajg6q.png" alt=""/>
                        <form action="#contact.php">
                       
                            <input type="text" name= "name" id = "full-name" value ="" placeholder ="Name"/>
                            
                       
                            <input type="email" name="myemail" id="email" value="" placeholder="Email" />
                    

                            <input type="tel" name = "myphone" value="" placeholder= "+234**********"/>
                        
                            <label htmlFor="textarea">Write down your inquires below:</label><br />
                            <textarea name="mycomment" id="textarea" cols="40" rows="10" placeholder ="Write your comment here......"></textarea>
                         <button className= "contact-button">Send</button>
                        </form>
                     </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Contact;