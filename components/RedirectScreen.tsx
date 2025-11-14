import { useEffect, useState } from 'react';
import { Shield, Briefcase, User, Loader2 } from 'lucide-react';
import { UserRole } from '../App';

interface RedirectScreenProps {
  userName: string;
  userRole: UserRole;
}

export function RedirectScreen({ userName, userRole }: RedirectScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getRoleInfo = () => {
    switch (userRole) {
      case 'admin':
        return {
          icon: Shield,
          color: 'purple',
          bgColor: 'bg-purple-100',
          textColor: 'text-purple-600',
          gradientFrom: 'from-purple-500',
          gradientTo: 'to-purple-600',
          message: 'Redirigiendo a tu panel de administración...'
        };
      case 'provider':
        return {
          icon: Briefcase,
          color: 'blue',
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-600',
          gradientFrom: 'from-blue-500',
          gradientTo: 'to-blue-600',
          message: 'Redirigiendo a tu panel de proveedor...'
        };
      default:
        return {
          icon: User,
          color: 'green',
          bgColor: 'bg-green-100',
          textColor: 'text-green-600',
          gradientFrom: 'from-green-500',
          gradientTo: 'to-green-600',
          message: 'Continuando con tu reserva...'
        };
    }
  };

  const roleInfo = getRoleInfo();
  const IconComponent = roleInfo.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md w-full">
        {/* Icono animado */}
        <div className="flex justify-center">
          <div className={`w-24 h-24 ${roleInfo.bgColor} rounded-full flex items-center justify-center animate-pulse shadow-lg`}>
            <IconComponent className={`w-12 h-12 ${roleInfo.textColor}`} />
          </div>
        </div>

        {/* Mensaje de bienvenida */}
        <div className="space-y-2">
          <h1 className="text-3xl text-gray-900">
            ¡Bienvenido, {userName}!
          </h1>
          <p className="text-lg text-gray-600">
            {roleInfo.message}
          </p>
        </div>

        {/* Spinner y barra de progreso */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Loader2 className={`w-8 h-8 ${roleInfo.textColor} animate-spin`} />
          </div>

          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${roleInfo.gradientFrom} ${roleInfo.gradientTo} transition-all duration-300 ease-out`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-sm text-gray-600">
            Estamos preparando tu espacio de trabajo...
          </p>
        </div>
      </div>
    </div>
  );
}
