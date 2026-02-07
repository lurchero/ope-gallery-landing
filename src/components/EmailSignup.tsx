"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "./SectionLabel";
import SectionWrapper from "./SectionWrapper";

type Status = "idle" | "submitting" | "success" | "error";

export default function EmailSignup() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
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

  return (
    <SectionWrapper bg="dark" id="updates">
      <div className="mx-auto max-w-[560px] text-center">
        <SectionLabel text="Stay in the Loop" />

        <h2 className="mt-6 text-xl font-bold text-secondary">
          Get updates from the gallery.
        </h2>

        <p className="mt-3 text-base text-neutral-400">
          New exhibitions, drops, and events—delivered with care, never with
          spam.
        </p>

        {status === "success" ? (
          <p className="mt-8 text-base text-accent">
            You&apos;re on the list.
          </p>
        ) : (
          <form
            name="email-signup"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="mt-8"
          >
            <input type="hidden" name="form-name" value="email-signup" />
            <input type="hidden" name="bot-field" />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="flex-1 text-base text-secondary bg-neutral-900 border border-neutral-800 px-4 py-3.5 placeholder:text-neutral-600 focus:border-accent focus:ring-1 focus:ring-offset-2 focus:ring-offset-primary focus:ring-accent outline-none"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="text-xs uppercase tracking-[0.18em] font-semibold px-8 py-3.5 bg-accent text-secondary hover:bg-accent/90 hover:-translate-y-[1px] active:translate-y-0 transition-all disabled:opacity-60"
              >
                {status === "submitting" ? "..." : "Subscribe"}
              </button>
            </div>

            {status === "error" && (
              <p className="mt-3 text-sm text-accent">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}
