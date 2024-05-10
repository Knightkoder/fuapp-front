"use client";

import Image from "next/image";
// Icons
import thankYouIcon from "@/images/icon-thank-you.svg";
import { navigate } from "../../../lib/hooks/use-actions";
import useRedirectAfterSomeSeconds from "@/lib/hooks/use-redirect";

export default function ThankYouPage() {
  const { secondsRemaining } = useRedirectAfterSomeSeconds("/dashboard", 5);
  return (
    <section className="flex flex-col justify-center bg-white lg:bg-transparent items-center px-6 lg:px-[100px] py-20 lg:pt-12 lg:pb-4 w-full h-full rounded-lg lg:rounded-none shadow-lg lg:shadow-none">
      {/* <section className="flex flex-col px-6 lg:px-[100px] pt-7 lg:pt-12 pb-8 lg:pb-4 w-full h-full bg-white lg:bg-transparent rounded-lg lg:rounded-none shadow-lg lg:shadow-none"> */}
      <Image src={thankYouIcon} alt="" className="w-[60px] lg:w-auto" />
      <div className="text2xl font-bold text-marine-blue">
        {secondsRemaining} {secondsRemaining > 1 ? "segundos" : "segundo"}
      </div>
      <h1 className="text-2xl lg:text-[32px] font-bold text-marine-blue mt-6">
        En proceso...
      </h1>
      <p className="text-cool-gray text-center mt-2">
        Según la información entregada, estamos recabando las mejores opciones
      </p>

    </section>
  );
}
