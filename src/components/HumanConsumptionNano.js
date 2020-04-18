import React from 'react';
import HumanConsumptionNanoCSS from './HumanConsumptionNano.css';
import FishCSS from './Fish.css';
import SunCloud from './sunCloud.css';
import BlobFish from './NanoBlobFish.css';
import Particles from 'react-particles-js';
import NanoEvaporationCSS from './NanoEvaporation.css';
import NanoEvaporation from './NanoEvaporation.js';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useTrail, animated} from 'react-spring'

const HumanConsumptionNano = () => {
    return(
<div className="pushSkyDown">
  {/* The Sky enclosed by container div */}
  <div id="sky">
	 <div class="theSun">
		<div class="ray_box">
			<div class="ray ray1"></div>
			<div class="ray ray2"></div>
			<div class="ray ray3"></div>
			<div class="ray ray4"></div>
			<div class="ray ray5"></div>
			<div class="ray ray6"></div>
			<div class="ray ray7"></div>
			<div class="ray ray8"></div>
			<div class="ray ray9"></div>
			<div class="ray ray10"></div>
		  </div>
	    </div>
      <div class="cloudwrapperOne">
		  <div class="cloud c1"></div>
	    <div class="cloudwrapperTwo">
		  <div class="cloud c2"></div>
	    </div>
	    <div class="cloudwrapperThree">
		  <div class="cloud c3"></div>
	    </div>
      </div>
      {/* Beginning of fish */}
      <div className ="backgroundFish">
      <div >
      <div className="fish">
      <div className="fish-body"></div>
      <div className="finLeft">
      <div className="finLeft1"></div>
      <div className="finLeft2"></div>
      <div className="finLeft3"></div>
      <div className="finLeft4"></div>
      </div>
      <div className="finRight">
        <div className="finRight1"></div>
        <div className="finRight2"></div>
        <div className="finRight3"></div>
        <div className="finRight4"></div>
      </div>
      <div className="tail">
        <div className="tailMiddle"></div>
        <div className="tailLeft"></div>
        <div className="tailRight"></div>
        <div className="tail1"></div>
        <div className="tail2"></div>
        <div className="tailFin">
        <div className="tailFinMiddle"></div>
        <div className="tailFin1"></div>
        <div className="tailFin2"></div>
        <div className="tailFin3"></div>
        <div className="tailFin4"></div>
        <div className="tailFin5"></div>
        <div className="tailFin6"></div>
        </div>
        </div>
        </div>
        <div className="fishRed">
        <div className="fish-bodyRed"></div>
        <div className="finLeftRed">
        <div className="finLeft1Red"></div>
        <div className="finLeft2Red"></div>
        <div className="finLeft3Red"></div>
        <div className="finLeft4Red"></div>
        </div>
        <div className="finRightRed">
          <div className="finRight1Red"></div>
          <div className="finRight2Red"></div>
          <div className="finRight3Red"></div>
          <div className="finRight4Red"></div>
        </div>
        <div className="tailRed">
          <div className="tailMiddleRed"></div>
          <div className="tailLeftRed"></div>
          <div className="tailRightRed"></div>
          <div className="tail1Red"></div>
          <div className="tail2Red"></div>
          <div className="tailFinRed">
          <div className="tailFinMiddleRed"></div>
          <div className="tailFin1Red"></div>
          <div className="tailFin2Red"></div>
          <div className="tailFin3Red"></div>
          <div className="tailFin4Red"></div>
          <div className="tailFin5Red"></div>
          <div className="tailFin6Red"></div>
          </div>
          </div>
          {/* End of Fish*/}
          </div>
          </div>
       </div>
    </div>
      {/* Water Bottles */}
  <div className =" bottleAlignment">
      <ul>
       <li class="water-bottle">
         <div class="cap">
         <div class="cap-top">
         </div>
         <div class="cap-seal">
         </div>
         </div>
          <div class="bottle">
          <div class="water-empty"> </div>
          </div>
      </li>
      <li class="water-bottle">
         <div class="cap">
         <div class="cap-top">
         </div>
         <div class="cap-seal">
         </div>
         </div>
         <div class="bottle">
         <div class="water-low"> </div>
         </div>
     </li>
     <li class="water-bottle">
        <div class="cap">
        <div class="cap-top">
        </div>
        <div class="cap-seal">
        </div>
        </div>
        <div class="bottle">
        <div class="water-full"> </div>
        </div>
     </li>
    </ul>
    <ul>
    <li class="water-bottle">
       <div class="cap">
       <div class="cap-top">
       </div>
       <div class="cap-seal">
       </div>
       </div>
       <div class="bottle">
       <div class="water-empty"> </div>
       </div>
    </li>
    <li class="water-bottle">
       <div class="cap">
       <div class="cap-top">
       </div>
       <div class="cap-seal">
       </div>
       </div>
       <div class="bottle">
       <div class="water-low"> </div>
       </div>
    </li>
    <li class="water-bottle">
       <div class="cap">
       <div class="cap-top">
       </div>
       <div class="cap-seal">
       </div>
       </div>
       <div class="bottle">
       <div class="water-full"> </div>
       </div>
     </li>
    </ul>
     <ul>
      <li class="water-bottle">
       <div class="cap">
       <div class="cap-top">
       </div>
       <div class="cap-seal">
       </div>
       </div>
       <div class="bottle">
       <div class="water-empty"> </div>
       </div>
      </li>
    </ul>
  </div>
  {/* End of Water Bottles */}

  {/* Sand */}
  <div className ="yellowSand">
  </div>
  {/* End of Sand*/}

  {/* Nano Plastic Particles Jumbo Tron */}
  <div className ="divJumbo">
    <Jumbotron fluid className ="divJumbo">
      <Container>
        <h1 className ="divTextColor">Nano Plastic Particles</h1>
        <p className ="divTextColor">
          disentigrate onto the ocean floor, where later plankton feed on the nano particles. Once plankton digest these particles into their system, fish feed on the plankton, and eventually end up consumed by humans.
        </p>
      </Container>
    </Jumbotron>
  </div>
  {/* End ofNano Plastic Particles Jumbo Tron */}

    {/* Black water */}
  <div class = "water">
      {/* Particles */}
      <div className="particleBody">
        <Particles />
      </div>
      {/* End of Particles */}

      {/* Blob Fish */}
      <NanoEvaporation />

      <div class="fishMe">
          <div class="face">
          <div class = "left-fin">
          </div>
          <div class = "mouth">
          </div>
          <div class = "nose">
          </div>
          <div class = "right-fin">
          </div>
          </div>
      </div> {/* End of Blob Fish */}

  </div>   {/* End of Black water */}
{/* End of wrapped div */}
</div>
    );
}

export default HumanConsumptionNano;
