import { Search, Star, TrendingUp, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

interface Service {
  id: string;
  name: string;
  provider: string;
  date?: string;
  time?: string;
  price: number;
  location?: string;
  description?: string;
  image?: string;
}

import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onServiceSelect: (service: Service) => void;
  onNavigate: (section: string) => void;
}

const FEATURED_SERVICES: Service[] = [
  {
    id: '1',
    name: 'Masaje Relajante 60min',
    provider: 'Spa Wellness Center',
    date: '2025-11-15',
    time: '15:00',
    price: 75,
    location: 'Calle Principal 123, Madrid',
    description: 'Masaje corporal completo con aceites esenciales',
    image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNlcnZpY2V8ZW58MXx8fHwxNzYyODgzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '2',
    name: 'Corte de Cabello + Barba',
    provider: 'Barbería Premium',
    date: '2025-11-14',
    time: '11:30',
    price: 35,
    location: 'Avenida Central 456, Madrid',
    description: 'Corte moderno con perfilado de barba profesional',
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwc2VydmljZXxlbnwxfHx8fDE3NjI5NjQ0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '3',
    name: 'Entrenamiento Personal',
    provider: 'FitLife Gym',
    date: '2025-11-16',
    time: '08:00',
    price: 50,
    location: 'Plaza Mayor 789, Madrid',
    description: 'Sesión personalizada de 1 hora con entrenador certificado',
    image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyOTQwOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function HomePage({ onServiceSelect, onNavigate }: HomePageProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl mb-4">
              Reserva los mejores servicios cerca de ti
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Encuentra y reserva servicios de wellness, belleza, salud y más con un solo clic
            </p>
            
            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Buscar servicios..."
                  className="pl-10 h-14 bg-white"
                />
              </div>
              <Button className="h-14 px-8 bg-white text-blue-600 hover:bg-gray-100">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl text-gray-900 mb-4">¿Por qué elegir Reserva Ya?</h3>
          <p className="text-lg text-gray-600">La forma más fácil de reservar y pagar servicios</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl text-gray-900 mb-2">Proveedores Verificados</h4>
              <p className="text-gray-600">
                Todos nuestros proveedores son cuidadosamente seleccionados y verificados
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl text-gray-900 mb-2">Pago Seguro</h4>
              <p className="text-gray-600">
                Tus datos están protegidos con la más alta seguridad en todas las transacciones
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl text-gray-900 mb-2">Reserva Instantánea</h4>
              <p className="text-gray-600">
                Confirma tu cita en segundos y recibe confirmación inmediata
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl text-gray-900 mb-2">Servicios Destacados</h3>
            <p className="text-gray-600">Los más populares esta semana</p>
          </div>
          <Button 
            variant="outline"
            onClick={() => onNavigate('services')}
          >
            Ver todos
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_SERVICES.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <div className="flex items-center gap-1 bg-white rounded-full px-3 py-1 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-gray-900">Popular</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.provider}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-900">4.8</span>
                  </div>
                  <span className="text-xl text-gray-900">€{service.price}</span>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => onServiceSelect(service)}
                >
                  Reservar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl mb-4">¿Eres proveedor de servicios?</h3>
          <p className="text-xl text-purple-100 mb-8">
            Únete a nuestra plataforma y alcanza miles de clientes potenciales
          </p>
          <Button 
            size="lg"
            className="h-14 px-8 bg-white text-purple-600 hover:bg-gray-100"
            onClick={() => onNavigate('providers')}
          >
            Regístrate como proveedor
          </Button>
        </div>
      </section>
    </div>
  );
}
