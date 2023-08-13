"use client";
import Section from "@/components/Section";
import React, { useState } from "react";
import Card from "../Card";
import Input from "../Input";

interface FormData {
  from: string;
  to: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    from: "",
    to: "",
    subject: "",
    message: "",
  });
  return (
    <Section id="contact">
      <div>
        <h2 className="mb-2 font-semibold text-6xl">Lets Connect</h2>
        <form
          className="p-6 bg-background-100 card-gradient relative rounded-2xl
          box-shadow flex flex-col items-center justify-center"
          action=""
        >
          <Input type="name" name="name" />
          <Input type="email" name="email" />
          <div className="pt-5">
            <label
              id="message"
              htmlFor="message"
              className="text-2xl opacity-50"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full outline-none h-28 p-2 resize-none rounded-lg 
              bg-background-300 shadow-inner shadow-background-100"
            />
          </div>
          <button
            className="mt-2 pr-4 pl-4 pt-2 pb-2 opacity-70 hover:opacity-100 transition-all ease-in-out
            bg-primary-200 rounded-2xl shadow-sm shadow-primary-200"
          >
            Send
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
