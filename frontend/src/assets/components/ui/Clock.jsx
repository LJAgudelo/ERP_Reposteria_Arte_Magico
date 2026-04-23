import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
        // Actualiza la hora cada segundo
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
 // Saludo automático condicionado a la hora del día
  let greeting = "";
  const hour = time.getHours();

  if (hour < 12) {
    greeting = "Buenos días ☀️";
  } else if (hour < 18) {
    greeting = "Buenas tardes 🌤️";
  } else {
    greeting = "Buenas noches 🌙";
  }
  // Formato de hora 24 horas
  const formattedTime = time.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // Formato de fecha
  const formattedDate = time.toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="text-center flex flex-col text-4xl font-bold gap-3">
        <p>{greeting}</p>
        <p className="text-base font-normal">{formattedDate}</p>
      <p>{formattedTime}</p>
      
    </div>
  );
};

export default Clock;
