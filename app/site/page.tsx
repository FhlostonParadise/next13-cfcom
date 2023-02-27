export default function Page() {
  return (
    <section className="overflow-hidden bg-black pt-8 pb-32">
      <div className="container mx-auto px-4">
        <p className="font-heading mb-6 text-center text-2xl font-semibold text-white">
          Built Using...
        </p>
        <div className="-m-10 flex flex-wrap items-center justify-center pb-10 ">
          <div className="w-auto p-4">
            <img src="/images/next.png" width="100" alt="NextJS" />
          </div>
          <div className="w-auto p-4">
            <img src="/images/tailwind.png" alt="Tailwind" width="100" />
          </div>
          <div className="w-auto p-4">
            <img src="/images/vercel-light.png" alt="Vercel" width="100" />
          </div>
          <div className="w-auto p-4">
            <img src="/images/typescript.png" alt="Typescript" width="50" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-md mx-48  tracking-wide text-gray-300 ">
          Rather than use an off the shelf template for a generic portfolio
          site, I figured I would spend some time and see how things have
          changed on the development side of things. I built this site using
          Next 13 and Tailwind. It is very much a work in progress.
        </p>
        <br></br>
        <p className="mx-48  tracking-wide text-gray-400 ">
          I will admit that Tailwind was a tough sell at first. After a few
          hours of reading and watching some introductory videos on it, I was
          hooked. Being able to style as I go with a set of utility classes that
          make sense, was something I never knew I was missing. I plan on adding
          a lot more to this section to do more into more depth on my goals, and
          how I envisioned this site, for now this is what I have.
        </p>
      </div>
    </section>
  );
}
