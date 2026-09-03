import { motion } from 'framer-motion';
import { 
  Mail, 
  Terminal, 
  Database, 
  Cpu, 
  Code2, 
  Network,
  ExternalLink
} from 'lucide-react';

const Github = ({ size = 24, className = '' }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 24, className = '' }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const BoxAnnotation = ({ label, confidence, children, className = '' }: any) => (
  <div className={`relative border border-rule p-6 md:p-8 rounded-sm ${className}`}>
    <div className="absolute top-0 left-0 -translate-x-[1px] -translate-y-full flex items-center gap-2 px-2 py-1 bg-detect text-[#070A0F] font-mono text-[10px] font-semibold tracking-widest whitespace-nowrap rounded-t-sm">
      {label} <span className="opacity-80">{confidence}</span>
    </div>
    {children}
  </div>
);

const App = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-field text-body font-sans selection:bg-detect selection:text-field">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,#1C2530_1px,transparent_1px),linear-gradient(to_bottom,#1C2530_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-rule transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest text-plate uppercase">
            <span className="w-2 h-2 rounded-full bg-detect animate-pulse"></span>
            ARNAV DESHPANDE
          </a>
          <div className="hidden md:flex gap-8 font-mono text-[11px] tracking-widest uppercase">
            <a href="#about" className="text-label hover:text-detect transition-colors">About</a>
            <a href="#skills" className="text-label hover:text-detect transition-colors">Skills</a>
            <a href="#projects" className="text-label hover:text-detect transition-colors">Projects</a>
            <a href="#contact" className="text-label hover:text-detect transition-colors">Contact</a>
          </div>
          <a 
            href="/Resume.dc.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-medium tracking-widest uppercase text-plate border border-rule rounded-sm px-4 py-2 hover:border-detect hover:text-detect transition-colors"
          >
            Résumé ↓
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="top" className="min-h-screen flex items-center pt-32 pb-16 px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div 
              className="lg:col-span-8 flex flex-col gap-8"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 font-mono text-[11px] tracking-widest text-label uppercase">
                <span className="w-4 h-[1px] bg-detect"></span>
                Software Engineer · ML/CV · Data Structures
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-display font-black text-4xl md:text-6xl lg:text-[5.5rem] leading-[0.9] tracking-tight text-plate">
                I build high-performance systems and detect signals in noise.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="max-w-[60ch] text-lg md:text-xl leading-relaxed text-body">
                Top-tier engineering candidate specializing in robust backend architecture, advanced data structures, and computer vision. From scaling full-stack applications to sub-pixel object detection at extreme altitudes. IIT Indore, 2027.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center pt-4">
                <a href="#projects" className="font-mono text-[11px] font-semibold tracking-widest uppercase text-field bg-detect rounded-sm px-6 py-4 hover:bg-white hover:text-field transition-colors">
                  View Work
                </a>
                <a href="https://github.com/Arnavdsp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase text-plate border border-rule rounded-sm px-6 py-4 hover:border-detect hover:text-detect transition-colors glass">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com/in/arnav-deshpande-26a792290" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest uppercase text-plate border border-rule rounded-sm px-6 py-4 hover:border-detect hover:text-detect transition-colors glass">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hidden lg:flex lg:col-span-4 flex-col items-end gap-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex flex-col items-center max-w-[280px]">
                <div className="w-[1px] h-14 bg-gradient-to-b from-transparent to-rule"></div>
                <div className="w-16 h-3 border border-rule rounded-sm bg-field-2"></div>
                <div className="mt-[-1px] -rotate-2 bg-field-2 p-3 shadow-2xl rounded-sm relative">
                  <div className="absolute top-0 left-0 -translate-x-[1px] -translate-y-full flex items-center gap-2 px-2 py-1 bg-detect text-field font-mono text-[10px] font-semibold tracking-widest whitespace-nowrap rounded-t-sm">
                    arnav_deshpande <span className="opacity-80">1.00</span>
                  </div>
                  <div className="w-full aspect-square border border-rule bg-[#131A22] relative flex items-center justify-center p-8 text-center text-label font-mono text-[10px]">
                    <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-detect opacity-50"></div>
                    [PROFILE_DATA_STREAM]
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 font-mono text-[10px] tracking-widest text-label text-right uppercase">
                <div>SYSTEM_STATUS · <span className="text-body">OPTIMIZED</span></div>
                <div>DSA_COMPETENCY · <span className="text-body">EXPERT</span></div>
                <div>AVAILABILITY · <span className="text-verify">SUMMER 2027</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="flex items-baseline gap-4 mb-16 font-mono text-[11px] tracking-widest text-label uppercase">
            <span className="text-detect">01</span>CORE_COMPETENCIES<span className="flex-1 h-[1px] bg-rule"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BoxAnnotation label="ALGORITHMS_&_DSA" confidence="0.99" className="bg-field-2">
              <Terminal className="text-detect mb-6" size={32} />
              <h3 className="font-display font-bold text-2xl text-plate mb-4">Data Structures & Algos</h3>
              <p className="text-body leading-relaxed mb-6">Expertise in complex algorithmic problem solving, dynamic programming, graph theory, and optimizing time/space complexities for scalable systems.</p>
              <div className="flex flex-wrap gap-2">
                {['C++', 'Python', 'Java', 'Dynamic Programming', 'Graph Theory'].map(skill => (
                  <span key={skill} className="font-mono text-[10px] tracking-widest text-body border border-rule rounded-sm px-2 py-1 uppercase">{skill}</span>
                ))}
              </div>
            </BoxAnnotation>

            <BoxAnnotation label="SOFTWARE_ENGINEERING" confidence="0.97" className="bg-field-2">
              <Code2 className="text-detect mb-6" size={32} />
              <h3 className="font-display font-bold text-2xl text-plate mb-4">Software & System Design</h3>
              <p className="text-body leading-relaxed mb-6">Architecting robust, scalable backend services and responsive frontends. Strong understanding of system design principles and full-stack development.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'System Design', 'REST/GraphQL'].map(skill => (
                  <span key={skill} className="font-mono text-[10px] tracking-widest text-body border border-rule rounded-sm px-2 py-1 uppercase">{skill}</span>
                ))}
              </div>
            </BoxAnnotation>

            <BoxAnnotation label="DATABASE_SYSTEMS" confidence="0.96" className="bg-field-2">
              <Database className="text-detect mb-6" size={32} />
              <h3 className="font-display font-bold text-2xl text-plate mb-4">SQL & Data Modeling</h3>
              <p className="text-body leading-relaxed mb-6">Designing efficient database schemas, writing complex SQL queries, index optimization, and working with both relational and NoSQL databases.</p>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization', 'Schema Design'].map(skill => (
                  <span key={skill} className="font-mono text-[10px] tracking-widest text-body border border-rule rounded-sm px-2 py-1 uppercase">{skill}</span>
                ))}
              </div>
            </BoxAnnotation>

            <BoxAnnotation label="MACHINE_LEARNING" confidence="0.98" className="bg-field-2">
              <Cpu className="text-detect mb-6" size={32} />
              <h3 className="font-display font-bold text-2xl text-plate mb-4">ML & Computer Vision</h3>
              <p className="text-body leading-relaxed mb-6">Developing end-to-end inference pipelines, anomaly detection models, and specialized computer vision systems for defense and research applications.</p>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'YOLO/RT-DETR', 'Transformers', 'Scikit-learn'].map(skill => (
                  <span key={skill} className="font-mono text-[10px] tracking-widest text-body border border-rule rounded-sm px-2 py-1 uppercase">{skill}</span>
                ))}
              </div>
            </BoxAnnotation>
            
            <BoxAnnotation label="AI_AGENTIC_SYSTEMS" confidence="0.95" className="bg-field-2 lg:col-span-2">
              <Network className="text-detect mb-6" size={32} />
              <h3 className="font-display font-bold text-2xl text-plate mb-4">LLMs & Agentic Workflows</h3>
              <p className="text-body leading-relaxed mb-6 max-w-[60ch]">Building autonomous conversational agents and specialized AI pipelines using large language models. Experience in orchestrating agentic workflows for real-time dialog management, retrieval-augmented generation (RAG), and complex NLP summarization tasks with strict latency requirements.</p>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'LlamaIndex', 'RAG', 'Prompt Engineering', 'Multimodal LLMs'].map(skill => (
                  <span key={skill} className="font-mono text-[10px] tracking-widest text-body border border-rule rounded-sm px-2 py-1 uppercase">{skill}</span>
                ))}
              </div>
            </BoxAnnotation>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="flex items-baseline gap-4 mb-16 font-mono text-[11px] tracking-widest text-label uppercase">
            <span className="text-detect">02</span>SELECTED_PROJECTS<span className="flex-1 h-[1px] bg-rule"></span>
          </div>

          <div className="flex flex-col gap-24">
            {/* Project 1 */}
            <BoxAnnotation label="AERIAL_INFERENCE_PIPELINE" confidence="0.98" className="bg-[#0A0F16]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-plate">
                    High-altitude tiny object detection.
                  </h2>
                  <p className="max-w-[60ch] text-lg leading-relaxed text-body">
                    Engineered an end-to-end aerial inference pipeline for robust multi-scale detection. Implemented SAHI tiled sliding-window inference to recover sub-pixel and occluded targets, integrating ESRGAN and SwinIR super-resolution as preprocessing stages to maintain accuracy at extreme altitudes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['YOLOv12-L', 'RT-DETR-L', 'SAHI', 'Python', 'PyTorch'].map(tag => (
                      <span key={tag} className="font-mono text-[10px] tracking-widest text-body border border-rule rounded-sm px-3 py-2 uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-[10px] tracking-widest text-label uppercase">
                  <div className="flex flex-col gap-2 pb-4 border-b border-rule"><span className="text-[#3E4A58]">ROLE</span><span className="text-body">ML INTERN @ DRDO RCI</span></div>
                  <div className="flex flex-col gap-2 pb-4 border-b border-rule"><span className="text-[#3E4A58]">FOCUS</span><span className="text-body">ALGORITHM OPTIMIZATION</span></div>
                  <a href="https://github.com/Arnavdsp" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] font-semibold tracking-widest uppercase text-body border border-rule rounded-sm px-4 py-3 hover:border-detect hover:text-detect transition-colors">
                    View on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </BoxAnnotation>

            {/* Project 2 */}
            <BoxAnnotation label="AGENTIC_HEALTH_COUNSELLOR" confidence="0.94" className="bg-[#0A0F16]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-plate">
                    AI-Powered Mental Health Counsellor.
                  </h2>
                  <p className="max-w-[60ch] text-lg leading-relaxed text-body">
                    Built at the Google DeepMind hackathon: an autonomous conversational agent for emotion recognition and real-time dialog management. Architected a rapid multimodal inference path that cut response latency by 25% while maintaining highly contextual responses.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['LLMs', 'Agentic Workflow', 'Low-Latency', 'System Architecture'].map(tag => (
                      <span key={tag} className="font-mono text-[10px] tracking-widest text-body border border-rule rounded-sm px-3 py-2 uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-[10px] tracking-widest text-label uppercase">
                  <div className="flex flex-col gap-2 pb-4 border-b border-rule"><span className="text-[#3E4A58]">EVENT</span><span className="text-body">DEEPMIND HACKATHON</span></div>
                  <div className="flex flex-col gap-2 pb-4 border-b border-rule"><span className="text-[#3E4A58]">METRIC</span><span className="text-verify">25% LATENCY REDUCTION</span></div>
                  <a href="https://github.com/Arnavdsp" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] font-semibold tracking-widest uppercase text-body border border-rule rounded-sm px-4 py-3 hover:border-detect hover:text-detect transition-colors">
                    View on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </BoxAnnotation>
            
            {/* Project 3 */}
            <BoxAnnotation label="GEOSPATIAL_SEGMENTATION" confidence="0.92" className="bg-[#0A0F16]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-plate">
                    Water Bridge Detection via Satellite Imagery.
                  </h2>
                  <p className="max-w-[60ch] text-lg leading-relaxed text-body">
                    End-to-end geospatial deep learning for hydraulic infrastructure in multi-spectral imagery. Developed an optimized data ingestion pipeline, spectral band normalization, and tile-based inference scalable across large geographical regions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Semantic Segmentation', 'Data Pipelines', 'Spatial Analysis', 'SQL'].map(tag => (
                      <span key={tag} className="font-mono text-[10px] tracking-widest text-body border border-rule rounded-sm px-3 py-2 uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-4 font-mono text-[10px] tracking-widest text-label uppercase">
                  <div className="flex flex-col gap-2 pb-4 border-b border-rule"><span className="text-[#3E4A58]">TYPE</span><span className="text-body">PERSONAL PROJECT</span></div>
                  <div className="flex flex-col gap-2 pb-4 border-b border-rule"><span className="text-[#3E4A58]">FOCUS</span><span className="text-body">SCALABLE PIPELINES</span></div>
                  <a href="https://github.com/Arnavdsp" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] font-semibold tracking-widest uppercase text-body border border-rule rounded-sm px-4 py-3 hover:border-detect hover:text-detect transition-colors">
                    View on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </BoxAnnotation>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-24 bg-plate text-ink py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 flex items-baseline gap-4 mb-8 font-mono text-[11px] tracking-widest text-[#5A6672] uppercase">
              <span className="text-detect">03</span>CONTACT_PROTOCOL<span className="flex-1 h-[1px] bg-[#C6CCD2]"></span>
            </div>
            
            <div className="lg:col-span-8 flex flex-col gap-8">
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[4rem] leading-[0.95] tracking-tight max-w-[20ch]">
                Open to AI/ML and software engineering roles from 2027.
              </h2>
              
              <div className="flex flex-col gap-1 mt-6">
                <a href="mailto:arnavhpd@gmail.com" className="group flex items-center justify-between font-display font-bold text-2xl md:text-3xl tracking-tight py-4 border-b border-[#C6CCD2] hover:text-detect transition-colors">
                  <span className="flex items-center gap-4"><Mail className="text-[#5A6672] group-hover:text-detect transition-colors" /> arnavhpd@gmail.com</span>
                  <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://github.com/Arnavdsp" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between font-display font-bold text-2xl md:text-3xl tracking-tight py-4 border-b border-[#C6CCD2] hover:text-detect transition-colors">
                  <span className="flex items-center gap-4"><Github className="text-[#5A6672] group-hover:text-detect transition-colors" /> GitHub</span>
                  <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://linkedin.com/in/arnav-deshpande-26a792290" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between font-display font-bold text-2xl md:text-3xl tracking-tight py-4 border-b border-[#C6CCD2] hover:text-detect transition-colors">
                  <span className="flex items-center gap-4"><Linkedin className="text-[#5A6672] group-hover:text-detect transition-colors" /> LinkedIn</span>
                  <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="/Resume.dc.html" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between font-display font-bold text-2xl md:text-3xl tracking-tight py-4 border-b border-[#C6CCD2] hover:text-detect transition-colors">
                  <span className="flex items-center gap-4 text-detect">Résumé PDF ↓</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-6 font-mono text-[10px] tracking-widest text-[#5A6672] uppercase pt-4">
              <div className="flex justify-between pb-4 border-b border-[#C6CCD2]"><span>LOCATION</span><span className="text-ink font-semibold">INDORE / HYDERABAD, IN</span></div>
              <div className="flex justify-between pb-4 border-b border-[#C6CCD2]"><span>GRADUATING</span><span className="text-ink font-semibold">MAY 2027</span></div>
              <div className="flex justify-between pb-4 border-b border-[#C6CCD2]"><span>SEEKING</span><span className="text-ink font-semibold">AI/ML · SDE · DATA</span></div>
              <div className="flex justify-between"><span>REPLY TIME</span><span className="text-ink font-semibold">&lt; 24H</span></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pt-24 pb-12 overflow-hidden bg-field">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-[10px] leading-[1.8] tracking-widest text-[#3E4A58] uppercase pb-16">
            <div>BUILD 2026<br/>LIGHTHOUSE 100 / 100 / 100</div>
            <div>OPTIMIZED FOR PERFORMANCE<br/>BUILT WITH REACT & TAILWIND V4</div>
            <div className="md:text-right">ENGINEERED FOR SCALE<br/>AND RELIABILITY.</div>
          </div>
          
          <div className="font-display font-black text-[clamp(4rem,20vw,16rem)] leading-[0.8] tracking-[-0.05em] text-plate text-center py-12">
            arnav
          </div>
          
          <div className="flex flex-wrap justify-between gap-6 pt-12 border-t border-rule font-mono text-[10px] tracking-widest text-[#3E4A58] uppercase">
            <span>© 2026 ARNAV DESHPANDE</span>
            <span>IIT INDORE · SPACE SCIENCES & ENGINEERING</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
