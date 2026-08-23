import { useState } from "react";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT;

export function useContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function update(field, value) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));

    // Clear the field's error as the user corrects it.
    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  }

  function validate() {
    const next = {};

    if (!values.name.trim()) {
      next.name = "Enter your name.";
    }

    if (!emailRe.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (values.message.trim().length < 6) {
      next.message =
        "Say a little about what you'd like to build.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus(null);
    setStatusMessage("");

    if (!validate()) {
      return;
    }

    if (!CONTACT_ENDPOINT) {
      setStatus("error");

      setStatusMessage(
        "Contact form is not configured yet."
      );

      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(
        CONTACT_ENDPOINT,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.errors?.[0]?.message ||
            "Unable to send message."
        );
      }

      setStatus("success");

      setStatusMessage(
        "Thanks! Your message has been sent successfully."
      );

      setValues({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(
        "Contact form submission failed:",
        error
      );

      setStatus("error");

      setStatusMessage(
        "Something went wrong. Please try again or email me directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return {
    values,
    errors,
    status,
    statusMessage,
    submitting,
    update,
    handleSubmit,
  };
}