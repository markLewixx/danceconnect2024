import CountdownTimer from "./CountdownTimer.jsx";
import SplashCursor from "./SplashCursor.jsx";


const LandingPage = () => {
  return (
    <>
      <SplashCursor />
      <section className="w-full h-dvh overflow-hidden">
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
          <div className="relative z-100 flex  w-full h-full justify-center items-center">
            <a
              href="https://nairobichapelrongai.or.ke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full flex justify-center absolute top-2">
                <img
                  src="\dance_connect_assets\SVG\NCOR-logo.svg"
                  alt=""
                  className="w-16"
                />
              </div>
            </a>
            <div className="text-center max-w-4xl mx-auto px-4 flex flex-col gap-4">
              {/* Replace this with your hero copy */}

              <div>
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
                <a href="#details">
                  <button className="inline-flex items-center hover:cursor-pointer hover:bg-[#f2b482] bg-[#FA7100] border-2 border-[#71115B] text-[#71115B] px-6 md:px-8 py-4 rounded-full text-xs md:text-lg font-luckiest tracking-wide  transition-colors whitespace-nowrap w-fit">
                    MORE INFORMATION
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*SECTION 2 */}
      <section id="details" className="w-full h-fit overflow-hidden">
        <div className="w-full h-[1300px] overflow-hidden relative">
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

          <div className="relative z-100 w-screen h-screen bg-transparent text-white font-luckiest flex flex-col items-center justify-between ">
            {/* Header: Date & Time */}
            <div className="w-full bg-[#71115B] text-[#FA7100] flex flex-row  justify-evenly items-center py-4 text-xl sm:text-2xl ">
              <h3>AUGUST 10 2025</h3>
              <h3>2PM to 5PM</h3>
            </div>

            {/* Theme */}
            <div className="text-center mt-4">
              <h4 className="text-[#FA7100] text-xl">Theme</h4>
              <h3 className="text-white text-3xl -rotate-2 mt-1">
                “Art @ his feet”
              </h3>
            </div>

            {/* Venue */}
            <div className="text-center mt-4">
              <h4 className="text-[#71115B] text-xl">VENUE:</h4>
              <h3 className="text-white text-2xl -rotate-2 mt-1">
                NAIROBI CHAPEL ONGATA RONGAI
              </h3>
            </div>

            {/* Video Player */}
            <div className="w-full max-w-xl flex justify-center mt-6 p-9">
              <div className="aspect-[9/16]  h-[30rem] border-4 border-[#FA7100] rounded-xl overflow-hidden">
                <video className="w-full h-full object-fit" controls>
                  <source
                    src="\dance_connect_assets\danceConnectVideo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Countdown */}
            <div className="text-center mt-6">
              <h4 className="text-[#FA7100] bg-[#71115B] border-2 border-white px-6 py-2 rounded-xl text-xl mb-2 inline-block">
                Time Remaining To Event
              </h4>
              <CountdownTimer
                className="text-4xl text-[#71115B] mt-2"
                targetDate="2025-08-10T14:00:00"
              />
            </div>

            {/* Socials & Button */}
            <div className="w-full flex flex-col items-center mt-6 gap-3">
              <h5 className="text-white text-lg text-center">
                CLICK Icons to follow us on Instagram
              </h5>
              <div className="bg-[#FA7100] flex justify-evenly items-center py-3 w-3/4 max-w-lg border-2 border-[#71115B] rounded-xl">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/dance_connect_assets/SVG/Stalabs Logo.svg"
                    alt="stalabs logo"
                    className="w-10"
                  />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/dance_connect_assets/SVG/NextGen Logo.svg"
                    alt="NextGen logo"
                    className="w-10"
                  />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/dance_connect_assets/SVG/3D logo.svg"
                    alt="3d logo"
                    className="w-10 -translate-y-1"
                  />
                </a>
              </div>
              <a href="#">
                <button className="bg-[#FA7100] text-white text-lg px-6 py-3 border-2 border-[#71115B] rounded-xl mt-2 max-w-lg w-fit whitespace-nowrap flex items-center gap-2">
                  
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
