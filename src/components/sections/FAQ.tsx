"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqData = [
    {
        question: "Are your security officers SIA licensed?",
        answer: "Yes, absolutely. Every security officer deployed by VSRS holds a valid Security Industry Authority (SIA) license appropriate for their role (Door Supervision, Close Protection, CCTV, etc.). We rigorously vet all staff to ensuring compliance with UK law and our own high standards."
    },
    {
        question: "What areas of London do you cover?",
        answer: "We cover the entire Greater London area and surrounding home counties. From Central London corporate offices to construction sites in East London and private events in West London, our teams are mobile and ready to deploy."
    },
    {
        question: "How quickly can you deploy security services?",
        answer: "We pride ourselves on our rapid response capabilities. For urgent requirements, we can often deploy security personnel within 2-4 hours. For larger contracts, we work with you to ensure a smooth mobilization process."
    },
    {
        question: "Do you provide security for private events?",
        answer: "Yes, we specialize in discreet security for private parties, weddings, and corporate functions. Our officers can operate mainly in formal wear (suits) to blend in seamlessly with your guests while maintaining a secure environment."
    },
    {
        question: "What is the difference between Manned Guarding and Door Supervision?",
        answer: "Manned Guarding typically involves protecting property, assets, or construction sites, often involving patrols and access control. Door Supervision is focused on licensed premises (bars, clubs, events) where alcohol is served, requiring additional training in conflict management and physical intervention."
    },
    {
        question: "Are you fully insured?",
        answer: "Yes, Vision Security Recruitment Services Ltd holds comprehensive insurance cover, including Public Liability and Employer's Liability insurance, giving you complete peace of mind."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50" id="faq">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 flex items-center justify-center gap-3">
                        <HelpCircle className="text-gold h-8 w-8" />
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Common questions about our security services in London.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white border rounded-sm transition-all duration-200 ${openIndex === index ? 'border-gold shadow-md' : 'border-gray-200 hover:border-gold/50'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                                aria-expanded={openIndex === index}
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-navy' : 'text-gray-800'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-gold flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        Have a question not listed here?
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-navy text-white px-8 py-3 rounded-sm font-bold hover:bg-gold hover:text-navy transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
