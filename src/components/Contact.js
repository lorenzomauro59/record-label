"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleCheckboxChange = () => {
    setShowInput(!showInput);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    if (showInput) {
      data.soundcloudLink = String(event.target.soundcloudLink.value);
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
      if (showInput) event.target.soundcloudLink.value = "";
      toast("Message sent succesfully!", {
        icon: "👏",
      });
    }
    if (!response.ok) {
      setLoading(false);
      toast("An error occurred while sending the message.", {
        icon: "❌",
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="md:flex">
          <div className="w-full md:w-1/2 flex flex-col my-4 md:mr-2">
            <label className="font-bold text-white" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              minLength={3}
              maxLength={150}
              required
              className="p-4 bg-gray-50 border border-gray-100 text-black"
              autoComplete="off"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col my-4 md:ml-2">
            <label className="font-bold text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              minLength={5}
              maxLength={150}
              required
              className="p-4 bg-gray-50 border border-gray-100 text-black"
              autoComplete="off"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="w-full flex flex my-4">
          <label className="font-bold text-white mr-4" htmlFor="demoSubmission">
            <input
              className="mr-1"
              type="checkbox"
              id="demoSubmission"
              onChange={handleCheckboxChange}
            />
            Demo Submission
          </label>
          <label className="font-bold text-white" htmlFor="inquiries">
            <input className="mr-1" type="checkbox" id="inquiries" />
            Inquiries
          </label>
        </div>

        {showInput && (
          <div className="w-full flex flex-col my-4">
            <label className="font-bold text-white" htmlFor="soundcloudLink">
              Soundcloud Private Link
            </label>
            <input
              type="text"
              required
              id="soundcloudLink"
              className="p-4 bg-gray-50 border border-gray-100 text-black"
              placeholder="Soundcloud Link"
            />
          </div>
        )}
        <div>
          <label className="font-bold text-white" htmlFor="message">
            Message
          </label>
          <textarea
            rows={4}
            required
            minLength={10}
            maxLength={500}
            id="message"
            className="w-full p-4 bg-gray-50 border border-gray-100 text-black"
            placeholder="Write your message..."
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 w-40 bg-gray-800 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-10"
          >
            Send
          </button>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
