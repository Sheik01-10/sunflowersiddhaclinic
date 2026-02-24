import { Flower2, Leaf, Heart, Shield, } from "lucide-react";
import { usePageView } from "../hooks/usePageView";
import ViewCounter from "../components/ViewCounter";
export default function Hero() {
  usePageView();
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
          {/* 👁 Live Website Views */}
  <ViewCounter />
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

  <p className="text-gray-700 max-w-3xl mx-auto text-center mb-12">
    Wellness is a journey of balance, patience, and natural growth.
    At Sunflower Siddha Clinic, we help every individual bloom through
    compassionate care, traditional Siddha wisdom, and a holistic approach
    to healing.
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-gradient-to-b from-yellow-50 to-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
      <Flower2 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
      <h4 className="text-xl font-bold text-green-800 mb-3">
        Natural Growth
      </h4>
      <p className="text-gray-600">
        Healing that works in harmony with nature, allowing the body to recover
        and strengthen at its own pace.
      </p>
    </div>

    <div className="bg-gradient-to-b from-green-50 to-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
      <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
      <h4 className="text-xl font-bold text-green-800 mb-3">
        Compassionate Healing
      </h4>
      <p className="text-gray-600">
        Personalized care where every patient is listened to, understood,
        and supported throughout the healing journey.
      </p>
    </div>

    <div className="bg-gradient-to-b from-emerald-50 to-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center">
      <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
      <h4 className="text-xl font-bold text-green-800 mb-3">
        Sustainable Wellness
      </h4>
      <p className="text-gray-600">
        Focus on long-term health by nurturing balance in lifestyle, nutrition,
        and mental well-being.
      </p>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
