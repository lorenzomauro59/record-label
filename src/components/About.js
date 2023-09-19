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
            We are a record label dedicated to promoting innovative music and of
            Vanguard. Our commitment is to support emerging artists and bring
            your music to audiences around the world. We believe in passion,
            talent, and creativity, and we work every day to be a pillar in the
            music industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
