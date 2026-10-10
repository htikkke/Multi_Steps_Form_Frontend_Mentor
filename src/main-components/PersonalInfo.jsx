import { useContext } from "react";
import { FormContext } from "../App";

export default function PersonalInfo() {
  const {
    name,
    setName,
    email,
    setEmail,
    number,
    setNumber,
    errors,
    handleInput,
  } = useContext(FormContext);
  return (
    <div className="rounded-2xl p-8 w-full flex flex-col gap-8 max-[500px]:shadow-2xl">
      {/* Personal-Info-Header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-custom-blue-950 text-2xl">
          Personal Info
        </h1>
        <p className="font-normal text-custom-grey-500 text-xs">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      {/* Personal-Info-Input-Section */}
      <div className="flex flex-col gap-5 mt-5">
        {/* name-field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="font-bold text-xs text-custom-blue-950">
              Name
            </label>
            {/* error */}
            {errors.name && (
              <label className={`font-bold text-xs text-custom-red-500`}>
                {errors.name}
              </label>
            )}
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder=" e.g. Stephen King"
            className={`border ${errors.name ? "border-custom-red-500" : "border-custom-grey-500"} p-2.5 w-full rounded-lg text-sm text-custom-blue-950 cursor-pointer outline-none focus:border focus:border-custom-purple-300`}
          />
        </div>
        {/* email-field */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="font-bold text-xs text-custom-blue-950"
            >
              Email Address
            </label>
            {/* error */}
            {errors.email && (
              <p
                id="email-error"
                className="font-bold text-xs text-custom-red-500"
              >
                {errors.email}
              </p>
            )}
          </div>
          <input
            id="email"
            type="text"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder=" e.g. stephenking@lorem.com"
            className={`border ${errors.email ? "border-custom-red-500" : "border-custom-grey-500"} p-2.5 w-full rounded-lg text-sm text-custom-blue-950 cursor-pointer outline-none focus:border focus:border-custom-purple-300`}
          />
        </div>
        {/* number-field */}
        <div>
          <div className="flex items-center justify-between">
            <label className="font-bold text-xs text-custom-blue-950">
              Phone Number
            </label>
            {/* error */}
            {errors.number && (
              <label className="font-bold text-xs text-custom-red-500">
                {errors.number}
              </label>
            )}
          </div>
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type="text"
            placeholder=" e.g. +1 234 567 890"
            className={`border ${errors.number ? "border-custom-red-500" : "border-custom-grey-500"} p-2.5 w-full rounded-lg text-sm text-custom-blue-950 cursor-pointer outline-none focus:border focus:border-custom-purple-300`}
          />
        </div>
      </div>
      {/* Next-Button */}
      <div className="flex justify-end mt-20">
        <button
          onClick={() => handleInput(2)}
          className="bg-custom-blue-950 rounded-lg text-custom-white py-2.5 px-5 text-sm cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
