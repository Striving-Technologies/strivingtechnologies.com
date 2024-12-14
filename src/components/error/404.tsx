import { InteractiveLink } from "../shared";

export const E404 = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full px-[4.5rem] py-20 text-white tab:py-10 tab:px-8 phone:px-4">
      <div className="max-w-2xl text-center">
        <h1 className="bruno-ace text-5xl text-white mb-10">
          Oops! <span className="bruno-ace">404</span>
        </h1>
        <p className="mb-5 text-xl">
          You've wandered off the map 🗺️. Looks like this page took a little
          vacation. While we track it down, why not head back home? Or maybe
          check out something cool.
        </p>
        <p className="text-xl">
          Don't worry, we're as lost as this page... but we'll find our way
          together! 🚀
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <InteractiveLink
            href="/"
            className="px-4 py-3 flex items-center gap-4 rounded-full border w-min whitespace-nowrap border-white bg-black hover:bg-primary hover:border-black hover:text-black"
          >
            Go Home <span>🏠</span>
          </InteractiveLink>
          <InteractiveLink
            href="/client-work"
            className="px-4 py-3 flex items-center gap-4 rounded-full border w-min whitespace-nowrap border-white bg-black hover:bg-primary hover:border-black hover:text-black"
          >
            Something cool <span>😎</span>
          </InteractiveLink>
        </div>
      </div>
    </section>
  );
};
