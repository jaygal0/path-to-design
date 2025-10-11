export function ProductsUsed({
  product = [],
}: {
  product?: { name: string; url: string }[];
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
      <div className="mb-8 flex flex-col flex-wrap gap-4">
        {sortedProducts.map((prod) => (
          <a
            key={prod.name}
            href={prod.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline"
          >
            {prod.name}
          </a>
        ))}
      </div>
    </div>
  );
}
