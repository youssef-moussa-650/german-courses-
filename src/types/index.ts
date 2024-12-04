export interface Instructor {
  id: number;
  name: string;
  level: string;
  description: string;
  experience: string;
}

export interface Course {
  id: number;
  level: 'A1' | 'A2';
  price: number;
  duration: string;
  startDate: string;
}