import { FormEvent, useState } from "react";
import FormInput from "../../components/formInput";
import Heading from "../../components/heading";
import Text from "../../components/text";

import contactModel from "../../models/contact.model";

import "./index.css";

const PHONE_NUMBER_MAX_LENGTH = 15;

const initialValues = {
  firstName: "",
  lastName: "",
  number: "",
  service: "",
};

type FormKeys = keyof typeof initialValues;

const Contact = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const changeFieldValue = (key: FormKeys, value: string) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const submitHandler = (evt: FormEvent) => {
    evt.preventDefault();

    alert(`Form submitted with this data: ${JSON.stringify(formValues)}`);
    setFormValues(initialValues);
  };

  return (
    <section className="contact">
      <header className="header">
        <Heading level="h2">{contactModel.heading}</Heading>
        <Text size="16px" className="text">
          {contactModel.text}
        </Text>
      </header>
      <form onSubmit={submitHandler} className="form">
        <div className="wrapper">
          <FormInput
            name="firstName"
            type="text"
            required
            placeholder={contactModel.fields.firstName}
            value={formValues.firstName}
            onChange={(evt) => changeFieldValue("firstName", evt.target.value)}
          />

          <FormInput
            name="lastName"
            type="text"
            required
            placeholder={contactModel.fields.lastName}
            value={formValues.lastName}
            onChange={(evt) => changeFieldValue("lastName", evt.target.value)}
          />

          <FormInput
            name="number"
            type="tel"
            required
            pattern="^\+?[1-9]\d{1,14}$"
            maxLength={PHONE_NUMBER_MAX_LENGTH}
            placeholder={contactModel.fields.number}
            className="row"
            value={formValues.number}
            onChange={(evt) => changeFieldValue("number", evt.target.value)}
          />

          <FormInput
            name="service"
            type="text"
            required
            placeholder={contactModel.fields.service}
            className="row"
            value={formValues.service}
            onChange={(evt) => changeFieldValue("service", evt.target.value)}
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
