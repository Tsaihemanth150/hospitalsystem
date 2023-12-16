import "./style.css"
import background from "../img/l4.jpg";

import image from "../img/office.jpg";
import {MdOutlinePolicy} from "react-icons/md";
import { icons } from "react-icons";

function TermsAndConditions() {
    const lands = {color:"red",fontSize: "1.1em" }
    return (
   <>
        <div class="alert   alert-secondary text-center border border-success p-2 mb-2" > <h2> <MdOutlinePolicy style={lands}/> Term And Conditions <MdOutlinePolicy style={lands}/></h2>
        <p>These Terms and Conditions ("Terms") govern the use of user accounts on the Hospital Management System ("HMS") provided by HMS ("we," "us," or "our"). By creating a user account and accessing the HMS, you agree to comply with these Terms. If you do not agree with these Terms, please refrain from using the HMS.<br/>

User Account Creation<br/><br/>
a. Eligibility: To create a user account, you must be at least 18 years old and have the legal authority to enter into this agreement.<br/>
b. Account Information: You agree to provide accurate, complete, and up-to-date information during the registration process and to keep your account information current. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.<br/>

c. Account Termination: We reserve the right to suspend or terminate your user account at our sole discretion, without prior notice, if we believe you have violated these Terms or engaged in any unauthorized or illegal activities.<br/>

User Responsibilities<br/>
a. Proper Use: You agree to use the HMS and your user account in compliance with applicable laws, regulations, and these Terms. You shall not use the HMS for any unauthorized, unlawful, or unethical purposes.<br/>
b. Security: You are responsible for taking appropriate security measures to protect your account credentials. You must notify us immediately if you become aware of any unauthorized use of your account or any other breach of security.<br/>

c. User Conduct: You shall not engage in any activity that may disrupt or interfere with the proper functioning of the HMS or compromise its security. You shall not attempt to gain unauthorized access to any part of the HMS or any other user's account.<br/>

d. Accuracy of Information: You are responsible for the accuracy and completeness of the information you provide within the HMS. You acknowledge that any reliance on the information provided is at your own risk.<br/>

Intellectual Property Rights<br/>
a. Ownership: We retain all rights, title, and interest in and to the HMS, including all intellectual property rights. Your use of the HMS does not grant you any ownership rights.<br/>
b. User Content: By submitting any content within the HMS, such as feedback, suggestions, or other materials, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, distribute, and display such content for the purpose of operating and improving the HMS.<br/>

Limitation of Liability<br/>
a. Disclaimer: The HMS is provided on an "as is" and "as available" basis. We make no warranties or representations, either express or implied, regarding the accuracy, reliability, completeness, or suitability of the HMS for any particular purpose.<br/>
b. Indirect Damages: To the extent permitted by applicable law, we shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the HMS, even if we have been advised of the possibility of such damages.<br/>

c. Limitation of Liability: Our total liability for any claims arising out of or in connection with these Terms or the use of the HMS shall not exceed the amount paid, if any, by you for accessing the HMS.<br/>

Modifications to the Terms<br/>
We reserve the right to modify or update these Terms at any time, without prior notice. It is your responsibility to review these Terms periodically for any changes. Your continued use of the HMS after the posting of any updates constitutes your acceptance of the revised Terms.<br/>

Governing Law and Jurisdiction<br/>
These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or relating to these Terms or the use of the HMS shall be subject to the exclusive<br/>
        </p>
        
         </div>

 </>
    
    );
}

export default TermsAndConditions;