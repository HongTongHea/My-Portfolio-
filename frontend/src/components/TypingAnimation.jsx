import React, { useState, useEffect } from "react";

export function TypingAnimation() {
  const phrases = [
    "Junior Graphic Designer",
    "Junior Web Development",
    "Junior UI/UX Designer",
  ];
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // milliseconds per character
    const deletingSpeed = 50; // faster when deleting
    const pauseBetween = 1500; // pause before typing next phrase

    let timeout;

    if (isTyping) {
      if (charIndex < phrases[currentPhraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            (prev) => prev + phrases[currentPhraseIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Done typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseBetween);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Done deleting, move to next phrase
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, charIndex, isTyping, currentPhraseIndex, phrases]);

  return (
    <span className="text-indigo-600 relative">
      {displayText}
      <span className="animate-pulse">|</span> {/* Cursor */}
    </span>
  );
}
