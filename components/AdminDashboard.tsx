import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Package,
  FolderTree,
  BarChart3, 
  Settings, 
  Bell,
  Shield,
  Calendar,
  DollarSign,
  TrendingUp,
  UserCheck,
  Clock,
  Search
} from 'lucide-react';
import { DashboardLayout, MenuItem } from './DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { User } from '../App';

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'usuarios', label: 'Usuarios', icon: <Users className="w-5 h-5" /> },
    { id: 'proveedores', label: 'Proveedores', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'servicios', label: 'Servicios', icon: <Package className="w-5 h-5" /> },
    { id: 'categorias', label: 'Categorías', icon: <FolderTree className="w-5 h-5" /> },
    { id: 'reportes', label: 'Reportes', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'configuracion', label: 'Configuración', icon: <Settings className="w-5 h-5" /> },
    { id: 'notificaciones', label: 'Notificaciones', icon: <Bell className="w-5 h-5" /> },
  ];

  const renderContent = (activeSection: string) => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardView />;
      case 'usuarios':
        return <UsuariosView />;
      case 'proveedores':
        return <ProveedoresView />;
      case 'servicios':
        return <ServiciosView />;
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
      roleLabel="Panel de Administración"
      roleIcon={<Shield className="w-5 h-5 text-blue-600" />}
      accentColor="blue"
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
        <h2 className="text-2xl text-gray-900 mb-2">Resumen General</h2>
        <p className="text-gray-600">Vista general de la plataforma Reserva Ya</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Total Usuarios</CardTitle>
            <Users className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">1,284</div>
            <p className="text-xs text-green-600 mt-1">+12% este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Proveedores Activos</CardTitle>
            <Briefcase className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">156</div>
            <p className="text-xs text-green-600 mt-1">+8% este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Reservas Totales</CardTitle>
            <Calendar className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">3,891</div>
            <p className="text-xs text-green-600 mt-1">+24% este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Ingresos</CardTitle>
            <DollarSign className="w-4 h-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-gray-900">€45,231</div>
            <p className="text-xs text-green-600 mt-1">+18% este mes</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'Nuevo usuario registrado', user: 'María García', time: 'Hace 5 min', icon: UserCheck },
                { action: 'Reserva confirmada', user: 'Carlos Ruiz', time: 'Hace 12 min', icon: Calendar },
                { action: 'Proveedor aprobado', user: 'Spa Wellness', time: 'Hace 1 hora', icon: Briefcase },
                { action: 'Pago recibido', user: 'Ana López', time: 'Hace 2 horas', icon: DollarSign },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.user}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendencias del Mes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Tasa de conversión</span>
                  <span className="text-gray-900">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full" style={{ width: '68%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Satisfacción clientes</span>
                  <span className="text-gray-900">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Proveedores activos</span>
                  <span className="text-gray-900">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-500 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Usuarios View
