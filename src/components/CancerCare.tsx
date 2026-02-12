import React from 'react';
import { Activity, Flame, Wind, Droplets } from 'lucide-react';

const CancerCare: React.FC = () => {
  return (
    <section id="cancer-care" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Cancer Care – Siddha & Modern Correlation
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            An integrative understanding of cancer through Siddha principles
            and modern medical science
          </p>
        </div>

        {/* Overview */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Overview of Cancer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Cancer remains one of the leading causes of morbidity and mortality worldwide.
            Despite advancements in modern oncology, the complexity of cancer etiology and
            treatment remains unresolved. According to the World Health Organization (WHO),
            more than 10 million people are diagnosed with cancer annually.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            In India alone, cancer affects over 11 lakh people each year, contributing to
            approximately 3.5 lakh deaths annually. Modern medicine classifies cancer into
            carcinomas, sarcomas, melanomas, lymphomas, and leukemias. However, treatment
            resistance and recurrence remain significant challenges.
          </p>
        </div>

        {/* Siddha Perspective */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-12 shadow-lg">
          <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-green-600" />
            Siddha Perspective on Cancer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Siddha, with its holistic approach, offers a different framework for
            understanding cancer. The disease is viewed as a manifestation of
            imbalances in <strong>Vatham, Pitham, and Kabam</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This perspective correlates traditional Siddha concepts with modern
            pathophysiology, highlighting integrative therapeutic potential
            that focuses on immune balance, metabolic regulation, and quality
            of life improvement.
          </p>
        </div>

        {/* Correlation Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Pitta */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 hover:shadow-xl transition">
            <Flame className="w-10 h-10 text-red-600 mb-3" />
            <h4 className="text-xl font-bold text-red-700 mb-2">
              Proliferation & Pitta Dosha Imbalance
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Uncontrolled cellular proliferation is a hallmark of cancer in modern medicine.
              In Siddha, this corresponds to aggravated Pitta Dosha, which governs heat and
              metabolic transformation. Excess Pitta leads to abnormal cell growth and division,
              paralleling sustained proliferative signaling in cancer.
            </p>
          </div>

          {/* Vata */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 hover:shadow-xl transition">
            <Wind className="w-10 h-10 text-blue-600 mb-3" />
            <h4 className="text-xl font-bold text-blue-700 mb-2">
              Metastasis & Vata Dosha Dysregulation
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Cancer metastasis, the spread of malignant cells to distant organs,
              can be correlated with Vata Dosha imbalance. Vata governs movement and
              communication; its disturbance leads to abnormal migration of diseased
              cells throughout the body.
            </p>
          </div>

          {/* Kapha */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:shadow-xl transition">
            <Droplets className="w-10 h-10 text-green-600 mb-3" />
            <h4 className="text-xl font-bold text-green-700 mb-2">
              Tumor Microenvironment & Kapha Dosha Imbalance
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              The tumor microenvironment characterized by immune evasion, chronic inflammation,
              and angiogenesis can be associated with Kapha imbalance. Excess Kapha causes
              stagnation and solid mass formation, similar to tumor growth and protective stroma.
            </p>
          </div>

        </div>

        {/* Note */}
        <div className="mt-12 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 text-center">
          <p className="text-gray-800">
            <strong>Note:</strong> Siddha cancer care is intended as an integrative
            supportive approach that focuses on immune modulation, metabolic balance,
            and quality of life, alongside conventional oncology treatments.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CancerCare;
