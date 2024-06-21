export function NewsletterForm() {
  return (
    <div className="fixed bottom-4 right-4 hidden max-w-64 font-sans md:block">
      <h4 className="mb-2 text-lg font-normal">
        Join over 500+ designers sharing their stories.
      </h4>
      <form className="flex flex-col" action="">
        <input
          className="mb-2 border-b-2 border-black p-2"
          type="text"
          id="email"
          placeholder="name@email.com"
        />
        <input
          className="sub-gradient mt-2 cursor-pointer rounded-sm p-2 text-stone-950 hover:bg-slate-300"
          type="submit"
        />
      </form>
    </div>
  );
}
