import { useRef, useState } from "react";
import Image from "next/image";

export default function HomeContact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      }),
    });

    nameRef.current!.value = "";
    emailRef.current!.value = "";
    messageRef.current!.value = "";
  };

  return (
    <div className="content">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl font-light text-center lg:w-3/4 mb-10 screen-p">
          We help optimize business and project management so you can have the
          freedom to dream, venture, and live! Let&apos;s chat
        </h3>
      </div>
      <div className="flex gap-x-32 my-10 screen-p" id="contact-us">
        <div className="flex-1">
          <h3 className="text-3xl font-bold">Contact Us</h3>

          <form
            className="flex flex-col gap-y-4 mt-4 w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-y-4 items-center w-full">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  ref={nameRef}
                  className="border-2 border-gray-300 bg-gray-50 rounded-md p-2 w-full text-sm"
                  placeholder="Write your name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="company" className="block text-sm mb-2">
                  Phone / Email
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  ref={emailRef}
                  className="border-2 border-gray-300 bg-gray-50 rounded-md p-2 w-full text-sm"
                  placeholder="Write your company's name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  ref={messageRef}
                  className="border-2 border-gray-300 bg-gray-50 rounded-md p-2 h-40 w-full text-sm min-h-[100px] max-h-[200px]"
                  placeholder="I would like to discuss..."
                />
              </div>
              <button className="bg-purple-800 text-white rounded-md py-3 px-8 text-sm w-full">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 lg:block hidden">
          <Image
            src="/merlin/Logo.png"
            width={160}
            height={160}
            alt="Merlin Logo"
            title="Merlin Logo"
            className="mt-10"
          />
        </div>
      </div>
    </div>
  );
}
