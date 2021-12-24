import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/MainNav.js';
import Header from './components/Home.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import Publications from './components/Pubs.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Projects />
        <Publications />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

// TO DOS (refine the website!)
// 1. make it more responsive!
// 1.5 add experiences section!
// 2. configure array for project cards so there are less repeats in the code
// 3. add rotating slide of background images and descriptions
// 4. alt text for all images
// 5. check page/text contrasts, aka accessibility check
// 6. add down arrow icon!
// 7. skills section
// 8. about indents!
// 9. add more here