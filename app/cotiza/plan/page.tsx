"use client";

import clsx from "clsx";
import useAppFormContext from "@/lib/hooks/useAppFormContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// Icons
import arcadeIcon from "@/images/icon-arcade.svg";
import advancedIcon from "@/images/icon-advanced.svg";
import proIcon from "@/images/icon-pro.svg";
import FormWrapper from "@/components/FormWrapper";
import FormActions from "@/components/FormActions";
import useFormStore from "@/store/cotizacionStore";
import { PlacesAutocomplete } from "@/components/MapComponent";

export default function PlanPage() {
  const router = useRouter();
  const { register, trigger, formState, watch, setValue } = useAppFormContext();
  const { isValid } = formState;

  const { setData } = useFormStore();

  const selectedPlan =  watch("plan");
  const selectedBilling = watch("billing");

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      const data = {
        plan: selectedPlan,
        billing: selectedBilling,
      };
      setData({ step: 1, data });
      router.push("/cotiza/info");
    }
  };

  const plans: {
    [key: string]: {
      name: "funerario" | "crematorio" | "futuro";
      icon: any;
      pricePerMonth: number;
      pricePerYear: number;
    };
  } = {
    arcade: {
      name: "funerario",
      icon: arcadeIcon,
      pricePerMonth: 9,
      pricePerYear: 90,
    },
    advanced: {
      name: "crematorio",
      icon: advancedIcon,
      pricePerMonth: 12,
      pricePerYear: 120,
    },
    pro: {
      name: "futuro",
      icon: proIcon,
      pricePerMonth: 15,
      pricePerYear: 150,
    },
  };

  const toggleBilling = () => {
    if (selectedBilling === "monthly") {
      setValue("billing", "yearly");
    } else {
      setValue("billing", "monthly");
    }
  };

  const Plans = Object.values(plans).map((plan) => (
    <label
      key={plan.name}
      className={clsx(
        "flex flex-row gap-x-4 lg:flex-col items-start",
        "cursor-pointer px-4 py-4 lg:pt-5 border",
        "w-full rounded-md transition-colors duration-300",
        selectedPlan === plan.name
          ? "border-greenF bg-alabaster"
          : "border-light-gray bg-transparent hover:border-greenF"
      )}
    >
      <Image src={plan.icon} alt="" width={80} height={80} />
      <div className="flex flex-col lg:mt-2">
        <span className="capitalize font-bold text-marine-blue">
          Servicio {plan.name}
        </span>
        <span className="lg:font-medium text-sm text-cool-gray">
          {selectedBilling === "monthly"
            ? `$${plan.pricePerMonth}/mo`
            : `$${plan.pricePerYear}/yr`}
        </span>
        {selectedBilling === "yearly" && (
          <span className="text-marine-blue mt-1 text-xs font-medium lg:font-bold">
            2 months free
          </span>
        )}
      </div>
      <input
        {...register("plan", { required: "Please select a plan" })}
        type="radio"
        value={plan.name}
        className="hidden"
      />
    </label>
  ));

  return (
    <FormWrapper
      heading="¿Qué servicio necesitas?"
      description="Compara precios de servicios funerarios"
    >
      <div className="flex flex-col mt-5 lg:mt-6">
        <div className="flex gap-x-4 gap-y-3 flex-col lg:flex-row justify-center items-center m-auto">
          {Plans}
        </div>
        <div className="mt-4">
          <span className="text-cool-gray  text-2xl greenFn mr-2">
            ¿Donde?
          </span>
          <PlacesAutocomplete />
        </div>
        <div className="flex justify-center items-center gap-6 bg-alabaster mt-6 lg:mt-8 rounded-lg p-3 lg:p-4">
          <label>
            <span
              className={clsx(
                "text-sm lg:text-base font-bold transition duration-300",
                selectedBilling === "monthly"
                  ? "text-marine-blue"
                  : "text-cool-gray"
              )}
            >
              Mensual
            </span>
            <input
              {...register("billing", {
                required: "Please select your preferred billing-cycle",
              })}
              type="radio"
              value="monthly"
              className="hidden"
            />
          </label>
          <button
            className={clsx(
              "h-[20px] w-[40px] bg-marine-blue rounded-full p-1 flex",
              selectedBilling === "monthly" ? "justify-start" : "justify-end"
            )}
            onClick={toggleBilling}
            type="button"
          >
            <div
              className={clsx("h-full rounded-full aspect-square bg-white")}
            />
          </button>
          <label>
            <span
              className={clsx(
                "text-sm lg:text-base font-bold transition duration-300",
                selectedBilling === "yearly"
                  ? "text-marine-blue"
                  : "text-cool-gray"
              )}
            >
              Anual
            </span>
            <input
              {...register("billing", {
                required: "Please select your preferred billing-cycle",
              })}
              type="radio"
              value="yearly"
              className="hidden"
            />
          </label>
        </div>
      </div>
      {/* <div className="mt-auto flex justify-between items-center"> */}

      <FormActions>
        <button
          type="button"
          className="bg-marine-blue hover:opacity-80 transition duration-300 text-magnolia ml-auto px-[17px] lg:px-8 py-[10px] lg:py-3 text-sm lg:text-base rounded-[4px] lg:rounded-lg"
          onClick={validateStep}
        >
          Siguiente
        </button>
      </FormActions>
    </FormWrapper>
  );
}
