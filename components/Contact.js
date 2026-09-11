"use client";

import { useState } from "react";
import { SITE } from "../config/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  // Opens the visitor's email client with the message pre-filled.
  // This works immediately with no backend or third-party account.
  // To collect submissions directly into an inbox or spreadsheet
  // instead, swap this handler for a service like Formspree or
  // EmailJS — the form fields above don't need to change.
  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-hairline bg-charcoal py-24 md:py-32">
      <div className="shell grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl font-bold tracking-tightest text-white md:text-5xl">
            Let's get to work.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            Tell us about your business and the federal opportunities you're
            aiming for.
          </p>

          <dl className="mt-10 space-y-5 border-t border-graphite pt-8">
            <div>
              <dt className="text-sm text-steel">Company</dt>
              <dd className="mt-1 text-white">{SITE.legalName}</dd>
            </div>
            <div>
              <dt className="text-sm text-steel">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${SITE.email}`} className="text-white hover:text-steel">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-steel">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${SITE.phone}`} className="text-white hover:text-steel">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-7">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-steel">Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full border border-graphite bg-transparent px-4 py-3 text-white outline-none focus:border-white"
              />
            </label>
            <label className="block">
              <span className="text-sm text-steel">Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full border border-graphite bg-transparent px-4 py-3 text-white outline-none focus:border-white"
              />
            </label>
          </div>

          <label className="mt-6 block">
            <span className="text-sm text-steel">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full border border-graphite bg-transparent px-4 py-3 text-white outline-none focus:border-white"
            />
          </label>

          <button
            type="submit"
            className="mt-8 border border-white bg-white px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-transparent hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
