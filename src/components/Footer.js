export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-100 py-8">
      <div className="flex flex-col justify-between items-center max-w-5xl mx-auto text-center text-white">
        <p className="text-sm">Holobeat &copy; {new Date().getFullYear()}</p>
        <p className="text-sm mt-2">Rosario, Argentina</p>
      </div>
    </footer>
  );
}
