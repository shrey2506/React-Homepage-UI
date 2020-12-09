import React from 'react';
import emailjs from 'emailjs-com';
import './ContactFormElements.css';

const ContactFormComponent = () => {

    const sendEmail=(e)=>{
        e.preventDefault();
        console.log(process.env.REACT_APP_SERVICE_ID);

        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_USER_ID}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
    }

    return (
          <div className="Container">
              <div className="FormWrap">
                  <div className="FormContent">
                    <form onSubmit={sendEmail} className="Form">
                           
                                    <div className="FormH1">Request for proposal for services</div>

                                    <label className="FormLabel">Subject</label>
                                    <input type="text" className="FormInput"  name="subject" required/>

                                    <label className="FormLabel">Company</label>
                                    <input type="text" className="FormInput"  name="company" required />

                                    <label className="FormLabel">Full Name</label>
                                    <input type="text" className="FormInput"  name="name"  required/>
                                
                                    <label className="FormLabel">Email</label>
                                    <input type="email" className="FormInput"  name="email" required/>

                                    <label className="FormLabel">Phone Number</label>
                                    <input type="number" className="FormInput"  name="number" required/>

                                    <label className="FormLabel">Industry</label>
                                    <input type="text" className="FormInput"  name="industry" required/>

                                    <label className="FormLabel">Country</label>
                                    <input type="text" className="FormInput"  name="country" required/>
                                
                                
                                    <label className="FormLabel">Message</label>
                                    <textarea type="text" className="FormTextArea"  cols="30" rows="5"  name="message" required/>
                               
                                
                                    <label className="FormLabel">Attach pdf</label>
                                    <input className="FormInput"  type="file" name="my_file" />
                               
                                
                                    <input className="FormButton" type="submit" value="SUBMIT" />
                                
                            
                        </form>
                  </div>
               
              </div>
                    
           
          </div>
    )
}

export default ContactFormComponent;
