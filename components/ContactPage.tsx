import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate: (section: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío
    alert('¡Gracias por contactarnos! Responderemos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h2 className="text-4xl text-gray-900 mb-4">Contáctanos</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          ¿Tienes preguntas o necesitas ayuda? Estamos aquí para ti
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-11 px-3 border border-gray-300 rounded-lg text-sm bg-white"
                      required
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="general">Consulta general</option>
                      <option value="provider">Quiero ser proveedor</option>
                      <option value="support">Soporte técnico</option>
                      <option value="billing">Facturación</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <p className="text-sm text-gray-600">contacto@reservaya.com</p>
                  <p className="text-sm text-gray-600">soporte@reservaya.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Teléfono</h4>
                  <p className="text-sm text-gray-600">+34 900 123 456</p>
                  <p className="text-sm text-gray-600">+34 900 123 457</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Dirección</h4>
                  <p className="text-sm text-gray-600">
                    Calle Ejemplo 123<br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Horario</h4>
                  <p className="text-sm text-gray-600">
                    Lunes - Viernes: 9:00 - 18:00<br />
                    Sábados: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <h4 className="text-gray-900">Chat en vivo</h4>
              </div>
              <p className="text-sm text-gray-700">
                ¿Necesitas ayuda inmediata? Chatea con nuestro equipo de soporte.
              </p>
              <Button variant="outline" className="w-full">
                Iniciar chat
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-purple-600" />
                <h4 className="text-gray-900">Centro de Ayuda</h4>
              </div>
              <p className="text-sm text-gray-600">
                Encuentra respuestas a las preguntas más frecuentes en nuestro centro de ayuda.
              </p>
              <Button variant="outline" className="w-full">
                Ver preguntas frecuentes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="pt-8 border-t border-gray-200">
        <h3 className="text-2xl text-gray-900 mb-6">Preguntas Frecuentes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-gray-900 mb-2">¿Cómo puedo hacer una reserva?</h4>
              <p className="text-sm text-gray-600">
                Navega por nuestro catálogo de servicios, selecciona el que te interese y sigue el proceso de reserva. Es rápido y sencillo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="text-gray-900 mb-2">¿Puedo cancelar mi reserva?</h4>
              <p className="text-sm text-gray-600">
                Sí, puedes cancelar hasta 24 horas antes de tu cita sin cargo alguno. Revisa los términos específicos de cada proveedor.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="text-gray-900 mb-2">¿Cómo puedo ser proveedor?</h4>
              <p className="text-sm text-gray-600">
                Visita nuestra sección de proveedores y completa el formulario de registro. Nuestro equipo te contactará pronto.
              </p>
              <Button 
                variant="link" 
                className="p-0 h-auto text-blue-600"
                onClick={() => onNavigate('providers')}
              >
                Más información →
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="text-gray-900 mb-2">¿Los pagos son seguros?</h4>
              <p className="text-sm text-gray-600">
                Absolutamente. Utilizamos encriptación SSL y trabajamos con pasarelas de pago certificadas para garantizar tu seguridad.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
