import React from 'react';
import { Users, DollarSign, Network, Cloud, BarChart, Shield, Lock, UserCheck, Server, Rocket, Eye, Database, Upload, UsersIcon, Cuboid as Cube } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Technical Lead - DevOps",
      company: "Zepto | Bangalore",
      duration: "04/2025 - Current",
      achievements: [
        { icon: Users, text: "Led a high-performing team of 5 DevOps engineers (L1/L2/L3), driving infrastructure optimization, advanced security hardening, and enterprise-level FinOps initiatives" },
        { icon: DollarSign, text: "Designed and implemented a robust AWS cost optimization framework, generating $200K+ in monthly savings via ML pipeline tuning and intelligent infrastructure rightsizing" },
        { icon: Network, text: "Engineered advanced MSK rack awareness architecture and optimized data transfer protocols, achieving substantial operational cost reductions and performance enhancements" },
        { icon: Cloud, text: "Transformed NAT Gateway utilization strategy and deployed advanced Karpenter consolidation techniques to boost resource efficiency and minimize cloud spend" },
        { icon: BarChart, text: "Built enterprise-scale cost anomaly detection systems and optimized WAF/CloudFront setups, delivering improved performance and measurable cost savings" },
        { icon: Shield, text: "Directed end-to-end security transformation, including strategic migration from legacy WAF to Cloudflare, enabling superior DDoS protection and reduced latency" },
        { icon: Lock, text: "Implemented BottleRocket OS across all EKS clusters, achieving zero-vulnerability containers and strengthening overall cluster security posture" },
        { icon: UserCheck, text: "Integrated Aurava's PII data governance solution, ensuring full regulatory compliance and safeguarding sensitive data through automated detection and controls" }
      ]
    },
    {
      title: "Sr DevOps Engineer",
      company: "Zepto | Bangalore", 
      duration: "04/2023 - 04/2025",
      achievements: [
        { icon: Server, text: "Architected and deployed sophisticated in-house bastion server utilizing AWS SSM, Slack Bot integration, and Go programming, delivering controlled time-based access for critical incident response" },
        { icon: Rocket, text: "Revolutionized environment provisioning through comprehensive automation, dramatically reducing production-like environment setup from 6 months to 1-2 weeks" },
        { icon: Shield, text: "Successfully orchestrated enterprise-wide BottleRocket AMI deployment across all environments and EKS clusters, achieving 5-20% performance enhancement and substantial security risk mitigation" },
        { icon: Users, text: "Provided strategic leadership and mentorship to a team of 4 engineers, facilitating knowledge transfer, career development, and seamless project execution" },
        { icon: BarChart, text: "Engineered comprehensive latency optimization and resource utilization strategies for micro-services architecture, delivering measurable performance improvements" }
      ]
    },
    {
      title: "DevOps Engineer II",
      company: "Zepto | Bangalore",
      duration: "11/2021 - 03/2023", 
      achievements: [
        { icon: Cube, text: "As founding devops engineer, architected and scaled revolutionary infrastructure supporting exponential growth from 500 RPM to 5M RPM, establishing industry-leading performance benchmarks" },
        {icon: wheel_of_dharma, text: "Designed and implemented Zepto’s first Kubernetes (EKS) infrastructure. Migrated microservices from EC2 to EKS"}
        { icon: Cloud, text: "Designed and implemented a comprehensive Kubernetes orchestration platform, automating onboarding and deployment processes for 500+ microservices using custom helm charts, ArgoCD, and FluxCD, reducing onboarding time from 2 days to under 15 minutes." },
        { icon: Eye, text: "Established enterprise-grade observability ecosystem utilizing NewRelic, Prometheus, Grafana, Loki, and Promtail, providing comprehensive system visibility and proactive monitoring" },
        { icon: Rocket, text: "Pioneered automated ephemeral environment solutions optimized for Dev/QA workflows using DevSpace, accelerating development cycles and improving testing efficiency" }
      ]
    },
    {
      title: "Site Reliability Engineer",
      company: "One97 Communications (Paytm) | Noida",
      duration: "07/2019 - 11/2021",
      achievements: [
        { icon: Database, text: "Orchestrated comprehensive disaster recovery protocols and implemented high-availability architectures ensuring 24x7 operational excellence with zero planned downtime" },
        { icon: Upload, text: "Strategically planned and executed large-scale data center to AWS cloud migration, establishing robust deployment pipelines, automation frameworks, and comprehensive observability solutions" },
        { icon: UsersIcon, text: "Engineered enterprise-scale user management automation across 6,000+ servers supporting 500+ personnel, utilizing Salt, Snoopy, SSH, and ElasticSearch for comprehensive audit trails" },
        { icon: BarChart, text: "Architected unified monitoring infrastructure across Paytm ecosystem using Prometheus, Grafana, Telegraf, and Alertmanager, establishing centralized observability standards" }
      ]
    }
  ];

  return (
    <section className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Professional Experience
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 shadow-lg hover:shadow-xl hover:bg-slate-700/70 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-1">{exp.title}</h3>
                <p className="text-slate-300 font-medium">{exp.company}</p>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold">
                {exp.duration}
              </div>
            </div>
            
            <div className="space-y-4">
              {exp.achievements.map((achievement, achIndex) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={achIndex} className="flex items-start gap-4 p-4 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200">
                    <IconComponent size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-200 leading-relaxed">{achievement.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
