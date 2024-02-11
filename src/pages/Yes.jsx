import React from "react";
import cinamon from "../assets/cinamon.gif";

function Yes() {
  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover"
      style={{
        backgroundImage: "url('/src/assets/sanvalentin.jpg')",
        marginBottom: "-20vh",
      }}
    >
      <div className="flex min-h-screen bg-cover">
        {/* Columna de la imagen */}
        <div className="flex-none mr-8 mt-0">
          <img
            src={cinamon}
            alt="GIF Principal"
            className="w-64 h-auto rounded-lg"
          />
        </div>
        {/* Columna de las actividades */}
        <div className="flex-1 mt-0">
          <h1 className="text-3xl mb-4 text-white font-extrabold">
            Estas serán nuestras actividades
          </h1>
          <h2 className="text-3xl mb-4 text-white font-extrabold">
            La cita es el dia:
          </h2>
          <h3 className="text-3xl mb-4 text-white font-extrabold">
            16/02/2024
          </h3>
          <h3 className="text-3xl mb-4 text-white font-extrabold">2:00 pm</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Columna de actividades */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 flex-1">
              <h2 className="text-xl font-semibold mb-2">
                Comprar tu huevito chopecha
              </h2>
              <p className="text-pink-700">
                Estas corfialmente invitada a que vayamos al centro a comprar tu
                monedero de huevito chopecha
              </p>
            </div>
            {/* Columna de actividades */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 flex-1">
              <h2 className="text-xl font-semibold mb-2">Comer algo rico</h2>
              <p className="text-pink-700">
                Despues de la grandiosa aventura estas invitada a comer pizza
                conmigo en el restaurante Aborigen ubicado en la roma norte
                debajo encontraras en el mapa la direccion marcada.
              </p>
              {/* Agregar el mapa de Google Maps */}
            </div>
          </div>
          <div style={{ width:"35%", height: "50%", marginTop: "20px", marginLeft: "1px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15051.836100268665!2d-99.1585342!3d19.4141763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3c9c69aaab%3A0x5f2cb6755ceca1a1!2sABORIGEN!5e0!3m2!1ses-419!2smx!4v1707537716616!5m2!1ses-419!2smx"
              width="600"
              height="450"
              loading="lazy"
              zoom={15}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yes;