import Form from "./Form";
import "./ContactForm.scss";

export default function ContactForm() {
  return (
    <div className="contact-form">
      <div className="content-wrapper">
        <h1 className="heading">
          <span className="heading-primary" data-aos="slide-up">
            If Not Now, When?
          </span>
          <span
            className="heading-secondary"
            data-aos="slide-up"
            data-aos-duration="1000"
          >
            If Not Me, Then Who?
          </span>
          <span className="heading-tertiary" data-aos="slide-up">
            Let’s Work Together!
          </span>
        </h1>

        <div className="content" data-aos="slide-up">
          <p className="content-1">
            Driven by people oriented goals & results;
          </p>
          <p className="content-2">
            my job is not done until i take your project from where it is
          </p>
          <p className="content-3">
            to where you want it to be as far as design is concerned.
          </p>
        </div>
        <img
          data-aos="slide-up"
          src="../../img/signature.svg"
          alt=""
          className="signature"
        />
      </div>
      <Form />
    </div>
  );
}
