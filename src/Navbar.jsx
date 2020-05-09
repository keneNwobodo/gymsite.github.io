import React, { Component } from 'react';
import './index.css'
class Navbar extends Component {
 
    render() { 
        return (  
            
            <div>
                
               <nav>
                   <a href="#home">Home</a>
                   <a href="#services">Services</a>
                   <a href="#blog">Blog</a>
                   <a href="#contact">Contact</a>
               </nav>
            </div>
        );
    }
}
 
export default Navbar;