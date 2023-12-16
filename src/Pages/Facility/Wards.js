
import img from '../Facility/imgs/lab-1.jpg'
import img1 from '../Facility/imgs/lab-2.jpg'
import img2 from '../Facility/imgs/lab-reports.jpg'

import "bootstrap/js/dist/scrollspy";



function Wards(){
  return(
<>
<div id="cen" class="alert alert-secondary" role="alert">
  <h3>Hopsital Wards</h3>


<div class="card ">
Wards play a crucial role in the functioning of a hospital and are of utmost importance in providing comprehensive healthcare services. Here are several reasons why wards are vital in a hospital setting: <br/>

Patient Care and Monitoring:Wards provide a dedicated space where patients can receive specialized care and continuous monitoring by healthcare professionals. In the wards, patients can be observed closely, and any changes in their condition can be detected promptly, allowing for timely interventions and adjustments in treatment plans. 

Efficient Space Utilization: Wards are designed to accommodate multiple patients, optimizing the use of space within a hospital. By grouping patients with similar medical conditions in one area, healthcare providers can streamline their efforts and efficiently deliver care to a larger number of individuals. 

Collaboration and Communication: Wards foster collaboration among healthcare teams, enabling doctors, nurses, specialists, and other medical professionals to work together closely. Proximity facilitates effective communication, consultation, and coordinated decision-making, leading to better patient outcomes.

Infection Control: Wards are crucial in implementing infection control measures. They provide an environment where infection prevention and control protocols can be enforced effectively, minimizing the risk of cross-contamination between patients. Separating patients based on their condition or infectious status helps contain the spread of diseases within the hospital. 

Accessibility of Resources: Wards are equipped with the necessary resources, medical equipment, and supplies to support patient care. From medication administration to diagnostic tests, wards ensure that healthcare professionals have easy access to the tools required for delivering quality care promptly.

Emotional Support and Patient Experience: Wards often serve as a source of emotional support for patients. Sharing a space with individuals facing similar health challenges can foster a sense of community and camaraderie. Moreover, having healthcare providers and support staff readily available in the ward helps address patients' concerns, provide reassurance, and enhance their overall experience during the hospital stay. <br/>

Education and Training: Wards provide an ideal learning environment for medical students, residents, and other healthcare professionals in training. By exposing them to various medical conditions, treatment modalities, and patient interactions, wards contribute to the development of clinical skills, critical thinking, and compassionate care. 

Transition and Continuity of Care: Wards often serve as transitional units between different levels of care, such as intensive care units (ICUs) and general wards. They allow patients to progress through the healthcare system seamlessly, ensuring a smooth transition and continuity of care as they move towards recovery or further specialized treatment. 

In summary, wards are essential components of a hospital, providing a dedicated space for patient care, collaboration among healthcare professionals, infection control measures, access to resources, emotional support, education, and smooth care transitions. Their existence is integral to the effective functioning of a hospital and the provision of comprehensive healthcare services to patients. 

</div>
</div>
<div  class="row  justify-content-md-center">
  <div id="table " class=" col  col-lg-10">
    <div id="cen"><h3>Wards Rate</h3></div>
  <table class="table  table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Particular Wards</th>
      <th scope="col">General Ward</th>
      <th scope="col">Twin Sharing Ward</th>
      <th scope="col">Private</th>
      <th scope="col">Deluxe</th>
      <th scope="col">Super Deluxe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Wards</td>
      <td>	1,900</td>
      <td>	2,900</td>
      <td>	3,900</td>
      <td>	4,900</td>
      <td>	6,900</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>ICU & ICCU</td>
      <td>9,000</td>
      <td>9,150</td>
      <td>9,350</td>
      <td>9,450</td>
      <td>9,550</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Transplant recovery room</td>
      <td>6,700</td>
      <td>6,800</td>
      <td>6,900</td>
      <td>6,950</td>
      <td>7,000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>H.D.U</td>
      <td>7,000</td>
      <td>8,000</td>
      <td>9,000</td>
      <td>10,000</td>
      <td>11,000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>NICU & PICU</td>
      <td>4,500</td>
      <td>4,600</td>
      <td>4,650</td>
      <td>4,700</td>
      <td>4,750</td>
    </tr>
  
  </tbody>
</table>

  </div>
</div>


<div class="card rounded-end-circle bg-info-subtle border  border border-secondary-subtle w-100 h-500" > 
Hospital wards play a crucial role in healthcare systems worldwide. They serve as dedicated units within a hospital where patients with similar medical conditions or<br/> healthcare needs are grouped together for monitoring, treatment, and recovery. The importance of hospital wards can be understood from several perspectives<br/>

Patient Care and Monitoring: Hospital wards provide a structured and specialized environment for patient care and monitoring. Patients with similar conditions are grouped together, allowing healthcare professionals to provide targeted care, administer appropriate treatments, and monitor patients closely. This arrangement facilitates the efficient allocation of resources and ensures that patients <br/>receive the specific care they require.
</div>
<br/>
<div class="card w-75 h-100 border border-5 mx-auto p-2 border border-primary-subtle">
  <div id="cen"><h3>Wards Registration </h3></div>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div> <br/>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Patient Id" aria-label="Patient id"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Dependent Name-1*" aria-label="Dependent Name-1"/>
  </div>
</div>
<br/>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Dependent Name-2" aria-label="Dependent Name-2"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Mobile" aria-label="Mobile"/>
  </div>
</div>
<br/>
<select class="form-select" aria-label="Default select example">
  <option selected>Please Select Ward Particular's</option>
  <option value="1">Wards </option>
  <option value="2">ICU & ICCU</option>
  <option value="3">Transplant recovery room</option>
  <option value="4">H.D.U</option>
  <option value="5">NICU & PICU</option>
</select>
<br/>
<select class="form-select" aria-label="Default select example">
  <option selected>Please Select Ward Type</option>
  <option value="1">General Ward </option>
  <option value="2">Twin Sharing Ward	</option>
  <option value="3">Private	</option>
  <option value="4">Deluxe</option>
  <option value="5">Ultra Deluxe</option>
</select>
<br/>
<center><a href="#" class="btn btn-primary">Submit</a></center>
</div>


<br/>


<div class="row">
    <div class="col">
<div className='card rounded-4 bg-light  col-sm-15'>
<div id="cen"><h3>Frequently Asked Questions (FAQ)</h3></div>
<div class="accordion " id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Q1.  How many members allowded in Wards ??
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> That depnds upon the Ward type: <br/>
      1.General Ward - 2 members <br/>
      2.Twin Sharing Ward - 2 members <br/>
      3.Private - 3 members <br/>
      4.Deluxe - 4 members <br/>
      5.Supetr Deluxe - 6 members <br/>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Q2. Is ward chargers are covered in Insurance ?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <strong>Yes,</strong> if you have opted the health insurance that covers wrads facility.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Q3 When i will be charged amount for wards ??
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The charge for wards will be considered for 24hrs. </div>
    </div>
  </div><br/><br/><br/>
</div>
 
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
</svg>   WardsCare@HMS.com <br/><hr/>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"/>
</svg> 180012659965 <br/> <hr/>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg> Vijayawada, AP, INDIA.
      </div>
    </div>
  </div>
</div>
</div>
</div>
  </>
  

    );
  }
  
  export default Wards;