import AddOnCard from "../side-components/AddOnCard";

const ADDONS = [
  {
    id: "Online service",
    title: "Online service",
    text: "Access to multiplayer games",
    monthlyPrice: "+$1/mo",
    yearlyPrice: "+$10/yr",
  },
  {
    id: "Large storage",
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    monthlyPrice: "+$2/mo",
    yearlyPrice: "+$20/yr",
  },
  {
    id: "Customizable Profile",
    title: "Customizable Profile",
    text: "Custom theme on your profile",
    monthlyPrice: "+$2/mo",
    yearlyPrice: "+$20/yr",
  },
];

export default function AddOn() {
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
            id={ADDON.id}
            title={ADDON.title}
            text={ADDON.text}
            monthlyPrice={ADDON.monthlyPrice}
            yearlyPrice={ADDON.yearlyPrice}
          />
        ))}
      </div>
      {/* Back-Next-Buttons */}
      <div className="flex justify-between mt-25">
        <button className="rounded-lg text-custom-grey-500 text-sm font-bold">
          Go Back
        </button>
        <button className="bg-custom-blue-950 rounded-lg text-custom-white py-2.5 px-5 text-sm">
          Next Step
        </button>
      </div>
    </div>
  );
}
