import { Button } from "@/components/ui/button";

export interface Props {
  back?: boolean;
  plausibleEventTracking?: string;
  prop: () => void;
}

export function ButtonForm({ back, plausibleEventTracking, prop }: Props) {
  return (
    <>
      {!back ? (
        <Button
          type="button"
          onClick={prop}
          className={`${plausibleEventTracking} flex items-center gap-4 px-6 py-2`}
        >
          Next
        </Button>
      ) : (
        <Button
          type="button"
          onClick={prop}
          variant="outline"
          className="w-fit cursor-pointer text-left hover:underline"
        >
          Back
        </Button>
      )}
    </>
  );
}
