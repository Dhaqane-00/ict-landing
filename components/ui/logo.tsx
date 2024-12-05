import Link from "next/link";
import LogoImg from "@/public/images/Yagleel.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image
        className="h-8 w-auto"
        src={LogoImg}
        width="32"
        height="32"
        alt="Cruip"
      />
      <h1 className="ml-3 text-xl font-bold font-noto">YAGLEEL</h1>
    </Link>
  );
}
