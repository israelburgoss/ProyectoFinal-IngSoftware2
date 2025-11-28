import { DashboardLayout } from './DashboardLayout';
import type { MenuItem } from './DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface User {
  id?: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role?: string;
}

import { 
  LayoutDashboard,
  Package,
  Users,
  UserCircle,
  ShoppingBag,
  FolderTree,
  BarChart3,
  Settings,
  Bell,
  Briefcase,
  Calendar,
  DollarSign,
  Star,
  Clock,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
interface ProviderDashboardProps {
  user: User;
  onLogout: () => void;
}

export function ProviderDashboard({ user, onLogout }: ProviderDashboardProps) {
  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-6 h-5" /> },
    { id: 'mis-servicios', label: 'Mis Servicios', icon: <Package className="w-5 h-5" /> },
    { id: 'mis-clientes', label: 'Mis Clientes', icon: <Users className="w-5 h-5" /> },
    { id: 'mi-perfil', label: 'Mi Perfil', icon: <UserCircle className="w-5 h-5" /> },
    { id: 'catalogo', label: 'Catálogo', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'categorias', label: 'Categorías disponibles', icon: <FolderTree className="w-5 h-5" /> },
    { id: 'reportes', label: 'Reportes', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'configuracion', label: 'Configuración', icon: <Settings className="w-5 h-5" /> },
    { id: 'notificaciones', label: 'Notificaciones', icon: <Bell className="w-5 h-5" /> },
  ];

  const renderContent = (activeSection: string) => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardView />;
      case 'mis-servicios':
        return <MisServiciosView />;
      case 'mis-clientes':
        return <MisClientesView />;
      case 'mi-perfil':
        return <MiPerfilView />;
      case 'catalogo':
        return <CatalogoView />;
      case 'categorias':
        return <CategoriasView />;
      case 'reportes':
        return <ReportesView />;
      case 'configuracion':
        return <ConfiguracionView />;
      case 'notificaciones':
        return <NotificacionesView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <DashboardLayout
      user={user}
      onLogout={onLogout}
      menuItems={menuItems}
      roleLabel="Panel de Proveedor"
      roleIcon={<Briefcase className="w-5 h-5 text-green-600" />}
      accentColor="green"
    >
      {renderContent}
    </DashboardLayout>
  );
}

