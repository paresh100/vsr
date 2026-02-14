import { LucideIcon } from 'lucide-react';

export const servicesData: Record<string, {
    title: string;
    description: string;
    content: string[];
    benefits: string[];
    icon: string;
    image: string;
}> = {
    "event-security-london": {
        title: "Event Security Services in London",
        description: "Professional crowd management and security for high-profile events, corporate functions, and private gatherings.",
        content: [
            "Vision Security Recruitment Services Ltd delivers comprehensive event security solutions tailored to the unique dynamics of London's event sector. From intimate private parties to large-scale corporate conferences, our personnel ensure a safe, orderly, and welcoming environment.",
            "Our event security teams are trained in crowd control, conflict de-escalation, and emergency response. We work closely with event organizers to assess risks and develop a security plan that remains discreet yet effective.",
            "Whether you require visible door supervision or low-profile close protection for VIP guests, VSRS adapts to the tone and requirements of your event."
        ],
        benefits: ["Crowd Management & Flow Control", "VIP & Guest List Management", "Emergency Response Planning", "Discreet & Uniformed Officers"],
        icon: "Users",
        image: "/images/professional-security-team-portrait.png"
    },
    "corporate-security-london": {
        title: "Corporate Security Services London",
        description: "Protecting your business assets, personnel, and reputation with high-end corporate security solutions.",
        content: [
            "In the fast-paced corporate environment of London, security is paramount. VSRS provides elite security personnel who integrate seamlessly into your office culture while maintaining strict vigilance.",
            "Our corporate security officers manage access control, monitor CCTV systems, and perform regular patrols to deter unauthorized access and ensure the safety of your staff and visitors.",
            "We understand that front-of-house security is often the first point of contact for your clients. Our officers are selected for their professional demeanor and communication skills."
        ],
        benefits: ["Access Control & Reception Duties", "CCTV Monitoring", "Asset Protection", "Out-of-hours Patrols"],
        icon: "Building2",
        image: "/images/corporate-image-of-group.png"
    },
    "construction-site-security-london": {
        title: "Construction Site Security London",
        description: "Robust security measures to protect construction sites from theft, vandalism, and unauthorized access.",
        content: [
            "Construction sites in London are prime targets for theft and vandalism. VSRS offers robust security solutions to protect your equipment, materials, and timeline.",
            "Our construction security services include perimeter patrols, gatehouse management, and 24/7 manned guarding. We utilize both static guards and mobile patrols to ensure comprehensive coverage of your site.",
            "We also ensure Health & Safety compliance, logging all visitors and deliveries to maintain a secure and accountable site environment."
        ],
        benefits: ["Perimeter Security", "Gatehouse & Access Control", "Theft & Vandalism Prevention", "Health & Safety Compliance"],
        icon: "HardHat",
        image: "/images/hero-image-man-image.png"
    },
    "retail-security-london": {
        title: "Retail Security Services London",
        description: "Loss prevention and customer safety for London's retail sector.",
        content: [
            "Retail environments face unique challenges, from shoplifting to staff safety. VSRS provides retail security officers who are trained to deter theft while enhancing the customer experience.",
            "Our officers are skilled in loss prevention techniques and conflict management. We work with store management to identify vulnerabilities and implement effective security strategies.",
            "Whether for high-end luxury boutiques or high-street retailers, our security presence reassures customers and protects your bottom line."
        ],
        benefits: ["Loss Prevention", "Store Detective Services", "Staff Protection", "Customer Service Focus"],
        icon: "ShoppingBag",
        image: "/images/hero-image-man-image.png"
    },
    "close-protection-london": {
        title: "Close Protection Services London",
        description: "Elite close protection officers for executives, celebrities, and high-net-worth individuals.",
        content: [
            "For individuals requiring an elevated level of personal security, VSRS offers Close Protection services delivered by highly trained operatives. Our CPO teams are experienced in working with executives, dignitaries, and high-profile individuals.",
            "We conduct thorough risk assessments and route planning to ensure your safety and privacy are maintained at all times. Our approach is flexible, offering both overt and covert protection as required.",
            "Based in London, we understand the complexities of moving securely through the city, ensuring your schedule proceeds without disruption."
        ],
        benefits: ["Personal Bodyguards", "Secure Transport & Logistics", "Residential Security", "Threat Assessment"],
        icon: "ShieldCheck",
        image: "/images/new-image-hero.png"
    },
    "door-supervisors-london": {
        title: "Door Supervisors London",
        description: "Licensed door supervisors for licensed premises, clubs, and venues.",
        content: [
            "The safety of your patrons and your license depends on professional door supervision. VSRS provides SIA-licensed door supervisors who are experts in managing entry, checking ID, and diffusing volatile situations.",
            "Our door staff are ambassadors for your venue. They ensure a warm welcome while strictly enforcing your venue's policies on entry and conduct.",
            "We prioritize communication and public safety, ensuring your venue operates smoothly and complies with all licensing objectives."
        ],
        benefits: ["ID Checks & Entry Control", "Conflict Management", "Capacity Management", "Customer Safety"],
        icon: "DoorOpen",
        image: "/images/professional-security-team-portrait.png"
    },
    "cctv-monitoring-london": {
        title: "CCTV Monitoring Services London",
        description: "24/7 surveillance and monitoring to protect your property and assets.",
        content: [
            "Effective CCTV monitoring acts as a force multiplier for your security setup. VSRS provides trained operators to monitor your cameras, detecting and responding to incidents in real-time.",
            "Our monitoring services cover commercial properties, construction sites, and residential complexes. We can integrate with your existing systems or provide rapid-deployment solutions.",
            "Detailed reporting and incident logging ensure you have a clear audit trail of all activity on your premises."
        ],
        benefits: ["24/7 Remote Monitoring", "Incident Response", "system Health Checks", "Evidential Recording"],
        icon: "Camera",
        image: "/images/london-skyline.png"
    },
    "industrial-security-london": {
        title: "Industrial & Warehouse Security London",
        description: "Securing logistics hubs, warehouses, and industrial estates.",
        content: [
            "Industrial sites often cover large areas and house valuable stock. VSRS provides tailored security solutions including mobile patrols, gatehouse checks, and perimeter security.",
            "We understand the logistics supply chain and the importance of preventing shrinkage and unauthorized access. Our officers verify varied vehicles and personnel entering and exiting your facility.",
            "Our presence minimizes operational downtime caused by security breaches."
        ],
        benefits: ["Gatehouse Operations", "Mobile Patrols", "Stock Loss Prevention", "Vehicle Checks"],
        icon: "Warehouse",
        image: "/images/london-skyline.png"
    },
    "dog-handlers-london": {
        title: "Security Dog Handlers London",
        description: "Highly effective visual deterrent for high-risk sites and large perimeters.",
        content: [
            "For sites requiring an enhanced level of deterrent, VSRS provides NASDU-certified dog handlers. Security dogs are one of the most effective ways to secure large boundaries and high-risk areas.",
            "A dog unit can search areas faster and more effectively than a human patrol alone. They are ideal for construction sites, vacant properties, and events.",
            "All our handlers operate in accordance with strict welfare and operational standards."
        ],
        benefits: ["High Visual Deterrent", "Perimeter Protection", "Rapid Area Search", "Nasdu Certified Handlers"],
        icon: "Dog",
        image: "/images/new-image-hero.png"
    },
    "hospitality-security-london": {
        title: "Hospitality Security London",
        description: "Ensuring guest safety in hotels, restaurants, and private members clubs.",
        content: [
            "London's hospitality sector demands a security presence that balances safety with impeccable service. VSRS officers are trained to act as concierge-security, enhancing the guest experience.",
            "We protect your guests, staff, and reputation. From front-of-house duties to key-holding and night audits, our team integrates with your hotel operations.",
            "We handle incidents with discretion, ensuring the comfort and privacy of valid guests is never compromised."
        ],
        benefits: ["Concierge Security", "Guest Safety", "Key Holding", "Luggage & Access Control"],
        icon: "Hotel",
        image: "/images/corporate-image-of-group.png"
    },
    "private-event-security-london": {
        title: "Private Event Security London",
        description: "Discreet security for weddings, parties, and exclusive gatherings.",
        content: [
            "Your private event should be a celebration, not a security concern. VSRS manages the safety of your guests and the integrity of your venue.",
            "We handle guest lists, manage paparazzi or uninvited guests, and ensure the event runs smoothly. Our team can dress in formal wear to blend seamlessly with your event.",
            "From weddings to private parties, we provide peace of mind so you can focus on hosting."
        ],
        benefits: ["Guest List Management", "Discreet Presence", "Venue Protection", "Traffic Management"],
        icon: "PartyPopper",
        image: "/images/professional-security-team-portrait.png"
    },
    "security-guards-london": {
        title: "Manned Security Guarding London",
        description: "Professional manned guarding for any sector or requirement.",
        content: [
            "Manned guarding remains the backbone of effective physical security. VSRS provides static and mobile guards for a wide range of industries across London.",
            "Our guards are more than a physical presence; they are trained observers and first responders. They perform regular patrols, report hazards, and ensure your site remains secure.",
            "We offer flexible coverage options, from ad-hoc requirements to long-term contracts."
        ],
        benefits: ["Static Guarding", "Mobile Patrols", "Lock & Unlock Services", "Vacant Property Checks"],
        icon: "Shield",
        image: "/images/hero-image-man-image.png"
    }
};
