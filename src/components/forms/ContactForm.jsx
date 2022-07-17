import { useState } from "react";
import atoms from "../../styles/atoms.module.scss";
import axios from "axios";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log("submitting", name, email, message);
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user/contact", {
        name: fullName,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className={atoms.form} onSubmit={handleSubmit}>
      <input
        className={atoms.input}
        type="text"
        name="full-name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full name"
        required
      />
      <input
        className={atoms.input}
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <textarea
        className={atoms.textarea}
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message..."
        required
      />
      <button className={atoms.button} type="submit">
        Send
      </button>
    </form>
  );
}
