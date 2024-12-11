import { ArrowIcon } from "@/icons";
import { ChangeEvent, FormEvent, useState } from "react";
import { InteractiveLink } from "../shared";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      className="flex flex-col gap-8 max-w-2xl"
      onSubmit={handleSubmit}
    >
      <input
        className="input-default"
        name="name"
        placeholder="Full Name"
        required
        onChange={handleChange}
      />
      <div className="flex gap-4 phone:flex-col phone:gap-8">
        <input
          className="input-default"
          name="email"
          placeholder="E-mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$"
          required
          onChange={handleChange}
        />
        <input
          className="input-default"
          name="phone"
          placeholder="Phone number"
          type="tel"
          pattern="^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
          onChange={handleChange}
        />
      </div>
      <textarea
        className="input-default"
        name="message"
        placeholder="Message"
        required
        rows={4}
        onChange={handleChange}
      />
      <InteractiveLink>
        <button
          className="input-default !w-min whitespace-nowrap flex items-center gap-4 !rounded-full phone:!w-full phone:justify-between hover:bg-primary hover:text-black focus:border-white"
          type="submit"
        >
          Let's connect
          <ArrowIcon className="h-4 w-auto" />
        </button>
      </InteractiveLink>
    </form>
  );
};
