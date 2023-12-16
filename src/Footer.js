import {FaFacebook,FaTwitter,FaLinkedin,FaYoutube,FaInstagram,FaWhatsapp,FaFacebookMessenger,FaTelegram} from "react-icons/fa";
import {FiLogIn} from "react-icons/fi";
import {AiOutlineUserAdd} from "react-icons/ai"
import {FcAbout} from "react-icons/fc";
import {GiPersonInBed} from "react-icons/gi";
import {FaUserAlt,FaFileMedical,FaClinicMedical,FaMicroscope,FaGlassMartiniAlt,FaLock} from "react-icons/fa";
import {BsHouseGearFill,BsFillFileMedicalFill,BsInfoCircleFill,BsFillTelephoneFill} from "react-icons/bs";
import {BiLink,BiPlusMedical,BiDonateBlood} from "react-icons/bi";

function Footer(){
    const lands = {color:"white",fontSize: "1.1em" }
    const sc = {color:"white",fontSize: "1.5em" }

    return(
       
        <>
         
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6><FcAbout style={lands} /> About</h6>
            <p class="text-justify">HMS, <i> HOSPITAL Management SYSTEM </i> is a software application that is designed to help hospitals and healthcare facilities manage their daily operations in an efficient and streamlined manner. It serves as a central repository for all patient-related information, such as medical history, diagnosis, treatment plans, medications, and laboratory results, as well as information about doctors, nurses, and other staff members..</p>
          </div>

          <div class="col-xs-6 col-md-2">
            <h6><FaUserAlt style={lands}/> Customer</h6>
            <ul class="footer-links">
              <li><a href="/Signup"><AiOutlineUserAdd style={lands}/> Signup</a></li>
              <li><FiLogIn style={lands}/><a href="Login"> Login</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-2">
            <h6><BsHouseGearFill style={lands}/> Facility</h6>
            <ul class="footer-links">
            <li>< FaFileMedical style={lands}/> <a href="/Hospitalsupport">Hopsital Support</a></li>
            <li><BiPlusMedical style={lands}/> <a href="/Emergency">Emergency services</a></li>
              <li><FaClinicMedical style={lands}/> <a href="/Pharamacy">Pharamacy</a></li>
              <li><FaMicroscope style={lands}/> <a href="/Lab">Diagnostic labs</a></li>
              <li><BiDonateBlood style={lands}/> <a href="/bloodbank">Blood Bank</a></li>
              <li><GiPersonInBed style={lands}/> <a href="/Wards">Wards</a></li>
              <li><FaGlassMartiniAlt style={lands}/>  <a href="/Cafeteria">Cafeteria</a></li>
              <li><BsFillFileMedicalFill style={lands}/> <a href="/Insurance">Insurance services</a></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-2">
            <h6><BiLink style={lands}/> Quick Links</h6>
            <ul class="footer-links">
              <li><BsInfoCircleFill style={lands}/> <a href="/about">About Us</a></li>
              <li><BsFillTelephoneFill style={lands}/> <a href="/Contactus">Contact Us</a></li>
              <li><FaLock style={lands}/> <a href="/PrivacyAndPolicy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by  <a href="#">Sai Hemanth</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><FaFacebook style={sc} /></a></li>
<li><a class="Twitter" href="#"><FaTwitter style={sc}/></a></li>
<li><a class="Linkedin" href="#"><FaLinkedin style={sc}/></a></li>
<li><a class="Instagram" href="#"><FaInstagram style={sc} /></a></li>
<li><a class="Youtube" href="#"><FaYoutube style={sc}/></a></li>
<li><a class="whatsapp" href="#"><FaWhatsapp style={sc}/></a></li>
<li><a class="telegarm" href="#"><FaTelegram style={sc} /></a></li>
<li><a class="Messanager" href="#"><FaFacebookMessenger style={sc}/></a></li>
            <h4></h4>  
            </ul>
          </div>
        </div>
      </div>
</footer>
        </>
    );
}


export default Footer;