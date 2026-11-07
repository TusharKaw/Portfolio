import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle';

// Paper notes pinned/taped to a wall. Each can be dragged around the board.
// Note colours
const paper = {
  yellow: 'bg-[#f6e7a6]',
  pink: 'bg-[#f4c9c3]',
  blue: 'bg-[#c9dcea]',
  green: 'bg-[#cfe3c0]',
  cream: 'bg-[#efe3cc]',
};

// How the note is stuck to the wall
const fastener = {
  // semi-transparent tape strip across the top
  tape: "before:absolute before:-top-3 before:left-1/2 before:h-7 before:w-[70px] sm:before:w-24 before:-translate-x-1/2 before:-rotate-3 before:border-x before:border-dashed before:border-white/35 before:bg-[rgba(240,232,210,0.55)] before:shadow-[0_1px_3px_rgba(0,0,0,0.2)] before:content-['']",
  // red push pin + its shadow
  pin: "before:absolute before:top-2.5 before:left-1/2 before:-ml-[9px] before:h-[18px] before:w-[18px] before:rounded-full before:bg-[radial-gradient(circle_at_35%_35%,#ff8a7a,#c0392b_55%,#7a1f16)] before:shadow-[2px_4px_5px_rgba(0,0,0,0.45)] before:content-[''] after:absolute after:top-6 after:left-1/2 after:-ml-px after:h-1.5 after:w-1.5 after:rounded-full after:bg-black/20 after:blur-[1px] after:content-['']",
};

// Per-note offsets so the wall looks hand-placed (index-matched to `notes`)
const offsets = ['', 'mt-[30px]', '', 'mt-[18px]', 'lg:ml-[12%]', 'mt-[26px]', '-mt-2'];

const notes = [
  { title: 'Project & Operations Management', text: 'Planning to delivery, on time & on budget', color: 'yellow', attach: 'tape', rotate: -4 },
  { title: 'Agile / Scrum', text: 'Sprints, standups, retros', color: 'pink', attach: 'pin', rotate: 3 },
  { title: 'Team Leadership', text: 'Cross-functional teams of devs & designers', color: 'blue', attach: 'tape', rotate: -2 },
  { title: 'Stakeholder Communication', text: 'Translating tech for business & government', color: 'green', attach: 'pin', rotate: 4 },
  { title: 'API & Technical Docs', text: 'API docs, DB schemas, specs', color: 'cream', attach: 'pin', rotate: -3 },
  { title: 'Jira & Trello', text: 'Boards, workflows, reporting', color: 'blue', attach: 'tape', rotate: 2 },
  { title: 'React & Node.js', text: 'Hands-on with the stack I manage', color: 'yellow', attach: 'pin', rotate: -5 },
];

const Skills = () => {
  const boardRef = useRef(null);
  const [order, setOrder] = useState(() => notes.map((_, i) => i));
  const [pos, setPos] = useState(() => notes.map(() => ({ x: 0, y: 0 })));
  const [dragging, setDragging] = useState(null);
  const drag = useRef(null);

  // Bring the note being dragged to the front
  const bringToFront = (i) => setOrder(prev => [...prev.filter(n => n !== i), i]);

  // The grid re-flows when the width changes, so put the notes back in place.
  // (Height-only resizes, like a mobile address bar hiding, are ignored.)
  useEffect(() => {
    let lastWidth = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      setPos(notes.map(() => ({ x: 0, y: 0 })));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onPointerDown = (e, i) => {
    if (e.button !== undefined && e.button !== 0) return;
    const board = boardRef.current.getBoundingClientRect();
    const note = e.currentTarget.getBoundingClientRect();
    const start = pos[i];
    // How far the note may move in each direction and still stay on the board
    drag.current = {
      i,
      px: e.clientX,
      py: e.clientY,
      start,
      minX: start.x - (note.left - board.left),
      maxX: start.x + (board.right - note.right),
      minY: start.y - (note.top - board.top),
      maxY: start.y + (board.bottom - note.bottom),
    };
    e.currentTarget.setPointerCapture(e.pointerId);
    bringToFront(i);
    setDragging(i);
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
    const x = clamp(d.start.x + e.clientX - d.px, d.minX, d.maxX);
    const y = clamp(d.start.y + e.clientY - d.py, d.minY, d.maxY);
    setPos(prev => prev.map((p, idx) => (idx === d.i ? { x, y } : p)));
  };

  const onPointerUp = () => {
    drag.current = null;
    setDragging(null);
  };

  return (
    <section id="skills" className="bg-black py-10 text-center">
      <SectionTitle>My <span>Skills</span></SectionTitle>

      <div
        ref={boardRef}
        className="relative ml-[calc(50%-50vw)] w-screen overflow-hidden bg-[url(/wall.svg)] bg-[length:160px_80px] py-24 sm:py-28"
      >
        
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent sm:h-36" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent sm:h-36" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-[18px] gap-y-8 px-[18px] md:grid-cols-3 sm:gap-x-9 sm:gap-y-12 sm:px-12 lg:grid-cols-4">
        {notes.map((note, i) => (
          <div
            key={note.title}
            className={`relative min-h-[140px] touch-none rounded-[2px_2px_14px_2px/2px_2px_8px_2px] px-3.5 pt-7 pb-4 text-left text-[#2b2418] shadow-[0_10px_22px_rgba(0,0,0,0.45),inset_0_-30px_40px_-30px_rgba(0,0,0,0.12)] transition-[box-shadow] select-none sm:min-h-[170px] sm:px-5 sm:pt-[34px] sm:pb-[22px] ${paper[note.color]} ${fastener[note.attach]} ${offsets[i] || ''} ${dragging === i ? 'cursor-grabbing shadow-[0_22px_40px_rgba(0,0,0,0.55)]' : 'cursor-grab'}`}
            style={{
              transform: `translate(${pos[i].x}px, ${pos[i].y}px) rotate(${dragging === i ? 0 : note.rotate}deg) scale(${dragging === i ? 1.06 : 1})`,
              zIndex: order.indexOf(i) + 1,
            }}
            onPointerDown={(e) => onPointerDown(e, i)}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <h3 className="mb-2.5 font-hand text-[1.4rem] leading-[1.1] font-bold text-[#241c10] sm:text-[1.75rem]">{note.title}</h3>
            <p className="font-hand text-[1.1rem] leading-tight text-[#4a3f2c] sm:text-[1.25rem]">{note.text}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
