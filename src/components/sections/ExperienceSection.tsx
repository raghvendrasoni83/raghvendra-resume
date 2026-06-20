import React from 'react';
import { Users, DollarSign, Network, Cloud, BarChart, Shield, Lock, UserCheck, Server, Rocket, Eye, Database, Upload, UsersIcon, Cuboid as Cube, RefreshCw, Box } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Technical Lead - DevOps & Cloud Platform",
      company: "Zepto | Bangalore",
      duration: "04/2025 - Current",
      achievements: [
        { icon: Users, text: "Spearheaded technical vision and led a team of 5 DevOps/Platform engineers, establishing the enterprise Cloud Platform roadmap, security hardening standards, and organization-wide FinOps governance." },
        { icon: DollarSign, text: "Architected an automated AI-driven cost optimization framework, leveraging ML pipeline tuning and predictive node rightsizing (Karpenter) to generate $180K+ ($2.2M ARR) in AWS savings." },
        { icon: Database, text: "Built an in-house unified cost visibility dashboard consolidating multi-cloud and database infrastructure (AWS, GCP, Redis Labs, MongoDB Atlas, and Kubernetes workloads), integrated with secure RBAC and AI workflows (powered by Claude Opus 4.8) for automated optimization recommendations." },
        { icon: Network, text: "Architected and engineered enterprise-grade Apache MSK rack awareness and zero-trust cross-AZ data transfer topologies, optimizing reliability and cutting data transfer overhead by 35%." },
        { icon: Cloud, text: "Implemented predictive scaling using Karpenter and custom KEDA controllers, automating real-time EKS cluster capacity management to maximize resource density and minimize compute waste." },
        { icon: Shield, text: "Steered company-wide security transformation by migrating edge networks from legacy WAF to Cloudflare Enterprise, reducing global request latency and blocking DDoS threats at the edge." },
        { icon: Lock, text: "Standardized lightweight, container-optimized Bottlerocket OS across all corporate EKS clusters, establishing zero-vulnerability immutable hosts and automated patch management." },
        { icon: UserCheck, text: "Architected and integrated automated PII discovery and masking pipelines (using Aurava) across production data flows, satisfying compliance audits and securing customer data." }
      ]
    },
    {
      title: "Senior DevOps & Platform Engineer",
      company: "Zepto | Bangalore",
      duration: "04/2023 - 04/2025",
      achievements: [
        { icon: Server, text: "Designed and built a secure, audit-compliant, self-service bastion gateway (Go, AWS SSM, Slack API) providing JIT (Just-in-Time) time-bound privileged access for incident response teams." },
        { icon: RefreshCw, text: "Architected and orchestrated zero-downtime, automated EKS version upgrades across 20+ microservice environments, establishing multi-region active-active cluster failover protocols for business continuity." },
        { icon: Rocket, text: "Engineered an Internal Developer Platform (IDP) and Infrastructure-as-Code (IaC) blueprints that slashed production-like environment provisioning time from 6 months to 1 week." },
        { icon: Shield, text: "Led the evaluation, testing, and migration of EKS compute nodes to Bottlerocket OS, realizing a 20% improvement in container startup latency and reducing the OS attack surface." },
        { icon: Users, text: "Mentored and upskilled a team of 4 DevOps engineers on advanced Kubernetes concepts, Infrastructure-as-Code, and cloud-native security practices." },
        { icon: BarChart, text: "Architected systematic microservices resource profiles and profiling pipelines, driving latency improvements of 25% and reducing infrastructure overhead by 15%." }
      ]
    },
    {
      title: "DevOps Engineer II (Founding Platform Member)",
      company: "Zepto | Bangalore",
      duration: "11/2021 - 03/2023",
      achievements: [
        { icon: Cube, text: "Served as founding DevOps Engineer, designing the core cloud architecture and scaling the production infrastructure from 500 RPM to 5M RPM during periods of hyper-growth." },
        { icon: Box, text: "Architected and built Zepto's inaugural EKS platform, containerizing and migrating 100+ monolithic and microservice workloads from EC2 to Kubernetes." },
        { icon: Cloud, text: "Created GitOps deployment frameworks utilizing ArgoCD, FluxCD, and customizable Helm blueprints, reducing service onboarding from 2 days to a self-service 15-minute process." },
        { icon: Eye, text: "Deployed an enterprise-wide observability platform (Prometheus, Grafana, Loki, NewRelic), implementing automated alert routing and anomaly thresholds to reduce Mean Time to Detect (MTTD)." },
        { icon: Rocket, text: "Introduced DevSpace-driven ephemeral dev/test environments, boosting engineering velocity by allowing developers to test features in isolated production-like EKS namespaces." }
      ]
    },
    {
      title: "Site Reliability Engineer",
      company: "One97 Communications (Paytm) | Noida",
      duration: "07/2019 - 11/2021",
      achievements: [
        { icon: Database, text: "Designed and implemented high-availability database and application architectures across multiple availability zones, securing 99.99% availability for key transaction systems." },
        { icon: Upload, text: "Co-led the migration of core payment workflows from on-premise data centers to AWS, establishing automated infrastructure code and telemetry dashboards." },
        { icon: UsersIcon, text: "Engineered a centralized access management and audit logging system across 6,000+ distributed servers using SaltStack, Snoopy, and Elasticsearch, streamlining security compliance." },
        { icon: BarChart, text: "Architected and standardized the monitoring and alert management blueprint across the Paytm ecosystem using Prometheus, Grafana, and Alertmanager." }
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
