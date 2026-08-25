'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const initialForm = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('submitting');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? 'Your message could not be sent.');
      }

      setFormData(initialForm);
      setSubmitState('success');
      setFeedback('Thanks — your message is on its way. I’ll reply as soon as possible.');
    } catch (error) {
      setSubmitState('error');
      setFeedback(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      );
    }
  };

  const fieldClassName =
    'h-13 rounded-xl border-border bg-card/65 px-4 text-sm placeholder:text-muted-foreground/70 focus-visible:border-primary/50';

  return (
    <form
      className="surface rounded-3xl p-6 sm:p-8"
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      aria-describedby={feedback ? 'contact-feedback' : undefined}
    >
      <div className="mb-7">
        <h2 id="contact-form-title" className="text-xl font-semibold tracking-tight">
          Tell me about the opportunity
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Required fields are marked with{' '}
          <span aria-hidden="true" className="text-primary">
            *
          </span>
          .
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          <span>
            First name <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only"> (required)</span>
          </span>
          <Input
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            autoComplete="given-name"
            placeholder="Your first name"
            required
            maxLength={200}
            className={fieldClassName}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Last name
          <Input
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            autoComplete="family-name"
            placeholder="Your last name"
            maxLength={200}
            className={fieldClassName}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          <span>
            Work email <span aria-hidden="true" className="text-primary">*</span>
            <span className="sr-only"> (required)</span>
          </span>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="you@company.com"
            required
            maxLength={200}
            className={fieldClassName}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Phone <span className="sr-only">(optional)</span>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="Your phone number"
            maxLength={200}
            className={fieldClassName}
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium">
        What can I help with?
        <Select
          value={formData.service}
          onValueChange={(service) => setFormData((current) => ({ ...current, service }))}
        >
          <SelectTrigger
            aria-label="What can I help with?"
            className={`${fieldClassName} w-full data-[size=default]:h-13`}
          >
            <SelectValue placeholder="Choose a focus area" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="senior-role">Senior front-end opportunity</SelectItem>
              <SelectItem value="product-development">Product development</SelectItem>
              <SelectItem value="performance">Performance optimization</SelectItem>
              <SelectItem value="design-system">Design system</SelectItem>
              <SelectItem value="other">Something else</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>

      <label className="mt-5 grid gap-2 text-sm font-medium">
        <span>
          Message <span aria-hidden="true" className="text-primary">*</span>
          <span className="sr-only"> (required)</span>
        </span>
        <Textarea
          className="min-h-38 resize-y rounded-xl border-border bg-card/65 p-4 text-sm placeholder:text-muted-foreground/70 focus-visible:border-primary/50"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about the role, product, or problem you’re working on."
          required
          maxLength={5000}
        />
      </label>

      <label
        aria-hidden="true"
        className="absolute -left-[10000px] top-auto size-px overflow-hidden"
      >
        Website
        <Input
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-muted-foreground">
          Prefer email? Write directly to{' '}
          <a className="text-foreground underline decoration-primary/50 underline-offset-4" href="mailto:masoud.mousavi.dev@gmail.com">
            masoud.mousavi.dev@gmail.com
          </a>
        </p>
        <Button
          size="lg"
          type="submit"
          disabled={submitState === 'submitting'}
          className="h-13 min-w-43 gap-2 rounded-full"
        >
          {submitState === 'submitting' ? (
            <>
              Sending
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
            </>
          ) : (
            <>
              Send message
              <ArrowRight aria-hidden="true" className="size-4" />
            </>
          )}
        </Button>
      </div>

      {feedback ? (
        <p
          id="contact-feedback"
          role={submitState === 'error' ? 'alert' : 'status'}
          className={`mt-5 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${
            submitState === 'success'
              ? 'border-primary/20 bg-primary/8 text-primary'
              : 'border-destructive/30 bg-destructive/8 text-destructive'
          }`}
        >
          {submitState === 'success' ? <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0" /> : null}
          {feedback}
        </p>
      ) : null}
    </form>
  );
};

export default ContactForm;
