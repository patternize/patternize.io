import React, { useEffect, useState } from "react";
import styles from "./StarTipModal.module.css";

export default function StarTipModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [_, setScrollCount] = useState(0);

  useEffect(() => {
    // Don't show on mobile
    if (window.innerWidth <= 996) return;

    // Check if we've shown the tip before
    const hasShownTip = localStorage.getItem("hasShownStarTip");

    if (!hasShownTip) {
      // Set up timer for 2 minutes - this is a good baseline for engagement
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("hasShownStarTip", "true");
      }, 2 * 60 * 1000); // 2 minutes in milliseconds

      const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (!window.lastScrollPosition) {
          window.lastScrollPosition = currentScroll;
          return;
        }

        // Calculate scroll distance, but only count downward scrolling
        const scrollDelta = currentScroll - window.lastScrollPosition;
        window.lastScrollPosition = currentScroll;

        // Only update count if scrolling down
        if (scrollDelta > 0) {
          setScrollCount((prev) => {
            const newCount = prev + scrollDelta;
            console.log("newCount", newCount);
            if (newCount > 3500) {
              // Show after scrolling 3500px - this shows more active engagement than time-based
              setIsVisible(true);
              localStorage.setItem("hasShownStarTip", "true");
              clearTimeout(timer); // Clear timer if shown due to scrolling
            }
            return newCount;
          });
        }
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
        delete window.lastScrollPosition;
        clearTimeout(timer);
      };
    }
  }, [isVisible]); // Add isVisible to dependency array to re-run effect when visibility changes

  if (!isVisible) return null;

  return (
    <div className={styles.tipContainer}>
      <div className={styles.tipContent}>
        <a
          href="https://github.com/patternize/patternize.io"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            color: "white",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          }}
        >
          Enjoying Patternize? Your ⭐ makes all the hard work worthwhile!
        </a>
        <button
          className={styles.closeButton}
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
            delete window.lastScrollPosition;
          }}
          aria-label="Close tip"
        >
          ×
        </button>
      </div>
    </div>
  );
}
