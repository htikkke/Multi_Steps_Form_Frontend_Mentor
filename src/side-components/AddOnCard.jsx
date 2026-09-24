import { useContext } from "react";
import { FormContext } from "../App";

export default function AddOnCard({ title, text, monthlyPrice, yearlyPrice }) {
  const { isYearly, pickAddOns, setPickAddOns } = useContext(FormContext);
  return (
    <div
      className={`flex justify-between items-center px-6 py-4 outline-none border ${pickAddOns.has(title) ? "border-custom-blue-950" : "border-custom-grey-500/50"} rounded-lg`}
    >
      <div className="flex gap-5 items-center">
        <input
          checked={pickAddOns.has(title)}
          onChange={() => setPickAddOns(title)}
          type="checkbox"
          name="add-on-options"
          className="w-4 h-4 accent-custom-purple-600 cursor-pointer"
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
