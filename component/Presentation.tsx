import React, { useState, useEffect } from "react";
import Markdown from "./Markdown";

type PresentationProps = {
  markdown: string;
};

const Presentation: React.FC<PresentationProps> = ({ markdown }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = markdown.split('---').map(content => content.trim());

  console.log(slides);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(curr => curr - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: 'white' 
    }}>
      <div style={{ 
        flex: 1, 
        padding: '2rem',
        overflow: 'auto'
      }}>
        <Markdown markdown={slides[currentSlide]} />
      </div>
      <div style={{ 
        padding: '1rem', 
        borderTop: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          style={{ padding: '0.5rem 1rem' }}
        >
          Previous
        </button>
        <span>{currentSlide + 1} / {slides.length}</span>
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          style={{ padding: '0.5rem 1rem' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Presentation;
