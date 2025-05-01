import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
    return (
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
    
            {/* Horizontal box layout */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Project 1 */}
              <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1503028316171-99a6b1e535df?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Organizational Transformation"
                  className="w-xl h-50 object-cover border border-white/10 mb-7"
                />
                <h3 className="text-xl font-bold mb-2">Organization Transformation</h3>
                <p className="text-gray-400 mb-4">
                  Strategized & led transformation implementation with biggest SOE bank in Indonesia
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["PowerPoint", "Excel", "PMO"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://ukcat.ninja/"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project -&gt;
                  </a>
                </div>
              </div>
    
              {/* Project 2 */}
              <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full md:w-1/2">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664300442121-794e137b141c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Organizational Transformation"
                  className="w-xl h-50 object-cover border border-white/10 mb-7"
                />
                <h3 className="text-xl font-bold mb-2">Business Process Re-engineering</h3>
                <p className="text-gray-400 mb-4">
                  Defined business process to be aligned with best practices through feasibility study
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["PowerPoint", "Excel", "PMO"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://ukcat.ninja/"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project -&gt;
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition w-full md:w-1/2">
                <img
                  src="https://plus.unsplash.com/premium_photo-1663050686066-f95a349af511?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Organizational Transformation"
                  className="w-xl h-50 object-cover border border-white/10 mb-7"
                />
                <h3 className="text-xl font-bold mb-2">Strategy Design</h3>
                <p className="text-gray-400 mb-4">
                  Formulated long-term strategic plan for top companies in Indonesia
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["PowerPoint", "Excel", "PMO"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://ukcat.ninja/"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project -&gt;
                  </a>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
  };