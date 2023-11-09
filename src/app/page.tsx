export default function Home() {
  async function rsvp(formData: FormData) {
    "use server";

    console.log("RSVP", formData.get("rsvp"));
  }

  return (
    <main className="h-screen p-8 md:p-16 bg-no-repeat bg-cover bg-bottom bg-[url('/grannies.jpg')] md:bg-[url('/family.webp')]">
      <div className="mx-auto max-w-md p-4 md:p-8 space-y-6 rounded-2xl bg-slate-900/60 text-center">
        <p className="text-slate-50 text-3xl">Hi Hortle Family!</p>
        <p className="text-slate-50 text-4xl">
          Lilly &amp; Arabella are{" "}
          <span className="whitespace-nowrap">turning 2</span>
        </p>
        <p className="text-slate-50 text-3xl">
          We are having a party and you&apos;re invited
        </p>
        <p className="text-slate-50 text-3xl">Can you make it?</p>
        <form action={rsvp} className=" text-2xl">
          <input name="name" type="hidden" value="my name" />

          <fieldset className="space-x-6">
            <button
              className="rounded px-9 py-2 text-slate-50 bg-cyan-500"
              name="rsvp"
              type="submit"
              value="yes"
            >
              Yes 🥳
            </button>
            <button
              className="rounded px-9 py-2 text-slate-50 bg-indigo-500"
              name="rsvp"
              type="submit"
              value="no"
            >
              No 😞
            </button>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
