import React, { useEffect, useRef, useState } from 'react'
import "./css/skillsBar.css";
import data from "../data/skillsData.json";
import { SkillComponent } from './skillComponent';

export const SkillsBar = () => {

  const containerRef = useRef(null);

  const duplicatedData = [...data, ...data, ...data];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const[scrollStart, setScrollStart] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const sectionWidth = container.scrollWidth / 3;


    container.scrollLeft = sectionWidth;
  },[]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollStart(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if(!isDragging) return;
    const dx = e.pageX - startX;
    containerRef.current.scrollLeft = scrollStart - dx;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
    setScrollStart(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const dx = e.touches[0].pageX - startX;
    containerRef.current.scrollLeft = scrollStart - dx;
  }

  const handleScroll = () => {
    const container = containerRef.current;
    const sectionWidth = container.scrollWidth / 3;

    if (container.scrollLeft <= 0) {
      container.scrollLeft += sectionWidth;
    } else if (container.scrollLeft >= sectionWidth * 2) {
      container.scrollLeft -= sectionWidth;
    }
  }

  return (
    <div
      className='skills-container'
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onScroll={handleScroll}
    >
      <div className='skills-wrapper'>
        {duplicatedData.map((skill, index) => (
          <div className='skill-item' key={index}>
            <SkillComponent skill={skill}/>
          </div>
        ))}
      </div>
    </div>
  )
}
