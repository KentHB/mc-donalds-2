import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import sauce from './images/sauce.jpg';
import bigmac from './images/bigmac.jpg';
import burger from './images/burger.jpg';
import shake from './images/shake.jpg';
import crocs from './images/crocs.jpg';
import delivery from './images/delivery.jpg';
import education from './images/education.jpg';
import robo from './images/robo.jpg';
import guy from './images/guy.jpg';
import facebook from './images/facebook.png';
import twitter from './images/x.png';
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';
import tumblr from './images/tumblr.png';
import spotify from './images/spotify.png';
import app_store from './images/app_store_badge.png';
import play_store from './images/google_play_badge.png';
import little_mac from './images/little-mac.jpg';
import './style.css';
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { GeoAltFill, Search } from 'react-bootstrap-icons';

function topNav() {
  return (
    <Navbar expand="lg">
      <Container style={{marginBottom: '-5px'}}>
        <Navbar.Brand style={{marginLeft: '55px', marginTop: '5px'}}>
          <img src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg"
          alt="McDonald's Logo"></img>
        </Navbar.Brand>
        <Nav className="me-auto" style={{position: 'absolute', marginLeft: '220px',
          marginTop: '-75px', fontSize: '14px'}}>
          <NavDropdown title="Language" children={''}></NavDropdown>
          <Nav.Link href="#email"><div style={{marginLeft: '8px', marginRight: '8px'}}>
            Sign Up for Email</div></Nav.Link>
          <Nav.Link href="#careers"><div style={{marginLeft: '8px', marginRight: '8px'}}>
            Careers</div></Nav.Link>
        </Nav>
        <Nav className="me-auto" style={{position: 'absolute', marginLeft: '220px', marginTop: '44px'}}>
            <NavDropdown title="Our Menu" children={''}></NavDropdown>
            <Nav.Link href="#app"><div style={{marginLeft: '8px', marginRight: '4px'}}>
              Download App</div></Nav.Link>
            <Nav.Link href="#rewards"><div className="nav-margin">MyMcDonald's Rewards</div></Nav.Link>
            <Nav.Link href="#deals"><div className="nav-margin">Exclusive Deals</div></Nav.Link>
            <Nav.Link href="#about"><div className="nav-margin">About Our Food</div></Nav.Link>
            <Nav.Link href="#locate"><div className="nav-margin">Locate</div></Nav.Link>
            <Nav.Link href="#gift-cards"><div className="nav-margin">Gift Cards</div></Nav.Link>
        </Nav>
        <Nav className="me-auto" style={{marginLeft: '770px', marginTop: '-75px', position: 'absolute'}}>
          <Nav.Link style={{fontSize: '14px', marginLeft: '5px', marginRight: '5px'}} href="#search">
            <Search /> Search</Nav.Link>
          <Nav.Link style={{fontSize: '14px', marginLeft: '5px', marginRight: '20px'}} href="#search">
            <GeoAltFill style={{color: 'red'}} /> <a href="#change-location">Change your Location</a></Nav.Link>
          <Button variant="warning"><div>Order Now</div></Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

function middleImages() {
  return (

    <Container>

      <div>
        <img style={{position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '100px'}} src={sauce} alt="WcDonald's Sauce"></img>
        <div style={{position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '239px'}}>
          Try New Savory Chili</div>
       <div style={{position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '279px'}}>
          WcDonald's Sauce</div>
       <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '343px' }}>
        Discover the new <a href="#chili-sauce">Savory Chili WcDonald’s Sauce</a>,*<br/>
        straight from the <a href="#universe">WcDonald’s universe</a>. So savory and<br/>
        bold! It’s the special move you’ll shout Shounen-style<br/>
        when you activate and <strong>unlock 2x bonus points on<br/>
        your next 10 piece Chicken McNuggets® order in the<br/>
        app.</strong>^ Plus, enjoy four weekly, unique anime and<br/>
        manga exclusives.
       </div>
       <div style={{ position: 'absolute', fontSize: '10px', fontWeight: 'normal', left: '935px', top: '525px' }}>
        ©2024 The Coca-Cola Company. Sprite® is a registered trademark of The Coca-Cola<br/>
        Company.<br/>
        *At participating McDonald’s for a limited time, while supplies last.<br/>
        ^Offer valid 1x thru 3/24/2020 at participating McDonald's. Must opt in to Rewards.<br/>
        </div>
        <Button style={{position: 'absolute', left: '935px', top: '635px'}} variant="warning">
          <div style={{margin: '7px'}}>Order in the App</div></Button>
      </div>

      <div>
        <img style={{ position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '680px' }} src={bigmac} alt="A Big Mac"></img>
        <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '819px' }}>
          Free Big Mac®. One for
        </div>
        <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '859px' }}>
          the Price of None.
        </div>
        <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '923px' }}>
          With $1 minimum purchase, score a free Big Mac after<br/>
          downloading the McD's app and joining<br/>
          MyMcDonald's Rewards.* Plus, with MyMcDonald’s<br/>
          Rewards, you’ll earn points to redeem for free food on<br/>
          every eligible order. Another Big Mac, maybe?
        </div>
        <div style={{ position: 'absolute', fontSize: '10px', fontWeight: 'normal', left: '935px', top: '1060px' }}>
          *Offer valid 1x thru the last day of the month for first time app users at participating<br/>
          McDonald's. May take up to 48 hours to appear in your deals. Must opt in to<br/>
          MyMcDonald’s Rewards. Excludes tax.<br/>
        </div>
        <Button style={{ position: 'absolute', left: '935px', top: '1160px' }} variant="warning">
          <div style={{ margin: '7px' }}>Get a Free Big Mac</div>
        </Button>
      </div>

      <div>
        <img style={{ position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '1200px' }} src={burger} alt="Lineup of McDonald's Burgers"></img>
        <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '1344px' }}>
          “McD’s Best Burgers
        </div>
        <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '1384px' }}>
          Ever.” - Hamburglar
        </div>
        <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '1448px' }}>
          You’re gonna love the hotter, juicier, tastier upgrades<br/>
          we’ve made to burgers like our Cheeseburger and<br/>
          Double Cheeseburger.* From patties grilled with<br/>
          onions and perfectly melted cheese to new soft,<br/>
          pillowy buns—these are our best burgers yet. Ask the<br/>
          Hamburglar, he can’t keep his hands off of ‘em. Robble,<br/>
          robble.
        </div>
        <div style={{ position: 'absolute', fontSize: '10px', fontWeight: 'normal', left: '935px', top: '1634px' }}>
          *Comparison of McDonald’s classic burgers to prior burgers.<br/>
          ^At participating McDonald’s. McDelivery prices may be higher than at restaurants.<br/>
          Delivery/other fees may apply.<br/>
        </div>
        <Button style={{ position: 'absolute', left: '935px', top: '1734px' }} variant="warning">
          <div style={{ margin: '7px' }}>Order in the App</div>
        </Button>

        <div>
          <img style={{ position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '1783px' }} src={shake} alt="A Shamrock Shake"></img>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '1918px' }}>
            'Tis Shamrock Season
          </div>
          <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '1982px' }}>
            That’s right, your fave springtime treats are making<br/>
            their annual appearance. So, get your Shamrock<br/>
            Shake® and OREO® Shamrock McFlurry® while they’re<br/>
            here. Available for a limited time only.*<br/>
          </div>
          <div style={{ position: 'absolute', fontSize: '10px', fontWeight: 'normal', left: '935px', top: '2095px' }}>
            *At participating McDonald’s for a limited time. OREO is a trademark of Mondelēz<br/>
            International group, used under license.<br/>
          </div>
          <Button style={{ position: 'absolute', left: '935px', top: '2185px' }} variant="warning">
            <div style={{ margin: '7px' }}>Order in the App</div>
          </Button>
        </div>

        <div>
          <img style={{ position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '2240px' }} src={crocs} alt="A pair of McDonald's Crocs"></img>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '2369px' }}>
            Step Into the World of
          </div>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '2409px' }}>
            McD’s x Crocs
          </div>
          <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '2473px' }}>
            Get a pair of McDonald’s branded clogs or limited<br/>
            edition Grimace, Birdie or Hamburglar Crocs decked<br/>
            out with fun McDonald’s x Crocs JibbitzTM charms or<br/>
            socks. Hurry, before it’s too late.*<br/>
          </div>
          <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '2588px' }}>
            In celebration of the Crocs partnership, McDonald’s<br/>
            will be making a donation to <a href="#house">Ronald McDonald House<br/>
            Charities®</a> to help support families when they have a<br/>
            child who is ill or injured.<br/>
          </div>
          <div style={{ position: 'absolute', fontSize: '10px', fontWeight: 'normal', left: '935px', top: '2704px' }}>
            *While supplies last.
          </div>
          <Button style={{ position: 'absolute', left: '935px', top: '2776px' }} variant="warning">
            <div style={{ margin: '7px' }}>Shop the Collab Now</div>
          </Button>
        </div>

        <div>
          <img style={{ position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '2821px' }} src={delivery} alt="McDonald's Delivery Bag"></img>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '2960px' }}>
            Score Free Food with
          </div>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '3000px' }}>
            McDelivery®
          </div>
          <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '3064px' }}>
            Earn MyMcDonald’s Rewards points on every<br/>
            McDelivery order only in the McD’s app to redeem for<br/>
            free food. And, yup, you can get ‘em delivered, too.<br/>
            Just order, relax and enjoy—<a href="#delivery">check out how easy<br/>
            ordering delivery is in the app</a>.*
          </div>
          <div style={{ position: 'absolute', fontSize: '10px', fontWeight: 'normal', left: '935px', top: '3205px' }}>
            *At participating McDonald's. Must be opted into MyMcDonald's Rewards. McDelivery<br/>
            prices may be higher than at restaurants. Delivery/other fees may apply.
          </div>
          <Button style={{ position: 'absolute', left: '935px', top: '3295px' }} variant="warning">
            <div style={{ margin: '7px' }}>Earn Points with McDelivery</div>
          </Button>
        </div>

        <div>
          <img style={{ position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '3328px' }} src={education} alt="Students on a Campus"></img>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '3479px' }}>
            Black & Positively
          </div>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '3519px' }}>
            Golden® Scholarship
          </div>
          <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '3583px' }}>
            McDonald's partnership with the Thurgood Marshall<br/>
            College Fund is a major investment in education and<br/>
            opportunity in Black communities.
          </div>
          <Button style={{ position: 'absolute', left: '935px', top: '3708px' }} variant="warning">
            <div style={{ margin: '7px' }}>Apply Now</div>
          </Button>
        </div>

        <div>
          <img style={{ position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '3760px' }} src={robo} alt="McDonald's Mobile App Graphic"></img>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '3892px' }}>
            New: Faster Faves,
          </div>
          <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '3932px' }}>
            Only in the App
          </div>
          <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '3996px' }}>
            We now prep when you’re on the way if you choose<br/>
            Curbside, Front Counter—or dine in for Table Service.<br/>
            Just order ahead in the app to save time. Because<br/>
            waiting in line for faves? Not our thing either.*
          </div>
          <div style={{ position: 'absolute', fontSize: '10px', fontWeight: 'normal', left: '935px', top: '4112px' }}>
            *At participating McDonald’s.
          </div>
        </div>
        <Button style={{ position: 'absolute', left: '935px', top: '4184px' }} variant="warning">
          <div style={{ margin: '7px' }}>Order Ahead in the App</div>
        </Button>
      </div>

      <div>
        <img style={{ position: 'absolute', width: '749px', marginLeft: '70px', marginTop: '4230px' }} src={guy} alt="A McDonald's Table"></img>
        <div style={{ position: 'absolute', fontSize: '35px', fontWeight: 'bold', left: '935px', top: '4368px' }}>
          Deals for Days
        </div>
        <div style={{ position: 'absolute', fontSize: '15.8px', fontWeight: 'normal', left: '935px', top: '4432px' }}>
          Get <a href="#deals">exclusive deals</a> on your McDonald’s favorites in<br/>
          the app with contactless Mobile Order & Pay* and<br/>
          convenient Drive Thru or Curbside pickup.<br/>
        </div>
        <div style={{ position: 'absolute', fontSize: '10px', fontWeight: 'normal', left: '935px', top: '4526px' }}>
          *Mobile Order & Pay at participating McDonald’s.
        </div>
        <Button style={{ position: 'absolute', left: '935px', top: '4590px' }} variant="warning">
          <div style={{ margin: '7px' }}>Get App Deals</div>
        </Button>
      </div>
    </Container>
  );
}

