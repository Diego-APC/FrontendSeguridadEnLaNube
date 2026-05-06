// src/features/about/AboutPage.jsx
import { Card } from '../../components/ui/Card';

export const AboutPage = () => {
  return (
    <div className="space-y-6">
      {/* Hero parodia */}
      <Card className="p-8 text-center bg-gradient-to-r from-amber-50 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30">
        <h1 className="text-4xl font-bold mb-2">🏗️ El Cimiento S.A.</h1>
        <p className="text-xl italic">"Construimos el país, ladrillo a ladrillo, aunque a veces se nos caiga alguno"</p>
      </Card>

      {/* Historia ficticia */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">📜 Nuestra gloriosa historia</h2>
        <p className="mb-2">Fundada en 1983 en el fondo de una obra en construcción, <strong>El Cimiento</strong> nació cuando su fundador, <strong>Don Hormigón Pérez</strong>, descubrió que mezclando cemento con esperanza se podían levantar paredes (y de paso, impermeabilizar deudas).</p>
        <p className="mb-2">Empezamos vendiendo palas usadas en una carretilla, y hoy somos la empresa <del>menos</del> más confiable de materiales para la construcción en el conurbano. Hemos participado en obras tan importantes como el <strong>Estadio del Miedo</strong> (se nos cayó una viga, pero fue divertido) y el <strong>Puente del Tiempo Perdido</strong> (entregado con 10 años de retraso, pero con mucho estilo).</p>
        <p>Actualmente contamos con más de <strong>3 empleados motivados</strong> (uno de ellos a prueba) y un stock de productos que varía según la fase lunar.</p>
      </Card>

      {/* Misión, Visión y Valores (parodiados) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">🎯 Misión</h3>
          <p>Proveer materiales de construcción a precios que parecen de remate, para que nuestros clientes puedan terminar sus obras antes de que se jubilen. También vendemos baldosas rotas con un 10% de descuento.</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">👁️ Visión</h3>
          <p>Ser la empresa número 1 en ventas de artículos de construcción en la primera cuadra de nuestra sucursal. Para 2030 aspiramos a tener un sitio web que cargue en menos de 10 segundos.</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">💪 Valores</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>🪚 <strong>Honestidad</strong>: Decimos que el yeso fragua en 24 horas, aunque a veces tarde 48.</li>
            <li>🔨 <strong>Pasión por el desorden</strong>: Nuestro depósito es tan caótico como la economía del país.</li>
            <li>🧱 <strong>Compromiso</strong>: Si te vendemos un producto defectuoso, te regalamos un caramelo.</li>
          </ul>
        </Card>
      </div>

      {/* El equipo (absurdo) */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">👷 Nuestro increíble equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-5xl mb-2">🧔‍♂️</div>
            <p className="font-bold">Hormigón Pérez</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Fundador y experto en mezclas secas</p>
            <p className="text-xs italic">"Si no se cae, yo lo tiro"</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2">👩‍🏭</div>
            <p className="font-bold">Ladrilla Martinez</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Jefa de ventas y contención emocional</p>
            <p className="text-xs italic">"Vendo hasta una viga oxidada si me mirás con cariño"</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2">🐕</div>
            <p className="font-bold">Ruffo el perro albañil</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Supervisor de calidad (ladra si algo está chueco)</p>
            <p className="text-xs italic">"Guau... eso no está a nivel"</p>
          </div>
        </div>
      </Card>

      {/* Testimonios falsos */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">🗣️ Lo que dicen nuestros clientes (que no pidieron que los borremos)</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-yellow-400 pl-4 italic">
            <p>"El cemento llegó medio endurecido, pero con un poco de agua y fe se pudo usar. Excelente atención."</p>
            <p className="text-sm font-bold mt-1">— Juan C. (Arquitecto frustrado)</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4 italic">
            <p>"Compré 500 ladrillos y me mandaron 480, pero me regalaron una bolsa de cal vencida. ¡Así se compensa!"</p>
            <p className="text-sm font-bold mt-1">— María G. (Constructora experimental)</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4 italic">
            <p>"El envío tardó tres semanas, pero el repartidor se sabía todos los chistes de albañiles. Lo volvería a contratar."</p>
            <p className="text-sm font-bold mt-1">— Pedro L. (Fan de los camiones hormigonera)</p>
          </div>
        </div>
      </Card>

      {/* Dato curioso */}
      <Card className="p-6 text-center bg-yellow-50 dark:bg-yellow-900/20">
        <p className="text-sm">💡 <strong>Dato curioso:</strong> Nuestro logo original era un ladrillo cayéndose, pero lo cambiamos porque parecía un accidente laboral. Ahora es un ladrillo bien parado (con miedo escénico).</p>
      </Card>
    </div>
  );
};