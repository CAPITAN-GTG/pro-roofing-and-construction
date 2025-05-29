import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ConsultationForm from './components/ConsultationForm'
import ServicesSection from './components/ServicesSection'
import WhyUsSection from './components/WhyUsSection'
import ProjectsSection from './components/ProjectsSection'
import ProcessSection from './components/ProcessSection'
import MessageSection from './components/MessageSection'
import TestimonialsSection from './components/TestimonialsSection'
import BlogSection from './components/BlogSection'
import ContactInfoSection from './components/ContactInfoSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ConsultationForm />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <ProcessSection />
      <MessageSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactInfoSection />
    </div>
  )
}
