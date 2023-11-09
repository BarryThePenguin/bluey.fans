export default function Home() {
  async function rsvp(formData: FormData) {
    "use server";

    console.log("RSVP", formData.get("rsvp"));
  }

  return (
    <main className="h-screen p-8 md:p-16 bg-no-repeat bg-cover bg-bottom bg- bg-[url('/grannies.jpg')] md:bg-[url('/family.webp')]">
      <div className="p-4 md:p-8 space-y-6 rounded-2xl bg-slate-700/50 text-center">
        <p className="text-5xl">
          Lilly &amp; Arabella <span className="whitespace-nowrap">turn 2</span>
        </p>
        <p className="text-4xl">Can you make it?</p>
        <form action={rsvp} className="space-x-6 text-3xl">
          <button
            className="rounded px-9 py-2 bg-cyan-500"
            name="rsvp"
            type="submit"
            value="yes"
          >
            Yes
          </button>
          <button
            className="rounded px-9 py-2 bg-indigo-500"
            name="rsvp"
            type="submit"
            value="no"
          >
            No
          </button>
          <input name="name" type="hidden" value="my name" />
        </form>
      </div>
    </main>
  );
}
