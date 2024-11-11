export default function Section({ children }: any) {
  return (
    <section className="col-start-2 col-end-12 mb-28 grid max-w-screen-2xl grid-cols-10 gap-4">
      {children}
    </section>
  );
}
