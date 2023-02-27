'use client';

export default function ContactPage() {
  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 max-w-md">
            <h2 className="font-heading mt-2 text-4xl font-semibold tracking-widest">
              CONTACT
            </h2>
          </div>
          <div>
            <form action="?" method="POST">
              <div
                className="g-recaptcha"
                data-sitekey="6LdDalwkAAAAAIcLAMG9mSw7i3C0Gtj0doO1tEA1"
              ></div>
              <div className="mb-4">
                <input
                  className="bg-blueGray-50 w-full rounded p-4 text-xs font-semibold leading-none outline-none"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <input
                  className="bg-blueGray-50 w-full rounded p-4 text-xs font-semibold leading-none outline-none"
                  placeholder="Name"
                  name="user_name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="bg-blueGray-50 w-full rounded p-4 text-xs font-semibold leading-none outline-none"
                  placeholder="name@example.com"
                  name="user_email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="bg-blueGray-50 h-24 w-full resize-none rounded p-4 text-xs font-semibold leading-none outline-none"
                  placeholder="Message..."
                ></textarea>
              </div>

              <button
                className="rounded bg-slate-700 py-2 px-8 text-sm font-semibold leading-none text-white hover:bg-blue-700"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
