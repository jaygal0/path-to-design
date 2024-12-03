import dayjs from "dayjs"; // Import dayjs at the top
import { DesignerProps } from "./type";
import { Avatar } from "./Avatar";

export function DesignerDetailBox({
  company,
  country,
  companyURL,
  createdAt,
  dribble,
  email,
  firstName,
  instagram,
  lastName,
  role,
  salary,
  updatedAt,
  url,
  x,
}: DesignerProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="designer-box-gradient flex flex-col justify-between gap-2 rounded-md p-4 font-sans text-stone-950 md:flex-row">
        <div className="flex items-center gap-4">
          <Avatar firstName={firstName} lastName={lastName} size="md" />
          <div className="flex flex-col justify-center">
            <div className="text-xl font-semibold">
              {firstName} {lastName}
              {country == "England" && " 🏴"}
              {country == "Mexico" && " 🇲🇽"}
              {country == "Sweden" && " 🇸🇪"}
            </div>
            <div>
              {company == "Self-employed" ? (
                `${role}, ${company}`
              ) : (
                <>
                  {role} at{" "}
                  {companyURL ? (
                    <a
                      className={companyURL && "underline"}
                      href={companyURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company}
                    </a>
                  ) : (
                    <span>{company}</span>
                  )}
                </>
              )}
            </div>
            {url ? (
              <a className="underline" href={url} target="_blank">
                View Website &gt;
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex justify-start gap-5">
            {/* Email Icon */}
            {email ? (
              <a href={`mailto:${email}`}>{/* Email Icon SVG */}</a>
            ) : (
              ""
            )}
            {/* X Icon */}
            {x ? (
              <a href={`http://x.com/${x}`} target="_blank">
                {/* X Icon SVG */}
              </a>
            ) : (
              ""
            )}
            {/* Instagram Icon */}
            {instagram ? (
              <a href={`http://instagram.com/${instagram}`} target="_blank">
                {/* Instagram Icon SVG */}
              </a>
            ) : (
              ""
            )}
            {/* Dribble Icon */}
            {dribble ? (
              <a href={`http://dribble.com/${dribble}`} target="_blank">
                {/* Dribble Icon SVG */}
              </a>
            ) : (
              ""
            )}
          </div>
          <p>
            {salary
              ? `Salary: $${salary.toLocaleString("en-US")}+`
              : "Salary: Non-disclosed"}
          </p>
        </div>
      </div>
      <p className="font-sans text-base text-stone-400">
        {updatedAt == createdAt
          ? `Posted on ${dayjs(updatedAt).format("D MMM, YYYY")}`
          : `Last updated on ${dayjs(updatedAt).format("D MMM, YYYY")}`}
      </p>
    </div>
  );
}
