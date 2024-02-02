function AboutUs() {
  return (
    <div
      className="flex items-center justify-center w-screen  bg-cover bg-center"
      style={{ backgroundImage: `url('/Background-Gif.gif')` }}
    >
      <div className="flex flex-col justify-between max-w-lg h-full">
        <div id="about-us">
          <h2 className="text-xl font-semibold leading-tight text-center mb-28 animate-fadeInScale">
            About Us
          </h2>
        </div>
        <div className="mb-36">
          <p className="text-center p-4 animate-fadeInScale">
            Holobeat is a record label that merges the essence of techno music
            with a forward-thinking mindset and a profound influence from
            science fiction. Our approach revolves around limitless creativity,
            technological innovation, and a futuristic aesthetic. We are
            architects of unique sonic landscapes that defy conventions and
            transport our listeners to unexplored musical worlds. At HoloBeat,
            we craft the sound of tomorrow, today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
