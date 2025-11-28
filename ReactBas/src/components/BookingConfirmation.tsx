import { CheckCircle, Mail, Bell, Calendar, User as UserIcon, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface User {
  name: string;
}

interface BookingConfirmationProps {
  onViewBookings: () => void;
  user: User | null;
  onLogout: () => void;
}

export function BookingConfirmation({ onViewBookings, user, onLogout }: BookingConfirmationProps) {
  const bookingId = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl text-gray-900">Reserva Ya</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {user && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <UserIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 hidden sm:inline">{user.name}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={onLogout}>
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-3">
            <h2 className="text-4xl text-gray-900">
              🎉 ¡Tu reserva ha sido realizada con éxito!
            </h2>
            <p className="text-xl text-gray-600">
              Hemos confirmado tu reserva exitosamente
            </p>
          </div>

          {/* Booking ID */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <p className="text-sm text-gray-600">Número de reserva</p>
              </div>
              <p className="text-3xl tracking-wider text-gray-900">
                {bookingId}
              </p>
            </CardContent>
          </Card>

          {/* Information Cards */}
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Confirmación por email</h4>
                    <p className="text-sm text-gray-600">
                      Recibirás un correo con todos los detalles de tu reserva
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Notificaciones</h4>
                    <p className="text-sm text-gray-600">
                      Te enviaremos recordatorios antes de tu cita
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <h4 className="text-gray-900 mb-3">¿Qué sigue?</h4>
              <ul className="space-y-2 text-sm text-gray-700 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0">1.</span>
                  <span>El proveedor revisará tu solicitud y te contactará para confirmar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0">2.</span>
                  <span>Recibirás un email con toda la información de tu reserva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 flex-shrink-0">3.</span>
                  <span>Te enviaremos un recordatorio 24 horas antes de tu cita</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={onViewBookings}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-8"
            >
              Ver mis reservas
            </Button>
          </div>

          {/* Support Message */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              ¿Necesitas ayuda? Contáctanos en{' '}
              <a href="mailto:soporte@reservaya.com" className="text-blue-600 hover:underline">
                soporte@reservaya.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
