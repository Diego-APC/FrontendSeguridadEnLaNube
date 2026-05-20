// src/features/chat/ChatPage.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const ChatPage = () => {
  const { user, isLoggedIn } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || user?.role !== 'admin') {
      navigate('/');
    }
  }, [isLoggedIn, user, navigate]);

  if (!isLoggedIn || user?.role !== 'admin') {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">💬 Chat interno</h1>
      
      <Card className="p-6">
        <div className="space-y-4">
          {/* Nosotros (admin) iniciamos la conversación */}
          <div className="flex items-start gap-3 justify-end">
            <div className="flex-1 bg-blue-100 dark:bg-blue-900/40 rounded-lg p-3">
              <p className="font-bold text-sm text-right">Tú</p>
              <p className="mt-1 text-right">Don Hormigón, voy a hacer unos cambios en el catálogo de productos. He desactivado temporalmente la edición desde el panel para evitar conflictos mientras modifico las bases de datos.</p>
              <p className="text-xs text-gray-500 mt-1 text-right">10:30 AM</p>
            </div>
            <div className="text-3xl">👷</div>
          </div>

          {/* Don Hormigón responde */}
          <div className="flex items-start gap-3">
            <div className="text-3xl">🧔‍♂️</div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <p className="font-bold text-sm">Don Hormigón Pérez</p>
              <p className="mt-1">Buena idea. Así no tenemos sorpresas. Pero asegúrate de que nadie pueda re-activarlo mientras trabajas. El botón está bien bloqueado, ¿no?</p>
              <p className="text-xs text-gray-500 mt-1">10:32 AM</p>
            </div>
          </div>

          {/* Nosotros respondemos */}
          <div className="flex items-start gap-3 justify-end">
            <div className="flex-1 bg-blue-100 dark:bg-blue-900/40 rounded-lg p-3">
              <p className="font-bold text-sm text-right">Tú </p>
              <p className="mt-1 text-right">Sí, lo dejé con una capa de opacidad y sin poder hacer clic. Pero alguien con conocimientos de cómo manipular el código del lado del cliente podría revertirlo... aunque no creo que ningún cliente normal intente eso.</p>
              <p className="text-xs text-gray-500 mt-1 text-right">10:33 AM</p>
            </div>
            <div className="text-3xl">👷</div>
          </div>

          {/* Don Hormigón da la pista sutil */}
          <div className="flex items-start gap-3">
            <div className="text-3xl">🧔‍♂️</div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <p className="font-bold text-sm">Don Hormigón Pérez</p>
              <p className="mt-1">Ja, cierto. Recuerdo que una vez un becario metió un script en la descripción de su perfil y logró cosas raras. Pero bueno, no creo que aquí pase. Tú tranquilo.</p>
              <p className="text-xs text-gray-500 mt-1">10:35 AM</p>
            </div>
          </div>

          {/* Nosotros cerramos */}
          <div className="flex items-start gap-3 justify-end">
            <div className="flex-1 bg-blue-100 dark:bg-blue-900/40 rounded-lg p-3">
              <p className="font-bold text-sm text-right">Tú</p>
              <p className="mt-1 text-right">Jajaja, cierto. Por eso ahora validamos todo. En fin, ya te aviso cuando termine. Saludos.</p>
              <p className="text-xs text-gray-500 mt-1 text-right">10:36 AM</p>
            </div>
            <div className="text-3xl">👷</div>
          </div>
        </div>

        <div className="mt-6">
          <Button variant="secondary" onClick={() => navigate('/perfil')}>
            Volver al perfil
          </Button>
        </div>
      </Card>
    </div>
  );
};