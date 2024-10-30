import { useState } from "react";
import FormInput from "../../components/formInput";
import Heading from "../../components/heading";
import Text from "../../components/text";
import contactModel from "../../models/contact.model";
import "./index.css";

const PHONE_NUMBER_PATTERN = "^+?[1-9]d{1,14}$";
const PHONE_NUMBER_MAX_LENGTH = 15;

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    number: "",
    service: "",
  });

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
  };

  return (
    <section className="contact">
      <header className="header">
        <Heading level={2}>{contactModel.heading}</Heading>
        <Text size="16px">{contactModel.text}</Text>
      </header>
      <form onSubmit={submitHandler} className="form">
        <div className="wrapper">
          <FormInput
            name="firstName"
            type="text"
            required
            placeholder={contactModel.fields.firstName}
          />

          <FormInput
            name="lastName"
            type="text"
            required
            placeholder={contactModel.fields.lastName}
          />

          <FormInput
            name="number"
            type="tel"
            required
            pattern="^\+?[1-9]\d{1,14}$"
            maxLength={PHONE_NUMBER_MAX_LENGTH}
            placeholder={contactModel.fields.number}
            className="row"
          />

          <FormInput
            name="service"
            type="text"
            required
            placeholder={contactModel.fields.service}
            className="row"
          />
        </div>

        <button type="submit" className="trigger">
          <Text tag="span" color="white" size="14px">
            Submit now
          </Text>
        </button>
      </form>
    </section>
  );
};

export default Contact;
