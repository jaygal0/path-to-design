import { Button } from "../../../components/global/Button";
import { Heading } from "../../../components/global/Heading";

export default function Page() {
  return (
    <div className="md:px-96">
      <Heading
        heading="Thanks!"
        desc="Your submission has been received. We'll get back to you as soon as possible to let you know when your profile is live."
      />

      <Button url="/" label="Go Home" />
    </div>
  );
}
