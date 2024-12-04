import React from 'react';
import { Languages } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-[#000000] p-2 rounded-lg">
              <Languages className="w-6 h-6 text-[#FFCC00]" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">German Courses</h1>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#instructors" className="text-slate-600 hover:text-slate-900 transition-colors">
                  المدرسين
                </a>
              </li>
              <li>
                <a href="#courses" className="text-slate-600 hover:text-slate-900 transition-colors">
                  الكورسات
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}