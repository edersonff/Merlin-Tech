import React from "react";
import { FooterHomeSectionLink } from "./type";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/merlinappbr",
    icon: <FaFacebookF className="text-2xl" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/merlinappbr",
    icon: <FaInstagram className="text-2xl" />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/merlinappbr",
    icon: <FaLinkedinIn className="text-2xl" />,
  },
];

export default function FooterHome() {
  return (
    <div className="pt-6 pb-4 bg-neutral-800 center content-px gap-y-20 flex flex-col lg:text-left text-center">
      <div className="content flex lg:flex-row md:flex-row flex-col justify-between lg:h-28 gap-y-10">
        <FooterHomeSection
          name="Customer Support"
          items={[
            {
              name: "Privacy Policy",
              href: "/privacy-policy",
            },
            {
              name: "Terms of Service",
              href: "/terms-of-service",
            },
          ]}
        />
        <FooterHomeSection
          name="Contact us"
          items={[
            {
              name: "📞 1-888-316-2612",
              href: "tel:1-888-316-2612",
            },
            {
              name: "✉ support@merlin.app.br",
              href: "mailto:support@merlin.app.br",
            },
          ]}
        />

        <div className="flex flex-col justify-between lg:h-20 gap-y-2.5">
          <h2 className="text-neutral-50 text-lg font-bold uppercase">
            LET’S BE SOCIAL
          </h2>
          <ul className="flex lg:justify-between justify-center gap-10">
            {SOCIALS.map((item, index) => (
              <li key={index}>
                <Link
                  target="_blank"
                  href={item.href}
                  aria-label={item.name}
                  className="text-justify text-neutral-50 text-lg"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-neutral-50 text-xl text-center">
          © {new Date().getFullYear()} Merlin™. All rights reserved.
        </p>
        <Image
          width={86}
          height={86}
          alt="Merlin Logo"
          src="/merlin/logo.svg"
        />
      </div>
    </div>
  );
}

function FooterHomeSection({
  name,
  items,
}: {
  name: string;
  items: FooterHomeSectionLink[];
}) {
  return (
    <div className="flex flex-col justify-between gap-y-2.5">
      <h2 className="text-neutral-50 text-lg font-bold uppercase">{name}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              aria-label={item.name}
              target="_blank"
              className="text-justify text-neutral-50 text-lg hover:underline hover:text-neutral-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
