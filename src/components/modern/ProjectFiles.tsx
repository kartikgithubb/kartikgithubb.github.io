import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, ArrowRight, Paperclip, ChevronLeft, ArrowUpLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// --- Data & Types ---

export type ProjectCategory = 'Data' | 'AI' | 'ML' | 'Project' | 'Analytics';

export interface ProjectData {
    id: string;
    title: string;
    category: ProjectCategory;
    color: string;
    accentColor: string;
    description: string;
    outcome: string;
    technologies: string[];
    status: 'Completed' | 'In Progress' | 'Planned';
    startDate: string;
    endDate: string;
    link: string;
    receiptId: string;
}

// Grouped Data by Category
const categoryData: Record<ProjectCategory, { color: string, description: string }> = {
    'Data': { color: '#D9480F', description: 'Data Engineering, Pipelines & Architecture' },
    'AI': { color: '#E03131', description: 'Artificial Intelligence & LLM Applications' },
    'ML': { color: '#1971C2', description: 'Machine Learning Models & Predictive Analysis' },
    'Analytics': { color: '#6741D9', description: 'Business Intelligence & Visualization' },
    'Project': { color: '#099268', description: 'Full Stack Development & System Design' },
};

const projects: ProjectData[] = [
    {
        id: '1',
        title: 'Customer Segmentation Engine',
        category: 'Data',
        color: '#D9480F',
        accentColor: '#FEEBC8',
        description: 'A comprehensive data pipeline that ingests customer interaction logs to identify behavioral segments using clustering algorithms.',
        outcome: 'Increased email open rates by 25% and improved customer retention by 12%.',
        technologies: ['Python', 'SQL', 'K-Means', 'Snowflake', 'dbt'],
        status: 'Completed',
        startDate: 'Jan 2024',
        endDate: 'Mar 2024',
        link: '#',
        receiptId: 'RX-8402'
    },
    {
        id: '1b',
        title: 'Real-time ETL Pipeline',
        category: 'Data',
        color: '#D9480F',
        accentColor: '#FEEBC8',
        description: 'Streaming pipeline processing 10k events/second for live dashboarding.',
        outcome: 'Reduced data latency from 24h to 500ms.',
        technologies: ['Kafka', 'Spark', 'AWS', 'Python'],
        status: 'In Progress',
        startDate: 'Feb 2024',
        endDate: 'Current',
        link: '#',
        receiptId: 'RX-9912'
    },
    {
        id: '2',
        title: 'GenAI Content Assistant',
        category: 'AI',
        color: '#E03131',
        accentColor: '#FFE3E3',
        description: 'An AI-powered writing assistant that helps content teams generate drafts and optimize headlines.',
        outcome: 'Reduced content production time by 40% while maintaining SEO rankings.',
        technologies: ['OpenAI API', 'React', 'Node.js', 'Vector DB'],
        status: 'In Progress',
        startDate: 'Apr 2024',
        endDate: 'Current',
        link: '#',
        receiptId: 'AI-2049'
    },
    {
        id: '3',
        title: 'Predictive Maintenance',
        category: 'ML',
        color: '#1971C2',
        accentColor: '#D0EBFF',
        description: 'ML model designed to predict equipment failures in manufacturing plants by analyzing sensor data.',
        outcome: 'Successfully predicted 85% of potential failures 48 hours in advance.',
        technologies: ['TensorFlow', 'Python', 'IoT', 'SaGeMaker'],
        status: 'Completed',
        startDate: 'Sep 2023',
        endDate: 'Dec 2023',
        link: '#',
        receiptId: 'ML-9921'
    },
    {
        id: '4',
        title: 'Portfolio Design System',
        category: 'Project',
        color: '#099268',
        accentColor: '#C3FAE8',
        description: 'The underlying infrastructure and design system for this digital twin portfolio.',
        outcome: 'Deployed a highly responsive, glassmorphic UI with dynamic content rendering.',
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind'],
        status: 'Completed',
        startDate: 'May 2024',
        endDate: 'Jun 2024',
        link: '#',
        receiptId: 'PF-2024'
    },
    {
        id: '5',
        title: 'Sales Dashboard',
        category: 'Analytics',
        color: '#6741D9',
        accentColor: '#E5DBFF',
        description: 'Interactive dashboard visualizing sales performance across regions.',
        outcome: 'Enabled real-time decision making for the sales leadership team.',
        technologies: ['Tableau', 'SQL', 'Data Warehousing', 'ETL'],
        status: 'Completed',
        startDate: 'Jul 2023',
        endDate: 'Aug 2023',
        link: '#',
        receiptId: 'DA-5541'
    }
];

// --- Sub-Components ---

