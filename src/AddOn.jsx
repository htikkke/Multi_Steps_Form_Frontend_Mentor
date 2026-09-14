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
        <div className="flex justify-between items-center px-6 py-4 border border-custom-grey-500/50 rounded-lg">
          <div className="flex gap-5 items-center">
            <input
              type="checkbox"
              name="add-on-options"
              className="w-4 h-4 accent-custom-purple-600 cursor-pointer"
            />
            <div>
              <p className="text-sm font-bold text-custom-blue-950">
                Online service
              </p>
              <p className="text-xs font-normal text-custom-grey-500">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-custom-purple-600">+$1/mo</p>
        </div>
        <div className="flex justify-between items-center px-6 py-4 border border-custom-grey-500/50 rounded-lg">
          <div className="flex gap-5 items-center">
            <input
              type="checkbox"
              name="add-on-options"
              className="w-4 h-4 accent-custom-purple-600 cursor-pointer"
            />
            <div>
              <p className="text-sm font-bold text-custom-blue-950">
                Larger storage
              </p>
              <p className="text-xs font-normal text-custom-grey-500">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-custom-purple-600">+$2/mo</p>
        </div>
        <div className="flex justify-between items-center px-6 py-4 border border-custom-grey-500/50 rounded-lg">
          <div className="flex gap-5 items-center">
            <input
              type="checkbox"
              name="add-on-options"
              className="w-4 h-4 accent-custom-purple-600 cursor-pointer"
            />
            <div>
              <p className="text-sm font-bold text-custom-blue-950">
                Customizable Profile
              </p>
              <p className="text-xs font-normal text-custom-grey-500">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-custom-purple-600">+$2/mo</p>
        </div>
      </div>
      {/* Back-Next-Buttons */}
      <div className="flex justify-between mt-30">
        <button className="rounded-lg text-custom-grey-500 text-sm font-bold">
          Go Back
        </button>
        <button className="bg-custom-blue-950 rounded-lg text-custom-white py-2.5 px-5 text-sm font-bold">
          Next Step
        </button>
      </div>
    </div>
  );
}
