
import img from '../Facility/imgs/medn.jpg'
import img1 from '../Facility/imgs/med.jpg'
import img2 from '../Facility/imgs/inj.jpg'
import img3 from '../Facility/imgs/vac.jpg'
import "bootstrap/js/dist/scrollspy";



function Pharamacy(){
  
  <script>
 
</script>

    return (
<>
<div id='cen' class="alert alert-secondary" role="alert"><h3>Pharamacy</h3></div>
<div>
  

<p class="lead">Pharmacy facilities are an essential component of hospitals, as they ensure that patients receive the correct medications to manage their conditions and recover from illnesses. These facilities are responsible for the safe storage, preparation, and dispensing of drugs and medicines, and they play a crucial role in the overall healthcare process.

Pharmacy facilities in hospitals are typically staffed by trained and licensed pharmacists and pharmacy technicians, who work closely with other healthcare professionals to ensure that patients receive appropriate medications. They are responsible for verifying medication orders, preparing and dispensing medications, and monitoring patients for any adverse drug reactions or interactions.

In addition to dispensing medications, pharmacy facilities in hospitals also provide a range of other services. These may include medication counseling for patients, medication reconciliation to ensure that patients are not taking conflicting medications, and medication therapy management to help patients manage their conditions and adhere to their prescribed regimens.

Overall, pharmacy facilities are a vital component of hospital healthcare, as they help to ensure that patients receive the right medications at the right time, and that their conditions are managed effectively. They are an essential part of the healthcare team, and their contributions are critical to improving patient outcomes and promoting overall wellness.</p>
</div>


<div class="container text-center">
<div class="row ">
  <div class="col-sm-5 mb-10 mb-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Generic Medicines   </h5>

      <img src={img} height={200} width={200} class="rounded" alt="..."/><br/><br/>
      <p class="card-text">We have every kind of Generic Medicines avaialbe with us. Please check below</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
View It
</button>
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special Medicines</h5>
        <img src={img1} height={200} width={200} class="rounded" alt="..."/><br/><br/>
        <p class="card-text">This are Special Medicines, which are avaialbe at our store, this kind of Medicines are imported form other country, Please check it below</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
View It
</button>
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Vaccine</h5>
        <img src={img3} height={200} width={200} class="rounded" alt="..."/><br/><br/>
        <p class="card-text">A preparation that is used to stimulate the body's immune response against diseases. Vaccines are usually administered through needle injections. Please view it below</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
View It
</button>
      </div>
    </div>
    <br/>
  </div>

  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Other</h5>
        <img src={img2} height={200} width={200} class="rounded" alt="..."/><br/><br/><br/>
        <p class="card-text"> Other types of medical devices commonly used in the home are assistive technologies and durable medical equipment</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
View It
</button>
      </div>
    </div>
   
  </div>
  </div>
</div>
<div>
  <h3 id='cen'>Frequently Asked Questions (FAQ)</h3>
</div>

<div  class="container col-md-8">
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Q1. What are different types of Medicines avaialbe ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Here this are different type of Medicines.</strong> <br/>
        1.Generic Medicines <br/>
        2.Special Medicines<br/>
        3.Vaccine <br/>
        4.Other <br/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Q2. How do i order requried Medicines ?  
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      To order requried medicines from the site, you need to have a account for that, Please <a href="/signup" class="btn btn-primary">Create a account</a> Here. <br/>
      If you have already an account on HMS, Please <a href="/Login" class="btn btn-success">Login</a> Here.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Q3. For for Deatils how do i contact ??
        </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        If you want more deatils Please contact us here. <br/>
        Tollfree: 1800125125 <br/>
        Email: Pharamacy@HMS.co.in
        Address: Vijayawada, Ap ,INDIA
      </div>
    </div>
  </div>
</div>
</div>




<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Attention !!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      You need to login to your account to order medicines <a href="/Login" class="btn btn-primary">Login</a> <br/>
      If don't have account Please Create here <a href="/Signup" class="btn btn-primary">Signup</a>
      </div>
      <div class="modal-footer">
       To know morw Please see  <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">FAQ</button>
      </div>
    </div>
  </div>
</div>
  </>
  
    );
  }
  
  export default Pharamacy;