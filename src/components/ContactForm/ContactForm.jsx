import { useState } from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const ContactForm = (props) => {

  const [name ,setName] = useState("anil");
  const [email ,setEmail] = useState("anil@gamil");
  const [text ,setText] = useState("reactjsss");

 // let name = "anil";
 // let email = "gmail@gamil.com";
 // let text = "react learning";

  const onViaCallSubmit = () => {
    console.log("i am  fromcall ");
  }


  const onSubmit = (event) => {
    event.preventDefault();

    setName( event.target[0].value)
    setEmail( event.target[1].value)
    setText( event.target[2].value)

   // name = event.target[0].value;
    //email = event.target[1].value;
   // text = event.target[2].value;

    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);

    console.log(name)
    console.log(email)
    console.log(text)
   
  }



  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage />} />
          <Button 
          onClick = {onViaCallSubmit}
          text="VIA CALL" icon={<MdCall />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FROM" icon={<MdEmail />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
        <div>
        {name +" "+email +" "+ text}
        </div>
      </div>
      <div className={styles.contact_image}>
        <img
          src="/images/contact.png"
          alt="contact logo"
          height={500}
          width={500}
        />
      </div>
    </section>
  );
};

export default ContactForm;
