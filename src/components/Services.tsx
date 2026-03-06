"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

import PayrollIllustration from "./illustrations/PayrollIllustration";
import EmployeePortalIllustration from "./illustrations/EmployeePortalIllustration";
import TaxComplianceIllustration from "./illustrations/TaxComplianceIllustration";
import TimeTrackingIllustration from "./illustrations/TimeTrackingIllustration";
import BenefitsAdminIllustration from "./illustrations/BenefitsAdminIllustration";
import AnalyticsIllustration from "./illustrations/AnalyticsIllustration";
import AuditReadyIllustration from "./illustrations/AuditReadyIllustration";
import MultiCompanyIllustration from "./illustrations/MultiCompanyIllustration";
import IntegrationsIllustration from "./illustrations/IntegrationsIllustration";

const services = [
  { title: "Automate payroll processing", description: "Get up to 30% faster payroll by automating calculations and direct deposits.", illustration: <PayrollIllustration /> },
  { title: "Employee self-service portal", description: "Enable your team to access pay stubs, update info, and request time off.", illustration: <EmployeePortalIllustration /> },
  { title: "Automated tax compliance", description: "Stay compliant with automated tax filing and reporting templates.", illustration: <TaxComplianceIllustration /> },
  { title: "Real-time time tracking", description: "Track employee hours with mobile time clock and automated overtime calculations.", illustration: <TimeTrackingIllustration /> },
  { title: "Comprehensive benefits admin", description: "Manage health insurance, 401(k) plans, and benefits enrollment seamlessly.", illustration: <BenefitsAdminIllustration /> },
  { title: "Real-time analytics dashboard", description: "Track labor costs and trends with powerful reporting tools and insights.", illustration: <AnalyticsIllustration /> },
  { title: "Stay audit-ready always", description: "Maintain compliance with automated tracking of federal and state regulations.", illustration: <AuditReadyIllustration /> },
  { title: "Multi-company management", description: "Manage multiple entities with custom domains and consolidated reporting.", illustration: <MultiCompanyIllustration /> },
  { title: "Seamless integrations", description: "Connect with accounting software, HR tools, via our RESTful API.", illustration: <IntegrationsIllustration /> }
];

const containerVariants: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const cardVariants: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

const Services = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative w-full py-20 md:py-32 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="absolute blur-[200px] h-[1273px] left-[50%] -translate-x-1/2 top-[10%] w-[1600px] pointer-events-none bg-slate-50 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-[42px] font-bold tracking-[-0.42px] leading-[50.4px] text-[#171717] mb-[11px]">Our Services</h2>
          <p className="text-[17px] text-[#525252] font-normal leading-[27.2px] max-w-[693px] mx-auto">Comprehensive payroll and accounting solutions designed to streamline your business operations and ensure compliance.</p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-[1.18px] border-[#e5e5e5] bg-white relative z-20" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className={`flex flex-col bg-white border-[#e5e5e5] group cursor-default h-auto lg:h-[453px] ${index % 3 !== 2 ? "lg:border-r-[1.18px]" : ""} ${index < 6 ? "lg:border-b-[1.18px]" : ""} ${index % 2 !== 1 ? "md:border-r-[1.18px] lg:border-r-0" : ""} ${index < 8 ? "max-md:border-b-[1.18px]" : ""} ${index === 6 || index === 7 ? "md:border-b-[1.18px] lg:border-b-0" : ""}`}>
              <div className="w-full h-[250px] p-[23.99px] pb-0 relative">
                 {service.illustration}
              </div>
              <div className="p-[23.99px] pt-[20px] flex flex-col items-start text-left">
                <h3 className="font-semibold text-[23px] text-[#171717] mb-[0.5px] leading-[32.2px]">{service.title}</h3>
                <p className="font-normal text-[17px] text-[#525252] leading-[27.2px] max-w-[330px]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
