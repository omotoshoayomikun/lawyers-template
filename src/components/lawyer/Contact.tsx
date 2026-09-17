"use client"

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lawyerData } from "@/data/lawyerData";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell contact-grid">
        <div><SectionHeading number="05" label="Contact" title="Let’s Start a Conversation" light /><p className="contact-intro">For professional enquiries, legal consultations and relevant opportunities, get in touch.</p><dl className="contact-details"><div><dt>Email</dt><dd>[{lawyerData.contact.email}]</dd></div><div><dt>Phone</dt><dd>[{lawyerData.contact.phone}]</dd></div><div><dt>Location</dt><dd>{lawyerData.contact.location}</dd></div></dl></div>
        <form className="contact-form" onSubmit={submit} aria-label="Professional enquiry form">
          <label><span>Full Name</span><input name="name" autoComplete="name" required /></label>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
          <label><span>Subject</span><input name="subject" required /></label>
          <label className="message-field"><span>Message</span><textarea name="message" rows={4} required /></label>
          <Button variant="editorialLight" size="editorial" type="submit">Send Enquiry <ArrowRight /></Button>
          {sent && <p className="form-success" role="status">Thank you. Your message has been received.</p>}
        </form>
      </div>
    </section>
  );
}