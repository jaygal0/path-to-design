// import Image from "next/image";
// import { DesignerDetailBox } from "@/../components/DesignerDetailBox";
// import { AppsUsed } from "@/../components/designer/AppsUsed";
// import { BooksUsed } from "@/../components/designer/BooksUsed";
// import ScrollToTop from "@/../components/global/ScrollToTop";
// import prisma from "@/lib/db";

// async function fetchDesignerData(slug: string) {
//   const res = await fetch(`${process.env.WEB_SITE}/api/designers/${slug}`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) throw new Error("Failed to fetch data");

//   return res.json();
// }

// // Pre-generate static paths for designers
// export async function generateStaticParams() {
//   try {
//     const designers = await prisma.designers.findMany({
//       select: { slug: true },
//     });

//     if (!designers || designers.length === 0) {
//       throw new Error("No designers found.");
//     }

//     return designers.map((designer) => ({
//       slug: designer.slug,
//     }));
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     throw error;
//   }
// }
export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">Uh oh!</h1>
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <p>We can&apos;t seem to find the page you&apos;re looking for.</p>
      </div>
    </div>
  );
}

// export default async function DesignerPage(props: {
//   params: Promise<{ slug: string }>;
// }) {
//   const params = await props.params;
//   const designer = await fetchDesignerData(params.slug);

//   const {
//     apps,
//     answers,
//     books,
//     companies,
//     countries,
//     createdAt,
//     dribble,
//     email,
//     firstName,
//     instagram,
//     lastName,
//     oneLiner,
//     roles,
//     salaries,
//     updatedAt,
//     url,
//     x,
//   } = designer;

//   return (
//     <>
//       <ScrollToTop />
//       <div className="col-span-full col-start-1 row-span-full row-start-1 flex min-h-min flex-col gap-10 pb-72 md:col-span-6 md:col-start-2 lg:col-start-4 lg:col-end-10">
//         <h1 className="mb-20 mt-40 text-4xl font-bold leading-normal md:text-6xl md:leading-tight">
//           &quot;{oneLiner}&quot;
//         </h1>
//         <DesignerDetailBox
//           company={companies.company}
//           companyURL={companies.url}
//           country={countries.country}
//           createdAt={createdAt}
//           dribble={dribble}
//           email={email}
//           firstName={firstName}
//           instagram={instagram}
//           lastName={lastName}
//           role={roles.role}
//           salary={salaries?.salary}
//           updatedAt={updatedAt}
//           url={url}
//           x={x}
//         />
//         <div className="relative aspect-video w-full overflow-hidden rounded-lg">
//           <Image
//             src={`/cover-image-${firstName.toLowerCase()}-${lastName.toLowerCase()}.jpg`}
//             alt={`Portfolio cover image of ${firstName} ${lastName}`}
//             fill
//             priority
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//         <div className="flex flex-col gap-12">
//           {apps.length > 0 && <AppsUsed apps={apps} />}
//           {books.length > 0 && <BooksUsed books={books} />}
//           {answers
//             .sort((a: any, b: any) => {
//               const dateA = new Date(a.questions[0]?.createdAt || 0);
//               const dateB = new Date(b.questions[0]?.createdAt || 0);
//               return dateA.getTime() - dateB.getTime();
//             })
//             .map((answerData: any) => (
//               <div key={answerData.id} className="w-full">
//                 <h3 className="mb-4 font-serif text-2xl text-stone-200">
//                   {answerData.questions.question}
//                 </h3>
//                 {answerData.answer.map((text: string, index: number) => (
//                   <p
//                     key={index}
//                     className="mb-3 font-sans text-lg font-thin leading-relaxed"
//                   >
//                     {text}
//                   </p>
//                 ))}
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }
