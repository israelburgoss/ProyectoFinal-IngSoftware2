import { Search, MapPin, Star, Filter } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Service {
  id: string;
  name: string;
  provider: string;
  date: string;
  time: string;
  price: number;
  location: string;
  description: string;
  image: string;
}

interface ServicesPageProps {
  onServiceSelect: (service: Service) => void;
}

const ALL_SERVICES: Service[] = [
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
  },
  {
    id: '4',
    name: 'Cena Degustación',
    provider: 'Restaurante Gourmet',
    date: '2025-11-17',
    time: '20:00',
    price: 95,
    location: 'Calle Gourmet 321, Madrid',
    description: 'Menú degustación de 7 platos con maridaje',
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc2Mjk0ODM1MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '5',
    name: 'Tratamiento Facial',
    provider: 'Beauty Salon Elite',
    date: '2025-11-18',
    time: '16:00',
    price: 65,
    location: 'Avenida Belleza 555, Madrid',
    description: 'Limpieza facial profunda con hidratación',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbnxlbnwxfHx8fDE3NjI5MTA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '6',
    name: 'Consulta Dental',
    provider: 'Clínica Dental Sonrisa',
    date: '2025-11-19',
    time: '10:00',
    price: 40,
    location: 'Calle Salud 888, Madrid',
    description: 'Revisión completa con limpieza dental',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWN8ZW58MXx8fHwxNzYyOTEwMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const CATEGORIES = [
  'Todos',
  'Wellness & Spa',
  'Belleza & Estética',
  'Fitness & Deporte',
  'Gastronomía',
  'Salud'
];

export function ServicesPage({ onServiceSelect }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h2 className="text-4xl text-gray-900 mb-4">Todos los Servicios</h2>
        <p className="text-xl text-gray-600">
          Explora nuestra amplia selección de servicios de calidad
        </p>
      </section>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Buscar servicios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <Button variant="outline" className="h-12 px-6">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 whitespace-nowrap'
                  : 'whitespace-nowrap'
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Mostrando <span className="text-gray-900">{ALL_SERVICES.length}</span> servicios
        </p>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white">
          <option>Más relevantes</option>
          <option>Precio: menor a mayor</option>
          <option>Precio: mayor a menor</option>
          <option>Mejor calificados</option>
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ALL_SERVICES.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-white text-gray-900">
                €{service.price}
              </Badge>
            </div>
            
            <CardContent className="p-4 space-y-3">
              <div>
                <h4 className="text-lg text-gray-900 mb-1">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.provider}</p>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>

              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{service.location}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-gray-900">4.8</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">128 reseñas</span>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => onServiceSelect(service)}
              >
                Reservar Ahora
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Cargar más servicios
        </Button>
      </div>
    </div>
  );
}
