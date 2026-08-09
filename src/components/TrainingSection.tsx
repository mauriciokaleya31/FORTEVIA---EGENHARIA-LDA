import React, { useState } from 'react';
import { TRAINING_COURSES } from '../data/forteviaData';
import { TrainingCourse } from '../types';
import { 
  GraduationCap, Clock, Award, BookOpen, Shield, Users, 
  Search, ArrowRight, CheckCircle2, Send, X 
} from 'lucide-react';

interface TrainingSectionProps {
  onOpenContactModal: () => void;
  onOpenCourseInquiry: (course: TrainingCourse) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({
  onOpenContactModal,
  onOpenCourseInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'primary' | 'additional'>('primary');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const primaryCourses = TRAINING_COURSES.filter((c) => !c.isAdditional);
  const additionalCourses = TRAINING_COURSES.filter((c) => c.isAdditional);

  const displayedCourses = (activeTab === 'primary' ? primaryCourses : additionalCourses).filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden" id="training-section">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            Formação e Desenvolvimento Profissional
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Investimos no desenvolvimento de competências através de programas de formação orientados para as necessidades do sector industrial, Oil & Gas, logística, segurança e gestão.
          </p>
        </div>

        {/* Tab & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-800/90 p-4 rounded-2xl border border-slate-700">
          
          {/* Main / Additional Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('primary')}
              className={`flex-1 md:flex-none px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === 'primary'
                  ? 'bg-[#BB7636] text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Programas Principais ({primaryCourses.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('additional')}
              className={`flex-1 md:flex-none px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === 'additional'
                  ? 'bg-[#BB7636] text-white shadow-lg'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Cursos Adicionais ({additionalCourses.length})</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Pesquisar curso (ex: HSE, Rigging, Stock)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#BB7636]"
            />
          </div>

        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800/80 border border-slate-700 hover:border-[#BB7636] rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-heading font-extrabold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20 uppercase tracking-widest">
                    {course.category}
                  </span>
                  {course.duration && (
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#BB7636]" />
                      {course.duration}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-amber-300 transition-colors">
                  {course.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {course.description}
                </p>

                {course.targetAudience && (
                  <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-400">
                    <strong className="text-slate-300">Público-Alvo:</strong> {course.targetAudience}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-700 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#BB7636]" />
                  Certificação Fortevia
                </span>

                <button
                  onClick={() => onOpenCourseInquiry(course)}
                  className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-3.5 py-2 rounded-lg font-heading font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Inscrever / Informação</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Training CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#081B4B] via-slate-900 to-[#081B4B] border border-[#BB7636]/40 rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-2xl">
          <div className="w-12 h-12 bg-[#BB7636] text-white rounded-xl mx-auto flex items-center justify-center shadow-lg">
            <GraduationCap className="w-6 h-6" />
          </div>
          
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Necessita de Formação In-Company Personalizada?
          </h3>

          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Desenvolvemos programas de capacitação ajustados às rotinas e procedimentos específicos da sua empresa ou instalação onshore/offshore no Soyo e restante território angolano.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="bg-[#BB7636] hover:bg-[#a5652a] text-white px-8 py-3.5 rounded-xl font-heading font-bold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Solicitar Informações sobre Formação</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
