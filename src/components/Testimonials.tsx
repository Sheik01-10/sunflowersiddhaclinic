import { Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

interface Testimonial {
  id: string;
  patient_name: string;
  rating: number;
  comment: string;
  created_at: any;
}

export default function Testimonials() {
  /* ===============================
     1️⃣ FIXED GOOGLE REVIEWS
  =============================== */
  const defaultTestimonials: Testimonial[] = [
    {
      id: 'g1',
      patient_name: 'The Masala Regime',
      rating: 5,
      comment: 'Nice experience and staffs are so helpful.',
      created_at: '',
    },
    {
      id: 'g2',
      patient_name: 'Royal Vip Mobile Numbers',
      rating: 5,
      comment:
        'I really thank the doctor for psoriasis treatment. Recovered almost 80%.',
      created_at: '',
    },
    {
      id: 'g3',
      patient_name: 'Manoj Bala Kumar',
      rating: 5,
      comment:
        'Very kind and gentle diagnosis. Clean and pleasant ambience.',
      created_at: '',
    },
    {
      id: 'g4',
      patient_name: 'Muthusamy Elango',
      rating: 5,
      comment:
        'Soft spoken and knowledgeable doctor. Good in cancer treatment.',
      created_at: '',
    },
  ];

  /* ===============================
     2️⃣ STATE
  =============================== */
  const [firebaseReviews, setFirebaseReviews] = useState<Testimonial[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(true);

  /* ===============================
     3️⃣ LOAD REVIEWS FROM FIREBASE
  =============================== */
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const q = query(
          collection(db, 'reviews'),
          orderBy('created_at', 'desc')
        );
        const snapshot = await getDocs(q);

        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as any),
        }));

        setFirebaseReviews(list);
      } catch (err) {
        console.error('Error loading reviews', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  /* ===============================
     4️⃣ SUBMIT REVIEW → FIREBASE
  =============================== */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newReview = {
      patient_name: name,
      comment,
      rating,
      created_at: Timestamp.now(),
    };

    try {
      const docRef = await addDoc(collection(db, 'reviews'), newReview);

      // 🔥 Instant UI update
      setFirebaseReviews([
        { id: docRef.id, ...newReview },
        ...firebaseReviews,
      ]);

      setName('');
      setComment('');
      setRating(5);
    } catch (err) {
      console.error('Review save failed', err);
      alert('Unable to submit review. Please try again.');
    }
  };

  const renderStars = (count: number) => (
    <div className="flex gap-1 justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < count
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  /* ===============================
     5️⃣ FINAL MERGED LIST
  =============================== */
  const allTestimonials = [...firebaseReviews, ...defaultTestimonials];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700">
            Google reviews & real patient feedback
          </p>
        </div>

        {/* ADD REVIEW FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-16"
        >
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Add Your Review
          </h3>

          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />

          <textarea
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your Experience"
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />

          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border rounded px-3 py-2 mb-4"
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} Star
              </option>
            ))}
          </select>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">
            Submit Review
          </button>
        </form>

        {/* REVIEWS GRID */}
        {loading ? (
          <p className="text-center text-gray-600">Loading reviews...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-xl shadow-lg p-8 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-green-200" />
                {renderStars(t.rating)}
                <p className="text-gray-700 italic text-sm mb-6">
                  “{t.comment}”
                </p>
                <div className="border-t pt-4 text-center font-semibold text-green-800">
                  {t.patient_name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