function lowerNav() {
  return (
    <Container style={{position: 'absolute', marginTop: '4680px'}}>
      <Row>
        <Col className="text-center">
          <strong>About Us</strong>
          <div style={{position: 'absolute', left: '128px'}}className="text-start">
          <Nav.Link style={{padding: '2.5px', marginTop: '15px'}}>About Us Overview</Nav.Link>
          <Nav.Link style={{padding: '2.5px'}}>Leadership Team</Nav.Link>
          <Nav.Link style={{padding: '2.5px'}}>Values In Action</Nav.Link>
          <Nav.Link style={{padding: '2.5px'}}>Franchise Info</Nav.Link>
          <Nav.Link style={{padding: '2.5px'}}>Recalls & Alerts</Nav.Link>
          <Nav.Link style={{padding: '2.5px'}}>Real Estate</Nav.Link>
          <Nav.Link style={{padding: '2.5px'}}>Accessibility</Nav.Link>
          <Nav.Link style={{padding: '2.5px'}}>Investor Relations</Nav.Link>
          <Nav.Link style={{padding: '2.5px'}}>News & Notifications</Nav.Link>
          </div>
        </Col>
        <Col className="text-center">
          <strong>Services</strong>
          <div style={{ position: 'absolute', left: '461px' }} className="text-start">
            <Nav.Link style={{ padding: '2.5px', marginTop: '15px' }}>Services Overview</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Wi-Fi</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>PlayPlaces & Parties</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>McDelivery®</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Mobile Order & Pay</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Trending Now</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>McDonald’s Merchandise</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Family Fun Hub</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>MyMcDonald's Rewards</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>McCafé®</Nav.Link>
          </div>
        </Col>
        <Col className="text-center">
          <strong>Community</strong>
          <div style={{ position: 'absolute', left: '780px' }} className="text-start">
            <Nav.Link style={{ padding: '2.5px', marginTop: '15px' }}>Community Overview</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Now Serving</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>HACER® Scholarships for<br/>
              Hispanic Students</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Ronald McDonald House<br/>
              Charities®</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>McDonald’s Asian Pacific<br/>
              American</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>McDonald’s International</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Black and Positively<br/>
              Golden</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>McDonald’s LGBTQ+</Nav.Link>
          </div>
        </Col>
        <Col className="text-center">
          <strong>Contact Us</strong>
          <div style={{ position: 'absolute', left: '1112px' }} className="text-start">
            <Nav.Link style={{ padding: '2.5px', marginTop: '15px' }}>Contact Us Overview</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Gift Card FAQs</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Donations</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Employment</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Customer Feedback</Nav.Link>
            <Nav.Link style={{ padding: '2.5px' }}>Frequently Asked<br/>
              Questions</Nav.Link>
          </div>
        </Col>
      </Row>
      <Row>

        <Nav.Link style={{position: 'absolute', left: '128px', top: '395px'}}>
          <img src={facebook}></img></Nav.Link>
        <Nav.Link style={{position: 'absolute', left: '188px', top: '395px'}}>
          <img src={twitter}></img></Nav.Link>
        <Nav.Link style={{position: 'absolute', left: '248px', top: '395px'}}>
          <img src={youtube}></img></Nav.Link>
        <Nav.Link style={{position: 'absolute', left: '308px', top: '395px'}}>
          <img src={instagram}></img></Nav.Link>
        <Nav.Link style={{position: 'absolute', left: '368px', top: '395px'}}>
          <img src={tumblr}></img></Nav.Link>
        <Nav.Link style={{position: 'absolute', left: '428px', top: '395px'}}>
          <img src={spotify}></img></Nav.Link>

        <Nav.Link style={{position: 'absolute', left: '978px', top: '395px'}}>
          <img src={app_store}></img></Nav.Link>
        <Nav.Link style={{position: 'absolute', left: '1145px', top: '395px'}}>
          <img src={play_store}></img></Nav.Link>
        <hr style={{position: 'absolute', top: '480px', left: '80px'}}/>
      </Row>
    </Container>
  );
}

