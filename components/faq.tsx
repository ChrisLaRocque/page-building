import { PortableText } from "next-sanity";
export default function FAQ({ heading, body, questions }) {

  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
              {heading}
            </h2>
            {body && (
              <PortableText
                value={body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-gray-500">{children}</p>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-inside list-disc">{children}</ul>
                    ),
                  },
                }}
              />
            )}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-200 ">
            {questions &&
              questions.map(({ question, answer, _key }, i) => {
                return (
                  <div
                    key={_key}
                    className="hs-accordion pb-3 pt-6"
                    id={`hs-basic-with-title-and-arrow-stretched-heading-${i}`}
                  >
                    <button
                      className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 md:text-lg"
                      aria-controls={`hs-basic-with-title-and-arrow-stretched-heading-${i}`}
                    >
                      {question}
                      <svg
                        className="block size-5 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden "
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hidden size-5 flex-shrink-0 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block "
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                    >
                      <p className="text-gray-600 ">{answer}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
