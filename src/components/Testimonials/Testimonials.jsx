import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Dr. Lisa Morgan",
    role: "Principal, Green Valley High",
    quote: "Our students showed a 35% improvement in just 3 months.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mark Daniels",
    role: "EdTech Admin, LearnTech Inc.",
    quote: "The AI tools gave us deep insights into student performance.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Samantha Lee",
    role: "Student, Future Academy",
    quote: "Learning became easier and way more fun with smart feedback!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">💬 Testimonials from Educators & Students</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-role">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
