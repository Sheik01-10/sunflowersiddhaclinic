import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import WhatsAppModal from './WhatsAppModal';

export default function Contact() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleCallClick = () => {
    window.location.href = 'tel:6381003566';
  };

  // ✅ FIXED GOOGLE MAP OPEN
  const handleMapClick = () => {
    window.open(
      'https://www.google.com/maps?q=SUNFLOWER+SIDDHA+CLINIC+ERODE',
      '_blank'
    );
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're here to help you on your journey to natural healing
            </p>
          </div>

          {/* ACTION CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">

            {/* CALL */}
            <button
              onClick={handleCallClick}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-1 group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600">
                <Phone className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Call Now
              </h3>
              <p className="text-2xl font-bold text-green-600">
                6381003566
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Click to call directly
              </p>
            </button>

            {/* WHATSAPP */}
            <button
              onClick={() => setShowWhatsAppModal(true)}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-1 group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600">
                <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                WhatsApp Chat
              </h3>
              <p className="text-2xl font-bold text-green-600">
                9344931089
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Quick response guaranteed
              </p>
            </button>

            {/* MAP */}
            <button
              onClick={handleMapClick}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-1 group"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600">
                <MapPin className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Visit Us
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                Get Directions
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Open in Google Maps
              </p>
            </button>
          </div>

          {/* TIMINGS */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 justify-center mb-6">
              <Clock className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">
                Clinic Timings
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="font-bold text-green-800 text-lg mb-2">
                  Monday - Saturday
                </p>
                <p className="text-gray-700 text-xl font-semibold">
                  9:00 AM - 1:00 PM
                </p>
                <p className="text-gray-700 text-xl font-semibold">
                  4:00 PM - 8:00 PM
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="font-bold text-green-800 text-lg mb-2">
                  Sunday
                </p>
                <p className="text-gray-700 text-xl font-semibold">
                  9:00 AM - 1:00 PM
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  (Morning only)
                </p>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Walk-ins welcome, appointments preferred
            </p>
          </div>

          {/* EMERGENCY */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Emergency Consultation?
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              Call us at{' '}
              <a href="tel:6381003566" className="font-bold underline">
                6381003566
              </a>
            </p>
          </div>
        </div>
      </section>

      <WhatsAppModal
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </>
  );
}
