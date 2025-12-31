// app/browse/page.tsx
import BrowseProducts from "@/components/directory/BrowseProducts";

async function getData() {
  try {
    const res = await fetch(`${process.env.WEB_SITE}/api/products`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      console.warn("Failed to fetch books: non‑OK response");
      return { products: [] };
    }

    const products = await res.json();
    return { products };
  } catch (error) {
    console.warn("Failed to fetch tools during build:", error);
    return { products: [] };
  }
}

export default async function BrowsePageWrapper() {
  const { products } = await getData();
  return <BrowseProducts products={products} />;
}
