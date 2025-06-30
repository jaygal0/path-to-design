import { Button } from "@/components/ui/button";
import { Heading } from "../../../components/global/Heading";
import Link from "next/link";

export default function Page() {
  return (
    <div className="md:px-96">
      <Heading
        heading="Thank You!"
        desc="Your submission has been received. We'll get back to you as soon as possible to let you know when your profile is live."
      />

      <Link href="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
