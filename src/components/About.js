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
            Holobeat is the convergence of technology and emotion, where
            electronic music transforms into a multisensory experience. We fuse
            the intangible and futuristic essence of "Holo" with the rhythmic
            energy of "Beat," creating a space where sound, visuals, and
            innovation intertwine. More than just a label, we are a platform for
            digital exploration and human connection through techno, minimal,
            and sci-fi aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
