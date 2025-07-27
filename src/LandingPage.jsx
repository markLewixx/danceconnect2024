import SplashCursor from "./SplashCursor.jsx";

const LandingPage = () => {
  return (
    <>
      <SplashCursor />
      <section className="w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background layers */}
          <div className="absolute inset-0 w-full h-full">
            {/* Rotated background color layer */}
            <div className="absolute inset-0 w-full h-full scale-110  origin-center">
              <img
                src="/dance_connect_assets/SVG/Background color.svg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Radial grain overlay */}
            <div className="absolute inset-0 w-full h-full z-20 scale-110 opacity-40 lg:hidden">
              <img
                src="/dance_connect_assets/SVG/Radial Grain.svg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Light shadow overlay */}
            <div className="absolute inset-0 w-full h-full z-10  opacity-10">
              <img
                src="/dance_connect_assets/SVG/Light Shadow.svg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/*Foot at right*/}
            <div className="absolute top-4 right-4 z-40 rotate-24 w-32 md:w-40 lg:w-48 animate-bounce [animation-duration:2s] ">
              <img
                src="/dance_connect_assets/SVG/At his Feet.svg"
                alt=""
                className="w-full h-auto"
              />
            </div>
            {/*Foot at left*/}
            <div className="absolute bottom-40 left-16 z-40 -rotate-24 scale-x-[-1]   w-24 md:w-32 lg:w-40 animate-bounce [animation-duration:2s] ">
              <img
                src="/dance_connect_assets/SVG/At his Feet.svg"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Hero content container */}
          <div className="relative z-100 flex  w-full h-full">
            <div className="text-center max-w-4xl mx-auto px-4">
              {/* Replace this with your hero copy */}
              <div className="w-full flex justify-center">
                <img
                  src="\dance_connect_assets\SVG\NCOR-logo.svg"
                  alt=""
                  className="w-16"
                />
              </div>
              <div className="">
                {" "}
                <div className="flex justify-center translate-y-8">
                  <img
                    src="/dance_connect_assets/SVG/dance-connect.png"
                    alt="Dance Connect"
                    className="w-full max-w-[250px] h-auto "
                  />
                </div>
                {/* Dancers Prayer Day */}
                <div className="flex justify-center px-4 mt-4">
                  <img
                    src="/dance_connect_assets/SVG/Dancers-Prayer-Day.png"
                    alt="Dancers Prayer Day"
                    className="w-full max-w-[400px] h-auto"
                  />
                </div>
                {/* Theme */}
                <div className="">
                  <h3 className="text-3xl md:text-5xl font-bold -rotate-8 -translate-y-8 text-white font-luckiest tracking-wide">
                    "Art @ his feet"
                  </h3>
                </div>
              </div>
              <div className="flex flex-row flex-nowrap gap-4 items-center  px-4 overflow-x-auto w-fit h-fit">
                {/* Register Dance Crew Button */}
                {/* Register Dance Crew Button */}
                <a
                  href="https://forms.gle/oTJ9AzWCbu4hHpC46
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center hover:bg-[#6a365e] bg-[#71115B] text-white px-6 md:px-8 py-4 rounded-full text-xs md:text-lg font-luckiest  transition-colors whitespace-nowrap w-fit hover:cursor-pointer">
                    REGISTER DANCE CREW NOW
                    <img
                      src="\dance_connect_assets\SVG\SVG\Stalabs.svg"
                      alt="Stalabs Logo"
                      className="ml-2 w-6 h-4 "
                    />
                  </button>
                </a>

                {/* More Information Button */}
                <button className="inline-flex items-center hover:cursor-pointer hover:bg-[#f2b482] bg-[#FA7100] border-2 border-[#71115B] text-[#71115B] px-6 md:px-8 py-4 rounded-full text-xs md:text-lg font-luckiest tracking-wide  transition-colors whitespace-nowrap w-fit">
                  MORE INFORMATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-screen overflow-hidden relative">
          {/* Rotated background color layer */}
          <div className="absolute inset-0 w-full h-full scale-110  origin-center rotate-180 scale-x-[-1] ">
            <img
              src="/dance_connect_assets/SVG/Background color.svg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 w-full h-full z-20 scale-110 opacity-40 lg:hidden">
            <img
              src="/dance_connect_assets/SVG/Radial Grain.svg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
