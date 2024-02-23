export default function AboutHero() {
  const renderLeft = (
    <div className="w-full h-full 2xl:w-3/5 flex flex-col justify-center gap-5 p-5 lg:p-10 md:p-5 xl:px-24">
      <span className="text-gradient-cyan-to-green text-2xl font-medium">
        Hello, Welcome
      </span>

      <p className="text-5xl text-white">I'm Sami Diriğ</p>

      <p className="text-md text-gray-400 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <button
        href="/contact"
        className="text-black font-semibold bg-gradient-to-r from-green-500 to-cyan-400 w-1/3 h-12 rounded-md
        shadow-xl shadow-black/20 transition duration-150 ease-in-out 
      hover:bg-white hover:shadow-black/30 
        focus:outline-none
        active:bg-success-700 active:translate-y-0.5 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] "
      >
        Contact Me
      </button>
      
    </div>
  );

  const renderRight = (
    <div className="w-full h-full 2xl:w-2/5 p-10 xl:px-24">
      <img
        src="/assets/images/about_1.jpg"
        alt="about_hero"
        className="w-full h-full rounded-2xl object-cover"
      />
    </div>
  );
  return (
    <div className="flex relative flex-col items-center content-center w-full h-auto px-14 md:h-3/5 md:flex-row bg-sky-950">
      {renderLeft}
      {renderRight}
    </div>
  );
}
