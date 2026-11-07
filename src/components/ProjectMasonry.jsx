import React, { useState, useRef, useLayoutEffect, useCallback, useEffect } from 'react';
import projects, { projectFilters } from '../data/projects';

const PEEK = 140; // px of the next row left visible under the fade

const getColumnCount = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
};

// Image-only masonry grid. `clipRows` limits the "All" view to N rows with a fade;
// picking a category always shows every project in it. Omit `clipRows` to never clip.
const ProjectMasonry = ({ clipRows }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeId, setActiveId] = useState(null);
  const [columnCount, setColumnCount] = useState(getColumnCount);
  const [clipHeight, setClipHeight] = useState(null);
  const gridRef = useRef(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  // Distribute left-to-right so the first items read across the top row
  const columns = Array.from({ length: columnCount }, () => []);
  filteredProjects.forEach((p, i) => columns[i % columnCount].push(p));

  // Clip the grid just below row N of the tallest column
  const measure = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    // Only the "All" view is capped; a category shows every matching project
    if (!clipRows || activeFilter !== 'all') { setClipHeight(null); return; }
    const gridTop = grid.getBoundingClientRect().top;
    let rowsBottom = 0;
    grid.querySelectorAll('[data-col]').forEach(col => {
      const items = col.querySelectorAll('[data-item]');
      const last = items[Math.min(clipRows, items.length) - 1];
      if (last) rowsBottom = Math.max(rowsBottom, last.getBoundingClientRect().bottom - gridTop);
    });
    const full = grid.scrollHeight;
    const target = rowsBottom + PEEK;
    setClipHeight(target < full ? target : null);
  }, [clipRows, activeFilter]);

  useEffect(() => {
    const onResize = () => setColumnCount(getColumnCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    grid.querySelectorAll('[data-col]').forEach(col => ro.observe(col));
    return () => ro.disconnect();
  }, [measure, columnCount, activeFilter]);

  const toggleCard = (id) => setActiveId(prev => (prev === id ? null : id));

  // Overlay is hidden until the card is hovered (mouse), tapped (.active) or keyboard-focused
  const reveal = 'opacity-0 invisible transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 group-[.active]:visible group-[.active]:opacity-100';

  return (
    <>
      <div className="my-6 flex flex-wrap justify-center gap-2">
        {projectFilters.map(filter => (
          <button
            key={filter.id}
            className={`cursor-pointer rounded-full border px-4 py-2 text-[0.9rem] font-medium text-ink hover:border-beige hover:bg-beige ${activeFilter === filter.id ? 'border-beige bg-beige' : 'border-beige bg-panel-2'}`}
            onClick={() => { setActiveFilter(filter.id); setActiveId(null); }}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div
        className="relative overflow-hidden"
        style={clipHeight ? { maxHeight: clipHeight } : undefined}
      >
        <div className="flex items-start gap-4" ref={gridRef}>
          {columns.map((col, ci) => (
            <div data-col className="flex min-w-0 flex-1 flex-col gap-4" key={ci}>
              {col.map(project => (
                <div
                  key={project.id}
                  data-item
                  className={`group relative cursor-pointer overflow-hidden rounded-xl bg-[#111] text-left outline-none ${activeId === project.id ? 'active' : ''}`}
                  onClick={() => toggleCard(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCard(project.id); }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeId === project.id}
                  aria-label={project.title}
                >
                  <img src={project.image} alt={project.title} loading="lazy" onLoad={measure} className="block h-auto w-full border border-beige rounded-xl" />

                  {/* Bottom gradient behind the text */}
                  <div className={`pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_35%,rgba(0,0,0,0)_75%)] ${reveal}`} />

                  <div className={`absolute inset-x-0 bottom-0 z-[1] p-4 sm:p-5 ${reveal}`}>
                    <div className="flex flex-wrap gap-1">
                      {project.category.map((cat, i) => (
                        <span key={cat} className="text-[10px] font-semibold text-beige uppercase">
                          {i > 0 && <span className="mr-1.5 text-beige">·</span>}
                          {projectFilters.find(f => f.id === cat)?.name}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-black text-white sm:text-xl">{project.title}</h3>
                    <p className="mb-2 line-clamp-2 text-sm text-[#e0e0e0]">{project.description}</p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-beige hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View project <i className="fas fa-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Fades the clipped bottom edge into the background */}
        {clipHeight && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[180px] bg-gradient-to-t from-black from-10% to-transparent sm:h-[260px]" />
        )}
      </div>
    </>
  );
};

export default ProjectMasonry;
