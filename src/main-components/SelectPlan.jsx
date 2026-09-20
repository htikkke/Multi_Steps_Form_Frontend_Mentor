import { useContext } from "react";
import PlanCard from "../side-components/PlanCard";
import { FormContext } from "../App";

const PLANS = [
  {
    id: "arcade",
    title: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: "/assets/images/icon-arcade.svg",
  },
  {
    id: "advanced",
    title: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: "/assets/images/icon-advanced.svg",
  },
  {
    id: "pro",
    title: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: "/assets/images/icon-pro.svg",
  },
];

export default function SelectPlan() {
  const { isYearly, setIsYearly, setCurrentStep } = useContext(FormContext);
  return (
    <div className="rounded-2xl p-8 w-full flex flex-col gap-8">
      {/* Select-Plan-Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-custom-blue-950 text-2xl">
          Select Your Plan
        </h1>
        <p className="font-normal text-custom-grey-500 text-xs">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      {/* Select-Plan-Options */}
      <div className="flex gap-5">
        {PLANS.map((PLAN) => (
          <PlanCard
            key={PLAN.id}
            icon={PLAN.icon}
            title={PLAN.title}
            monthlyPrice={PLAN.monthlyPrice}
            yearlyPrice={PLAN.yearlyPrice}
          />
        ))}
      </div>
      {/* month-year-toggle-button */}
      <div className="flex gap-6 p-2 items-center justify-center bg-slate-50 rounded-lg">
        <p className="text-custom-grey-500 font-bold text-sm">Monthly</p>
        {/* toggle-button */}
        <button
          onClick={() => setIsYearly(!isYearly)}
          type="button"
          className="w-10 h-5 flex items-center bg-custom-blue-950 rounded-full p-1 cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-custom-blue-950/50"
        >
          {/* white-handle */}
          <div
            className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${isYearly ? "translate-x-5" : "translate-x-0"}`}
          ></div>
        </button>
        <p className="text-custom-grey-500 font-bold text-sm">Yearly</p>
      </div>
      {/* Back-Next-button */}
      <div className="flex justify-between mt-30">
        <button
          onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
          className="rounded-lg text-custom-grey-500 text-sm font-bold cursor-pointer"
        >
          Go Back
        </button>
        <button
          onClick={() => setCurrentStep((currentStep) => currentStep + 1)}
          className="bg-custom-blue-950 rounded-lg text-custom-white py-2.5 px-5 text-sm cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
