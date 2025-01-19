import React, { useEffect, useState } from "react";
import styles from "./StarTipModal.module.css";

export default function StarTipModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    // Don't show on mobile
    if (window.innerWidth <= 996) return;

    // Check if we've shown the tip before
    const hasShownTip = localStorage.getItem("hasShownStarTip");

    // if (!hasShownTip) {
    if (true) {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (!window.lastScrollPosition) {
          window.lastScrollPosition = currentScroll;
          return;
        }

        // Calculate scroll distance
        const scrollDelta = Math.abs(currentScroll - window.lastScrollPosition);
        window.lastScrollPosition = currentScroll;

        // Update scroll count and show tip after enough scrolling
        setScrollCount((prev) => {
          const newCount = prev + scrollDelta;
          if (newCount > 3500) {
            // Show after scrolling 3500px - indicates meaningful engagement with content
            setIsVisible(true);
            localStorage.setItem("hasShownStarTip", "true");
          }
          return newCount;
        });
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
        delete window.lastScrollPosition;
      };
    }
  }, []); // Empty dependency array means this runs once on mount

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
          Think it’s cool? Drop a ⭐ and make our day!
        </a>
        <button
          className={styles.closeButton}
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          aria-label="Close tip"
        >
          ×
        </button>
      </div>
    </div>
  );
}
