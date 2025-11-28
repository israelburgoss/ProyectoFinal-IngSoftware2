import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from './ui/utils';

export interface User {
  name: string;
  email: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: ReactNode;
}

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
  menuItems: MenuItem[];
  children: (activeSection: string) => ReactNode;
  roleLabel: string;
  roleIcon: ReactNode;
  accentColor: 'blue' | 'green' | 'violet';
}

const accentColors = {
  blue: {
    bg: 'bg-blue-50',
    badge: 'bg-blue-100',
    badgeText: 'text-blue-700',
    iconBg: 'from-blue-600 to-blue-700',
    icon: 'text-blue-600',
    active: 'bg-blue-100 border-l-4 border-blue-600',
    hover: 'hover:bg-blue-50',
  },
  green: {
    bg: 'bg-green-50',
    badge: 'bg-green-100',
    badgeText: 'text-green-700',
    iconBg: 'from-green-600 to-green-700',
    icon: 'text-green-600',
    active: 'bg-green-100 border-l-4 border-green-600',
    hover: 'hover:bg-green-50',
  },
  violet: {
    bg: 'bg-violet-50',
    badge: 'bg-violet-100',
    badgeText: 'text-violet-700',
    iconBg: 'from-violet-600 to-violet-700',
    icon: 'text-violet-600',
    active: 'bg-violet-100 border-l-4 border-violet-600',
    hover: 'hover:bg-violet-50',
  },
};

export function DashboardLayout({
  user,
  onLogout,
  menuItems,
  children,
  roleLabel,
  roleIcon,
  accentColor,
}: DashboardLayoutProps) {
  const [activeSection, setActiveSection] = useState(menuItems[0]?.id || 'dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const colors = accentColors[accentColor];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out',
          'w-64 flex flex-col',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-gray-900">Reserva Ya</h2>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className={cn('mt-4 flex items-center gap-2 px-3 py-2 rounded-lg', colors.badge)}>
            <div className="w-5 h-5 flex items-center justify-center">{roleIcon}</div>
            <span className={cn('text-sm', colors.badgeText)}>{roleLabel}</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                    activeSection === item.id
                      ? colors.active
                      : `text-gray-700 ${colors.hover}`
                  )}
                >
                  <div
                    className={cn(
                      'w-5 h-5 flex items-center justify-center transition-colors',
                      activeSection === item.id ? colors.icon : 'text-gray-600'
                    )}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer - User Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-2">
            <div className={cn('w-10 h-10 rounded-full bg-gradient-to-r flex items-center justify-center', colors.iconBg)}>
              <div className="w-5 h-5 text-white flex items-center justify-center">{roleIcon}</div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                </Button>
                <div>
                  <h1 className="text-lg text-gray-900">
                    {menuItems.find((item) => item.id === activeSection)?.label || 'Dashboard'}
                  </h1>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    Bienvenido, {user.name}
                  </p>
                </div>
              </div>

              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Cerrar sesión</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area with Transitions */}
        <main className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="p-4 sm:p-6 lg:p-8"
            >
              {children(activeSection)}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
