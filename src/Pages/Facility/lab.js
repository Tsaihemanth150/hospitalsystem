
import img from '../Facility/imgs/lab-1.jpg'
import img1 from '../Facility/imgs/lab-2.jpg'
import img2 from '../Facility/imgs/lab-reports.jpg'

import "bootstrap/js/dist/scrollspy";



function Lab(){
  return(
<>
<div id="cen" class="alert alert-secondary" role="alert">
  <h3>Diagnostic LAB</h3>

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} height={800} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Advanced Techniques</h5>
        <p>Here at our lab we are using advanced techniques to get accurate results.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img1} height={800} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Advanced Equipment</h5>
        <p>Here at our lab we are using advanced Equipment's.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} height={800} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Get Fast accurate Results</h5>
        <p>You can get fast and accurate results .</p>
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
</div>

<div class="card ">
  <div class="card-header text-center">
    LAB @ HMS
  </div>
  <div class="card-body">
    <h5 class="card-title text-center">Importance of lab</h5>
    <p class="card-text">
    In the intricate web of healthcare, hospitals serve as the central hub for diagnosing and treating various medical conditions. While physicians and nurses provide hands-on care, the unsung heroes working behind the scenes in the hospital laboratory play a pivotal role in patient care. The laboratory services offered within a hospital are essential for accurate diagnosis, effective treatment, and the overall well-being of patients. This essay aims to highlight the significance of laboratory services in hospitals and the invaluable contributions they make to healthcare.
<br/><br/>
<strong>1. Diagnosis and Disease Management:</strong>


One of the primary functions of a hospital laboratory is to perform diagnostic tests that aid in the identification and management of diseases. Through blood tests, urinalysis, microbiology cultures, and molecular diagnostics, laboratory professionals can detect infections, measure hormone levels, assess organ function, identify genetic disorders, and analyze cancer markers. These test results provide critical information that helps physicians make informed decisions about patient care, select appropriate treatment plans, and monitor the progress of diseases.
<br/>
<strong>2. Timeliness and Accuracy:</strong>


The timely delivery of accurate diagnostic information is crucial for effective patient care. Laboratory professionals work diligently to ensure the rapid turnaround of test results, enabling healthcare providers to make prompt and informed decisions. With advanced technology and automation, laboratories can process a large volume of tests efficiently, reducing the waiting time for patients. The accuracy of laboratory results is also of paramount importance, as it directly affects treatment decisions. Rigorous quality control measures and adherence to standardized protocols help maintain the highest level of accuracy in laboratory testing.
<br/>
<strong>3. Collaborative Healthcare:</strong>


The laboratory serves as a vital link in the collaborative efforts of healthcare teams. Laboratory professionals work closely with physicians, nurses, and other healthcare providers, providing them with essential information to guide patient care. They offer insights and interpret test results, allowing healthcare professionals to understand the underlying causes of a patient's symptoms and make informed diagnoses. Collaboration between the laboratory and other healthcare departments fosters a multidisciplinary approach that enhances the overall quality of patient care.
<br/>
<strong>4. Research and Innovation:</strong>


Hospital laboratories are often at the forefront of medical research and innovation. Through ongoing research projects and clinical trials, laboratory professionals contribute to the development of new diagnostic tests, treatment modalities, and therapeutic advancements. Their expertise in laboratory techniques, data analysis, and interpretation of results is instrumental in advancing medical knowledge and improving patient outcomes. Laboratory professionals also actively participate in quality improvement initiatives, ensuring that laboratory services remain up-to-date and aligned with the latest scientific advancements.
<br/>
<strong>5. Patient Safety:</strong>


Laboratory services in hospitals play a crucial role in ensuring patient safety. Through meticulous testing and monitoring, laboratories help prevent medical errors, detect drug interactions, and identify potential risks. They assist in monitoring medication levels, ensuring appropriate dosages, and minimizing adverse drug reactions. Laboratory professionals also contribute to infection control practices within the hospital, identifying and characterizing infectious agents to guide effective treatment and prevent the spread of diseases.






    </p>
   
  </div>
</div>
<br/>

<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card rounded-4 ">
      <div class="card-body">
        <h5 class="card-title text-center">Get reports within <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg> 12hrs </h5>
Here you can track the reports by patient i.d so that can keep track on your record, Once reports are avaible it is informed through Registed mobile Number(RMN) and mail.
<br/><br/>
     Eneter yor Tracking Number or Mobile Number:
     <div class="input-group mb-2">
  <span class="input-group-text" id="basic-addon1">HMS Tracking System</span>
  <input type="text" class="form-control" placeholder="Tracking Number" aria-label="Tracking Number" aria-describedby="basic-addon1"/>
</div>
<center> <a href="#" class="btn btn-primary ">Track</a></center><br/>
        <p class="card-text">You can login to your account to check live status of the reports and you can acess your reports.</p>
        <center><a href="#" class="btn btn-primary ">Reports</a></center>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card rounded-4">
      <div class="card-body">
        <h5 class="card-title text-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg> Book A appointment</h5>
        <p class="card-text">Due to larger number of request and we need to provide serives tto every one at our best, so we decided to give serives on booking, on booking you will be alloted slot withih 24hr with time and date. you will be alloted with booking id.
        To book an appointment you need to have account at HMS. Please Signup if dont have account.
        </p>
        <center><a href="#" class="btn btn-primary">Book your appointment</a></center><br/>

        In case of emergency you can book with 15min by paying some extra fee. the fee is only to regulator in nature <br/>
  
        <center><a href="#" class="btn btn-danger">Emergency Appointment</a></center>
      </div>
    </div>
  </div>
</div>


<div class="row">
    <div class="col">
<div className=' col-sm-15'>
  <div id="cen"><h4>Some packages for you</h4></div>
<table class="table table-hover table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name </th>
      <th scope="col">FOR</th>
      <th scope="col">Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Full body check up male</td>
      <td>Male(>18 years)</td>
      <td>20,499</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Full body check up female</td>
      <td>Female(>18 years)</td>
      <td>25,599</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Full body check up - kids</td>
      <td>Male && Female(>5 years )</td>
      <td>11,599</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >Full body check up - Baby </td>
      <td>Male && Female(below5 years )</td>
      <td>15,699</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>partial body check up male</td>
      <td>Male(>18 years)</td>
      <td>15,499</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>partial body check up female</td>
      <td>Female(>18 years)</td>
      <td>18,599</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td >partial body check up - kids</td>
      <td>Male && Female(>5 years )</td>
      <td>5,599</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td >partial body check up - Baby </td>
      <td>Male && Female(below5 years )</td>
      <td>10,699</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td >Individual </td>
      <td>every one</td>
      <td> Depends on test</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td >Custome </td>
      <td>every one</td>
      <td> Depends on customization </td>
    </tr>
    
  </tbody>
</table>
</div> <br/>
</div>
<div class="col">
<div class="row">
  <div class="col-sm-15">
    <div class="card rounded-4 bg-light  ">
      <div class="card-body">
        <h3 class="card-title text-center">Contact Us</h3>
        <p class="card-text">With supporting text below as a natural lead-in to additional content. for any type of problem you can call or mail us at antyime we will avaible 24/7 to help you and slove your problems</p> <br/>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg>   diagnosticlabs@HMS.com <br/><hr/>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
</svg> 180012651265 <br/> <hr/>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg> Vijayawada, AP, INDIA.
      </div><br/><br/><br/><br/><br/><br/>
    
    </div>
  </div>
</div>
</div>
</div>


  </>
  
    );
  }
  
  export default Lab;