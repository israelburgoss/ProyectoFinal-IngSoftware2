import { useState } from 'react';
import { LogOut, User as UserIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Service, User } from '../App';
import { HomePage } from './HomePage';
import { ServicesPage } from './ServicesPage';
import { ProvidersPage } from './ProvidersPage';
import { ContactPage } from './ContactPage';

interface PublicCatalogProps {
  onServiceSelect: (service: Service) => void;
  user: User | null;
  onLogout: () => void;
}

type Section = 'home' | 'services' | 'providers' | 'contact';

export function PublicCatalog({ onServiceSelect, user, onLogout }: PublicCatalogProps) {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section as Section);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <button onClick={() => handleNavigate('home')} className="text-2xl text-gray-900 hover:text-blue-600 transition-colors">
                Reserva Ya
              </button>
              <nav className="hidden md:flex gap-6">
                <button 
                  onClick={() => handleNavigate('home')}
                  className={`transition-colors ${
                    currentSection === 'home' 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Inicio
                </button>
                <button 
                  onClick={() => handleNavigate('services')}
                  className={`transition-colors ${
                    currentSection === 'services' 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Servicios
                </button>
                <button 
                  onClick={() => handleNavigate('providers')}
                  className={`transition-colors ${
                    currentSection === 'providers' 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Proveedores
                </button>
                <button 
                  onClick={() => handleNavigate('contact')}
                  className={`transition-colors ${
                    currentSection === 'contact' 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Contacto
                </button>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              {user ? (
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
              ) : (
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Iniciar Sesión
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentSection === 'home' && (
          <HomePage 
            onServiceSelect={onServiceSelect} 
            onNavigate={handleNavigate}
          />
        )}
        
        {currentSection === 'services' && (
          <ServicesPage onServiceSelect={onServiceSelect} />
        )}
        
        {currentSection === 'providers' && (
          <ProvidersPage onNavigate={handleNavigate} />
        )}
        
        {currentSection === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="mb-4">Reserva Ya</h4>
              <p className="text-sm text-gray-400">
                La plataforma líder en reservas y pagos de servicios
              </p>
            </div>
            <div>
              <h5 className="mb-4">Secciones</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => handleNavigate('home')} className="hover:text-white">Inicio</button></li>
                <li><button onClick={() => handleNavigate('services')} className="hover:text-white">Servicios</button></li>
                <li><button onClick={() => handleNavigate('providers')} className="hover:text-white">Proveedores</button></li>
                <li><button onClick={() => handleNavigate('contact')} className="hover:text-white">Contacto</button></li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4">Empresa</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => handleNavigate('home')} className="hover:text-white">Sobre nosotros</button></li>
                <li><button onClick={() => handleNavigate('providers')} className="hover:text-white">Conviértete en proveedor</button></li>
                <li><button onClick={() => handleNavigate('contact')} className="hover:text-white">Ayuda</button></li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button className="hover:text-white">Términos</button></li>
                <li><button className="hover:text-white">Privacidad</button></li>
                <li><button className="hover:text-white">Cookies</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 Reserva Ya. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
