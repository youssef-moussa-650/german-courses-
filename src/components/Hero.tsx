import React from 'react';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">تعلم اللغة الألمانية بإتقان</h1>
          <p className="text-xl text-slate-300 mb-12">دورات احترافية للمستويات المبتدئة مع نخبة من المدرسين المتخصصين</p>
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="#courses" 
              className="bg-[#FFCC00] text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-[#FFD700] transition duration-300"
            >
              ابدأ رحلة التعلم
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <GraduationCap className="w-10 h-10 text-[#FFCC00]" />
              </div>
              <h3 className="font-semibold mb-2">مدرسين متخصصين</h3>
              <p className="text-slate-400 text-sm">خبرة أكثر من 8 سنوات</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-10 h-10 text-[#FFCC00]" />
              </div>
              <h3 className="font-semibold mb-2">مناهج معتمدة</h3>
              <p className="text-slate-400 text-sm">متوافقة مع المعايير الدولية</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-[#FFCC00]" />
              </div>
              <h3 className="font-semibold mb-2">مجموعات صغيرة</h3>
              <p className="text-slate-400 text-sm">اهتمام فردي بكل طالب</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}