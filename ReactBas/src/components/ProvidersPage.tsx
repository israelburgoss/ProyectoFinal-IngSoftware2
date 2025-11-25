import { Star, MapPin, Briefcase, Award, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProvidersPageProps {
  onNavigate: (section: string) => void;
}

const MOCK_PROVIDERS = [
  {
    id: '1',
    name: 'Spa Wellness Center',
    category: 'Wellness & Spa',
    rating: 4.9,
    reviews: 234,
    location: 'Calle Principal 123, Madrid',
    services: 12,
    verified: true,
    image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNlcnZpY2V8ZW58MXx8fHwxNzYyODgzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Centro de bienestar especializado en masajes y tratamientos corporales'
  },
  {
    id: '2',
    name: 'Barbería Premium',
    category: 'Belleza & Estética',
    rating: 4.8,
    reviews: 156,
    location: 'Avenida Central 456, Madrid',
    services: 8,
    verified: true,
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwc2VydmljZXxlbnwxfHx8fDE3NjI5NjQ0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Barbería moderna con los mejores profesionales en corte y estilismo'
  },
  {
    id: '3',
    name: 'FitLife Gym',
    category: 'Fitness & Deporte',
    rating: 4.7,
    reviews: 189,
    location: 'Plaza Mayor 789, Madrid',
    services: 15,
    verified: true,
    image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyOTQwOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Gimnasio con entrenadores certificados y programas personalizados'
  },
  {
    id: '4',
    name: 'Restaurante Gourmet',
    category: 'Gastronomía',
    rating: 4.9,
    reviews: 312,
    location: 'Calle Gourmet 321, Madrid',
    services: 6,
    verified: true,
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc2Mjk0ODM1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Restaurante de alta cocina con menús degustación exclusivos'
  },
  {
    id: '5',
    name: 'Beauty Salon Elite',
    category: 'Belleza & Estética',
    rating: 4.8,
    reviews: 278,
    location: 'Avenida Belleza 555, Madrid',
    services: 20,
    verified: true,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbnxlbnwxfHx8fDE3NjI5MTA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Salón de belleza integral con tratamientos faciales y corporales'
  },
  {
    id: '6',
    name: 'Clínica Dental Sonrisa',
    category: 'Salud',
    rating: 4.9,
    reviews: 423,
    location: 'Calle Salud 888, Madrid',
    services: 10,
    verified: true,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWN8ZW58MXx8fHwxNzYyOTEwMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Clínica dental moderna con tecnología de última generación'
  }
];

export function ProvidersPage({ onNavigate }: ProvidersPageProps) {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h2 className="text-4xl text-gray-900 mb-4">Nuestros Proveedores</h2>
        <p className="text-xl text-gray-600">
          Profesionales verificados y de confianza listos para atenderte
        </p>
      </section>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl text-gray-900 mb-1">156</div>
            <p className="text-sm text-gray-600">Proveedores Activos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl text-gray-900 mb-1">24</div>
            <p className="text-sm text-gray-600">Categorías</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl text-gray-900 mb-1">4.8</div>
            <p className="text-sm text-gray-600">Calificación Media</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl text-gray-900 mb-1">98%</div>
            <p className="text-sm text-gray-600">Satisfacción</p>
          </CardContent>
        </Card>
      </div>

      {/* Providers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROVIDERS.map((provider) => (
          <Card key={provider.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={provider.image}
                alt={provider.name}
                className="w-full h-full object-cover"
              />
              {provider.verified && (
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-blue-600 text-white rounded-full px-3 py-1 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Verificado</span>
                  </div>
                </div>
              )}
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl text-gray-900 mb-1">{provider.name}</h3>
                <Badge className="bg-purple-100 text-purple-700">
                  {provider.category}
                </Badge>
              </div>

              <p className="text-sm text-gray-600">{provider.description}</p>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{provider.location}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-900">{provider.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({provider.reviews} reseñas)</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  <span>{provider.services} servicios</span>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => onNavigate('services')}
              >
                Ver servicios
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Become Provider CTA */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl">¿Quieres unirte a nuestra red de proveedores?</h3>
            <p className="text-xl text-blue-100">
              Forma parte de la plataforma líder de reservas y alcanza miles de clientes potenciales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => onNavigate('contact')}
              >
                Solicitar información
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white bg-white/20 text-white hover:bg-white hover:text-blue-600"
              >
                Ver requisitos
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 pt-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Sin comisiones iniciales</p>
                  <p className="text-sm text-blue-100">Paga solo por reserva confirmada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Gestión simplificada</p>
                  <p className="text-sm text-blue-100">Panel intuitivo y fácil de usar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="mb-1">Mayor visibilidad</p>
                  <p className="text-sm text-blue-100">Aparece en búsquedas destacadas</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}