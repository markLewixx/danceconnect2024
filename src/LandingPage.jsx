import { useRef, useState } from "react";
import CountdownTimer from "./CountdownTimer.jsx";
import {
  Globe,
  Clock,
  MapPin,
  Calendar,
  Users,
  Video,
  ArrowBigDown,
} from "lucide-react";

const LandingPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      // Hide the button after 2 seconds
      setTimeout(() => setShowButton(false), 2000);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowButton(true); // Show button again on pause
    }
  };
  return (
    <>
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
              <div className="w-screen flex justify-center item-center absolute top-2">
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
                <div className="flex justify-center translate-y-4 animate-slide-in-right">
                  <img
                    src="/dance_connect_assets/SVG/dance-connect.png"
                    alt="Dance Connect"
                    className="w-full max-w-[250px] h-auto "
                  />
                </div>
                {/* Dancers Prayer Day */}
                <div className="flex justify-center px-4 mt-4 animate-slide-in-left ">
                  <img
                    src="\dance_connect_assets\SVG\SVG\Dancers.svg"
                    alt="Dancers Prayer Day"
                    className="w-full max-w-[350px] h-auto"
                  />
                </div>
                {/* Theme */}
                <div className="">
                  <h3 className="text-3xl md:text-5xl font-bold -rotate-8 -translate-y-8 text-white font-luckiest tracking-wide animate-slide-in-right">
                    "Art @ his feet"
                  </h3>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row  w-full flex-nowrap gap-4 items-center   justify-center overflow-x-auto  h-fit animate-slide-in-left">
                {/* Register Dance Crew Button */}
                {/* Register Dance Crew Button */}
                <a
                  href="https://forms.gle/oTJ9AzWCbu4hHpC46
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center  hover:bg-[#6a365e] bg-[#71115B] text-white px-6 md:px-8 py-4 rounded-full text-xs md:text-lg font-luckiest  transition-colors whitespace-nowrap  hover:cursor-pointer">
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
                <div className="relative   font-luckiest col-span-6 sm:col-span-8 lg:col-span-12 bg-[#71115B] rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-[#FA7100] border-2 border-orange-400">
                  <div className="flex flex-row justify-between  gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                      <h2 className="text-xl sm:text-lg lg:text-2xl xl:text-3xl font-bold">
                        AUGUST 10 2025
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                      <h2 className="text-xl sm:text-lg lg:text-2xl xl:text-3xl font-bold">
                        2PM to 5PM
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Event Title - Spans 4 cols mobile, 5 cols tablet, 6 cols desktop */}
                <div className="relative col-span-4 sm:col-span-5 lg:col-span-6 bg-gradient-to-r from-purple-700 to-orange-500 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-white flex items-center justify-between">
                  {/* Logo container */}
                  <div className="flex justify-center w-full space-x-4 sm:space-x-6 lg:space-x-8 bg-white rounded-2xl p-3">
                    {/* Logo 1 */}
                    <a
                      href="https://www.instagram.com/generation_3d/?hl=en"
                      className="transform transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none "
                    >
                      <img
                        src="\dance_connect_assets\SVG\3D logo.svg"
                        alt="3D logo"
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-md shadow-md"
                      />
                    </a>
 <a
                      href="https://www.instagram.com/stalab_studios/?hl=en"
                      className="transform transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none"
                    >
                      <img
                        src="\dance_connect_assets\SVG\Stalabs Logo.svg"
                        alt="Stalabs logo"
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-md shadow-md"
                      />
                    </a>
                    {/* Logo 2 */}
                    <a
                      href="https://www.instagram.com/nextgenchurch_ke/?hl=en"
                      className="transform transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none"
                    >
                      <img
                        src="\dance_connect_assets\SVG\NextGen Logo.svg"
                        alt="Next Gen loog"
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-md shadow-md"
                      />
                    </a>

                    {/* Logo 3 */}
                   
                  </div>

                  {/* Background text (optional) */}
                  <div className="text-2xl sm:text-3xl lg:text-6xl xl:text-7xl opacity-20">
                    {/* Optional text or icon */}
                  </div>
                </div>

                {/* Theme Card */}
                <div className="col-span-2 sm:col-span-3 lg:col-span-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-purple-400 relative overflow-hidden flex flex-col justify-center gap-4 ">
                  <div className="absolute -top-5 -right-5 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-white opacity-10 rounded-full"></div>
                  <h4 className="text-purple-200 font-semibold text-xs sm:text-sm lg:text-lg xl:text-xl mb-1 lg:mb-2">
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
                  <h4 className="text-orange-300 font-semibold text-xs sm:text-sm lg:text-lg xl:text-xl mb-1 lg:mb-2">
                    VENUE:
                  </h4>
                  <h3 className="text-2xl sm:text-sm lg:text-xl xl:text-2xl font-bold transform -rotate-1 leading-tight font-luckiest ">
                    NAIROBI CHAPEL
                    <br />
                    ONGATA RONGAI
                  </h3>
                </div>

                {/* Video Player - Large center piece */}
                <div className="relative col-span-3 sm:col-span-3 sm:row-span-6  lg:col-span-6 row-span-2 bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 border-2 border-orange-400 flex flex-col items-center justify-center z-1000">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3 lg:mb-4">
                    <Video className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-400" />
                    <h4 className="text-orange-400 font-bold text-xs sm:text-sm lg:text-lg xl:text-xl">
                      A Welcome For You
                    </h4>
                  </div>
                  <div
                    onClick={togglePlay}
                    className="aspect-[9/16] sm:aspect-video lg:aspect-[9/16] h-full w-full max-w-[150px] sm:max-w-none lg:max-w-[300px] border-2 sm:border-3 lg:border-4 border-orange-400 rounded-xl lg:rounded-2xl overflow-hidden bg-gray-800"
                  >
                    <video
                      ref={videoRef}
                      src="\dance_connect_assets\Danceconnect.mp4"
                      preload="auto"
                      type="video/mp4"
                      className="w-full h-full object-cover"
                      playsInline
                      poster="\dance_connect_assets\SVG\video-poster.png"
                      onError={() => console.error("Video failed to load")}
                      onLoadedData={() => console.log("Video loaded")}
                    />
                    {showButton && (
                      <button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     bg-black/60 text-white text-3xl rounded-full p-4 transition-opacity duration-300"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering video toggle twice
                          togglePlay();
                        }}
                      >
                        {isPlaying ? "❚❚" : "▶"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="relative flex flex-col justify-center gap-4  col-span-3 sm:col-span-4 lg:col-span-3 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-purple-400">
                  <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 lg:mb-4">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-700" />
                    <h4 className="text-purple-700 font-bold text-xs sm:text-sm lg:text-lg xl:text-xl">
                      Days Remaining
                    </h4>
                  </div>
                  <CountdownTimer
                    className="text-purple-700 font-luckiest text-2xl"
                    targetDate="2025-08-10T14:00:00"
                  />
                </div>

                {/* Number for info */}
                <div className="relative col-span-4 sm:col-span-4 lg:col-span-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 text-white border-2 border-purple-400 flex flex-col justify-center">
                  <h5 className="text-purple-200 font-semibold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 lg:mb-4 text-center leading-tight">
                    For more info call
                  </h5>

                  <div className="font-luckiest text-xl sm:text-3xl text-center">
                    <p>0791722551</p>
                    <p>0111801208</p>
                  </div>
                </div>

                {/* Map Directions Button */}
                <div className="relative col-span-2 sm:col-span-8 lg:col-span-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 border-2 border-orange-400 flex items-center justify-center">
                  <a
                    href="https://www.google.com/maps/dir//JP5P%2BGXF+Nairobi+Chapel+Ongata+Rongai,+Nairobi/@-1.393552,36.721356,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x182f059ba1f56fb7:0xb8663ec8bf363711!2m2!1d36.7374352!2d-1.3911982?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-fit  h-fit py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-6 rounded-xl lg:rounded-2xl border-2 border-purple-700 flex items-center gap-2 transition-all transform hover:scale-105 text-xs sm:text-sm lg:text-base">
                      GET DIRECTIONS
                    </button>
                  </a>
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
