'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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

import { info } from '@/constants/contactData';

const Contact = () => {
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

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
        alert('Something went wrong: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setOpen(false), 4000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-7.5">
          {/* --- بخش چپ: فرم تماس --- */}
          <div className="xl:w-[54%] order-2 xl:order-0">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I&apos;m excited to collaborate on your next project! Fill out
                the form below to get started.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="h-12 rounded-md border border-white/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="h-12 rounded-md border border-white/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="h-12 rounded-md border border-white/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="h-12 rounded-md border border-white/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
                />
              </div>

              <Select
                onValueChange={handleSelectChange}
                value={formData.service}
              >
                <SelectTrigger className="w-full h-12 rounded-md border border-white/10 bg-primary text-white/60 focus:ring-1 focus:ring-accent focus:border-accent">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                    <SelectItem value="mentorship">Mentorship</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px] rounded-md border border-white/10 focus-visible:ring-1 focus-visible:ring-accent focus-visible:border-accent bg-primary p-4 text-base placeholder:text-white/60 outline-none resize-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here."
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
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-0 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  {/* باکس آیکون */}
                  <div className="w-13 h-13 xl:w-18 bg-[#27272c] text-accent rounded-md flex items-center justify-center text-[28px]">
                    <div className="text-2xl">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60 mb-1">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-dark border-accent/20">
          <DialogHeader>
            <DialogTitle className="text-accent">Message Sent!</DialogTitle>
            <DialogDescription className="text-white/80">
              Thank you for reaching out. I&apos;ve received your message and
              will get back to you via email within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default Contact;
