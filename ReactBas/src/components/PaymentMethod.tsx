import { useState } from 'react';
import { CreditCard, Building2, Wallet, ArrowLeft, User as UserIcon, LogOut, Lock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { Service, User } from '../App';

interface PaymentMethodProps {
  service: Service;
  onConfirm: () => void;
  onBack: () => void;
  user: User | null;
  onLogout: () => void;
}

type PaymentType = 'card' | 'transfer' | 'onsite';

export function PaymentMethod({ service, onConfirm, onBack, user, onLogout }: PaymentMethodProps) {
  const [paymentType, setPaymentType] = useState<PaymentType>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      onConfirm();
      setIsProcessing(false);
    }, 1500);
  };

  const totalAmount = (service.price * 1.05).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
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

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <button onClick={onBack} className="text-blue-600 hover:text-blue-700">
              Servicios
            </button>
            <span className="text-gray-400">/</span>
            <button onClick={onBack} className="text-blue-600 hover:text-blue-700">
              Confirmar reserva
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Método de pago</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl text-gray-900 mb-2">Método de Pago</h2>
              <p className="text-gray-600">
                Selecciona cómo deseas realizar el pago
              </p>
            </div>

            {/* Payment Method Selection */}
            <Card>
              <CardContent className="p-6">
                <RadioGroup value={paymentType} onValueChange={(value) => setPaymentType(value as PaymentType)}>
                  <div className="space-y-3">
                    <label
                      htmlFor="card"
                      className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        paymentType === 'card' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <RadioGroupItem value="card" id="card" />
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">Tarjeta de crédito/débito</p>
                        <p className="text-sm text-gray-600">Pago seguro con tu tarjeta</p>
                      </div>
                    </label>

                    <label
                      htmlFor="transfer"
                      className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        paymentType === 'transfer' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <RadioGroupItem value="transfer" id="transfer" />
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">Transferencia bancaria</p>
                        <p className="text-sm text-gray-600">Pago mediante transferencia</p>
                      </div>
                    </label>

                    <label
                      htmlFor="onsite"
                      className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        paymentType === 'onsite' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <RadioGroupItem value="onsite" id="onsite" />
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900">Pago en sitio</p>
                        <p className="text-sm text-gray-600">Paga directamente en el establecimiento</p>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Form based on selection */}
            {paymentType === 'card' && (
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Lock className="w-4 h-4" />
                    <span className="text-sm">Pago seguro mediante SSL</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Número de tarjeta</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="h-11"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Fecha de expiración</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/AA"
                        maxLength={5}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        maxLength={4}
                        type="password"
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                    <Input
                      id="cardName"
                      placeholder="NOMBRE APELLIDO"
                      className="h-11"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {paymentType === 'transfer' && (
              <Card>
                <CardContent className="p-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                    <p className="text-sm text-blue-900">
                      Realiza la transferencia a la siguiente cuenta:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-700">Banco:</span>
                        <span className="text-blue-900">Banco Ejemplo S.A.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">IBAN:</span>
                        <span className="text-blue-900">ES12 3456 7890 1234 5678</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Concepto:</span>
                        <span className="text-blue-900">Reserva #{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Una vez realizada la transferencia, tu reserva será confirmada en 24-48 horas.
                  </p>
                </CardContent>
              </Card>
            )}

            {paymentType === 'onsite' && (
              <Card>
                <CardContent className="p-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-green-900 mb-2">
                          Pagarás directamente en el establecimiento cuando recibas el servicio.
                        </p>
                        <p className="text-sm text-green-800">
                          Tu reserva quedará confirmada y el proveedor te contactará para coordinar los detalles.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <h4 className="text-lg text-gray-900">Resumen del pedido</h4>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">{service.name}</p>
                      <p className="text-xs text-gray-600">{service.provider}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        {new Date(service.date).toLocaleDateString('es-ES', {
                          day: '2-digit',
                          month: '2-digit'
                        })} • {service.time}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">€{service.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Comisión de servicio</span>
                    <span className="text-gray-900">€{(service.price * 0.05).toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span className="text-gray-900">Total a pagar</span>
                  <span className="text-2xl text-gray-900">
                    €{totalAmount}
                  </span>
                </div>

                <Button 
                  onClick={handleConfirmPayment}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Procesando...' : 'Confirmar pago'}
                </Button>

                <div className="flex items-center gap-2 justify-center text-xs text-gray-500">
                  <Lock className="w-3 h-3" />
                  <span>Pago seguro y encriptado</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
