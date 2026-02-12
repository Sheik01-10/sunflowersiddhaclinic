import { Award, GraduationCap, Stethoscope } from 'lucide-react';

export default function DoctorProfile() {
  return (
    <section
      id="doctor"
      className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Meet Our Expert
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-8">

            {/* Left – Doctor Photo */}
         <div className="md:col-span-2 bg-gradient-to-br from-green-600 to-emerald-700 p-8 flex items-center justify-center">
  <div className="text-center">
    <div className="bg-white rounded-full p-2 inline-block mb-6 shadow-xl">
      <img
        src="/doctor.jpeg"
        alt="Dr. K. Balachandar"
        className="w-40 h-40 rounded-full object-cover"
      />
    </div>

    <h3 className="text-3xl font-bold text-white mb-2">
      Dr. K. Balachandar
    </h3>

    <p className="text-green-100 text-lg font-semibold">
      B.S.M.S., M.D.
    </p>

    <p className="text-green-200 mt-2">
      Sunflower Siddha Clinic, Erode
    </p>

    {/* 🔥 Highlight Badge */}
    <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full shadow-lg">
      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
      <span className="text-white font-bold tracking-wide">
        Certified in Cancer Biology
      </span>
    </div>
  </div>
</div>


            {/* Right – Details */}
            <div className="md:col-span-3 p-8">
              <div className="space-y-8">

                {/* Qualifications */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                    <h4 className="text-2xl font-bold text-green-800">
                      Qualifications
                    </h4>
                  </div>
                  <div className="space-y-2 ml-11">
                    <p className="text-gray-700 font-semibold">
                      Bachelor of Siddha Medicine and Surgery (B.S.M.S.)
                    </p>
                    <p className="text-gray-700 font-semibold">
                      Doctor of Medicine in Siddha (M.D.)
                    </p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                    <h4 className="text-2xl font-bold text-green-800">
                      Certifications
                    </h4>
                  </div>
                  <div className="space-y-2 ml-11">
                    <p className="text-gray-700">
                      • Clinical Research & Clinical Data Management
                    </p>
                    <p className="text-gray-700">
                      • Cancer Biology
                    </p>
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="w-8 h-8 text-green-600" />
                    <h4 className="text-2xl font-bold text-green-800">
                      Specializations
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4 ml-11">
                    <div className="bg-green-50 p-4 rounded-lg font-semibold text-green-800">
                      Cancer Treatment
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg font-semibold text-green-800">
                      Infertility
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg font-semibold text-green-800">
                      Skin Diseases
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg font-semibold text-green-800">
                      Type 1 & 2 Diabetes
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg col-span-2 font-semibold text-green-800">
                      Auto-immune Disorders
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 bg-green-800 text-white rounded-xl p-6 text-center">
          <p className="text-lg">
            Dr. Balachandar combines deep Siddha wisdom with modern scientific
            understanding to deliver holistic, evidence-based care.
          </p>
        </div>

      </div>
    </section>
  );
}
