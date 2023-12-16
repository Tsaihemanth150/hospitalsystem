
import img from '../Facility/imgs/ca.jpg'
import img1 from '../Facility/imgs/ca1.jpg'
import img2 from '../Facility/imgs/ca2.jpg'
import img3 from '../Facility/imgs/ca3.jpg'
import {FaExclamation } from "react-icons/fa";
import {FaSearch } from "react-icons/fa";
import "bootstrap/js/dist/scrollspy";



function Insurance(){
  return(
<>
<div class="alert rounded-pill  alert-secondary text-center border border-success p-2 mb-2" > <h3>Insurance Services </h3> </div>


<div class="card ">
  <div class="card-header  bg-info text-center">
    why do you need Insurance ??
   </div>
  <div class="card-body  ">
    <h5 class="card-title text-center"><bold>Halth Insurance</bold></h5>
    <p class="card-text ">
Health insurance is a critical tool that provides financial protection and access to healthcare services for individuals and families. It operates on the principle of pooling risks and resources, where individuals contribute premiums to a collective fund. In return, policyholders receive coverage for various medical expenses, including doctor visits, hospital stays, surgeries, medications, and preventive care. Health insurance plans come in different forms, such as employer-sponsored coverage, government programs like Medicaid and Medicare, and individual plans purchased from private insurers. Having health insurance helps individuals and families afford necessary medical treatments and reduces the financial burden of healthcare expenses. It also promotes preventive care and early intervention, leading to better overall health outcomes. However, health insurance policies can vary in terms of coverage, deductibles, copayments, and networks of healthcare providers. Therefore, it's essential for individuals to carefully evaluate and select the insurance plan that best suits their needs and budget.
Health insurance is a form of coverage that helps individuals manage and mitigate the costs associated with medical care and treatments. It provides financial protection by covering a range of healthcare services, including doctor visits, hospital stays, prescription medications, and preventive care. Health insurance plans are typically purchased through private insurers or provided by employers. By having health insurance, individuals can access necessary medical services without incurring significant out-of-pocket expenses. It serves as a valuable safety net, offering peace of mind and promoting overall well-being by ensuring that healthcare remains affordable and accessible.
Health insurance is a vital component of ensuring access to quality healthcare for individuals and families. It serves as a financial safety net, providing coverage for medical expenses and treatments. Health insurance policies typically include benefits such as hospitalization, doctor visits, prescription medications, and preventive care. By spreading the financial risk among a large pool of policyholders, health insurance helps individuals manage unexpected medical costs while promoting overall wellness. It plays a crucial role in protecting individuals from the burden of exorbitant healthcare expenses, ensuring that everyone has the opportunity to receive necessary medical care when they need it most.
</p>
   
  </div>
</div>
<div class="row">
  
<div class="col-md-6 g-2">
<div calss="card ">
<div class="card-body rounded-4  p-2 g-col-6 border-2 border border-primary-subtle">
<div id="cen"><h3><bold>Claim Request Form</bold></h3></div>
<div class="row ">
  <div class="col-md-6 mb-3 g-3"> 
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" required/>
  </div>
  <div class="col-md-6  mb-3 g-3 ">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" required/>
  </div>

  <div class="col-md-12 mb-2 g-3 ">
    <input type="text" class="form-control" placeholder="Patient id*" aria-label="pid" required/>
  </div>
  <div class="col-md-12 mb-2 g-3 ">
    <input type="text" class="form-control" placeholder="Policy id*" aria-label="poid" required/>
  </div>
  <div class="col-md-6 mb-3 g-3"> 
    <input type="email" class="form-control" placeholder="Email" aria-label="email" required/>
  </div>
  <div class="col-md-6  mb-3 g-3 ">
    <input type="text" class="form-control" placeholder="Mobile" aria-label="mobile" required/>
  </div>
 
 
  <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02"required/>
  <label class="input-group-text" for="inputGroupFile02">Please upload bill* or Discharge Summary*</label>
</div>

  </div>

  <center><a href="#" class="btn btn-primary">Submit</a></center>
</div>
</div>
</div>

<div class="col g-2">
<div class="row">
  <div class="col-sm-15">
    <div class="card rounded-4 bg-light">
      <div class="card-body">
      <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger text-center">
  <FaExclamation/><FaExclamation/>Important Notice<FaExclamation/><FaExclamation/>
</div>
We understand that filing an insurance claim can be a stressful process, and we are committed to making it as smooth and efficient as possible. This notice aims to provide you with a clear understanding of our insurance claim process and the steps involved.<br/>

Reporting the Claim:<br/>
To initiate the insurance claim process, please contact our dedicated claims department as soon as possible. You can reach us through one of the following methods:
Phone: Claims Department Contact Number<br/>
Email: Claims Department Email Address <br/>
In-person: Visit our office during business hours<br/>
When reporting your claim, please provide all relevant details, including the policy number, incident date and time, a description of the incident, and any supporting documentation (e.g., photos, police reports, invoices).<br/>
<center><strong>Thank You HMS!!</strong></center>
</div>
    </div>
  </div>
</div>
</div>
</div>

<div class="row">
    <div class="col g-3">
<div className='col-sm-15'>
  <div class="card rounded-4 bg-light mb-3">
  <div class="card-body">
<div id="cen"><h3><FaSearch/>Tracking </h3></div>
 <center>To Track the Cliam status:</center>
<div class="col-md-12 mb-2 g-3 ">
    <input type="text" class="form-control" placeholder="Insurace ACK Number" aria-label="pid" required/>
  </div>
  <div class="col-md-12 mb-2 g-3 ">
    <input type="text" class="form-control" placeholder="Mobile Number" aria-label="pid" required/>
  </div>
<br/>
<hr/>
<center>To Track the Dispuate or Ticket  status:</center>
<br/>
<div class="col-md-12 mb-2 g-5 ">
    <input type="text" class="form-control" placeholder="Insurace ACK Number" aria-label="pid" required/>
  </div>
  <div class="col-md-12 mb-2 g-3 ">
    <input type="text" class="form-control" placeholder="Mobile Number" aria-label="pid" required/>
  </div>
  <br/>
<center><a href="#" class="btn btn-primary">Search</a></center>
<br/>
</div>
</div>

</div>


</div>
<br/>
<div class="col g-3">
<div class="row ">
  <div class="col-sm-15">
    <div class="card  rounded-4 bg-light">
      <div class="card-body">
        <h3 class="card-title text-center">Contact Us</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content. for any type of problem you can call or mail us at antyime we will avaible 24/7 to help you and slove your problems</p> <br/>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg><strong>For general info:</strong>  Insurance@HMS.com <br/>
     <strong>For claim info:</strong> claimInsurance@HMS.com <br/>
    <strong>For Dispuate info: </strong> diuspuatesInsurance@HMS.com
<hr/>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
</svg> 1800126587756  || 
       1800126587757 <br/> 
<hr/>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg> Vijayawada, AP, INDIA.
      </div><br/><br/><br/><br/>
    </div>
  </div>
</div>
</div>
</div>

  </>
  
    );
  }
  
  export default Insurance;