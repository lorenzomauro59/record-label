export default function BandcampPlayer({ embedCode }) {
  return (
    <div className="mt-20" dangerouslySetInnerHTML={{ __html: embedCode }} />
  );
}
