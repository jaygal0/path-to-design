import Section from "./Section";

export function NewsletterFormBox() {
  return (
    <Section>
      <div className="col-start-2 col-end-10 h-min rounded-2xl border p-8">
        <h4 className="mb-2 w-full pb-6 text-3xl font-normal">
          Stay inspired and discover the paths of more designers.
        </h4>
        <form
          className="flex w-full flex-col"
          action="https://pathtodesign.us17.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="e41d9cf2ed34317e99e5891b9" />
          <input type="hidden" name="id" value="9437e60fa0" />
          <div className="flex gap-4">
            <input
              className="w-full border-b-2 border-black p-2 text-stone-950"
              type="email"
              id="MERGE0"
              name="MERGE0"
              placeholder="name@email.com"
            />
            <button
              className="btn-gradient mt-2 w-2/3 cursor-pointer rounded-sm p-2 text-stone-950 hover:bg-slate-300"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
