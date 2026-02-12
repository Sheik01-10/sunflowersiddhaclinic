import { History, Target, Wind } from 'lucide-react';

export default function AboutSiddha() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            About Siddha Medicine
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            One of the world's oldest holistic healing systems, originating from ancient Tamil tradition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <History className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Ancient Wisdom</h3>
                <p className="text-gray-700 leading-relaxed">
                  The word <strong>"Siddha"</strong> comes from the Tamil word meaning "perfection" or
                  "heavenly bliss." This ancient system of medicine was developed by the Siddhars -
                  spiritual masters who achieved extraordinary powers through meditation and yogic practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Four Pillars of Care</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <strong>Preventive:</strong> Stop diseases before they start
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <strong>Promotive:</strong> Enhance overall health and wellness
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <strong>Curative:</strong> Treat existing diseases effectively
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <strong>Rejuvenative:</strong> Restore vitality and youthfulness
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
              <Wind className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">The Three Humors</h3>
              <p className="text-gray-700 mb-4">
                Siddha medicine is based on the balance of three vital energies:
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-1">Vatham (Wind)</h4>
                  <p className="text-sm text-gray-600">
                    Controls movement, breathing, and nervous system
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-1">Pitham (Fire)</h4>
                  <p className="text-sm text-gray-600">
                    Governs digestion, metabolism, and body temperature
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-1">Kabam (Water)</h4>
                  <p className="text-sm text-gray-600">
                    Maintains body structure, fluids, and immunity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-800 text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6 text-center">Comprehensive Disease Management</h3>
          <p className="text-lg text-center mb-6 text-green-100">
            Siddha texts classify <strong>4,448 diseases</strong> based on their root causes
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-green-700 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">Holistic Diagnosis</h4>
              <p className="text-green-100">
                We identify the root cause by examining physical symptoms, lifestyle, diet,
                and the balance of the three humors in your body.
              </p>
            </div>
            <div className="bg-green-700 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">Root-Cause Treatment</h4>
              <p className="text-green-100">
                Rather than suppressing symptoms, we address the underlying imbalances to
                provide lasting healing and prevent recurrence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
