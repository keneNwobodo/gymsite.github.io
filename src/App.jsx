import React, { Component } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
    render (){
        return (
            <div>
               <Navbar />
               <Banner />
               <Contact />
               <Footer />
            </div>
        );
    }
}

export default App;