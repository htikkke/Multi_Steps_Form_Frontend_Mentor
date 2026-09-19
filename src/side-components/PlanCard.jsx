import { useContext } from "react";
import { FormContext } from "../App";

export default function PlanCard({ icon, title, monthlyPrice, yearlyPrice }) {
  const { isYearly } = useContext(FormContext);
  return (
    <div className="w-30 h-36 border border-custom-grey-500 p-3 rounded-lg flex flex-col items-start gap-8">
      <img src={icon} alt={title} className="w-8 h-8" />
      <div className="flex flex-col">
        <p className="font-bold text-[15px] text-custom-blue-950">{title}</p>
        <p className="font-normal text-xs text-custom-grey-500">
          {isYearly ? `$${yearlyPrice}/yr` : `$${monthlyPrice}/mo`}
        </p>
        {isYearly && (
          <p className="font-normal text-[11px] text-custom-blue-950 transition-all duration-200">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
}
