import "./style.css"

import img from "../img/h1.jpg"
import img1 from "../img/one.jpg"
import img2 from "../img/lab.jpg"
import {TbStethoscope} from "react-icons/tb";
import {FcDepartment,FcDocument} from "react-icons/fc";
import {MdOutlineGroups} from "react-icons/md";
import {FaMicroscope,FaClinicMedical,FaHotel} from "react-icons/fa";
import {AiTwotoneAlert} from "react-icons/ai";
import {BiDonateBlood,BiBed} from "react-icons/bi";

function Home() {
        const ic={fontSize: "2em"}
    return (
   
    <>
  <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img}  height={600} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Your are at right place</h5>
        <p>Experinace wrolds best health care services</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img1}  height={600} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Advanced Results</h5>
        <p>We are numebrs 1 research institutes in india </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} height={600} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>We are way to find Anawers</h5>
        <p>We are putting our efforts to find answers.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col g-5 md-5">
    <div id="tile" class="card rounded-5">
      <div class="card-body">
        <h5 class="card-title text-center">Our Strength </h5> <hr/>
        <p class="card-text">
          At our Hopsital we have wide range of Facility to enhance hospital experinace and give batter treatment to need.<br/><br/>
         <TbStethoscope style={ic}/> <strong>Available Docotors:</strong>40+ <br/><br/>
         <FcDepartment style={ic}/> <strong>Numebr of Department:</strong>28 <br/><br/>
         <MdOutlineGroups style={ic}/> <strong>Numebr of Staff:</strong> 200+ <br/>

        </p>
      </div>
    </div>
  </div>
  <div class="col g-5 md-5">
    <div id="tile1" class="card rounded-5">
      <div class="card-body">
        <h5 class="card-title text-center">Our Support System</h5> <hr/>
        <p class="card-text">At our hopsital we have wide varity of support system, that imporves our holistc approch to wards the patient,
         we want to provide most enhancing experinace towards patient.<br/><br/>
         <AiTwotoneAlert style={ic}/> <strong>Advanced Emergency Support</strong> <br/><br/>
         <FaMicroscope style={ic}/> <strong>Qualified Laboratory</strong> <br/><br/>
         <FaClinicMedical style={ic}/> <strong>In house Pharamacy</strong>
        
         </p>
      </div>
    </div>
  </div>
  <div class="col g-5 md-5">
    <div id="tile2" class="card rounded-5">
      
      <div class="card-body">
        <h5 class="card-title text-center">In Hosue Services</h5> <hr/>
        <p class="card-text">We are dedicated to provide seamless high quality facility to patinet, As part of this we have buid high quality echo-system to enhance patient experinace. 
        <br/><br/>
        <FaHotel style={ic}/> <strong>In-built Cafeteria</strong> <br/><br/>
        <BiDonateBlood style={ic}/> <strong>Advanced Blood Bank</strong> <br/><br/>
        
        </p>
      </div>
    </div>
  </div>
  <div class="col g-5 md-5 mb-3">
    <div id="tile3" class="card rounded-5">

      <div class="card-body">
        <h5 class="card-title text-center">Dedicated Services</h5><hr/>
        <p class="card-text">We want provide a set of dedicated services to our customer and enhance their user experinace at our level best, we are putting our efforts at make it World No 1. <br/><br/>
        <BiBed style={ic}/><strong>High-five Wards</strong> <br/><br/>
        <FcDocument style={ic}/><strong>Fast Insurance Services </strong><br/><br/>
        </p>
      </div>
    </div>
  </div>
</div>

    </>
    );
}

export default Home;