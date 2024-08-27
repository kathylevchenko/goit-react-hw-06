import { Formik, ErrorMessage, Field, Form } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
export default function ContactForm (){
  const dispatch = useDispatch;
    const formNameId = useId();
    const formNumberId = useId();
    const contactsSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      phone: Yup.string()
        .min(9, "Too Short!")
        .max(12, "Too Long!")
        .required("Required"),
    });
    const handleSubmit = (values, actions) => {
      const {name} = values;
      const {number} = values;
      dispatch(addContact(name,number))
      actions.resetForm();
      };
     
   
    return (
      <Formik
        className={css.contactForm}
        validationSchema={contactsSchema}
        onSubmit={handleSubmit}
        initialValues={{ name: "", phone: "" }}
      >
        <Form className={css.contactForm}>
          <div className={css.inputContainer}>
            <label htmlFor={formNameId}>Name</label>
            <Field
              className={css.nameInput}
              id={formNameId}
              type="text"
              name="name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={formNumberId}>Number</label>
            <Field
              className={css.nameInput}
              id={formNumberId}
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            />
            <ErrorMessage className={css.error} name="phone" component="span" />
          </div>
          <button className={css.buttonSubmit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }