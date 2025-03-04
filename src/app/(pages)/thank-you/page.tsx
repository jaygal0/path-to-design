import { Button } from "../../../../components/global/Button";
import { Heading } from "../../../../components/global/Heading";

export default function Page() {
  return (
    <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-screen flex-col justify-start py-64 md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-4 xl:pt-72">
      <Heading
        heading="Thanks!"
        desc="Your submission has been received. We'll get back to you as soon as possible to let you know when your profile is live."
      />

      <Button url="/" label="Go Home" />
    </div>
  );
}
