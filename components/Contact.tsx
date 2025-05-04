"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    fullname: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("Message sent! He will Contact You Soon :)");
      setForm({ fullname: "", mobile: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="container col-xs-12 col-md-8 col-lg-6" data-aos="fade-up">
      <h1 className="display-5 text-center fw-bold mb-4 text">Mail Me :)</h1>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="fullname" className="form-label">Full Name</label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            id="fullname"
            placeholder="Enter Your Full Name"
            value={form.fullname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="mobile" className="form-label">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            placeholder="Enter Your Mobile Number "
            className="form-control"
            id="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            placeholder="Enter Your Message Here"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-danger fw-bold ">Send Message</button>
        </div>

        <div className="col-12 text-center">
          <p>{status}</p>
        </div>
      </form>
    </div>
  );
}
