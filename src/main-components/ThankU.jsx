export default function ThankU() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center px-18 py-8">
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <img src="/assets/images/icon-thank-you.svg" />
        <p className="font-bold text-custom-blue-950 text-2xl">Thank you!</p>
        <p className="font-normal text-custom-grey-500 text-sm">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
