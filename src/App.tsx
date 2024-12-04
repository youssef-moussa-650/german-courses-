import React from 'react';
import { instructors } from './data/instructors';
import Header from './components/Header';
import Hero from './components/Hero';
import InstructorCard from './components/InstructorCard';
import CourseCard from './components/CourseCard';

const courses = [
  {
    id: 1,
    level: 'A1',
    price: 2500,
    duration: '3 شهور',
    startDate: '١ مارس ٢٠٢٤',
    instructorId: 1
  },
  {
    id: 2,
    level: 'A2',
    price: 3000,
    duration: '4 شهور',
    startDate: '١٥ مارس ٢٠٢٤',
    instructorId: 1
  },
  {
    id: 3,
    level: 'A1',
    price: 2500,
    duration: '3 شهور',
    startDate: '١ مارس ٢٠٢٤',
    instructorId: 2
  },
  {
    id: 4,
    level: 'A2',
    price: 3000,
    duration: '4 شهور',
    startDate: '١٥ مارس ٢٠٢٤',
    instructorId: 2
  }
] as const;

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Cairo']">
      <Header />
      <Hero />
      
      <section id="instructors" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">المدرسين المتميزين</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {instructors.map(instructor => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">الكورسات المتاحة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course}
                instructorName={instructors.find(i => i.id === course.instructorId)?.name || ''}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-300">جميع الحقوق محفوظة © 2024 German Courses</p>
        </div>
      </footer>
    </div>
  );
}

export default App;