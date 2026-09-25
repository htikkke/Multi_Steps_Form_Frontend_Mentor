import { useContext } from "react";
import { FormContext } from "../App";
import AddOnCard from "../side-components/AddOnCard";
import { ADDONS } from "../data/ADDONS";

export default function AddOn() {
  const { setCurrentStep } = useContext(FormContext);

  return (
    <div className="rounded-2xl p-8 w-full flex flex-col gap-8">
      {/* Add-On-header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-custom-blue-950 text-2xl">
          Pick add-ons
        </h1>
        <p className="font-normal text-custom-grey-500 text-xs">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      {/* Add-On-Options */}
      <div className="flex flex-col gap-3">
        {ADDONS.map((ADDON) => (
          <AddOnCard
            key={ADDON.id}
            title={ADDON.title}
            text={ADDON.text}
            monthlyPrice={ADDON.monthlyPrice}
            yearlyPrice={ADDON.yearlyPrice}
          />
        ))}
      </div>
      {/* Back-Next-Buttons */}
      <div className="flex justify-between mt-25">
        <button
          onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
          className="rounded-lg text-custom-grey-500 text-sm font-bold cursor-pointer hover:text-custom-blue-950 transition-colors"
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
