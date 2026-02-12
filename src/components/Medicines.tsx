import { Leaf, Sparkles, TestTube, Activity } from 'lucide-react';

export default function Medicines() {
  return (
    <section
      id="medicines"
      className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Medicines
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pure, authentic Siddha formulations prepared using traditional methods
          </p>
        </div>

        {/* Medicine Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Natural Herbs
            </h3>
            <p className="text-gray-600">
              Carefully selected medicinal herbs prepared as per traditional
              Siddha principles.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Sparkles className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Therapeutic Oils
            </h3>
            <p className="text-gray-600">
              Medicated oils used for external application and healing therapies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <TestTube className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Chooranam (Powder)
            </h3>
            <p className="text-gray-600">
              Finely prepared herbal powders for internal therapeutic use.
            </p>
          </div>
        </div>

        {/* Auto Immune Disorders Section */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
            <div className="flex items-center gap-3">
              <Activity className="w-10 h-10" />
              <h3 className="text-3xl font-bold">Auto-Immune Disorders</h3>
            </div>
            <p className="mt-2 text-green-100">
              Siddha-based supportive care for managing chronic auto-immune conditions
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Type 1 Diabetes */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Type 1 Diabetes
                </h4>
                <p className="text-gray-700 text-sm">
                  Focuses on immune regulation, pancreatic support, and metabolic balance
                  through customized Siddha formulations and diet plans.
                </p>
              </div>

              {/* Multiple Sclerosis */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Multiple Sclerosis
                </h4>
                <p className="text-gray-700 text-sm">
                  Aims to reduce inflammation, support nerve health, and improve quality
                  of life using traditional Siddha approaches.
                </p>
              </div>

              {/* Auto-immune Vasculitis */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Auto-immune Vasculitis
                </h4>
                <p className="text-gray-700 text-sm">
                  Helps in controlling immune-mediated inflammation of blood vessels and
                  supports systemic healing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
          <p className="text-center text-gray-800">
            <strong>Note:</strong> All medicines are provided only after proper
            consultation. Treatment, dosage, and duration are personalized
            according to the patient’s condition.
          </p>
        </div>
      </div>
    </section>
  );
}
