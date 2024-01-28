
import React from 'react';

const servicesData = [
  { title: 'R&D and POC Implementation', description: 'Our technology consultants create, research, and prototype ideas to validate new technologies, products, and services in a lean way so that you can get user feedback early on and scale the winning solution rapidly.' },
  // ... Add all other sections here similarly
];

const ServiceTemplate = () => (
    <div className="p-5 font-sans">
    <h1 className="text-2xl font-bold">Our technology consulting services</h1>
    <p className="mt-4 mb-5 text-base text-gray-600">Tech-driven transformation is up and will surely be running further. With technology moving forward ever faster, it takes a new approach to managing enterprise IT — the one focused on crafting resilient, scalable ecosystems that drive business growth. To help you ride the crest of transformation, we offer tech guidance embodied in a range of software consulting services:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {servicesData.map((service, index) => (
        <div> key={index} title={service.title} description={service.description} </div>
      ))}
    </div>
  </div>
);

export default ServiceTemplate;
