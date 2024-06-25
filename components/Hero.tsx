export function Hero() {
  return (
    <section className="my-20 md:my-40">
      <div className="relative p-12 md:p-16">
        <svg
          className="absolute left-0 top-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3504 0H10.6504V10.6516H0V13.3516H10.6504V24H13.3504V13.3516H24V10.6516H13.3504V0Z"
            fill="white"
          />
        </svg>
        <h1 className="text-gradient text-3xl font-bold leading-tight lg:text-6xl lg:leading-tight">
          Explore the paths designers take to begin, excel, and stay inspired.
        </h1>
        <svg
          className="absolute bottom-0 right-0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3504 0H10.6504V10.6516H0V13.3516H10.6504V24H13.3504V13.3516H24V10.6516H13.3504V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
