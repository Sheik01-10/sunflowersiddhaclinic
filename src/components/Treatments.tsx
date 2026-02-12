import { Activity, Bone, Droplet, Heart, Pill, Sparkles, User } from 'lucide-react';

export default function Treatments() {
  const treatments = [
    {
      icon: Activity,
      title: 'Cancer Treatment',
      description: 'Holistic cancer care with immunotherapy, herbal medicines, and nutritional support for healing and recovery.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Sparkles,
      title: 'Skin Diseases',
      description: 'Natural treatment for eczema, psoriasis, vitiligo, and other chronic skin conditions with herbal remedies.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Bone,
      title: 'Joint Pain & Arthritis',
      description: 'Relief from arthritis, joint pain, and inflammation using traditional Siddha therapies and medicines.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Droplet,
      title: 'Stomach Problems',
      description: 'Treatment for digestive disorders, ulcers, IBS, and gastric issues with natural herbal formulations.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Heart,
      title: 'Diabetes Management',
      description: 'Comprehensive care for Type 1 and Type 2 diabetes with herbs that regulate blood sugar naturally.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: User,
      title: 'Infertility Treatment',
      description: 'Natural fertility enhancement for both men and women using time-tested Siddha formulations.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: Pill,
      title: 'Auto-immune Disorders',
      description: 'Treatment for lupus, rheumatoid arthritis, thyroid disorders, and other auto-immune conditions.',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Treatments & Specializations
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert care for a wide range of conditions using authentic Siddha medicine principles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-xl transition-all duration-300"
            >
              <div className={`${treatment.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                <treatment.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {treatment.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Siddha Treatment?</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <p className="font-semibold text-lg mb-2">Natural & Safe</p>
              <p className="text-green-100">
                No harmful side effects, only natural healing
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <p className="font-semibold text-lg mb-2">Root Cause Treatment</p>
              <p className="text-green-100">
                Addresses underlying issues, not just symptoms
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <p className="font-semibold text-lg mb-2">Personalized Care</p>
              <p className="text-green-100">
                Treatment tailored to your unique constitution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
