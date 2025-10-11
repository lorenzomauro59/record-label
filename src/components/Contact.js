"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleCheckboxChange = () => setShowInput(!showInput);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    if (showInput) {
      data.soundcloudLink = event.target.soundcloudLink.value;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      event.target.reset();
      toast("Message sent succesfully!", { icon: "👏" });
    } else {
      setLoading(false);
      toast("An error occurred while sending the message.", { icon: "❌" });
    }
  }

  return (
    <>
      <div className="w-full max-w-3xl px-10 mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-semibold tracking-wide leading-tight animate-fadeInScale mb-16 text-white">
          Contacto / Demo
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="md:flex">
            <div className="w-full md:w-1/2 flex flex-col my-4 md:mr-2">
              <label className="font-bold text-white" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                minLength={3}
                maxLength={150}
                required
                className="p-4 bg-gray-50 border border-gray-100 text-black"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col my-4 md:ml-2">
              <label className="font-bold text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                minLength={5}
                maxLength={150}
                required
                className="p-4 bg-gray-50 border border-gray-100 text-black"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex flex-wrap my-4 space-x-6">
            <label className="font-bold text-white flex items-center">
              <input
                type="checkbox"
                id="demoSubmission"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Demo Link
            </label>
            <label className="font-bold text-white flex items-center">
              <input type="checkbox" id="inquiries" className="mr-2" />
              Consultas
            </label>
          </div>

          {showInput && (
            <div className="flex flex-col my-4">
              <label className="font-bold text-white" htmlFor="soundcloudLink">
                Soundcloud Private Link
              </label>
              <input
                type="text"
                id="soundcloudLink"
                required
                className="p-4 bg-gray-50 border border-gray-100 text-black"
                placeholder="Soundcloud Link"
              />
            </div>
          )}

          <div className="my-4">
            <label className="font-bold text-white" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              minLength={10}
              maxLength={500}
              required
              className="w-full p-4 bg-gray-50 border border-gray-100 text-black"
              placeholder="Write your message..."
            />
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 w-40 bg-gray-800 text-white font-medium disabled:bg-gray-400 disabled:text-gray-100"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
