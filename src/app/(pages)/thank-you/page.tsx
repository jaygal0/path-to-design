import { Button } from "@/components/ui/button";
import { Heading } from "../../../components/global/Heading";
import Link from "next/link";
import { mainCTAs } from "@/config/navigation";

export default function Page() {
  return (
    <div className="xl:px-96">
      <Heading
        heading="Thank You!"
        desc={`Joshua here 👋 
          
         Thanks for submitting your post! I'll review your submission and get back to you as soon as possible. It'll usually take about 1-3 days. 
         
         In the meantime, feel free to explore the directory and connect with our amazing community of designers.`}
      />

      <Link href={mainCTAs[1].href}>
        <Button>Explore the Directory</Button>
      </Link>
    </div>
  );
}
