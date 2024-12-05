import React from "react";
import ServiceCard from "./ServiceCard";


const serviceData = [
  {
    title: ["Search engine", "optimization"],
    bgColor: "bg-zinc-100",
    titleBgColor: "bg-lime-300",
    href: "#0",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2bbcf48cd7577c0cc2d31d86ead783a74923700d1b69d9f43dd10bc00b9380a9?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951ed",
    learnMoreColor: "text-black",
  },
  {
    title: ["Pay-per-click", "advertising"],
    bgColor: "bg-lime-300",
    titleBgColor: "bg-white",
    href: "#2",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b3395683621a61a2421a4e04767deebbde296ee765e7078645ffb123167cd3c0?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    learnMoreColor: "text-black",
  },
  {
    title: ["Social Media", "Marketing"],
    bgColor: "bg-zinc-900",
    titleBgColor: "bg-white",
    href: "#3",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/01f332088a6c74120b833b0b54b2102a668b9c33e05b40446823bd2e72714f0e?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    learnMoreColor: "text-white",
  },
  {
    title: ["Email", "Marketing"],
    bgColor: "bg-zinc-100",
    titleBgColor: "bg-lime-300",
    href: "#4",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b101d55fe5f46c3e101677afd07ac456ee480427b91ddf945151b0bec9f9594?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    learnMoreColor: "text-black",
  },
];

const ServiceGrid: React.FC = () => {
  return (
    <main className="flex flex-col items-center ">
      {[0, 2, 4].map((startIndex) => (
        <div
          key={startIndex}
          className="flex flex-wrap gap-10 items-start px-24 mt-10 max-md:px-5 max-md:max-w-full"
        >
          {serviceData
            .slice(startIndex, startIndex + 2)
            .map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
        </div>
      ))}
    </main>
  );
};

export default ServiceGrid;