function UsuariosView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Gestión de Usuarios</h2>
          <p className="text-gray-600">Administra todos los usuarios de la plataforma</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
          <Users className="w-4 h-4 mr-2" />
          Nuevo Usuario
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Buscar usuarios..." className="pl-10" />
        </div>
        <Button variant="outline">Filtros</Button>
      </div>

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuario</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Registro</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'María García', email: 'maria@ejemplo.com', role: 'Cliente', status: 'Activo', date: '15 Nov 2025' },
                { name: 'Carlos Ruiz', email: 'carlos@proveedor.com', role: 'Proveedor', status: 'Activo', date: '12 Nov 2025' },
                { name: 'Ana López', email: 'ana@ejemplo.com', role: 'Cliente', status: 'Inactivo', date: '08 Nov 2025' },
                { name: 'Juan Pérez', email: 'juan@proveedor.com', role: 'Proveedor', status: 'Pendiente', date: '05 Nov 2025' },
              ].map((usuario, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{usuario.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm">{usuario.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{usuario.email}</TableCell>
                  <TableCell>
                    <Badge className={usuario.role === 'Proveedor' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}>
                      {usuario.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={
                      usuario.status === 'Activo' ? 'bg-green-100 text-green-700' :
                      usuario.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }>
                      {usuario.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{usuario.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Editar</Button>
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

// Proveedores View
function ProveedoresView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Gestión de Proveedores</h2>
          <p className="text-gray-600">Administra y aprueba proveedores de servicios</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
          <Briefcase className="w-4 h-4 mr-2" />
          Revisar Solicitudes
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Spa Wellness Center', category: 'Bienestar', rating: 4.8, services: 12, status: 'Activo' },
          { name: 'Barbería Premium', category: 'Belleza', rating: 4.6, services: 8, status: 'Activo' },
          { name: 'FitLife Gym', category: 'Fitness', rating: 4.9, services: 15, status: 'Activo' },
          { name: 'Estudio Yoga Zen', category: 'Bienestar', rating: 4.7, services: 6, status: 'Pendiente' },
        ].map((proveedor, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <Badge className={proveedor.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                  {proveedor.status}
                </Badge>
              </div>
              <h3 className="text-gray-900 mb-1">{proveedor.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{proveedor.category}</p>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>⭐ {proveedor.rating}</span>
                <span>{proveedor.services} servicios</span>
              </div>
              <Button variant="outline" className="w-full">Ver Detalles</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Servicios View
function ServiciosView() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Gestión de Servicios</h2>
          <p className="text-gray-600">Administra todos los servicios disponibles</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
          <Package className="w-4 h-4 mr-2" />
          Nuevo Servicio
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Masaje Relajante', provider: 'Spa Wellness', price: 78.75, bookings: 156, status: 'Activo' },
          { name: 'Corte de Cabello', provider: 'Barbería Premium', price: 25.00, bookings: 234, status: 'Activo' },
          { name: 'Entrenamiento Personal', provider: 'FitLife Gym', price: 52.50, bookings: 89, status: 'Activo' },
          { name: 'Yoga Grupal', provider: 'Estudio Zen', price: 15.00, bookings: 45, status: 'Pausado' },
        ].map((servicio, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <Badge className={servicio.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                  {servicio.status}
                </Badge>
              </div>
              <h3 className="text-gray-900 mb-1">{servicio.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{servicio.provider}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl text-gray-900">€{servicio.price}</span>
                <span className="text-sm text-gray-600">{servicio.bookings} reservas</span>
              </div>
              <Button variant="outline" className="w-full">Editar</Button>
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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Categorías de Servicios</h2>
          <p className="text-gray-600">Gestiona las categorías disponibles</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
          <FolderTree className="w-4 h-4 mr-2" />
          Nueva Categoría
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Bienestar', icon: '🧘', services: 45, color: 'from-blue-500 to-cyan-500' },
          { name: 'Belleza', icon: '💇', services: 67, color: 'from-pink-500 to-rose-500' },
          { name: 'Fitness', icon: '💪', services: 34, color: 'from-green-500 to-emerald-500' },
          { name: 'Salud', icon: '🏥', services: 28, color: 'from-purple-500 to-violet-500' },
          { name: 'Hogar', icon: '🏠', services: 52, color: 'from-orange-500 to-amber-500' },
          { name: 'Educación', icon: '📚', services: 41, color: 'from-indigo-500 to-blue-500' },
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
        <p className="text-gray-600">Análisis detallado de la plataforma</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-100 text-green-700">+24%</Badge>
            </div>
            <p className="text-sm text-gray-600">Crecimiento mensual</p>
            <p className="text-2xl text-gray-900 mt-2">24.5%</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-700">Ingresos</Badge>
            </div>
            <p className="text-sm text-gray-600">Revenue total</p>
            <p className="text-2xl text-gray-900 mt-2">€125K</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-700">Activos</Badge>
            </div>
            <p className="text-sm text-gray-600">Usuarios activos</p>
            <p className="text-2xl text-gray-900 mt-2">1,284</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-orange-600" />
              <Badge className="bg-orange-100 text-orange-700">Promedio</Badge>
            </div>
            <p className="text-sm text-gray-600">Tiempo respuesta</p>
            <p className="text-2xl text-gray-900 mt-2">2.5h</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tendencias de los últimos 6 meses</CardTitle>
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
        <h2 className="text-2xl text-gray-900 mb-2">Configuración de la Plataforma</h2>
        <p className="text-gray-600">Ajustes generales y preferencias del sistema</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuración General</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Nombre de la plataforma</label>
              <Input defaultValue="Reserva Ya" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Email de contacto</label>
              <Input defaultValue="contacto@reservaya.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Teléfono de soporte</label>
              <Input defaultValue="+34 900 123 456" />
            </div>
            <Button className="w-full">Guardar Cambios</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comisiones y Tarifas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Comisión por reserva (%)</label>
              <Input type="number" defaultValue="15" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Tarifa de procesamiento (€)</label>
              <Input type="number" defaultValue="0.50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700">IVA aplicable (%)</label>
              <Input type="number" defaultValue="21" />
            </div>
            <Button className="w-full">Actualizar Tarifas</Button>
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
        <h2 className="text-2xl text-gray-900 mb-2">Centro de Notificaciones</h2>
        <p className="text-gray-600">Gestiona alertas y mensajes del sistema</p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          {[
            { type: 'info', title: 'Nuevo proveedor registrado', message: 'Spa Wellness Center solicita aprobación', time: 'Hace 5 min' },
            { type: 'success', title: 'Meta alcanzada', message: 'Se superaron las 3,000 reservas este mes', time: 'Hace 1 hora' },
            { type: 'warning', title: 'Reporte pendiente', message: 'Revisar comentario negativo de usuario', time: 'Hace 3 horas' },
            { type: 'info', title: 'Actualización disponible', message: 'Nueva versión del sistema lista para instalar', time: 'Hace 1 día' },
          ].map((notif, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                notif.type === 'success' ? 'bg-green-100' :
                notif.type === 'warning' ? 'bg-yellow-100' :
                'bg-blue-100'
              }`}>
                <Bell className={`w-5 h-5 ${
                  notif.type === 'success' ? 'text-green-600' :
                  notif.type === 'warning' ? 'text-yellow-600' :
                  'text-blue-600'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm text-gray-900 mb-1">{notif.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{notif.message}</p>
                <span className="text-xs text-gray-500">{notif.time}</span>
              </div>
              <Button variant="ghost" size="sm">Marcar leída</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
