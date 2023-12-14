
import React, { useState, useRef, useEffect } from 'react';

const StickyNote = ({ initialX, initialY }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ width: 200, height: 200 });
  const [content, setContent] = useState('');

  const textareaRef = useRef(null);
  const noteRef = useRef(null);
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      // Check for left mouse click
      isDragging.current = true;
      offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    // Auto-adjust size based on content
    if (textareaRef.current) {
      const newWidth = Math.max(200, textareaRef.current.scrollWidth);
      const newHeight = Math.max(200, textareaRef.current.scrollHeight);

      setSize({ width: newWidth, height: newHeight });
    }
  }, [content]);

  return (
    <div
      ref={noteRef}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        border: '1px solid #000',
        padding: '8px',
        backgroundColor: '#fff',
        resize: 'both',
        overflow: 'auto',
        cursor: 'grab', // Change cursor on hover
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <textarea
        ref={textareaRef}
        style={{ width: '100%', height: '100%', border: 'none', outline: 'none' }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type here..."
      />
    </div>
  );
};

export default StickyNote;
