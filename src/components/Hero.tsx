import { Flower2, Leaf, Heart, Shield, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 bg-gradient-to-br from-yellow-50 via-green-50 to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO HEADER */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-8 rounded-full shadow-xl">
              <Flower2 className="w-24 h-24 text-yellow-500" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4">
            Sunflower Siddha Clinic
          </h1>

          <p className="text-xl md:text-2xl text-green-700 font-semibold mb-6">
            Turning Towards the Sun of Wellness
          </p>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Just like a sunflower turns toward the sun, our healing approach focuses
            on positivity, balance, and holistic care — nurturing the mind, body,
            and soul through Siddha wisdom and natural remedies.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Leaf className="w-12 h-12 text-green-600" />,
              title: "100% Natural Treatment",
              desc: "Pure herbal medicines without chemicals or artificial additives",
            },
            {
              icon: <Heart className="w-12 h-12 text-green-600" />,
              title: "Mind, Body & Soul",
              desc: "Holistic care that treats root causes, not just symptoms",
            },
            {
              icon: <Shield className="w-12 h-12 text-green-600" />,
              title: "Safe & Time-Tested",
              desc: "Traditional Siddha treatments with proven safety",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-green-800 mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* BLOOM WITH WELLNESS */}
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14">
          <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">
            🌻 Bloom with Wellness
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-10">
            Support your healing journey beyond consultations. Download our
            carefully designed wellness resources to stay consistent, informed,
            and empowered every day.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Health & Lifestyle Guides",
              "Daily & Weekly Wellness Trackers",
              "Educational Awareness Posters",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-green-50 border border-green-100 p-6 rounded-xl text-center hover:shadow-lg transition"
              >
                <Download className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-green-800">{item}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Easy-to-download resources for better wellness habits
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
