'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setOpen(true);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setOpen(false), 4000);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
        <p className="text-white/60">
          I&apos;m excited to collaborate on your next project! Fill out the
          form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Firstname"
            required
            className="bg-primary border-white/10"
          />
          <Input
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Lastname"
            required
            className="bg-primary border-white/10"
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="bg-primary border-white/10"
          />
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="bg-primary border-white/10"
          />
        </div>

        <Select onValueChange={handleSelectChange} value={formData.service}>
          <SelectTrigger className="w-full bg-primary border-white/10">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="web-dev">Web Development</SelectItem>
              <SelectItem value="ui-ux">UI/UX Design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Textarea
          className="h-50 bg-primary border-white/10 resize-none"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <Button
          size="md"
          className="max-w-40"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send message'}
        </Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-dark border-accent/20">
          <DialogHeader>
            <DialogTitle className="text-accent">Message Sent!</DialogTitle>
            <DialogDescription className="text-white/80">
              Thank you! I will get back to you soon.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
