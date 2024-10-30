import { useState } from 'react';
import './App.css';

function NavBar() {
    const [showaboutMe, setaboutMe] = useState(false)
    function openResume(){
      window.open('https://docs.google.com/document/d/14-F15uU3PZEJTMKXHWVAVGx2C5vKAVC85UtAyQ7Y3Cc/edit?usp=sharing', '_blank')
    }
    function openLogo(){
      window.open("https://www.linkedin.com/in/ivan-sandoval-a4b60526b/",'_blank')
    }
    function openProjects(){
      window.open("https://github.com/SandoVan1", '_blank')
    }
    function openAboutme(){
      window.location.href = "/about";
    }
  return (
    <div className='grid1'>
        <button className='logobtn' onClick={openLogo}><b>IS</b></button>
        {showaboutMe && (<button onClick={openAboutme} className='aboutmebtn'><b>About Me</b></button>)}
        <button className='projectsbtn' onClick={openProjects}><b>Projects</b></button>
        <button className='resumebtn' onClick={openResume}><b>Resume</b></button>
    </div>
  );
}

export default NavBar;
