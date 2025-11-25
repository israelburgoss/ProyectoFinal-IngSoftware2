import { 
  LayoutDashboard,
  Search,
  Calendar,
  Clock,
  FolderTree,
  History,
  Settings,
  Bell,
  UserCircle,
  MapPin,
  Star,
  Heart,
  CreditCard,
  Package
} from 'lucide-react';
import { DashboardLayout, MenuItem } from './DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { User } from '../App';

interface ClientDashboardProps {
  user: User;
  onLogout: () => void;
  onBackToCatalog: () => void;
}

export function ClientDashboard({ user, onLogout, onBackToCatalog }: ClientDashboardProps) {
  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'explorar', label: 'Explorar Servicios', icon: <Search className="w-5 h-5" /> },
    { id: 'mis-reservas', label: 'Mis Reservas', icon: <Calendar className="w-5 h-5" /> },
    { id: 'agenda', label: 'Agenda', icon: <Clock className="w-5 h-5" /> },
    { id: 'categorias', label: 'Categorías disponibles', icon: <FolderTree className="w-5 h-5" /> },
    { id: 'historial', label: 'Historial', icon: <History className="w-5 h-5" /> },
    { id: 'configuracion', label: 'Configuración', icon: <Settings className="w-5 h-5" /> },
    { id: 'notificaciones', label: 'Notificaciones', icon: <Bell className="w-5 h-5" /> },
  ];

  const renderContent = (activeSection: string) => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardView onBackToCatalog={onBackToCatalog} />;
      case 'explorar':
        return <ExplorarView onBackToCatalog={onBackToCatalog} />;
      case 'mis-reservas':
        return <MisReservasView />;
      case 'agenda':
        return <AgendaView />;
      case 'categorias':
        return <CategoriasView />;
      case 'historial':
        return <HistorialView />;
      case 'configuracion':
        return <ConfiguracionView user={user} />;
      case 'notificaciones':
        return <NotificacionesView />;
      default:
        return <DashboardView onBackToCatalog={onBackToCatalog} />;
    }
  };

  return (
    <DashboardLayout
      user={user}
      onLogout={onLogout}
      menuItems={menuItems}
      roleLabel="Mi Cuenta"
      roleIcon={<UserCircle className="w-5 h-5 text-violet-600" />}
      accentColor="violet"
    >
      {renderContent}
    </DashboardLayout>
  );
}

