export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">
        Thanks for subscribing, but wait...
      </h1>
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <p>
          To complete the subscription process, please click the link in the
          email we just sent you.
        </p>
      </div>
    </div>
  );
}
