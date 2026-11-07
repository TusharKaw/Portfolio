import React from 'react';
import SectionTitle from './SectionTitle';

const CONTACT_EMAIL = 'tusharkaw64@gmail.com';
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Hi Tushar, let's connect")}`;

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center bg-black py-10 sm:py-20 text-center">
      <SectionTitle center>Contact <span>Me</span></SectionTitle>
      <p className="mb-7 text-[1.05rem] text-muted">Have a project or role in mind? Drop me a mail.</p>

      <a
        href={MAILTO}
        className="inline-flex items-center gap-2.5 rounded-xl bg-beige px-7 py-3.5 text-base font-medium text-[#111] transition-colors hover:bg-white"
      >
        <i className="fas fa-envelope"></i> Send Mail
      </a>

      <p className="mt-4 text-[0.95rem] text-muted">
        or write to <a href={`mailto:${CONTACT_EMAIL}`} className="text-beige underline">{CONTACT_EMAIL}</a>
      </p>
    </section>
  );
};

export default Contact;
