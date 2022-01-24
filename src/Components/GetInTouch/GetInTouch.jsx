import { useRef, useState } from "react";
import Card from "../Card/Card";
import Section from "../SectionLayout/Section";
import "./GetInTouch.css";
import emailjs from "@emailjs/browser";
import ContactUsImage from "../Svgs/ContactUs/ContactUs";

const GetInTouch = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useRef();
  const submitBtn = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    submitBtn.current.disabled = true;
    submitBtn.current.value = "Sending...";

    emailjs
      .sendForm(
        "service_k2sj44a",
        "template_qshfecl",
        form.current,
        "user_GMNMDxEpHVwELyVf6Gf60"
      )
      .then(
        (result) => {
          submitBtn.current.value = "Message Sent";
          submitBtn.current.disabled = false;
          setSuccessMessage("Your Message sent successfully!");

          setTimeout(() => {
            form.current.reset();
            submitBtn.current.value = "Send Message";
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage(error.text);
        }
      );
  };

  return (
    <Section title="Get in touch">
      <div className="card-wrapper two-col-layout get-in-touch">
        <Card>
          <ContactUsImage />
        </Card>
        <Card>
          <h2>{successMessage ?? errorMessage}</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter you email"
              id="email"
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message"
              id="message"
              required
            ></textarea>
            <input
              type="submit"
              name="submit"
              value="Send Message"
              ref={submitBtn}
            />
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default GetInTouch;
