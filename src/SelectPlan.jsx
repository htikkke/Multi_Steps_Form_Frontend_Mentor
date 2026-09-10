export default function SelectPlan() {
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
        {/* Arcade */}
        <div className="w-26 border border-custom-grey-500 p-3 rounded-lg flex flex-col items-start gap-8">
          <img
            src="/public/assets/images/icon-arcade.svg"
            className="w-8 h-8"
          />
          <div className="flex flex-col">
            <p className="font-bold text-[15px] text-custom-blue-950">Arcade</p>
            <p className="font-normal text-xs text-custom-grey-500">$9/mo</p>
          </div>
        </div>
        {/* Advanced */}
        <div className="w-26 border border-custom-grey-500 p-3 rounded-lg flex flex-col items-start gap-8">
          <img
            src="/public/assets/images/icon-advanced.svg"
            className="w-8 h-8"
          />
          <div className="flex flex-col">
            <p className="font-bold text-[15px] text-custom-blue-950">
              Advanced
            </p>
            <p className="font-normal text-xs text-custom-grey-500">$12/mo</p>
          </div>
        </div>
        {/* Pro */}
        <div className="w-26 border border-custom-grey-500 p-3 rounded-lg flex flex-col items-start gap-8">
          <img src="/public/assets/images/icon-pro.svg" className="w-8 h-8" />
          <div className="flex flex-col">
            <p className="font-bold text-[15px] text-custom-blue-950">Pro</p>
            <p className="font-normal text-xs text-custom-grey-500">$15/mo</p>
          </div>
        </div>
      </div>
      {/* month-year-toggle-button */}
      <div className="flex gap-6 p-2 items-center justify-center bg-slate-50 rounded-lg">
        <p className="text-custom-grey-500 font-bold text-sm">Monthly</p>
        <p className="text-custom-grey-500 font-bold text-sm">Yearly</p>
      </div>
      {/* Back-Next-button */}
      <div className="flex justify-between mt-30">
        <button className="rounded-lg text-custom-grey-500 py-2.5 px-5 text-sm font-bold">
          Go Back
        </button>
        <button className="bg-custom-blue-950 rounded-lg text-custom-white py-2.5 px-5 text-sm font-bold">
          Next Step
        </button>
      </div>
    </div>
  );
}
