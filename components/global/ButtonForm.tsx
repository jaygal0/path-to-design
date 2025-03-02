export interface Props {
  back?: boolean;
  prop: () => void;
}

export function ButtonForm({ back, prop }: Props) {
  return (
    <>
      {!back ? (
        <button
          type="button"
          className="mt-8 flex w-fit items-center gap-4 rounded-md border bg-none px-6 py-2 font-sans text-white transition-all hover:scale-105"
          onClick={prop}
        >
          Next
          <svg
            width="45"
            height="8"
            viewBox="0 0 45 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.8536 4.35355C45.0488 4.15829 45.0488 3.84171 44.8536 3.64645L41.6716 0.464466C41.4763 0.269204 41.1597 0.269204 40.9645 0.464466C40.7692 0.659728 40.7692 0.976311 40.9645 1.17157L43.7929 4L40.9645 6.82843C40.7692 7.02369 40.7692 7.34027 40.9645 7.53553C41.1597 7.7308 41.4763 7.7308 41.6716 7.53553L44.8536 4.35355ZM0.5 4.5H44.5V3.5H0.5V4.5Z"
              fill="#FAFAFA"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          onClick={prop}
          className="mb-8 w-fit cursor-pointer text-left font-sans hover:underline"
        >
          &#x276E; Back
        </button>
      )}
    </>
  );
}
