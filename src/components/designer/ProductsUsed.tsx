"use client";

export function ProductsUsed({ product }: any) {
  return (
    <div>
      <h3 className="mb-4 text-xl text-muted-foreground">
        What tools do you use to help you design?
      </h3>
      <div className="mb-8 flex flex-col flex-wrap gap-4">
        {product
          ?.slice() // Create a shallow copy to avoid mutating the original array
          .sort((a: any, b: any) => a.name.localeCompare(b.name)) // Sort alphabetically
          .map((product: any) => {
            return (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${!product.url ? "" : "underline"}`}
              >
                {product.name}
              </a>
            );
          })}
      </div>
    </div>
  );
}
