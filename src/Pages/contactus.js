import "./style.css"
import background from "../img/t1s.jpg";

import image from "../img/office.jpg";


function contactus() {

    return (
   

        <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"  }}>
       
<section class="mb-0">
        <div id='heading'>
            <h2>Contact Us !!</h2>
        </div>
 
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
        <br/>
        <br/>

    <div class="row">

       
        <div class="col-md-9 mb-md-0 mb-15">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

               
                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" placeholder="Name" id="name" name="name" class="form-control"/>
                            
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" placeholder="Email" id="email" name="email" class="form-control"/>
                           
                        </div>
                    </div>
                    

                </div>
                <br/>
               
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject"/>
                            
                        </div>
                    </div>
                </div>
                <br/>
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text"  id="message" name="message" rows="14" class="form-control md-textarea" placeholder="Your Message"></textarea>
                            
                        </div>

                    </div>
                </div>
                

            </form>
            <br/>
            
            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">submit</a>
            </div>
            <div class="status"></div>
        </div>
       <br/>
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
</svg> <p>Vijayawada, AP, INDIA</p>
                   
                </li>
                <hr/>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                    <p>+ 91 9123456789</p>
                </li>
                <hr/>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg>
                    <p>ContactUS@HospitalManagementSystem.com</p>
                </li>
            </ul>
        </div>
</div>
</section>

</div> 


    
    );
}

export default contactus;