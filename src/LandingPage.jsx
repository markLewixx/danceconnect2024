import CountdownTimer from "./CountdownTimer.jsx";
import SplashCursor from "./SplashCursor.jsx";
import { Globe, Clock, MapPin, Calendar, Users, Video, ArrowBigDown } from "lucide-react";

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
        <div className="w-full h-[900px] overflow-hidden relative">
          {/* Rotated background color layer */}
          <div className="absolute inset-0 w-full h-full scale-110  origin-center rotate-180 scale-x-[-1] ">
            <img
              src="/dance_connect_assets/SVG/Background color.svg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 w-full h-full  scale-110 opacity-40 lg:hidden">
            <img
              src="/dance_connect_assets/SVG/Radial Grain.svg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/*Right Foot*/}
          <div className="absolute top-4 right-4  rotate-24 w-32 md:w-40 lg:w-48 animate-bounce [animation-duration:2s] ">
            <img
              src="/dance_connect_assets/SVG/At his Feet.svg"
              alt=""
              className="w-full h-auto"
            />
          </div>
          {/*Foot at left*/}
          <div className="absolute bottom-40 left-16  -rotate-24 scale-x-[-1]   w-24 md:w-32 lg:w-40 animate-bounce [animation-duration:2s] ">
            <img
              src="/dance_connect_assets/SVG/At his Feet.svg"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="min-h-screen  bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 p-2 sm:p-4">
            <div className="max-w-7xl mx-auto">
              {/* Bento Box Grid - Always maintains bento structure */}
              <div className="grid grid-cols-6 sm:grid-cols-8  lg:grid-cols-12 gap-2 sm:gap-3  lg:gap-4 h-screen max-h-[900px] min-h-[600px]">
                {/* Date & Time Header - Full width on all screens */}
                <div className="relative font-luckiest col-span-6 sm:col-span-8 lg:col-span-12 bg-[#71115B] rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-[#FA7100] border-2 border-orange-400">
                  <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                      <h2 className="text-sm sm:text-lg lg:text-2xl xl:text-3xl font-bold">
                        AUGUST 10 2025
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                      <h2 className="text-sm sm:text-lg lg:text-2xl xl:text-3xl font-bold">
                        2PM to 5PM
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Event Title - Spans 4 cols mobile, 5 cols tablet, 6 cols desktop */}
                <div className="relative  col-span-4 sm:col-span-5 lg:col-span-6 bg-gradient-to-r from-purple-700 to-orange-500 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-white flex items-center justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-bold mb-1 lg:mb-2">
                      DANCE CONNECT
                    </h2>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-purple-200">
                      Join us for an amazing dance experience!
                    </p>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-6xl xl:text-7xl opacity-20">
                    🕺
                  </div>
                </div>

                {/* Theme Card */}
                <div className="col-span-2 sm:col-span-3 lg:col-span-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-purple-400 relative overflow-hidden flex flex-col justify-center gap-4 ">
                  <div className="absolute -top-5 -right-5 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-white opacity-10 rounded-full"></div>
                  <h4 className="text-purple-200 text-xs sm:text-sm lg:text-lg xl:text-xl mb-1 lg:mb-2">
                    Theme
                  </h4>
                  <h2 className="text-md m-aut sm:text-base lg:text-2xl xl:text-3xl font-bold transform -rotate-2 leading-tight font-luckiest">
                    "Art @ his feet"
                  </h2>
                </div>

                {/* Venue Card */}
                <div className="flex flex-col justify-center gap-4 col-span-3 sm:col-span-4 lg:col-span-3 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-orange-400 relative">
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                    <MapPin className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-400" />
                  </div>
                  <h4 className="text-orange-300 text-xs sm:text-sm lg:text-lg xl:text-xl mb-1 lg:mb-2">
                    VENUE:
                  </h4>
                  <h3 className="text-2xl sm:text-sm lg:text-xl xl:text-2xl font-bold transform -rotate-1 leading-tight font-luckiest ">
                    NAIROBI CHAPEL
                    <br />
                    ONGATA RONGAI
                  </h3>
                </div>

                {/* Video Player - Large center piece */}
                <div className="relative col-span-3 sm:col-span-4 lg:col-span-6 row-span-2 bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 border-2 border-orange-400 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3 lg:mb-4">
                    <Video className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-400" />
                    <h4 className="text-orange-400 font-bold text-xs sm:text-sm lg:text-lg xl:text-xl">
                      Event Preview
                    </h4>
                  </div>
                  <div className="aspect-[9/16] sm:aspect-video lg:aspect-[9/16] h-full max-h-[200px] sm:max-h-[150px] lg:max-h-[400px] w-full max-w-[150px] sm:max-w-none lg:max-w-[300px] border-2 sm:border-3 lg:border-4 border-orange-400 rounded-xl lg:rounded-2xl overflow-hidden bg-gray-800">
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <div className="text-center p-2">
                        <Video className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 mx-auto mb-2 lg:mb-4 text-orange-400" />
                        <p className="text-xs sm:text-sm">Video Preview</p>
                        <p className="text-xs text-gray-400 mt-1 lg:mt-2 hidden sm:block">
                          dance_connect_assets/danceConnectVideo.mp4
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="relative flex flex-col justify-center gap-4  col-span-3 sm:col-span-4 lg:col-span-3 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-purple-400">
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 lg:mb-4">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-700" />
                    <h4 className="text-purple-700 font-bold text-xs sm:text-sm lg:text-lg xl:text-xl">
                      Time Remaining
                    </h4>
                  </div>
                  <CountdownTimer
                    className="text-purple-700 font-luckiest text-2xl"
                    targetDate="2025-08-10T14:00:00"
                  />
                </div>

                {/* Social Media Links */}
                <div className="relative col-span-4 sm:col-span-4 lg:col-span-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-purple-400">
                  <h5 className="text-purple-200 text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4 text-center leading-tight">
                    For more info click 
                  </h5>
                  <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                    </div>
                  </div>
                </div>

                {/* Map Directions Button */}
                <div className="relative col-span-2 sm:col-span-8 lg:col-span-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 border-2 border-orange-400 flex items-center justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-6 rounded-xl lg:rounded-2xl border-2 border-purple-700 flex items-center gap-2 transition-all transform hover:scale-105 text-xs sm:text-sm lg:text-base">
                    GET DIRECTION
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
