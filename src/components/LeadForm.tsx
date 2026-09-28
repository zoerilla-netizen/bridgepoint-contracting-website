"use client";

import { FormEvent, useState } from "react";
import { COMPANY, FORM_ENDPOINT } from "@/config/siteConfig";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  full?: boolean;
  autoComplete?: string;
};

type Props = {
  fields: Field[];
  submitLabel: string;
  subject: string;           // email subject / form title
  subjectField?: string;     // field whose value is appended to the subject
  successMessage: string;
  note?: string;
};

export default function LeadForm({ fields, submitLabel, subject, subjectField, successMessage, note }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data: Record<string, string> = {};
    fields.forEach((f) => {
      const el = form.elements.namedItem(f.name) as HTMLInputElement | null;
      data[f.name] = el ? el.value.trim() : "";
    });
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value;
    if (honeypot) return; // bot

    const subj = subjectField && data[subjectField] ? `${subject} – ${data[subjectField]}` : subject;

    if (FORM_ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ _subject: subj, ...data }),
        });
        if (!res.ok) throw new Error("bad response");
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    const body = fields.map((f) => `${f.label}: ${data[f.name] || "—"}`).join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  }

  return (
    <form onSubmit={onSubmit} className="form-wrap" noValidate={false}>
      <div className="form-grid">
        {fields.map((f) => {
          const id = `f-${f.name}`;
          const common = { id, name: f.name, required: f.required, autoComplete: f.autoComplete };
          return (
            <div key={f.name} className={`field${f.full || f.type === "textarea" ? " full" : ""}`}>
              <label htmlFor={id}>
                {f.label}
                {f.required ? <span className="req" aria-hidden="true">*</span> : <span className="opt"> (optional)</span>}
              </label>
              {f.type === "select" ? (
                <select {...common} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : f.type === "textarea" ? (
                <textarea {...common} />
              ) : (
                <input {...common} type={f.type || "text"} />
              )}
            </div>
          );
        })}
        <div className="hp" aria-hidden="true">
          <label>Leave blank<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label>
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : submitLabel}
        </button>
        {note && <span className="form-note">{note}</span>}
      </div>
      <div role="status" aria-live="polite">
        {status === "sent" && <p className="form-status">{successMessage}</p>}
        {status === "mailto" && (
          <p className="form-status">
            Your email application should now be open with your request pre-filled. Please send it to
            complete your submission, or email {COMPANY.email} directly.
          </p>
        )}
        {status === "error" && (
          <p className="form-status err">
            We could not send your request. Please email {COMPANY.email} or call {COMPANY.officePhone}.
          </p>
        )}
      </div>
    </form>
  );
}
