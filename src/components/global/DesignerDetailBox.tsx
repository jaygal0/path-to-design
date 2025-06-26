import dayjs from "dayjs"; // Import dayjs at the top
import { DesignerProps } from "@/types";
import { Country } from "./Country";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, Dribbble, LinkIcon } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export function DesignerDetailBox({
  company,
  country,
  companyURL,
  createdAt,
  dribbble,
  email,
  linkedin,
  firstName,
  instagram,
  lastName,
  role,
  updatedAt,
  website,
  x,
  profileImage,
}: DesignerProps) {
  return (
    <>
      <div className="flex flex-col gap-3 rounded-2xl border p-6">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src={profileImage} />
            <AvatarFallback>{firstName.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <h2 className="flex-grow text-3xl">
            {firstName} {lastName}
          </h2>
          <div>
            Based in
            <Image
              src={`/flags/${country}.svg`}
              width={24}
              height={24}
              alt={`${country}`}
              className="ml-2 inline"
            />
          </div>
        </div>
        <div className="text-xl">
          {role} at {company}
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex justify-start gap-5">
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <LinkIcon className="h-5 w-5" />
                </Button>
              </a>
            )}
            {x && (
              <a
                href={`https://x.com/${x}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
            )}
            {instagram && (
              <a
                href={`https://instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            )}
            {dribbble && (
              <a
                href={`https://dribbble.com/${dribbble}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <Dribbble className="h-5 w-5" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="font-sans text-base text-stone-400">
        {updatedAt == createdAt
          ? `Posted on ${dayjs(updatedAt).format("D MMM, YYYY")}`
          : `Last updated on ${dayjs(updatedAt).format("D MMM, YYYY")}`}
      </p>
    </>
  );
}
