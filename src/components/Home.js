import logo from "../images/accrued.svg";
import kp from "../images/kleiner-perkins-logo.webp";
import eight from "../images/8VC-logo-black-1.webp";
import square from "../images/Square_Inc._logo.svg.webp";
import cherry from "../images/Logo-Primary.webp";

export default function Home() {
  return (
    <>
      <div class="absolute left-0 right-0 top-2 z-40 pt-14">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="flex items-center justify-between">
              <a aria-label="Home" href="/">
                <img
                  src={logo}
                  style={{ width: "17%" }}
                />
              </a>
              <div class="flex items-center gap-x-8">
                <a
                  class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                  target="_blank"
                  href="https://calendly.com/aidan_/"
                >
                  <span class="relative top-px">Join the Waitlist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex flex-auto overflow-hidden bg-white pt-14">
        <div class="relative isolate flex w-full flex-col pt-9">
          <svg
            aria-hidden="true"
            class="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          >
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1lda:)"
              stroke-width="0"
            ></rect>
            <svg x="50%" y="-96" stroke-width="0" class="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
            </svg>
            <defs>
              <pattern
                id=":R1lda:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none"
              >
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
          <main class="w-full flex-auto">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
              <div class="mx-auto max-w-2xl lg:max-w-none">
                <h1 class="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  AI for underwriting and personalized collections
                </h1>
                <p class="mt-6 text-xl text-neutral-600">
               We're ML researchers from top schools like Berkeley and Georgia Tech looking into financing unpaid invoices and speeding up payments. Accrued helps factors get more customers, keep relationships, and be paid on time.
                </p>
              </div>

              <br />
              <br />
              <div class="flex justify-between items-center">
                <a href="https://www.kleinerperkins.com/">
                  <img
                    class="lazyload flex-shrink-0 object-contain h-16"
                    src={kp}
                  />
                </a>
                <a href="https://www.8vc.com/">
                  <img
                    class="lazyload flex-shrink-0 object-contain h-16"
                    src={eight}
                  />
                </a>
                <a href="https://squareup.com/us/en">
                  <img
                    class="lazyload flex-shrink-0 object-contain h-16"
                    src={square}
                  />
                </a>
                <a href="https://withcherry.com/">
                  <img
                    class="lazyload flex-shrink-0 object-contain h-16"
                    src={cherry}
                  />
                </a>
              </div>
            </div>
          </main>
          <footer class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
                <a aria-label="Home" href="/">
                  <img
                    src={logo}
                    style={{ width: "17%" }}
                  />
                </a>
                <p class="text-sm text-neutral-700">© Accrued, Inc. 2024</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
