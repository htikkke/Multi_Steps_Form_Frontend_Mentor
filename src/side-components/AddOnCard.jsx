import { useContext } from "react";
import { FormContext } from "../App";

export default function AddOnCard({ title, text, monthlyPrice, yearlyPrice }) {
  const { isYearly, pickAddOns, setPickAddOns } = useContext(FormContext);
  const toggleAddOns = (title) => {
    setPickAddOns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };
  return (
    <div
      onClick={() => toggleAddOns(title)}
      className={`flex justify-between items-center px-6 py-4 outline-none border ${pickAddOns.has(title) ? "border-custom-purple-600" : "border-custom-grey-500/50"} rounded-lg group hover:border-custom-purple-600 cursor-pointer transition-colors`}
    >
      <div className="flex gap-5 items-center">
        <input
          checked={pickAddOns.has(title)}
          type="checkbox"
          name="add-on-options"
          className="w-4 h-4 accent-custom-purple-600 cursor-pointer group"
        />
        <div>
          <p className="text-sm font-bold text-custom-blue-950">{title}</p>
          <p className="text-xs font-normal text-custom-grey-500">{text}</p>
        </div>
      </div>
      <p className="text-xs font-normal text-custom-purple-600">
        {isYearly ? `${yearlyPrice}` : `${monthlyPrice}`}
      </p>
    </div>
  );
}
