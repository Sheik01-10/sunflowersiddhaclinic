import { useEffect } from "react";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../lib/firebase";

export const usePageView = () => {
  useEffect(() => {
    const hasVisited = localStorage.getItem("sunflower_site_visited");

    if (hasVisited) return; // ❌ already counted

    const addView = async () => {
      const ref = doc(db, "siteStats", "home");
      await updateDoc(ref, {
        views: increment(1),
      });

      // ✅ mark as visited
      localStorage.setItem("sunflower_site_visited", "true");
    };

    addView();
  }, []);
};