import { useState, useEffect } from "react";
import { LoginScreen } from "./src/components/LoginScreen";
import { ConfirmService } from "./src/components/ConfirmService";
import { PaymentMethod } from "./src/components/PaymentMethod";
import { BookingConfirmation } from "./src/components/BookingConfirmation";
import { RedirectScreen } from "./src/components/RedirectScreen";
import { AdminDashboard } from "./src/components/AdminDashboard";
import { ProviderDashboard } from "./src/components/ProviderDashboard";
import { ClientDashboard } from "./src/components/ClientDashboard";
import { PublicCatalog } from "./src/components/PublicCatalog";

export type UserRole = "admin" | "provider" | "client" | null;

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

export interface User {
  email: string;
  name: string;
  role: UserRole;
}

type Screen =
  | "catalog"
  | "login"
  | "redirecting"
  | "confirm-service"
  | "payment"
  | "confirmation"
  | "admin-dashboard"
  | "provider-dashboard"
  | "client-dashboard";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("catalog");
  const [user, setUser] = useState<User | null>(null);
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Simulación de autenticación - detecta rol basado en el email
    let role: UserRole = "client";
    let name = "Usuario";

    if (email.includes("admin")) {
      role = "admin";
      name = "Administrador";
    } else if (
      email.includes("proveedor") ||
      email.includes("provider")
    ) {
      role = "provider";
      name = "Proveedor";
    } else {
      name = "Cliente";
    }

    const loggedUser: User = { email, name, role };
    setUser(loggedUser);

    // Mostrar pantalla de redirección
    setIsRedirecting(true);
    setCurrentScreen("redirecting");

    // Redirigir según el rol después de 2 segundos
    setTimeout(() => {
      setIsRedirecting(false);

      if (role === "admin") {
        setCurrentScreen("admin-dashboard");
      } else if (role === "provider") {
        setCurrentScreen("provider-dashboard");
      } else {
        // Cliente: continuar con reserva si hay servicio seleccionado
        if (selectedService) {
          setCurrentScreen("confirm-service");
        } else {
          setCurrentScreen("client-dashboard");
        }
      }
    }, 2000);
  };

  const handleServiceSelection = (service: Service) => {
    setSelectedService(service);

    // Si no está logueado, ir a login
    if (!user) {
      setCurrentScreen("login");
    } else {
      setCurrentScreen("confirm-service");
    }
  };

  const handleConfirmService = () => {
    setCurrentScreen("payment");
  };

  const handlePaymentConfirm = () => {
    setCurrentScreen("confirmation");
  };

  const handleViewBookings = () => {
    setCurrentScreen("client-dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedService(null);
    setCurrentScreen("catalog");
  };

  const handleBackToCatalog = () => {
    setCurrentScreen("catalog");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === "catalog" && (
        <PublicCatalog
          onServiceSelect={handleServiceSelection}
          user={user}
          onLogout={handleLogout}
        />
      )}

      {currentScreen === "login" && (
        <LoginScreen
          onLogin={handleLogin}
          onBack={handleBackToCatalog}
        />
      )}

      {currentScreen === "redirecting" && user && (
        <RedirectScreen
          userName={user.name}
          userRole={user.role}
        />
      )}

      {currentScreen === "confirm-service" &&
        selectedService && (
          <ConfirmService
            service={selectedService}
            onConfirm={handleConfirmService}
            onBack={handleBackToCatalog}
            user={user}
            onLogout={handleLogout}
          />
        )}

      {currentScreen === "payment" && selectedService && (
        <PaymentMethod
          service={selectedService}
          onConfirm={handlePaymentConfirm}
          onBack={() => setCurrentScreen("confirm-service")}
          user={user}
          onLogout={handleLogout}
        />
      )}

      {currentScreen === "confirmation" && (
        <BookingConfirmation
          onViewBookings={handleViewBookings}
          user={user}
          onLogout={handleLogout}
        />
      )}

      {currentScreen === "admin-dashboard" && user && (
        <AdminDashboard user={user} onLogout={handleLogout} />
      )}

      {currentScreen === "provider-dashboard" && user && (
        <ProviderDashboard
          user={user}
          onLogout={handleLogout}
        />
      )}

      {currentScreen === "client-dashboard" && user && (
        <ClientDashboard
          user={user}
          onLogout={handleLogout}
          onBackToCatalog={handleBackToCatalog}
        />
      )}
    </div>
  );
}