const ReceiptPaper = ({ project }: { project: ProjectData }) => (
    <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        initial={{ y: -50, opacity: 0, rotate: -5 }}
        animate={{ y: 0, opacity: 1, rotate: -2 }}
        whileDrag={{ scale: 1.1, rotate: 0, zIndex: 50, cursor: 'grabbing' }}
        className="absolute top-12 left-[5%] w-64 bg-[#fef9c3] text-black p-6 shadow-xl z-20 font-mono text-xs leading-relaxed transform -rotate-2 cursor-grab"
        style={{
            boxShadow: '4px 4px 15px rgba(0,0,0,0.2)',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 95% 98%, 90% 100%, 85% 98%, 80% 100%, 75% 98%, 70% 100%, 65% 98%, 60% 100%, 55% 98%, 50% 100%, 45% 98%, 40% 100%, 35% 98%, 30% 100%, 25% 98%, 20% 100%, 15% 98%, 10% 100%, 5% 98%, 0% 100%)'
        }}
    >
        <div className="text-center border-b-2 border-black/10 pb-4 mb-4 border-dashed">
            <h3 className="font-bold text-lg uppercase tracking-widest">RECEIPT</h3>
            <p className="opacity-60">{project.receiptId}</p>
        </div>

        <div className="space-y-2 mb-6">
            <p className="font-bold uppercase tracking-wider mb-2">Tech Stack:</p>
            {project.technologies.slice(0, 5).map((tech, i) => (
                <div key={i} className="flex justify-between items-center border-b border-black/5 pb-1">
                    <span>{tech}</span>
                    <span className="opacity-50">1.0</span>
                </div>
            ))}
        </div>

        <div className="text-center pt-2 border-t-2 border-black/10 border-dashed">
            <p className="font-bold">TOTAL: {project.technologies.length}</p>
        </div>
    </motion.div>
);

const MemoSlip = ({ project }: { project: ProjectData }) => (
    <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        initial={{ x: 50, opacity: 0, rotate: 5 }}
        animate={{ x: 0, opacity: 1, rotate: 3 }}
        whileDrag={{ scale: 1.1, rotate: 0, zIndex: 50, cursor: 'grabbing' }}
        className="absolute top-32 right-[8%] w-56 p-4 shadow-lg z-20 transform rotate-3 cursor-grab"
        style={{ backgroundColor: project.accentColor }}
    >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-black/40">
            <Paperclip className="w-8 h-8 rotate-45" />
        </div>

        <div className="mt-2 font-serif">
            <div className="flex justify-between items-center mb-2 border-b border-black/10 pb-1">
                <span className="text-xs font-bold uppercase text-black/50">Status</span>
                <Badge variant="outline" className="bg-white/50 border-black/10 text-black text-[10px] h-5">
                    {project.status}
                </Badge>
            </div>
            <div className="space-y-1 mt-2">
                <p className="text-[10px] uppercase font-bold text-black/40">Duration</p>
                <p className="text-black text-sm font-medium">{project.startDate} - {project.endDate}</p>
            </div>
        </div>
    </motion.div>
);

const MainDocument = ({ project }: { project: ProjectData }) => (
    <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileDrag={{ scale: 1.02, zIndex: 40, cursor: 'grabbing' }}
        className="relative w-full max-w-2xl bg-[#fafafa] text-zinc-900 mx-auto min-h-[500px] shadow-2xl p-8 md:p-12 z-10 cursor-grab"
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
    >
        <div className="flex justify-between items-start mb-8 border-b-2 border-zinc-900 pb-4">
            <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                    {project.title}
                </h1>
                <div className="flex items-center gap-3">
                    <Badge className="bg-zinc-900 text-white rounded-none uppercase tracking-widest text-xs">
                        {project.category}
                    </Badge>
                </div>
            </div>
        </div>

        <div className="font-serif space-y-6">
            <section>
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Background</h3>
                <p className="text-base leading-relaxed text-zinc-800">
                    {project.description}
                </p>
            </section>

            <section className="bg-zinc-100 p-4 -mx-4 rounded">
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Outcome</h3>
                <div className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 opacity-50" />
                    <p className="text-base leading-relaxed text-zinc-800">{project.outcome}</p>
                </div>
            </section>

            <div className="pt-4">
                <Button className="bg-zinc-900 text-white w-full font-mono uppercase tracking-widest" asChild>
                    <a href={project.link} target="_blank" rel="noreferrer">
                        Open Repository <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </Button>
            </div>
        </div>
    </motion.div>
);

// --- Main Hierarchical Component ---

