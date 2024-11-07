export function NewsletterForm() {
  return (
    <div className="fixed bottom-4 right-4 hidden max-w-64 font-sans md:block">
      <h4 className="mb-2 text-lg font-normal">
        Stay inspired and discover the paths of more designers.
      </h4>
      <form
        className="flex flex-col"
        action="https://pathtodesign.us17.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="e41d9cf2ed34317e99e5891b9" />
        <input type="hidden" name="id" value="9437e60fa0" />
        <input
          className="mb-2 border-b-2 border-black p-2 text-stone-950"
          type="email"
          id="MERGE0"
          name="MERGE0"
          placeholder="name@email.com"
        />
        <button
          className="btn-gradient mt-2 cursor-pointer rounded-sm p-2 text-stone-950 hover:bg-slate-300"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
