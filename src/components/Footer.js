import React from 'react'
import "./style.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {

    return (
        <div>
            <footer className="footer">
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <br/>
                  <p className = "quotes">“Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3"/>
                <div className="col-md-3 mb-md-0 mb-3">
                  <br/>
                  <ul className="list-unstyled">
                    <li className = "list">
                      <a href="#!" className = ".footlink">Beaches</a>
                    </li>
                    <li className = "list">
                      <a href="#!" className = ".footlink">Hill Stations</a>
                    </li>
                    <li className = "list">
                      <a href="#!" className = ".footlink">Out of India Trips</a>
                    </li>
                    <li className = "list">
                      <a href="#!" className = ".footlink">More</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 mb-md-0 mb-3">
                  <ul className="list-unstyled">
                    <br/>
                    <li className = "list">
                      <a href="https://www.instagram.com/vishesh_3011"  target="_blank">Contact Us</a>
                    </li>
                    <li className = "list">
                      <a href="#!" className = ".footlink">Help</a>
                    </li>
                    <li className = "list">
                      <a href="#!" className = ".footlink">Feedback and Suggestions</a>
                    </li>
                    <li className = "list">
                      <a href="#!" className = ".footlink">Terms and Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className = "ourTeam">
                Our Team
                <ul className="list-unstyled list-inline text-center">
                  <li className="list-inline-item">
                    Dev Kahar
                  </li>
                  <li className="list-inline-item">
                    Sparsh Arya
                  </li>
                  <li className="list-inline-item">
                    Vishesh Modi
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-unstyled list-inline text-center">
                  <li className="list-inline-item">
                  <a  href="https://facebook.com" target="_blank" className="btn-floating btn-fb mx-1">
                      <FacebookIcon/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com" target="_blank" className="btn-floating btn-tw mx-1">
                      <TwitterIcon/>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com" target="_blank" className="btn-floating btn-insta mx-1">
                      <InstagramIcon/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright text-center py-3">Email : 
              <a href="#">myTravelAdvisor@gmail.com</a>
            </div>
          </footer>
        </div>
    )
}
export default Footer;