
export const HeroComponent = () => {
  return (
    // Main Component
    <div>
      {/* Heading Section */}
      <h1 className="text-xl h-auto font-bold leading-tight poppins-regular py-4 md:text-2xl lg:text-4xl lg:mb-10">
        Trust me, 
        <span className="text-emerald-300 font-semibold poppins-regular"> Building Products </span>
        is what I do best.
      </h1>
      {/* Hero Section */}
      <div className="py-4 h-auto flex justify-between lg:w-8/12">
        <div className="flex flex-col justify-between h-auto lg:w-6/12">
          {/* Short Intro Section */}
          <div className="lg:mb-4">
            <p className="text-neutral-300 poppins-light text-sm text-justify leading-relaxed lg:leading-loose">
            “Meet Sahil Ladhania, an aspiring Full-Stack Engineer passionate about building innovative and impactful digital solutions. With a solid foundation in coding and a knack for problem-solving, he loves crafting seamless user experiences and scalable applications. I’m on a journey to master modern technologies and create products that truly matter.”
            </p>
            <p className="poppins-light text-sm text-neutral-400 mt-2 mb-4">
              ~ ChatGPT
            </p>
          </div>
          {/* CTA Section */}
          <div className="">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  View My Work
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
            <button className="bg-black ml-4 underline text-sm cursor-pointer hover:bg-black poppins-medium">
                Hire Me
            </button> 
          </div>
        </div>
        {/* Avatar Section */}
        <div className="block sm:hidden"></div>
        <div className="hidden sm:block ml-4 lg:w-2/12">
          <img className="rounded-xl" src="https://avatars.githubusercontent.com/u/112354898?v=4" alt="avatar" />
        </div>
      </div>
    </div>
  )
}