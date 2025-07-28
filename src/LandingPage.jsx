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
      <section id="details" className="w-full h-dvh overflow-hidden">
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

          {/*Main content*/}
          <div className="relative z-100 flex  w-full h-full  flex-col">
            <div className="flex justify-evenly font-luckiest text-2xl text-[#FA7100] w-screen mt-8 bg-[#71115B]">
              <h3>AUGUST 10 2025</h3>
              <h3>2PM to 5PM</h3>
            </div>
            <div className="flex flex-col items-center font-luckiest text-2xl text-[#FA7100] w-screen mt-8">
              <h4>Theme</h4>
              <h3 className="text-white -rotate-4">“Art @ his feet”</h3>
            </div>
            <div className="flex flex-col items-center font-luckiest text-2xl text-[#71115B] w-screen mt-8">
              <h4>VENUE:</h4>
              <h3 className="text-white -rotate-4">NAIROBI CHAPEL ONGATA RONGAI</h3>
            </div>
            <div className="flex flex-col justify-center items-center my-16">
              <h4 className="text-[#FA7100] font-luckiest bg-[#71115B] border-2  p-4 r ">Time Remaining To Event</h4>
              <CountdownTimer
              className="font-luckiest text-5xl text-[#71115B]"
              targetDate="2025-08-10T14:00:00"
            />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <h5 className="text-white  font-luckiest">
                CLICK Icons to follow us on instagram
              </h5>
              <div className="w-full flex justify-center ">
              <div className="bg-[#FA7100] flex justify-evenly align-center py-2 w-3/4 border-2 border-[#71115B] ">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="\dance_connect_assets\SVG\Stalabs Logo.svg" alt="stalabs logo" className="w-10" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="\dance_connect_assets\SVG\NextGen Logo.svg" alt="NextGen logo" className="w-10"/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="\dance_connect_assets\SVG\3D logo.svg" alt="3d logo" className="w-10 -translate-y-1"/>
                </a>
              </div>
              </div>
              <a href=""><button className="w-full bg-[#FA7100] font-luckiest text-white p-4 border-2 border-[#71115B]">GET MAP DIRECTIONS</button></a>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
