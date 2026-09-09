export default function PersonalInfo() {
  return (
    <div className="rounded-2xl p-8 w-full flex flex-col gap-5">
      {/* Personal-Info-Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-custom-blue-950 text-2xl">
          Personal Info
        </h1>
        <p className="font-normal text-custom-grey-500 text-xs">
          {" "}
          Please provide your name, email address, and phone number.
        </p>
      </div>
      {/* Personal-Info-Input-Section */}
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col gap-1">
          <label className="font-bold text-xs text-custom-blue-950">Name</label>
          <input
            type="text"
            placeholder=" e.g. Stephen King"
            className="border border-custom-grey-500 p-2.5 w-full rounded-lg text-sm text-custom-blue-950"
          />
        </div>
        <div>
          <label className="font-bold text-xs text-custom-blue-950">
            Email Address
          </label>
          <input
            type="text"
            placeholder=" e.g. stephenking@lorem.com"
            className="border border-custom-grey-500 p-2.5 w-full rounded-lg text-sm text-custom-blue-950"
          />
        </div>
        <div>
          <label className="font-bold text-xs text-custom-blue-950">
            Phone Number
          </label>
          <input
            type="text"
            placeholder=" e.g. +1 234 567 890"
            className="border border-custom-grey-500 p-2.5 w-full rounded-lg text-sm text-custom-blue-950"
          />
        </div>
      </div>
      {/* Next-Button */}
      <div className="flex justify-end mt-20">
        <button className="bg-custom-blue-950 rounded-lg text-custom-white py-2.5 px-5 text-sm">
          Next Step
        </button>
      </div>
    </div>
  );
}
