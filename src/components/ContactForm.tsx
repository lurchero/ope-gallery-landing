"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Record<string, string>;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const errs: Errors = {};

    if (!data.get("name")) errs.name = "Name is required.";
    if (!data.get("email")) errs.email = "Email is required.";
    if (!data.get("subject")) errs.subject = "Subject is required.";
    if (!data.get("message")) errs.message = "Message is required.";

    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <SectionWrapper bg="dark" id="contact">
        <div className="py-20 text-center">
          <p className="text-xl text-secondary">
            Message sent. We&apos;ll be in touch.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper bg="dark" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left — Intro */}
        <div className="lg:col-span-5">
          <SectionLabel text="Contact" />

          <h2 className="mt-8 font-display text-2xl md:text-4xl font-normal text-secondary">
            Let&apos;s connect.
          </h2>

          <p className="mt-6 text-base text-neutral-400 max-w-[400px]">
            For collaborations, press inquiries, exhibition proposals, or
            general questions — reach out below.
          </p>
        </div>

        {/* Right — Form */}
        <div className="lg:col-span-7">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <FormInput
              label="Name"
              name="name"
              type="text"
              required
              error={errors.name}
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              required
              error={errors.email}
            />
            <FormInput
              label="Subject"
              name="subject"
              type="text"
              required
              error={errors.subject}
            />
            <FormTextarea
              label="Message"
              name="message"
              required
              error={errors.message}
            />

            {status === "error" && (
              <p className="text-sm text-accent">
                Something went wrong. Please try again.
              </p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full text-xs uppercase tracking-[0.18em] font-semibold px-8 py-3.5 bg-accent text-secondary hover:bg-[#e7342b] transition-all hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
