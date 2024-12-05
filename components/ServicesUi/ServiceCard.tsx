import React from "react";
import icons from "@/public/images/BtnLearBl.svg"
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string[];
  bgColor: string;
  titleBgColor: string;
  href: string;
  imageSrc: string;
  learnMoreColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  bgColor,
  titleBgColor,
  href,
  imageSrc,
  learnMoreColor,
}) => {
  return (
    <section
      className={`flex overflow-hidden flex-wrap gap-10 justify-between items-center p-12 border border-solid shadow-sm ${bgColor} border-zinc-900 min-w-[240px] rounded-[45px] w-[600px] max-md:px-5 max-md:max-w-full`}
    >
      <div className="flex flex-col justify-center self-stretch my-auto">
        <h2 className="flex flex-col text-3xl font-medium text-black">
          {title.map((line, index) => (
            <span
              key={index}
              className={`px-2 ${titleBgColor} rounded-lg ${
                index > 0 ? "self-start" : ""
              }`}
            >
              {line}
            </span>
          ))}
        </h2>
        <Link href={href}>
          <div
            className={`flex gap-4 items-center self-start mt-24 text-xl leading-snug ${learnMoreColor} max-md:mt-10`}
          >
            <Image
              loading="lazy"
              src={icons}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[41px]"
            />
            <span className="self-stretch my-auto">Learn more</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center self-stretch py-0.5 my-auto w-[210px]">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="object-contain w-[210px]"
        />
      </div>
    </section>
  );
};

export default ServiceCard;
