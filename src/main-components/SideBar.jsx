import { useContext } from "react";
import { FormContext } from "../App";

export default function SideBar() {
  const { currentStep, setCurrentStep, handleInput } = useContext(FormContext);
  return (
    <div className="bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-center bg-no-repeat p-8 flex flex-col gap-6 min-h-125 min-w-70 rounded-2xl max-[500px]:bg-[url(./assets/images/bg-sidebar-mobile.svg)] max-[500px]:flex-row max-[500px]:min-h-50 max-[500px]:items-center max-[500px]:justify-center max-[500px]:p-0">
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
          <p className="text-custom-purple-200 uppercase text-xs font-normal max-[500px]:hidden">
            Step-1
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider max-[500px]:hidden">
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
          <p className="text-custom-purple-200 uppercase text-xs font-normal max-[500px]:hidden">
            Step-2
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider max-[500px]:hidden">
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
          <p className="text-custom-purple-200 uppercase text-xs font-normal max-[500px]:hidden">
            Step-3
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider max-[500px]:hidden">
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
          <p className="text-custom-purple-200 uppercase text-xs font-normal max-[500px]:hidden">
            Step-4
          </p>
          <p className="text-custom-white uppercase font-bold text-sm tracking-wider max-[500px]:hidden">
            Summary
          </p>
        </div>
      </div>
    </div>
  );
}
