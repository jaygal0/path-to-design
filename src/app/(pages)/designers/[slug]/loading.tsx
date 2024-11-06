import { Spinner } from "../../../../../components/Spinner";

export default function Loading() {
  return (
    <div className="col-start-3 col-end-10 flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">Loading...</h1>
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <Spinner />
      </div>
    </div>
  );
}
