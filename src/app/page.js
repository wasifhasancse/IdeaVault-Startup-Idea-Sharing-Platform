import PrimaryButton from "@/components/Button/PrimaryButton";
import SecondaryButton from "@/components/Button/SecondaryButton";
import LogoWithAnimation from "@/components/Navbar/LogoWithAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <PrimaryButton />
      <SecondaryButton />
      <LogoWithAnimation/>
    </div>
  );
}
