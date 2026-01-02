import Image from "next/image";
import Link from "next/link";

export function ProductsUsed({
  product = [],
}: {
  product?: { name: string; slug: string }[];
}) {
  if (product.length === 0) return null;

  const sortedProducts = [...product].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div>
      <h3 className="mb-4 text-xl text-muted-foreground">
        What tools do you use to help you design?
      </h3>
      <div className="mb-8 flex flex-wrap gap-8 gap-y-4">
        {sortedProducts.map((prod) => (
          <Link
            key={prod.name}
            href={`/best-design-tools/${prod.slug}`}
            className="flex w-[100px] flex-col items-center gap-2 text-center"
          >
            <Image
              src={`/tools/${prod.slug}.png`}
              alt={prod.name}
              width={100}
              height={100}
              className="rounded-lg object-contain transition-all hover:scale-105"
            />
            <span className="text-sm text-muted-foreground">{prod.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
