import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "Typescript", "TailwindCSS", "Svelte"];
    const backendSkills = ["Node.js", "Python", "MongoDB"];
  
    return (
      <section id="about" className="min-h-screen justify-center py-20">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              About Me
            </h2>
    
            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 hover:border-blue-500/30 transition-all">
              {/* Flex row on md+, stack on mobile */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Image */}
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQF5q701MCDbRw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709406438437?e=1751500800&v=beta&t=luX2pF5qP-K3oN779qJ-eB48-g9027EspxarxMobsoo"
                  alt="Daniel Purwandi"
                  className="w-40 h-40 object-cover rounded-full border border-white/10"
                />
    
                {/* Text + Skills */}
                <div className="flex-1">
                  <p className="text-gray-300">
                    Management Consultant at BCG with 3+ years in Financial Services & Energy, 
                    specializing in Strategic Planning, Organization Transformation & Business Optimization. <br /><br />
                    Proven ability in strategic thinking, stakeholder management, PMO execution & financial projection. 
                    Prior to BCG, an outstanding analyst at OVO, Gojek and Mamikos with expertise in go-to-market & customer retention.
                  </p>
    
                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Frontend */}
                  <div>
                      <h3 className="text-xl font-bold mb-4">Frontend</h3>
                      <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                          <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                          >
                          {tech}
                          </span>
                      ))}
                      </div>
                  </div>

                  {/* Backend */}
                  <div>
                      <h3 className="text-xl font-bold mb-4">Backend</h3>
                      <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                          <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                          >
                          {tech}
                          </span>
                      ))}
                      </div>
                  </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 transition-all">
                  <h3 className="text-xl font-bold mb-4">Education</h3>
                      <ul className="text-gray-300 space-y-3">
                          <li>
                              <strong>B.Sc. in Mathematics</strong> - Bandung Institute of Technology (2017-2021); <strong>GPA: 3.6/4.0</strong>; Dean's List (last 3 consecutive semesters) 
                          </li>
                          <li>
                              <strong>Awards:</strong> <br /> <li>YLI National Wave 13 by McKinsey & Co. Awardee</li> <li>Top 3 at Allianz Indonesia Masterclass</li> <li>IYKRA
                              Scholarship</li> <li>Mensa Certification</li> <li>Top 3 the New L-Men of the Year 2024</li>
                          </li>
                      </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 transition-all">
                  <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                  <div className="space-y-4 text-gray-300">
                      <div>
                          <h4> <strong>Management Consultant</strong> - Boston Consulting Group (Nov 2021 - Present)</h4>
                          <p>
                              Led 2-year transformation program for top 4 bank in Indonesia    
                          </p>
                      </div>

                      <div>
                          <h4> <strong>Data Analyst</strong> - OVO (Jun 2021 - Nov 2021)</h4>
                          <p>
                              Assisted VP to make strategic marketing campaign using SQL (promoted early from intern to contract due to performance)   
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
  );
};
  