import React from 'react';
import { Cloud, Box, BarChart, Cog, RotateCcw, Shield, DollarSign, Code } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["Amazon AWS", "Ant Financial Cloud"]
    },
    {
      title: "Container Orchestration", 
      icon: Box,
      skills: ["EKS", "Kubernetes", "Helm", "FluxCD", "Karpenter", "Cluster Autoscaler", "Keda"]
    },
    {
      title: "Observability & Performance Monitoring",
      icon: BarChart, 
      skills: ["Prometheus", "Grafana", "NewRelic", "ELK Stack", "Loki", "Promtail", "Mimir"]
    },
    {
      title: "Infrastructure Automation & IaC",
      icon: Cog,
      skills: ["Terraform", "Ansible", "Salt", "Packer"]
    },
    {
      title: "CI/CD Pipeline Engineering",
      icon: RotateCcw,
      skills: ["Jenkins", "Github", "Github Workflow", "ARC Runner", "SonarQube", "Trivy", "ArgoCD", "ArgoRollout"]
    },
    {
      title: "Security & Network Engineering", 
      icon: Shield,
      skills: ["Kong", "Nginx", "ALB Ingress", "Kyverno", "Bottle Rocket", "HTTP", "gRPC", "Web Sockets"]
    },
    {
      title: "FinOps & Cost Optimization",
      icon: DollarSign,
      skills: ["AWS CUR", "Cost Explorer", "Cloud Keeper", "Amnic"]
    },
    {
      title: "Development & Scripting Excellence",
      icon: Code,
      skills: ["Python", "Shell Scripting", "Go", "Linux"]
    }
  ];

  return (
    <section className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:shadow-xl hover:bg-slate-700/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <IconComponent size={24} className="text-amber-400" />
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-slate-600/50 text-slate-200 px-3 py-2 rounded-lg text-sm font-medium border border-slate-500/50 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-400 transition-all duration-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;