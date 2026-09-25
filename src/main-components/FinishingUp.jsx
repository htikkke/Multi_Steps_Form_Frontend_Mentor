import { useContext } from "react";
import { FormContext } from "../App";
import { ADDONS } from "../data/ADDONS";

export default function FinishingUp() {
  const { setCurrentStep, selectedPlan, isYearly, planFees } =
    useContext(FormContext);

  return (
    <div className="rounded-2xl p-8 w-full flex flex-col gap-8">
      {/* Finishing-Up-Header */}
      <div>
        <h1 className="font-bold text-custom-blue-950 text-2xl">
          Finishing up
        </h1>
        <p className="font-normal text-custom-grey-500 text-xs">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      {/* Check-up-Section */}
      <div className="bg-slate-50 p-4 rounded-lg flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-custom-blue-950 font-bold text-[15px]">
              {selectedPlan} {isYearly ? "(Yearly)" : "(Monthly)"}
            </p>
            <a
              href="#"
              className="text-custom-grey-500 text-xs underline -mt-5"
            >
              Change
            </a>
          </div>
          <p className="text-custom-blue-950 text-sm font-bold">
            ${planFees}/{isYearly ? "yr" : "mo"}
          </p>
        </div>
        <div className="bg-custom-grey-500/50 h-0.5"></div>
        <div className="flex items-center justify-between">
          <p className="text-custom-grey-500 text-sm">Online Service</p>
          <p className="text-custom-blue-950/80 text-sm font-bold">+$1/mo</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-custom-grey-500 text-sm">Large Storage</p>
          <p className="text-custom-blue-950/80 text-sm font-bold">+$2/mo</p>
        </div>
      </div>
      {/* Total-session */}
      <div className="flex items-center justify-between p-4">
        <p className="text-custom-grey-500 text-sm">Total (per month)</p>
        <p className="text-custom-purple-600 text-base font-bold">+$12/mo</p>
      </div>
      {/* Back-Confirm-button */}
      <div className="flex justify-between mt-20">
        <button
          onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
          className="rounded-lg text-custom-grey-500 text-sm font-bold cursor-pointer"
        >
          Go Back
        </button>
        <button
          onClick={() => setCurrentStep(5)}
          className="bg-custom-purple-600 rounded-lg text-custom-white py-2.5 px-5 text-sm cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
