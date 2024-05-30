export function NewsletterForm() {
  return (
    <div className="hidden">
      <h4 className="text-lg font-semibold">
        Join over 500+ designers sharing their stories.
      </h4>
      <p className="font-light">
        Receive regular tips on how to start your design career.
      </p>
      <form className="flex flex-col" action="">
        <input
          className="mb-2 border-b-2 border-black p-2"
          type="text"
          id="email"
          placeholder="name@email.com"
        />
        <input
          className="mt-2 cursor-pointer bg-slate-500 p-3 hover:bg-slate-300"
          type="submit"
        />
      </form>
    </div>
  );
}
