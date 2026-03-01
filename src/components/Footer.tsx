import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* COLUMN 1 – LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              
              {/* LOGO */}
              <div className="bg-white p-2 rounded-full shadow-xl overflow-hidden">
                <img
                  src="/logo.jpeg"
                  alt="Sunflower Siddha Clinic Logo"
                  className="w-18 h-20 object-contain mx-auto"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Sunflower Siddha Clinic
                </h3>
                <p className="text-green-200 text-sm">
                  20+ Years of Excellence
                </p>
              </div>
            </div>

            <p className="text-green-100 leading-relaxed">
              Authentic Siddha medicine for holistic healing of mind, body,
              and soul.
            </p>
          </div>

          {/* COLUMN 2 – QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-green-100 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-green-100 hover:text-white">
                  About Siddha
                </a>
              </li>
              <li>
                <a href="#doctor" className="text-green-100 hover:text-white">
                  Doctor Profile
                </a>
              </li>
              <li>
                <a href="#treatments" className="text-green-100 hover:text-white">
                  Treatments
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-green-100 hover:text-white"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 – CONTACT INFO */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-green-100">
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:6381003566" className="hover:text-white">
                  6381003566
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/919344931089"
                  className="hover:text-white"
                >
                  9344931089
                </a>
              </li>
              <li>
                <strong>Timings:</strong>
                <br />
                Mon–Sat: 9 AM – 1 PM, 4 PM – 8 PM
                <br />
                Sun: 9 AM – 1 PM
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-green-700 pt-8 text-center">
          <p className="text-green-200 flex items-center justify-center gap-2">
            Made with{" "}
            <Heart className="w-4 h-4 fill-red-400 text-red-400" /> for holistic
            healing
          </p>

          <p className="text-green-300 text-sm mt-2">
            © {new Date().getFullYear()} Sunflower Siddha Clinic.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}