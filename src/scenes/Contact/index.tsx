import useMediaQuery from "@/hooks/useMediaQuery";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface ContactProps {
  isOpen: boolean;
  isDisabled: boolean;
  toggleMenu: () => void;
}

const Contact: React.FC<ContactProps> = ({
  isOpen,
  isDisabled,
  toggleMenu,
}) => {
  // Updated menuClasses for a 5/6 height of the viewport
  const menuClasses = `fixed bottom-0 left-0 right-0 z-20 w-11/12 se-mobile:w-[98%] mx-auto h-[88%] md:h-[90%] landscape-mobile:h-[82%] transition-transform duration-500 ${
    isOpen ? "translate-y-0" : "translate-y-full"
  } bg-opacity-50 flex flex-col items-center`;

  const isAboveMd = useMediaQuery("(min-width: 1060px)");
  const isAboveSm = useMediaQuery("(min-width: 768px)");
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)",
  );

  return (
    <section className="text-gray-100 dark:text-dark-text-content flex flex-col overflow-hidden">
      <div className={menuClasses}>
        {/* CONTENT========================================================================================*/}
        <div className="project-img w-full h-full p-6 landscape-mobile:p-4 xs:p-16 bg-slide-bg dark:bg-dark-slide-bg dark:bg-opacity-65 rounded-t-xl border-x-[1px] border-t-[1px] border-slide-border dark:border-dark-slide-border bg-opacity-75 backdrop-blur-lg overflow-hidden z-10">
          <ChatBubbleOvalLeftEllipsisIcon
            className="absolute inset-10 sm:inset-20 md:inset-30 lg:inset-80 m-auto text-slide-icon opacity-35 dark:text-dark-slide-icon"
            z-0
          />
          <div
            className={`relative h-full w-full flex flex-col sm:flex-row gap-4 sm:gap-8 transition-opacity ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDuration: isOpen ? "1000ms" : "200ms",
            }}
          >
            {isAboveMd ? (
              <div className="my-auto z-10 w-1/3">
                <h1 className="text-4xl font-bold mb-4 text-text-header dark:text-dark-text-header">
                  Let's Talk!
                </h1>
                <p className="text-md text-text-content dark:text-dark-text-content">
                  Got a project in mind or just want to say hi? Drop me a line.
                  Let's create something incredible together.
                </p>
              </div>
            ) : (
              <div className="my-auto flex flex-col gap-4 sm:gap-8 z-10 xs:w-3/4 landscape-mobile:hidden">
                <h1 className="text-2xl font-bold text-text-header dark:text-dark-text-header">
                  Let's Talk!
                </h1>
                <p className="text-md text-text-content dark:text-dark-text-content se:hidden">
                  Got a project in mind or just want to say hi? Drop me a line.
                  Let's create something incredible together.
                </p>
              </div>
            )}
            <div className="w-full sm:w-3/4 md:w-2/3 landscape-mobile:w-full my-auto landscape-mobile:my-0">
              <form
                target="_blank"
                action="https://formsubmit.co/ansonhunnell@gmail.com"
                method="POST"
                className="flex flex-col w-full md:ml-auto lg:w-3/4 z-10 landscape-mobile:pr-6"
              >
                <div className="flex flex-col landscape-mobile:flex-row gap-4 landscape-mobile:gap-2 mb-4 landscape-mobile:mb-2">
                  <input
                    type="text"
                    name="name"
                    className="flex-1 border-[1px] rounded-lg border-slide-border dark:border-dark-input-border  bg-input-bg dark:bg-dark-input-bg p-2 text-lg landscape-mobile:text-md hover:border-zinc-400 dark:hover:border-stone-200"
                    placeholder="Name"
                    required
                    maxLength={100}
                  />

                  <input
                    type="email"
                    name="email"
                    className="flex-1 border-[1px] rounded-lg border-slide-border dark:border-dark-input-border bg-input-bg dark:bg-dark-input-bg p-2 text-lg landscape-mobile:text-md hover:border-zinc-400 dark:hover:border-stone-200"
                    placeholder="Email"
                    required
                    maxLength={100}
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  className="mb-4 w-full border-[1px] rounded-lg border-slide-border dark:border-dark-input-border bg-input-bg dark:bg-dark-input-bg p-2 text-lg landscape-mobile:text-md hover:border-zinc-400 dark:hover:border-stone-200"
                  name="message"
                  rows={isLandscapeMobile ? 3 : 6}
                  required
                  maxLength={500}
                ></textarea>

                <button
                  type="submit"
                  className="action group relative xs:w-60 bg-input-bg dark:bg-dark-input-bg rounded-lg border border-button-border dark:border-dark-button-border flex items-center justify-center px-8 py-4 landscape-mobile:py-3 hover:bg-zinc-300 hover:border-zinc-200 hover:text-gray-950 dark:hover:bg-stone-700 text-text-content dark:text-dark-text-content dark:hover:text-gray-100 dark:hover:border-stone-600"
                >
                  <p className="">Send Me a Message!</p>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CLOSE BUTTON */}
        <div>
          {isAboveSm || isLandscapeMobile ? (
            <div
              className={`group h-[calc(100%-2px)] bg-close-bg rounded-tr-xl border-r-slide-border border-r dark:bg-dark-close-bg border-l border-l-zinc-800   border-zinc-600 hover:bg-close-hover dark:hover:bg-dark-close-hover dark:border-l-dark-close-border dark:border-r-dark-slide-border flex items-center justify-center w-8 z-20 ${
                isDisabled ? "opacity-10 cursor-auto z-10" : "cursor-pointer"
              }`}
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
              }}
            >
              {/* CONTENT DIV--------------------------------------------------------------------------------- */}
              <div className="transform -rotate-90 origin-center text-md md:text-md whitespace-nowrap flex gap-2 items-center text-text-content dark:text-dark-text-content group-hover:text-text-header dark:group-hover:text-dark-text-header">
                <XMarkIcon className="h-5 text-indigo-800 group-hover:text-indigo-600" />
                close
              </div>
              {/* ----------------------------------------------------------------------------------------------- */}
            </div>
          ) : (
            <div
              className={`group h-10 w-16 bg-close-bg dark:bg-dark-close-bg hover:bg-close-hover dark:hover:bg-dark-close-hover bg-opacity-80 rounded-tr-lg rounded-bl-lg border border-l  dark:border-dark-slide-border border-zinc-600 dark:border-dark-zinc-600 flex items-center justify-center z-20 ${
                isDisabled ? "opacity-10 cursor-auto z-10" : "cursor-pointer"
              }`}
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: "0", // Changed to top right corner
                right: "0",
              }}
            >
              <XMarkIcon className="h-5 text-indigo-800 dark:text-dark-indigo-800 group-hover:text-indigo-600 dark:group-hover:text-dark-indigo-600" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