const ProjectFiles = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
    const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

    const categories = Object.keys(categoryData) as ProjectCategory[];

    const filteredProjects = activeCategory
        ? projects.filter(p => p.category === activeCategory)
        : [];

    const handleCategoryClick = (cat: ProjectCategory) => {
        setActiveCategory(cat);
    };

    const handleProjectClick = (project: ProjectData) => {
        setActiveProject(project);
    };

    const goBack = () => {
        if (activeProject) {
            setActiveProject(null);
        } else if (activeCategory) {
            setActiveCategory(null);
        }
    };

    return (
        <div className="w-full py-24 min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1)_0,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

            {/* Breadcrumb / Header */}
            <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 flex items-center gap-4">
                {(activeCategory || activeProject) && (
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={goBack}
                        className="rounded-full border-white/20 hover:bg-white/10 text-white"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                )}

                <div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 font-mono tracking-widest uppercase mb-1">
                        <span className={!activeCategory ? "text-white" : ""}>Index</span>
                        {activeCategory && (
                            <>
                                <span>/</span>
                                <span className={activeCategory && !activeProject ? "text-white" : ""}>{activeCategory}</span>
                            </>
                        )}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={activeProject ? activeProject.title : activeCategory || 'home'}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-serif font-bold"
                        >
                            {activeProject
                                ? activeProject.title
                                : activeCategory
                                    ? categoryData[activeCategory].description
                                    : 'Unindexed Materials'}
                        </motion.h2>
                    </AnimatePresence>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 h-[700px] perspective-1000">
                <AnimatePresence mode="wait">

                    {/* LEVEL 0: Categories (HOME - Vertical Stack) */}
                    {!activeCategory && !activeProject && (
                        <motion.div
                            key="categories-stack"
                            className="relative z-0 space-y-[-40px] md:space-y-[-50px] pb-32 max-w-4xl mx-auto"
                        >
                            {categories.map((cat, i) => (
                                <motion.div
                                    key={cat}
                                    layoutId={`category-tab-${cat}`}
                                    onClick={() => handleCategoryClick(cat)}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1, type: "spring", bounce: 0.2 }}
                                    whileHover={{
                                        y: -20,
                                        zIndex: 10,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="relative cursor-pointer group"
                                    style={{ zIndex: i }}
                                >
                                    {/* Folder Tab Shape */}
                                    <div
                                        className="w-full h-40 md:h-48 shadow-2xl relative overflow-hidden transition-transform border-t-2 border-white/20"
                                        style={{
                                            backgroundColor: categoryData[cat].color,
                                            clipPath: 'polygon(0% 20%, 30% 20%, 35% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                            borderRadius: '12px 12px 0 0'
                                        }}
                                    >
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-black/20 pointer-events-none" />

                                        {/* Folder Content - Adjusted for new shape */}
                                        <div className="absolute top-12 left-8 md:left-12 flex flex-col gap-2">
                                            <span className="font-mono text-white/50 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-white/50" />
                                                CAT_0{i + 1}
                                            </span>
                                            <h3 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                                                {cat}
                                            </h3>
                                        </div>

                                        <div className="absolute bottom-6 right-8 md:right-12 text-white/40 text-sm font-mono uppercase tracking-widest group-hover:text-white/80 transition-colors bg-black/20 px-3 py-1 rounded backdrop-blur-sm">
                                            {projects.filter(p => p.category === cat).length} Files Located
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* LEVEL 1: Projects List (Sub-Files) */}
                    {activeCategory && !activeProject && (
                        <motion.div
                            key="projects-list"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="w-full"
                        >
                            {/* Visual Transition from Level 0 */}
                            <motion.div
                                layoutId={`category-tab-${activeCategory}`}
                                className="absolute inset-0 bg-zinc-900/0 pointers-events-none"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project, i) => (
                                    <motion.div
                                        key={project.id}
                                        onClick={() => handleProjectClick(project)}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ y: -8, rotate: -1 }}
                                        className="cursor-pointer relative min-h-[240px] bg-[#f0f0f0] text-zinc-900 p-1 shadow-xl transform rotate-0 hover:shadow-2xl transition-all"
                                        style={{
                                            borderTop: `6px solid ${project.color}`,
                                            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 98% 98%, 95% 100%, 92% 98%, 90% 100%, 88% 98%, 85% 100%, 82% 98%, 80% 100%, 75% 98%, 70% 100%, 0% 100%)'
                                        }}
                                    >
                                        <div className="absolute top-3 right-3 opacity-20"><Paperclip /></div>
                                        <div className="p-6 h-full flex flex-col">
                                            <span className="font-mono text-[10px] uppercase opacity-40 mb-4 tracking-widest">Confidential File</span>
                                            <h4 className="font-serif text-2xl font-bold leading-tight mb-2">{project.title}</h4>
                                            <p className="text-sm text-zinc-500 line-clamp-2 mb-4">{project.description}</p>
                                            <div className="mt-auto pt-4 border-t border-black/5 flex justify-between items-center">
                                                <span className="text-xs font-bold text-zinc-400">{project.startDate}</span>
                                                <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center">
                                                    <ArrowRight className="w-3 h-3 text-black/40" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* LEVEL 2: Project Dossier (Notes & Papers) */}
                    {activeProject && (
                        <motion.div
                            key="dossier"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative w-full h-full flex items-center justify-center p-4"
                        >
                            <div className="absolute top-0 text-center w-full z-0 opacity-40 mt-4 pointer-events-none">
                                <p className="text-sm font-mono text-zinc-500">
                                    ACCESS GRANTED: Draggable Components Active
                                </p>
                            </div>

                            {/* Draggable Area */}
                            <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center">
                                <MainDocument project={activeProject} />
                                <ReceiptPaper project={activeProject} />
                                <MemoSlip project={activeProject} />
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectFiles;
