import BandcampPlayer from "@/components/BandcampPlayer";

export default function Home() {
  const soundCloudEmbedCode = `
  <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=178173473/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://diffusereality.bandcamp.com/album/lorenzo-mauro-behind-space">Lorenzo Mauro - Behind Space de Diffuse Reality Records</a></iframe>
  `;

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <>
        <h1>Record Label</h1>
      </>
      <BandcampPlayer embedCode={soundCloudEmbedCode} />
    </main>
  );
}
