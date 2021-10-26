import React from 'react';
import './work.css';
import './App.css'
import design404 from "./images/work/error404.png";
import widgetMeteo from "./images/work/widget-meteo.png";
import tvgNews from "./images/work/tvg-news-page.png";
import creecolo from "./images/work/creecolo.png";
import Footer from './components/Footer/Footer';

function Work() {
  return (
    <div>
      <div className="container">
        <h2 className="underline--magical-purple">My work</h2>
        <p className="no-margin">A selection of my range of work from design to web development.</p>
        <div className="design-work">
          <h3 className="bg-green mt-50">Design</h3>
          <div className="blockwork flex-items space-around mt-50">
            <div className="blocktext-mb col-left div-center">
              <h3>Web design : 404 error page</h3>
              <p className="center-text">Design of a 404 error page realised for the Cacatoès Design Challenge 2021.</p><br />
              <a href="#" className="btn-filled btn-purple">Figma</a>
            </div>
            <div className="col-right">
              <img src={design404} alt="Design 404 error page" id="design1" />
            </div>
          </div>
          <hr className="separator-line--work"/>

          <div className="blockwork flex-items space-around mt-50">
            <div className="col-left">
              <img src={widgetMeteo} alt="Widget meteo design" id="design2" />
            </div>
            <div className="blocktext-mt col-right div-center widget-text">
              <h3>Widget meteo</h3>
              <p className="center-text">Design of mobile phone widget realised for the Cacatoès Design Challenge 2021.</p><br />
              <a href="#" className="btn-filled btn-purple">Figma</a>
            </div>
          </div>
        </div>

        <div className="dev-work">
          <h3 className="bg-yellow mt-50">Web Development</h3>
          <div className="blockwork flex-items mt-50 space-around">
            <div className="blocktext-mb col-left div-center">
              <h3>Web application : Creecolo</h3>
              <p className="center-text">Social network for DIY ideas created in PHP/Symfony.</p>
              <p className="center-text">From the work specifications, prototype and integration.</p><br />
              <div className="flex-items div-center">
                <a href="https://github.com/Virginie-lnr/Creecolo_Virginie_Lenoir" className="btn-filled btn-purple" target="_blank">Github</a>
                <a href="http://creecolo.herokuapp.com/" className="btn-outline-purple ml-10" target="_blank">Website</a>
              </div>
            </div>
            <div className="col-right">
              <img src={creecolo} alt="Widget meteo design" id="dev1" />
            </div>
          </div>

          <hr className="separator-line--work" />
          
          <div className="blockwork flex-items space-around mt-50">
            <div className="col-left">
              <img src={tvgNews} alt="Web integration" id="dev2" />
            </div>
            <div className="blocktext-mt col-right div-center widget-text">
              <h3>Web integration of the new TVguide website</h3>
              <p className="center-text">Web integration of the new design for TVguide as part of the rebuild project.</p>
              <p>Technos: HTML, CSS, JavaScrip, Wordpress</p><br />
              <a href="#" className="btn-filled btn-purple">Website</a>
            </div>
          </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Work;