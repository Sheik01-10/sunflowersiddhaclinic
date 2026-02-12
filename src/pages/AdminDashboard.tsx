import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  appointmentDate: string;
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const navigate = useNavigate();

  /* 🔄 REAL-TIME LISTENER */
  useEffect(() => {
    const q = query(
      collection(db, 'appointments'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Appointment, 'id'>),
      }));
      setAppointments(data);
    });

    return () => unsubscribe();
  }, []);

  /* 🗑️ DELETE APPOINTMENT */
  const deleteAppointment = async (id: string) => {
    const ok = window.confirm('Are you sure you want to delete this appointment?');
    if (!ok) return;

    await deleteDoc(doc(db, 'appointments', id));
  };

  /* 🚪 LOGOUT */
  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-green-800">
          Admin Dashboard – Appointments
        </h2>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* EMPTY STATE */}
      {appointments.length === 0 && (
        <p className="text-gray-600 text-center mt-20">
          No appointments found.
        </p>
      )}

      {/* APPOINTMENT LIST */}
      <div className="grid gap-4">
        {appointments.map((a) => (
          <div
            key={a.id}
            className="bg-white border rounded-xl p-5 flex flex-col md:flex-row md:justify-between md:items-center shadow"
          >
            <div className="space-y-1">
              <p>
                <strong>Name:</strong> {a.patientName}
              </p>
              <p>
                <strong>Phone:</strong> {a.phone}
              </p>
              <p>
                <strong>Date:</strong> {a.appointmentDate}
              </p>
            </div>

            <button
              onClick={() => deleteAppointment(a.id)}
              className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
