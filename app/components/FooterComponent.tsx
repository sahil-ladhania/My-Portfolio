export function FooterComponent() {
    return (
      <div className="border-t border-stone-800">
        <footer className="mx-auto h-40 max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 text-stone-400">
          <div className="flex justify-between items-center flex-wrap gap-6 text-sm h-full">
            {/* Left Side */}
            <div className="flex flex-col justify-center space-y-1">
              <p className="font-semibold text-base">Sahil Ladhania</p>
              <p className="text-muted-foreground">
                Building in public at{" "}
                <a href="https://x.com/SahilLadhania" className="text-blue-400">@sahilladhania</a>
              </p>
            </div>

            {/* Middle Section */}
              <div className="text-muted-foreground text-xs">
                  © 2025 Sahil Ladhania. All rights reserved.
              </div>
      
            {/* Right Side */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-right text-sm">
              <div className="flex flex-col items-start h-12 justify-between">
                  <a href="#" className="hover:text-stone-300">LinkedIn</a>
                  <a href="#" className="hover:text-stone-300">GitHub</a>
              </div>
              <div className="flex flex-col items-start h-12 justify-between">
                  <a href="#" className="hover:text-stone-300">Twitter</a>
                  <a href="#" className="hover:text-stone-300">Gmail</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }