import "./style.css"
import img from "../img/em.jpg"
import img1 from "../img/ph.jpg"
import img2 from "../img/lab.jpg"
import img3 from "../img/caf.jpg"
import img4 from "../img/hs.jpg"
import img5 from "../img/bb.jpg"
import img6 from "../img/Bed.jpg"
import img7 from "../img/hi.jpg"

function Faclity() {

  
    return (
   

 <><div id='main'>
  <div class="alert rounded-pill  alert-secondary text-center border border-success g-1 p-2 mb-2" > <h3>Facility Available at HMS </h3> </div>
  
        <div class="row">
  
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src={img4} height={500}  alt="Card image cap"/>
        <h3 id='cen' class="card-title">Hopsital Support</h3>
        <p class="card-text">Support services are the functions within the hospital which carry out much of the ground work.  </p>
        <div id="cen">
        <a href="/Hospitalsupport" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img class="card-img-top" src={img}  alt="Card image cap"/>
        <h3 id='cen' class="card-title">Emergency Services </h3>
        <p class="card-text">The emergency Department is the first point of contact for any critically ill patient, needing immediate medical attention</p>
       <div id='cen'>
        <a  id='cen' href="/Emergency" class="btn btn-primary">View More </a>
        </div>
      </div>
    </div>
  </div>
</div>

  <div class="row">
  
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <img class="card-img-top" src={img1} height={500} alt="Card image cap"/>
        <h3 id='cen' class="card-title">Pharamacy</h3>
        <p class="card-text">pharmacy, the science and art concerned with the preparation and standardization of drugs. </p>
        <div id="cen">
        <a href="/Pharamacy" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img class="card-img-top" src={img5}  alt="Card image cap"/>
        <h3 id='cen' class="card-title">Blood Bank </h3>
        <p class="card-text">A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion</p>
       <div id='cen'>
        <a  id='cen' href="/bloodbank" class="btn btn-primary">View More </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img class="card-img-top" src={img2}  alt="Card image cap"/>

        <h3 id='cen' class="card-title">Diagnostic labs</h3>
        <p class="card-text">diagnostic laboratory means a workplace where diagnostic or other screening procedures are performed on blood or other potentially infectious materials</p>
        <div id="cen">
        <a href="/lab" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img class="card-img-top" src={img3}  alt="Card image cap"/>
        <h3  id='cen' class="card-title">Cafeteria</h3>
        <p class="card-text">The cafeteria is one of the most important locations inside of a hospital. As one of the primary gathering locations, it holds as much importance as the hospital's entrance..</p>
       <div id ='cen'>
        <a href="/Cafeteria" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img class="card-img-top" src={img6}  alt="Card image cap"/>

        <h3 id='cen' class="card-title">Wards</h3>
        <p class="card-text">diagnostic laboratory means a workplace where diagnostic or other screening procedures are performed on blood or other potentially infectious materials</p>
        <div id="cen">
        <a href="/Wards" class="btn btn-primary">View More</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img class="card-img-top" src={img7} height={470} alt="Card image cap"/>
        <h3  id='cen' class="card-title">Insurance services</h3>
        <p class="card-text">The cafeteria is one of the most important locations inside of a hospital. As one of the primary gathering locations, it holds as much importance as the hospital's entrance..</p>
      
       <div id ='cen'>
        <a href="/Insurance" class="btn btn-primary">View More</a><br/>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
 </>
    
    );
}

export default Faclity;