import { useForm } from "react-hook-form";
import './Contact.css';
import contactImage from '../../images/svg-2.svg';
import { Button } from "../ButtonElements";
import { BtnWrap } from "./ContactElements";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <div className="contact">
      <div className="Info-row" >
      <div id="contact-left" >
      <img src={contactImage} id="contact-img" alt="contactform" />
    </div>
      <div id="contact-right">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>Contact Us</h2>
        <br/>
        <p className="contactdesc">You can reach our team through the contact details provided below. We're always ready to assist you and explore how our generative AI video-making technology can transform your projects.</p>
        <input
          {...register("userName", {
            required: "Username is Required...",
            minLength: {
              value: 3,
              message: "Username must be atleast 3 characters long...",
            },
            maxLength: {
              value: 30,
              message: "Username must be atmost 30 characters long...",
            },
          })}
          placeholder="Username"
        />
        <p  className="error">{errors.userName?.message}</p>
        <input
          {...register("email", {
            required: "Email is Required...",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email must be valid",
            },
          })}
          placeholder="Email"
        />
      <p className="error">{errors.email?.message}</p>
  <textarea
    {...register("message", {
      required: "Message is Required...",
    })}
    placeholder="Message"
    onFocus={(e) => {
      e.target.placeholder = "";
    }}
    onBlur={(e) => {
      if (e.target.value === "") {
        e.target.placeholder = "Message";
      }
    }}
  ></textarea>
        <p className="error">{errors.password?.message}</p>
        {/* <select
          {...register("gender", {
            required: "Gender is Required...",
          })}
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <p>{errors.gender?.message}</p> */}
        {/* <input type="Submit" /> */}
        <BtnWrap>
        <Button>Submit</Button>
        </BtnWrap> 
        
      </form>
      </div>
      
      </div>
    </div>
  );
}

export default Contact;