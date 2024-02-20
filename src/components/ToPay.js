import React, { useEffect } from "react";
import Image from "next/image";

const ToPay = () => {
  useEffect(() => {
    // Primer botón y script
    const script1 = document.createElement("script");
    script1.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script1.setAttribute(
      "data-preference-id",
      "39907253-c8faea3c-f412-4faa-83fb-b3e61940df0a"
    );
    script1.setAttribute("data-source", "button");
    document.getElementById("mercado-pago-button").appendChild(script1);

    // Segundo botón y script
    const script2 = document.createElement("script");
    script2.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script2.setAttribute(
      "data-preference-id",
      "39907253-90407354-ae75-464f-8491-a0661ae2163c"
    );
    script2.setAttribute("data-source", "button");
    document.getElementById("promo-mercado-pago-button").appendChild(script2);

    // Tercer botón y script
    const script3 = document.createElement("script");
    script3.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script3.setAttribute(
      "data-preference-id",
      "39907253-ae75-464f-8491-a0661ae2163c"
    );
    script3.setAttribute("data-source", "button");
    document.getElementById("third-mercado-pago-button").appendChild(script3);

    return () => {
      // Limpieza: eliminar los scripts cuando el componente se desmonte
      document.getElementById("mercado-pago-button").removeChild(script1);
      document.getElementById("promo-mercado-pago-button").removeChild(script2);
      document.getElementById("third-mercado-pago-button").removeChild(script3);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center h-screen "
      style={{ backgroundImage: `url('/Background-Gif.gif')` }}
    >
      <h1 className="text-2xl font-bold mt-12 animate-slideInLeft">
        Tickets Holobeat 15-03
      </h1>

      <div className="animate-slideInLeft relative w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] mb-8 mt-8">
        <Image
          src="/hb-cover.jpeg"
          alt="flyer"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Primer botón */}
      <div className="flex items-center justify-center mb-4 animate-slideInLeft">
        <p className="text-sm mr-4">1 x $3000</p>
        <div id="mercado-pago-button" className="custom-mp-button ml-3"></div>
      </div>

      {/* Segundo botón */}
      <div className="flex items-center justify-center mb-4 animate-slideInLeft">
        <p className="text-sm mr-4">2 x $5000</p>
        <div
          id="promo-mercado-pago-button"
          className="custom-mp-button ml-3"
        ></div>
      </div>

      {/* Tercer botón */}
      <div className="flex items-center justify-center mb-4 animate-slideInLeft">
        <p className="text-sm mr-4 animate-slideInLeft">3 x $6000</p>
        <div
          id="third-mercado-pago-button"
          className="custom-mp-button ml-3"
        ></div>
      </div>

      <style jsx>{`
        .custom-mp-button {
          background-color: #8a2be2;
          color: white;
          padding: 6px 6px;
          border-radius: 5px;
          cursor: pointer;
        }

        .custom-mp-button:hover {
          background-color: #9932cc;
        }
      `}</style>

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
};

export default ToPay;
