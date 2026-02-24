import { useEffect } from "react";
import { doc, setDoc, increment } from "firebase/firestore";
import { db } from "../lib/firebase";

export const usePageView = () => {
  useEffect(() => {
    const hasVisited = localStorage.getItem("sunflower_site_visited");
    if (hasVisited) return;

    const addView = async () => {
      const ref = doc(db, "siteStats", "home");

      await setDoc(
        ref,
        { views: increment(1) },
        { merge: true }
      );

      localStorage.setItem("sunflower_site_visited", "true");
    };

    addView();
  }, []);
};