function footerNav() {
  return (
    <div>
      <Nav.Link style={{position: 'absolute', left: '130px', top: '5340px', fontSize: '15.6px'}}>
        Privacy (Updated)
      </Nav.Link>
      <Nav.Link style={{position: 'absolute', left: '290px', top: '5340px', fontSize: '15.6px'}}>
        California Privacy Notice
      </Nav.Link>
      <Nav.Link style={{position: 'absolute', left: '495px', top: '5340px', fontSize: '15.6px'}}>
        Terms & Conditions
      </Nav.Link>
      <Nav.Link style={{position: 'absolute', left: '670px', top: '5340px', fontSize: '15.6px'}}>
        Accessibility
      </Nav.Link>
      <Nav.Link style={{position: 'absolute', left: '130px', top: '5380px', paddingBottom: '100px', fontSize: '15.6px'}}>Do Not Sell or Share My Personal Information
      </Nav.Link>
      <Nav.Link style={{position: 'absolute', left: '480px', top: '5380px', fontSize: '15.6px'}}>
        Cookie Settings
      </Nav.Link>
      <Nav.Link style={{position: 'absolute', left: '960px', top: '5340px'}}>
        <img style={{width: '29px'}} src={little_mac} alt={"McDonald's Logo"}></img>
      </Nav.Link>
      <Nav.Link style={{position: 'absolute', left: '1040px', top: '5340px', fontSize: '15.6px'}}>
        © 2017 - 2024 McDonald's. All Rights
      </Nav.Link>
      <Nav.Link style={{position: 'absolute', left: '1236px', top: '5358px', fontSize: '15.6px'}}>
        Reserved
      </Nav.Link>

    </div>
  );
}

const TopNav = () => (
  topNav()
)

const MidImages = () => (
  middleImages()
)

const LowerNav = () => (
  lowerNav()
)

const FooterNav = () => (
  footerNav()
)
const McDonalds = () => (
  <div>
    <TopNav/>
    <MidImages/>
    <LowerNav/>
    <FooterNav/>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><McDonalds/></StrictMode>);