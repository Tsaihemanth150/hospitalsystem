import "./style.css"
import background from "../img/l4.jpg";

import image from "../img/office.jpg";
import {ImNotification} from "react-icons/im"
import {AiFillFile} from "react-icons/ai"

function PrivacyAndPolicy() {
        const ic = {color:"blue"}
    return (
   <>
        <div class="alert   alert-secondary text-center border border-success p-2 mb-2" > <h2><ImNotification style={ic}/> Privacy And Policy <AiFillFile style={ic}/> </h2>
        <p>
        This Privacy Policy outlines the practices and procedures employed by <strong> HMS ("we," "us," or "our")</strong> regarding the collection, use, and disclosure of personal information within our Hospital Management System ("HMS"). We are committed to protecting the privacy of our patients, visitors, employees, and other individuals associated with our hospital. By accessing and using our HMS, you acknowledge and agree to the terms of this Privacy Policy.<br/>

Collection of Personal Information <br/>
<strong>We may collect personal information from various sources within the HMS, including but not limited to: </strong> <br/>
<strong> a. Registration Information:</strong> When you register with our HMS, we may collect personal information such as your name, contact details, date of birth, gender, and medical history.<br/>

<strong>b. Medical Records:</strong> We may collect and store medical records, including diagnoses, treatments, test results, and other healthcare-related information necessary for providing appropriate medical care.<br/>

<strong>c. Communication Information:</strong> We may collect information exchanged during communications with our staff, including emails, live chats, and phone calls, to ensure accurate record-keeping and quality assurance.<br/>

<strong>d. Usage Information:</strong> We may collect information about your use of the HMS, such as log files, IP addresses, device information, and browsing history, to improve system performance and user experience.<br/>

Use of Personal Information<br/>
<strong>We use personal information collected within the HMS for the following purposes:</strong><br/>
<strong>a. Provision of Healthcare Services: </strong>We utilize personal information to deliver medical care, manage appointments, process medical tests, provide medical prescriptions, and offer other healthcare-related services.<br/>

<strong>b. Administrative Purposes: </strong>Personal information is used for administrative tasks, including billing, insurance claims, record-keeping, compliance with legal obligations, and internal auditing.<br/>

<strong>c. Communication:</strong> We may use personal information to communicate with you, respond to your inquiries, provide updates about appointments or medical results, and share important information related to your healthcare.<br/>

<strong>d. System Improvement:</strong> Personal information may be used for analytical purposes to improve the functionality, performance, and security of our HMS, ensuring better user experience and data protection.<br/>

Disclosure of Personal Information<br/>
<strong>We may disclose personal information within the HMS in the following circumstances:</strong><br/>
<strong>a. Healthcare Providers: </strong>Personal information may be shared with healthcare providers directly involved in your medical treatment to ensure continuity of care.<br/>

<strong>b. Third-Party Service Providers: </strong>We may engage trusted third-party service providers to assist in the operation, maintenance, and enhancement of our HMS. These providers will have access to personal information solely for the purposes of providing their services and must adhere to strict confidentiality obligations.<br/>

<strong>c. Legal Compliance: </strong>We may disclose personal information when required by law, court order, or governmental regulations to protect the rights, property, or safety of our hospital, patients, or others.<br/>

<strong>Data Security</strong><br/>
We employ industry-standard security measures to safeguard personal information within the HMS from unauthorized access, alteration, disclosure, or destruction. These measures include secure data storage, encryption, access controls, regular system monitoring, and staff training on data protection.<br/>

<strong>Data Retention</strong><br/>
We retain personal information within the HMS for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When personal information is no longer needed, we will securely dispose of it in accordance with applicable laws and regulations.<br/>

<strong>Your Rights and Choices</strong><br/>
You have the right to access, correct, update, or delete your personal information within the HMS. If you have any concerns or requests regarding your personal information, please contact our Privacy Officer using the contact details provided below.<br/>

<strong>Updates to Privacy Policy</strong><br/>
We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the functionality of our HMS. We encourage you to review<br/>
        </p>
        
         </div>

 </>
    
    );
}

export default PrivacyAndPolicy;