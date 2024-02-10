import React, { useEffect } from "react";
import Image from "next/image";

const ToPay = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttribute(
      "data-preference-id",
      "39907253-ff227a60-4034-46a1-b73a-ff13b95beb25"
    );
    script.setAttribute("data-source", "button");
    document.getElementById("mercado-pago-button").appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.getElementById("mercado-pago-button").removeChild(script);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center h-screen"
      style={{ backgroundImage: `url('/Background-Gif.gif')` }}
    >
      <h1 className="text-2xl font-bold mt-12">Ticket Holobeat 15-03</h1>

      <div className="relative w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] mb-8 mt-8">
        <Image
          src="/hb-cover.jpeg"
          alt="flyer"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-center mb-4">
        <p className="text-xs mr-4">
          Comprar
          <br /> 1 ticket
        </p>
        <div id="mercado-pago-button" className="custom-mp-button ml-3"></div>
        <style jsx>{`
          .custom-mp-button {
            /* Estilos personalizados para el contenedor del botón */
            /* Cambiar el color de fondo a lila */
            background-color: #8a2be2; /* Código de color para lila */
            /* Ajustar otros estilos según sea necesario */
            color: white;
            padding: 6px 6px;
            border-radius: 5px;
            cursor: pointer;
          }

          .custom-mp-button:hover {
            background-color: #9932cc; /* Oscurecer ligeramente el lila al pasar el cursor */
          }
        `}</style>
      </div>
      <div>
        <p className="text-sm p-6 text-center">
          {" "}
          {/* Aplicar un tamaño de fuente más pequeño con text-sm */}
          Al realizar el pago, no olvides enviar comprobante a nuestro{" "}
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
};

export default ToPay;
