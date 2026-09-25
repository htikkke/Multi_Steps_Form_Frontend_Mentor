import { useContext } from "react";
import { FormContext } from "../App";

export default function SideBar() {
  const { currentStep, setCurrentStep, handleInput } = useContext(FormContext);
  return (
    <div className="bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-center bg-no-repeat p-8 flex flex-col gap-6 min-h-125 min-w-70 rounded-2xl">
      {/* Step-1 */}
      <div
        onClick={() => setCurrentStep(1)}
        className="flex gap-5 items-center group cursor-pointer"
      >
        <p
          className={`w-8 h-8 rounded-full border border-white ${currentStep === 1 ? "text-black bg-custom-blue-200" : "text-white"} flex items-center justify-center text-sm`}
        >
          1
        </p>
        <div className="flex flex-col">
          <p className="text-custom-purple-200 uppercase text-xs font-normal">
            Step-1
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider">
            Your info
          </p>
        </div>
      </div>
      {/* Step-2 */}
      <div
        onClick={() => {
          if (currentStep === 1) {
            handleInput(2);
          } else {
            setCurrentStep(2);
          }
        }}
        className="flex gap-5 items-center group cursor-pointer"
      >
        <p
          className={`w-8 h-8 rounded-full border border-white ${currentStep === 2 ? "text-black bg-custom-blue-200" : "text-white"} flex items-center justify-center text-sm`}
        >
          2
        </p>
        <div className="flex flex-col">
          <p className="text-custom-purple-200 uppercase text-xs font-normal">
            Step-2
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider">
            Select Plan
          </p>
        </div>
      </div>
      {/* Step-3 */}
      <div
        onClick={() => {
          if (currentStep === 1) {
            handleInput(3);
          } else {
            setCurrentStep(3);
          }
        }}
        className="flex gap-5 items-center group cursor-pointer"
      >
        <p
          className={`w-8 h-8 rounded-full border border-white ${currentStep === 3 ? "text-black bg-custom-blue-200" : "text-white"} flex items-center justify-center text-sm`}
        >
          3
        </p>
        <div className="flex flex-col">
          <p className="text-custom-purple-200 uppercase text-xs font-normal">
            Step-3
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider">
            Add-Ons
          </p>
        </div>
      </div>
      {/* Step-4 */}
      <div
        onClick={() => {
          if (currentStep === 1) {
            handleInput(4);
          } else {
            setCurrentStep(4);
          }
        }}
        className="flex gap-5 items-center group cursor-pointer"
      >
        <p
          className={`w-8 h-8 rounded-full border border-white ${currentStep === 4 ? "text-black bg-custom-blue-200" : "text-white"} flex items-center justify-center text-sm`}
        >
          4
        </p>
        <div className="flex flex-col">
          <p className="text-custom-purple-200 uppercase text-xs font-normal">
            Step-4
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider">
            Summary
          </p>
        </div>
      </div>
    </div>
  );
}
