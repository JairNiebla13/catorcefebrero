import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const [buttonNoPosition, setButtonNoPosition] = useState({ x: 0, y: 0 });

  const handleButtonClick = (response) => {
    if (response === "Sí") {
      navigate("/Yes");
    } else {
      window.alert("Porfavor :(");
      // Mover el botón "No" a una posición aleatoria
      const newX = Math.random() * (window.innerWidth - 200); // Ancho del botón
      const newY = Math.random() * (window.innerHeight - 50); // Alto del botón
      setButtonNoPosition({ x: newX, y: newY });
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover relative"
      style={{ backgroundImage: "url('/src/assets/sanvalentin.jpg')" }}
    >
      <h1 className="text-4xl text-center text-red-600 font-semibold">
        Te gustaría ser mi valentín?
      </h1>
      <div className="flex justify-center mt-4">
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-md mr-4 hover:bg-blue-600"
          onClick={() => handleButtonClick("Sí")} // Eliminamos pointerEvents: "none"
        >
          Sí
        </button>
        <button
          style={{
            position: "absolute",
            top: buttonNoPosition.y,
            left: buttonNoPosition.x,
          }}
          className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={() => handleButtonClick("No")} // Eliminamos pointerEvents: "none"
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Home;