// Dashboard View
function DashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Mi Dashboard</h2>
        <p className="text-gray-600">Resumen de tu actividad y rendimiento</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Reservas Hoy</CardTitle>
            <Calendar className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">8</div>
            <p className="text-xs text-gray-500 mt-1">2 pendientes de confirmar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Ingresos del Mes</CardTitle>
            <DollarSign className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">€2,450</div>
            <p className="text-xs text-green-600 mt-1">+15% vs mes anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Calificación</CardTitle>
            <Star className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">4.8</div>
            <p className="text-xs text-gray-500 mt-1">De 127 reseñas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Servicios Activos</CardTitle>
            <Package className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">6</div>
            <p className="text-xs text-gray-500 mt-1">2 borradores</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Bookings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Próximas Reservas</CardTitle>
          <Button size="sm" variant="outline">Ver todas</Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { time: '10:00', service: 'Masaje Relajante', client: 'María González', status: 'confirmed' },
            { time: '12:30', service: 'Tratamiento Facial', client: 'Carlos Ruiz', status: 'pending' },
            { time: '15:00', service: 'Corte de Cabello', client: 'Ana López', status: 'confirmed' },
          ].map((booking, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">{booking.service}</p>
                  <p className="text-xs text-gray-600">{booking.client} • {booking.time}</p>
                </div>
              </div>
              <Badge 
                className={
                  booking.status === 'confirmed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }
              >
                {booking.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Performance and Reviews */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento del Mes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Reservas completadas</span>
              <span className="text-gray-900">45</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Cancelaciones</span>
              <span className="text-gray-900">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Tasa de ocupación</span>
              <span className="text-green-600">78%</span>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Ocupación semanal</span>
                <span className="text-gray-900">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Últimas Reseñas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'Laura M.', rating: 5, comment: 'Excelente servicio, muy profesional' },
              { name: 'Pedro S.', rating: 4, comment: 'Muy buena experiencia' },
              { name: 'Carmen R.', rating: 5, comment: 'Totalmente recomendable' },
            ].map((review, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-900">{review.name}</span>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-600">{review.comment}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Mis Servicios View
function MisServiciosView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Mis Servicios</h2>
          <p className="text-gray-600">Administra tu oferta de servicios</p>
        </div>
        <Button className="bg-gradient-to-r from-green-600 to-green-700">
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Servicio
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Masaje Relajante 60min', price: 78.75, bookings: 156, status: 'Activo', category: 'Bienestar' },
          { name: 'Tratamiento Facial', price: 65.00, bookings: 89, status: 'Activo', category: 'Belleza' },
          { name: 'Masaje Deportivo', price: 85.00, bookings: 67, status: 'Activo', category: 'Bienestar' },
          { name: 'Reflexología', price: 55.00, bookings: 45, status: 'Borrador', category: 'Bienestar' },
        ].map((servicio, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <Badge className={servicio.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                  {servicio.status}
                </Badge>
              </div>
              <h3 className="text-gray-900 mb-1">{servicio.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{servicio.category}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl text-gray-900">€{servicio.price}</span>
                <span className="text-sm text-gray-600">{servicio.bookings} reservas</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Mis Clientes View
function MisClientesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Mis Clientes</h2>
        <p className="text-gray-600">Gestiona tu base de clientes</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Reservas</TableHead>
                <TableHead>Última visita</TableHead>
                <TableHead>Total gastado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'María González', email: 'maria@ejemplo.com', bookings: 12, lastVisit: '10 Nov 2025', spent: 945.00 },
                { name: 'Carlos Ruiz', email: 'carlos@ejemplo.com', bookings: 8, lastVisit: '08 Nov 2025', spent: 630.00 },
                { name: 'Ana López', email: 'ana@ejemplo.com', bookings: 15, lastVisit: '05 Nov 2025', spent: 1180.00 },
                { name: 'Laura Martínez', email: 'laura@ejemplo.com', bookings: 5, lastVisit: '02 Nov 2025', spent: 390.00 },
              ].map((cliente, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{cliente.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm">{cliente.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{cliente.email}</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-700">{cliente.bookings} reservas</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{cliente.lastVisit}</TableCell>
                  <TableCell className="text-sm text-gray-900">€{cliente.spent.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Ver perfil</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// Mi Perfil View
function MiPerfilView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Mi Perfil</h2>
        <p className="text-gray-600">Actualiza tu información de proveedor</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Información del Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Nombre del negocio</label>
                <Input defaultValue="Spa Wellness Center" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Categoría principal</label>
                <Input defaultValue="Bienestar" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Descripción</label>
              <Textarea 
                rows={4} 
                defaultValue="Centro especializado en tratamientos de bienestar y relajación. Contamos con profesionales certificados y más de 10 años de experiencia."
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Teléfono</label>
                <Input defaultValue="+34 912 345 678" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Email</label>
                <Input defaultValue="contacto@spawellness.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Dirección</label>
              <Input defaultValue="Calle Principal 123, Madrid" />
            </div>
            <Button className="w-full">Guardar Cambios</Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Perfil completado</span>
                <span className="text-gray-900">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full" style={{ width: '95%' }} />
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm text-gray-600">Miembro desde</span>
                <span className="text-gray-900">Ene 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Verificado</span>
                <Badge className="bg-green-100 text-green-700">✓ Sí</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-6">
              <h4 className="text-gray-900 mb-2">💡 Consejo</h4>
              <p className="text-sm text-gray-700">
                Completa tu perfil al 100% para aparecer en los primeros resultados de búsqueda.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Catálogo View
function CatalogoView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Catálogo de Servicios</h2>
        <p className="text-gray-600">Explora servicios populares en tu categoría</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Masaje Sueco', provider: 'Spa Relax', price: 70.00, rating: 4.9 },
          { name: 'Aromaterapia', provider: 'Wellness Pro', price: 65.00, rating: 4.7 },
          { name: 'Masaje Deportivo', provider: 'FitSpa', price: 80.00, rating: 4.8 },
          { name: 'Reflexología', provider: 'Zen Center', price: 55.00, rating: 4.6 },
        ].map((servicio, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-1">{servicio.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{servicio.provider}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-gray-900">€{servicio.price}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{servicio.rating}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" size="sm">Ver detalles</Button>
            </CardContent>
          </Card>
        ))}
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
        <p className="text-gray-600">Explora categorías para expandir tu oferta</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Bienestar', icon: '🧘', services: 245, color: 'from-blue-500 to-cyan-500' },
          { name: 'Belleza', icon: '💇', services: 189, color: 'from-pink-500 to-rose-500' },
          { name: 'Fitness', icon: '💪', services: 156, color: 'from-green-500 to-emerald-500' },
          { name: 'Salud', icon: '🏥', services: 134, color: 'from-purple-500 to-violet-500' },
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

// Reportes View
function ReportesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Reportes y Estadísticas</h2>
        <p className="text-gray-600">Análisis de tu rendimiento</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <BarChart3 className="w-8 h-8 text-green-600 mb-3" />
            <p className="text-sm text-gray-600">Ingresos totales</p>
            <p className="text-2xl text-gray-900 mt-2">€12,450</p>
            <p className="text-xs text-green-600 mt-1">+18% este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Calendar className="w-8 h-8 text-blue-600 mb-3" />
            <p className="text-sm text-gray-600">Reservas completadas</p>
            <p className="text-2xl text-gray-900 mt-2">156</p>
            <p className="text-xs text-green-600 mt-1">+12% este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Star className="w-8 h-8 text-yellow-600 mb-3" />
            <p className="text-sm text-gray-600">Calificación promedio</p>
            <p className="text-2xl text-gray-900 mt-2">4.8</p>
            <p className="text-xs text-gray-600 mt-1">127 reseñas</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tendencia de reservas - Últimos 30 días</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-gray-400">
            [Gráfico de tendencias - Integrar con Recharts]
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Configuración View
function ConfiguracionView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Configuración</h2>
        <p className="text-gray-600">Ajusta tus preferencias y disponibilidad</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Horario de Atención</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((dia, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{dia}</span>
                <div className="flex gap-2">
                  <Input type="time" defaultValue="09:00" className="w-32" />
                  <span className="text-gray-500">-</span>
                  <Input type="time" defaultValue="18:00" className="w-32" />
                </div>
              </div>
            ))}
            <Button className="w-full">Actualizar Horario</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferencias de Notificaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              'Nuevas reservas',
              'Cancelaciones',
              'Nuevas reseñas',
              'Recordatorios de citas',
              'Mensajes de clientes'
            ].map((pref, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{pref}</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
              </div>
            ))}
            <Button className="w-full">Guardar Preferencias</Button>
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
        <p className="text-gray-600">Mantente al día con tus actividades</p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          {[
            { type: 'booking', title: 'Nueva reserva', message: 'María González reservó Masaje Relajante para mañana 10:00', time: 'Hace 5 min' },
            { type: 'review', title: 'Nueva reseña', message: 'Carlos dejó una reseña de 5 estrellas', time: 'Hace 1 hora' },
            { type: 'cancellation', title: 'Cancelación', message: 'Ana López canceló su reserva del 15 Nov', time: 'Hace 2 horas' },
            { type: 'reminder', title: 'Recordatorio', message: 'Tienes 3 citas mañana', time: 'Hace 5 horas' },
          ].map((notif, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                notif.type === 'booking' ? 'bg-green-100' :
                notif.type === 'review' ? 'bg-yellow-100' :
                notif.type === 'cancellation' ? 'bg-red-100' :
                'bg-blue-100'
              }`}>
                <Bell className={`w-5 h-5 ${
                  notif.type === 'booking' ? 'text-green-600' :
                  notif.type === 'review' ? 'text-yellow-600' :
                  notif.type === 'cancellation' ? 'text-red-600' :
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
