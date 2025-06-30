import dayjs from "dayjs"; // Import dayjs at the top
import { DesignerProps } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  LinkIcon,
  MailIcon,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { plausibleEvents } from "@/config/plausibleEvents";

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
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={profileImage} />
            <AvatarFallback>{firstName.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <h2 className="flex-grow text-lg md:text-3xl">
            {firstName} {lastName}
          </h2>
          <Image
            src={`/flags/${country}.svg`}
            width={24}
            height={24}
            alt={`${country}`}
            className="ml-2 inline"
          />
        </div>
        <div className="text-xl">
          {role} at{" "}
          {companyURL ? (
            <a
              href={companyURL}
              target="_blank"
              className="inline-flex items-center gap-1 text-green-400 underline"
              data-event-name={plausibleEvents.VIEW_COMPANY}
            >
              {company}
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            company
          )}
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex justify-start gap-5">
            {email && (
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                data-event-name={plausibleEvents.CONTACT_EMAIL}
              >
                <Button variant="outline" size="icon">
                  <MailIcon className="h-5 w-5" />
                </Button>
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                data-event-name={plausibleEvents.VIEW_WEBSITE}
              >
                <Button variant="outline" size="icon">
                  <LinkIcon className="h-5 w-5" />
                </Button>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-event-name={plausibleEvents.VIEW_LINKEDIN}
              >
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            )}
            {x && (
              <a
                href={`https://x.com/${x}`}
                target="_blank"
                rel="noopener noreferrer"
                data-event-name={plausibleEvents.VIEW_X}
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
                data-event-name={plausibleEvents.VIEW_INSTAGRAM}
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
                data-event-name={plausibleEvents.VIEW_dribbble}
              >
                <Button variant="outline" size="icon">
                  <Dribbble className="h-5 w-5" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">
        {updatedAt == createdAt
          ? `Posted on ${dayjs(updatedAt).format("D MMM, YYYY")}`
          : `Last updated on ${dayjs(updatedAt).format("D MMM, YYYY")}`}
      </p>
    </>
  );
}
