import React from "react";
import Image from "next/image";

export default function toPay() {
  return (
    <div
      className="flex flex-col items-center h-screen "
      style={{ backgroundImage: `url('/Background-Gif.gif')` }}
    >
      <h1 className="text-2xl font-bold mt-12 animate-slideInLeft">
        Tickets Holobeat 15-03 (HUM)
      </h1>

      <div className="animate-slideInLeft relative w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] mb-8 mt-8">
        <Image src="/FLYER.png" alt="flyer" layout="fill" objectFit="cover" />
      </div>

      {/* Primer botón */}
      <div className="flex items-center justify-center mb-4 animate-slideInLeft">
        <p className="text-sm mr-4">1 x $3000</p>
        <a
          href="https://mpago.la/1Py2cnp"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-mp-button ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pagar
        </a>
      </div>

      {/* Segundo botón */}
      <div className="flex items-center justify-center mb-4 animate-slideInLeft">
        <p className="text-sm mr-4">2 x $5000</p>
        <a
          href="https://mpago.la/1yDH1di"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-mp-button ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pagar
        </a>
      </div>

      {/* Tercer botón */}
      <div className="flex items-center justify-center mb-4 animate-slideInLeft">
        <p className="text-sm mr-4 animate-slideInLeft">3 x $6000</p>
        <a
          href="https://mpago.la/1FqqwuD"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-mp-button ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pagar
        </a>
      </div>

      <div>
        <p className="text-sm p-6 text-center">
          Al realizar el pago, no olvides enviar el comprobante a nuestro{" "}
          <a
            href="https://www.instagram.com/holobeatrec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Instagram
          </a>{" "}
          😊
        </p>
      </div>
    </div>
  );
}
