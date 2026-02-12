import { Calendar, CheckCircle, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Appointment() {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    appointmentDate: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // ✅ Doctor WhatsApp number (country code + number, NO + symbol)
  const DOCTOR_WHATSAPP = '919344931089';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /* ===============================
       1️⃣ WHATSAPP MESSAGE (OPEN FIRST)
    =============================== */
    const message = `
🟢 New Appointment Request

👤 Patient Name: ${formData.patientName}
📞 Phone Number: ${formData.phone}
📅 Preferred Date: ${formData.appointmentDate}

Sunflower Siddha Clinic
`;

    const whatsappUrl = `https://wa.me/${DOCTOR_WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;

    // 🔥 MUST be first → popup block fix
    window.open(whatsappUrl, '_blank');

    /* ===============================
       2️⃣ UI SUCCESS (INSTANT)
    =============================== */
    setShowSuccess(true);
    setFormData({
      patientName: '',
      phone: '',
      appointmentDate: '',
    });

    /* ===============================
       3️⃣ FIREBASE SAVE (NO await)
    =============================== */
    addDoc(collection(db, 'appointments'), {
      patientName: formData.patientName,
      phone: formData.phone,
      appointmentDate: formData.appointmentDate,
      createdAt: Timestamp.now(),
      source: 'website',
    })
      .then((docRef) => {
        console.log('✅ Appointment stored in Firestore with ID:', docRef.id);
      })
      .catch((error: any) => {
        console.error('❌ Firestore save failed');
        console.error('Code:', error.code);
        console.error('Message:', error.message);
      });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Book Your Appointment
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take the first step towards natural healing. Schedule your consultation today.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {showSuccess ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-green-800 mb-4">
                Appointment Request Sent!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Your appointment details have been sent to the doctor via WhatsApp
                and securely saved in our system.
              </p>
              <p className="text-gray-600">
                For urgent matters, please call{' '}
                <a href="tel:6381003566" className="text-green-600 font-semibold">
                  6381003566
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="space-y-6">

                {/* Patient Name */}
                <div>
                  <label className="flex items-center gap-2 text-green-800 font-semibold mb-2">
                    <User className="w-5 h-5" />
                    Patient Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        patientName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-2 text-green-800 font-semibold mb-2">
                    <Phone className="w-5 h-5" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-500 focus:outline-none"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="flex items-center gap-2 text-green-800 font-semibold mb-2">
                    <Calendar className="w-5 h-5" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    min={getTomorrowDate()}
                    value={formData.appointmentDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        appointmentDate: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-500 focus:outline-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
                >
                  Book Appointment
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-6">
                Appointment details will be sent instantly to the doctor via WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
