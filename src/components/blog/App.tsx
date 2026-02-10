import Image from "next/image";

type AppProps = {
  name: string;
  image: string;
};

export function App({ name, image }: AppProps) {
  return (
    <Image
      src={`/apps/${image}`}
      alt={`${name} logo`}
      width={80}
      height={80}
      className="-mb-8 rounded-2xl"
    />
  );
}