// Dashboard View
function DashboardView({ onBackToCatalog }: { onBackToCatalog: () => void }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Mi Dashboard</h2>
          <p className="text-gray-600">Resumen de tus actividades y reservas</p>
        </div>
        <Button 
          onClick={onBackToCatalog}
          className="bg-gradient-to-r from-violet-600 to-purple-600"
        >
          <Search className="w-4 h-4 mr-2" />
          Explorar Servicios
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Próximas Reservas</CardTitle>
            <Calendar className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">2</div>
            <p className="text-xs text-gray-500 mt-1">Esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Total Reservas</CardTitle>
            <Package className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">12</div>
            <p className="text-xs text-green-600 mt-1">3 este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Favoritos</CardTitle>
            <Heart className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">4</div>
            <p className="text-xs text-gray-500 mt-1">Servicios guardados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Puntos</CardTitle>
            <Star className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">450</div>
            <p className="text-xs text-gray-500 mt-1">De 1000 pts</p>
          </CardContent>
        </Card>
      </div>

      {/* Próximas reservas */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Próximas Reservas</CardTitle>
          <Button size="sm" variant="outline">Ver todas</Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              service: 'Masaje Relajante 60min',
              provider: 'Spa Wellness Center',
              date: '2025-11-15',
              time: '15:00',
              status: 'confirmed',
              price: 78.75,
              image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNlcnZpY2V8ZW58MXx8fHwxNzYyODgzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            {
              service: 'Corte de Cabello + Barba',
              provider: 'Barbería Premium',
              date: '2025-11-16',
              time: '11:30',
              status: 'pending',
              price: 36.75,
              image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwc2VydmljZXxlbnwxfHx8fDE3NjI5NjQ0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            },
          ].map((booking, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={booking.image}
                  alt={booking.service}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm text-gray-900 mb-1">{booking.service}</h4>
                <p className="text-xs text-gray-600 mb-2">{booking.provider}</p>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(booking.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {booking.time}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-900 mb-1">€{booking.price}</p>
                <Badge className={
                  booking.status === 'confirmed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }>
                  {booking.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recompensas */}
      <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-900 mb-2">🎁 Programa de Recompensas</h4>
              <p className="text-sm text-gray-700 mb-3">
                Acumula puntos con cada reserva y obtén descuentos especiales.
              </p>
              <div className="bg-white rounded-lg p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">Progreso</span>
                  <span className="text-xs text-gray-900">450 / 1000 pts</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Explorar View
function ExplorarView({ onBackToCatalog }: { onBackToCatalog: () => void }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Explorar Servicios</h2>
          <p className="text-gray-600">Descubre y reserva los mejores servicios</p>
        </div>
        <Button onClick={onBackToCatalog} className="bg-gradient-to-r from-violet-600 to-purple-600">
          Ver Catálogo Completo
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input placeholder="Buscar servicios..." className="pl-10 h-12" />
      </div>

      {/* Featured Services */}
      <div>
        <h3 className="text-lg text-gray-900 mb-4">Servicios Destacados</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              name: 'Masaje Relajante', 
              provider: 'Spa Wellness', 
              price: 78.75, 
              rating: 4.8,
              image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNlcnZpY2V8ZW58MXx8fHwxNzYyODgzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            { 
              name: 'Corte de Cabello', 
              provider: 'Barbería Premium', 
              price: 25.00, 
              rating: 4.6,
              image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwc2VydmljZXxlbnwxfHx8fDE3NjI5NjQ0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            },
            { 
              name: 'Entrenamiento Personal', 
              provider: 'FitLife Gym', 
              price: 52.50, 
              rating: 4.9,
              image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyOTQwOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
            },
          ].map((servicio, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={servicio.image}
                  alt={servicio.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <CardContent className="p-4">
                <h3 className="text-gray-900 mb-1">{servicio.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{servicio.provider}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-900">€{servicio.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{servicio.rating}</span>
                  </div>
                </div>
                <Button className="w-full mt-3" size="sm">Reservar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mis Reservas View
function MisReservasView() {
  const mockBookings = [
    {
      id: '1',
      service: 'Masaje Relajante 60min',
      provider: 'Spa Wellness Center',
      date: '2025-11-15',
      time: '15:00',
      status: 'confirmed',
      price: 78.75,
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNlcnZpY2V8ZW58MXx8fHwxNzYyODgzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      location: 'Calle Principal 123, Madrid'
    },
    {
      id: '2',
      service: 'Corte de Cabello + Barba',
      provider: 'Barbería Premium',
      date: '2025-11-16',
      time: '11:30',
      status: 'pending',
      price: 36.75,
      image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwc2VydmljZXxlbnwxfHx8fDE3NjI5NjQ0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      location: 'Avenida Central 456, Madrid'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Mis Reservas</h2>
        <p className="text-gray-600">Gestiona tus reservas activas</p>
      </div>

      <div className="space-y-4">
        {mockBookings.map((booking) => (
          <Card key={booking.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={booking.image}
                    alt={booking.service}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }>
                      {booking.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">{booking.service}</h3>
                    <p className="text-sm text-gray-600">{booking.provider}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(booking.date).toLocaleDateString('es-ES', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{booking.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 sm:col-span-2">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{booking.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Total pagado</p>
                      <p className="text-xl text-gray-900">€{booking.price.toFixed(2)}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Cancelar
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-violet-600 to-purple-600">
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Agenda View
function AgendaView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Mi Agenda</h2>
        <p className="text-gray-600">Calendario de tus reservas</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="h-96 flex items-center justify-center text-gray-400">
                [Calendario - Integrar con react-calendar o similar]
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Próximas Citas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { date: '15 Nov', service: 'Masaje Relajante', time: '15:00' },
                { date: '16 Nov', service: 'Corte de Cabello', time: '11:30' },
                { date: '20 Nov', service: 'Yoga Grupal', time: '18:00' },
              ].map((cita, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{cita.service}</p>
                      <p className="text-xs text-gray-600">{cita.date} • {cita.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Categorías View
function CategoriasView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Categorías Disponibles</h2>
        <p className="text-gray-600">Explora servicios por categoría</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Bienestar', icon: '🧘', services: 245, color: 'from-blue-500 to-cyan-500' },
          { name: 'Belleza', icon: '💇', services: 189, color: 'from-pink-500 to-rose-500' },
          { name: 'Fitness', icon: '💪', services: 156, color: 'from-green-500 to-emerald-500' },
          { name: 'Salud', icon: '🏥', services: 134, color: 'from-purple-500 to-violet-500' },
          { name: 'Hogar', icon: '🏠', services: 98, color: 'from-orange-500 to-amber-500' },
          { name: 'Educación', icon: '📚', services: 76, color: 'from-indigo-500 to-blue-500' },
        ].map((categoria, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${categoria.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                {categoria.icon}
              </div>
              <h3 className="text-lg text-gray-900 mb-1">{categoria.name}</h3>
              <p className="text-sm text-gray-600">{categoria.services} servicios</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Historial View
function HistorialView() {
  const pastBookings = [
    {
      id: '3',
      service: 'Entrenamiento Personal',
      provider: 'FitLife Gym',
      date: '2025-11-01',
      time: '08:00',
      status: 'completed',
      price: 52.50,
      image: 'https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYyOTQwOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rated: true
    },
    {
      id: '4',
      service: 'Masaje Relajante',
      provider: 'Spa Wellness Center',
      date: '2025-10-28',
      time: '15:00',
      status: 'completed',
      price: 78.75,
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHNlcnZpY2V8ZW58MXx8fHwxNzYyODgzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rated: false
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Historial de Reservas</h2>
        <p className="text-gray-600">Revisa tus servicios anteriores</p>
      </div>

      <div className="space-y-4">
        {pastBookings.map((booking) => (
          <Card key={booking.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={booking.image}
                    alt={booking.service}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-blue-100 text-blue-700">Completada</Badge>
                  </div>
                </div>
                
                <div className="flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">{booking.service}</h3>
                    <p className="text-sm text-gray-600">{booking.provider}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(booking.date).toLocaleDateString('es-ES', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{booking.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Total</p>
                      <p className="text-xl text-gray-900">€{booking.price.toFixed(2)}</p>
                    </div>
                    {booking.rated ? (
                      <div className="flex items-center gap-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    ) : (
                      <Button size="sm" variant="outline">
                        Calificar servicio
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Configuración View
function ConfiguracionView({ user }: { user: User }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Configuración</h2>
        <p className="text-gray-600">Gestiona tu cuenta y preferencias</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Nombre completo</label>
              <Input defaultValue={user.name} />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Email</label>
              <Input defaultValue={user.email} />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Teléfono</label>
              <Input defaultValue="+34 600 123 456" />
            </div>
            <Button className="w-full">Actualizar Información</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métodos de Pago</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <CreditCard className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-900">•••• •••• •••• 4242</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Expira 12/25</span>
                <Badge className="bg-green-100 text-green-700">Principal</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Añadir Método de Pago
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferencias de Notificaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              'Confirmaciones de reserva',
              'Recordatorios de citas',
              'Ofertas y promociones',
              'Nuevos servicios disponibles'
            ].map((pref, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{pref}</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-violet-600" />
              </div>
            ))}
            <Button className="w-full">Guardar Preferencias</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Seguridad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Contraseña actual</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Nueva contraseña</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Confirmar contraseña</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button className="w-full">Cambiar Contraseña</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Notificaciones View
function NotificacionesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Notificaciones</h2>
        <p className="text-gray-600">Centro de mensajes y alertas</p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          {[
            { type: 'success', title: 'Reserva confirmada', message: 'Tu reserva en Spa Wellness Center ha sido confirmada para el 15 Nov', time: 'Hace 10 min' },
            { type: 'info', title: 'Recordatorio', message: 'Tienes una cita mañana a las 15:00', time: 'Hace 1 hora' },
            { type: 'promo', title: 'Nueva oferta', message: '20% de descuento en masajes esta semana', time: 'Hace 3 horas' },
            { type: 'points', title: 'Puntos acumulados', message: 'Has ganado 50 puntos con tu última reserva', time: 'Hace 1 día' },
          ].map((notif, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                notif.type === 'success' ? 'bg-green-100' :
                notif.type === 'promo' ? 'bg-purple-100' :
                notif.type === 'points' ? 'bg-yellow-100' :
                'bg-blue-100'
              }`}>
                <Bell className={`w-5 h-5 ${
                  notif.type === 'success' ? 'text-green-600' :
                  notif.type === 'promo' ? 'text-purple-600' :
                  notif.type === 'points' ? 'text-yellow-600' :
                  'text-blue-600'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm text-gray-900 mb-1">{notif.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{notif.message}</p>
                <span className="text-xs text-gray-500">{notif.time}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
