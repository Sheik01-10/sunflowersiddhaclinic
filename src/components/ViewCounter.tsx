import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Eye } from "lucide-react";

export default function ViewCounter() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const ref = doc(db, "siteStats", "home");

    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setViews(snap.data().views);
      }
    });

    return () => unsub();
  }, []);

  return (
    <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mt-6">
      <Eye className="w-4 h-4 text-green-600" />
      <span>
        {views.toLocaleString()} people visited our clinic website
      </span>
    </div>
  );
}