import React from 'react';
import { Instructor } from '../types';
import { Languages } from 'lucide-react';

interface Props {
  instructor: Instructor;
}

export default function InstructorCard({ instructor }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center bg-[#000000] p-6 rounded-2xl mb-4">
          <Languages className="w-16 h-16 text-[#FFCC00]" />
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-slate-800">{instructor.name}</h3>
        <p className="text-slate-600 mb-6 text-lg leading-relaxed">{instructor.description}</p>
        <div className="pt-6 border-t border-slate-200">
          <p className="text-slate-500">{instructor.experience}</p>
        </div>
      </div>
    </div>
  );
}