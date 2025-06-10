
export const AboutComponent = () => {
    return (
      // Main Component
      <div className="lg:mb-40">
      {/* Heading Section */}
      <h1 className="text-xl font-bold leading-tight poppins-regular py-4 lg:text-4xl lg:mb-20">
        Hey! I'm
        <span className="text-emerald-300 font-semibold poppins-regular"> Sahil Ladhania </span>
        and I'm a Software Engineer. 
      </h1>
      {/* About Section */}
      <div className="flex justify-between mt-10">
        {/* Content Section */}
        <div className="lg:w-10/12">
            <p className="mb-4 md:mb-12 text-justify text-neutral-300 poppins-light text-sm leading-relaxed md:leading-loose">
              I wasn’t interested in engineering at all when I was in 12th grade, which is why I chose to pursue BBA. But life had other plans for me.
            </p>
            <p className="mb-4 md:mb-12 text-justify text-neutral-300 poppins-light text-sm leading-relaxed md:leading-loose">
              When I moved to Delhi for college, I often visited my brother, who is a software engineer. On weekends, he would sometimes work, and I couldn’t resist asking him about his job. What stood out was the <span className="text-white font-bold">passion</span> with which he explained how things worked. The way he talked about software development made it sound both <span className="text-white font-bold">complex and fascinating</span>.
            </p>
            <p className="mb-4 md:mb-12 text-justify text-neutral-300 poppins-light text-sm leading-relaxed md:leading-loose">
              That curiosity sparked something in me. I remember the <span className="text-white font-bold">first program I ever wrote</span> was to print a triangle. It seemed so tough initially, but figuring it out filled me with a sense of <span className="text-white font-bold">accomplishment and endless curiosity</span>. It was at that moment I realized how much I enjoyed solving problems through code.
            </p>
            <p className="mb-4 md:mb-12 text-justify text-neutral-300 poppins-light text-sm leading-relaxed md:leading-loose">
              One day, I mustered the courage to tell my brother, <span className="text-white font-bold">“I want to do this full-time.”</span> That day marked the <span className="text-white font-bold">beginning of my journey in programming</span> . Since then, I’ve been dedicated to <span className="text-white font-bold">learning and growing</span> , fueled by the same curiosity that first got me started.
            </p>
        </div>
      </div>
    </div>
    )
};