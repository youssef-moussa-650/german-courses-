import React from 'react';
import { Course } from '../types';
import { Calendar, Clock, CreditCard } from 'lucide-react';

interface Props {
  course: Course;
  instructorName: string;
}

export default function CourseCard({ course, instructorName }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">
        <span className="bg-slate-900 text-[#FFCC00] px-4 py-2 rounded-lg text-sm font-bold">
          المستوى {course.level}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-800">كورس {course.level} مع {instructorName}</h3>
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-slate-600">
          <Clock className="w-5 h-5" />
          <span>المدة: {course.duration}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-600">
          <Calendar className="w-5 h-5" />
          <span>يبدأ: {course.startDate}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-900 font-bold">
          <CreditCard className="w-5 h-5" />
          <span>{course.price} جنيه</span>
        </div>
      </div>
      <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition duration-300">
        سجل الآن
      </button>
    </div>
  );
}