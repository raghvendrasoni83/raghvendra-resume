import React from 'react';

const SummarySection: React.FC = () => {
  return (
    <section className="bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Professional Summary
      </h2>

      <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-lg leading-relaxed text-slate-200">
        <p className="text-justify mb-6">
          Forward-thinking <span className="font-semibold text-amber-400">Staff DevOps & Cloud Platform Engineer</span> with <span className="font-semibold text-amber-400">8 years of experience</span> architecting scalable cloud infrastructure, building Internal Developer Platforms (IDP), and spearheading AIOps and FinOps strategies. Proven track record of designing high-impact platforms, scaling systems from <span className="font-semibold text-amber-400">500 RPM to 5M RPM</span> with <span className="font-semibold text-amber-400">99.9% uptime</span>, and securing container-native EKS clusters.
        </p>
        <p className="text-justify mb-6">
          FinOps leader who engineered an AI-driven cost optimization and anomaly detection engine, generating <span className="font-semibold text-amber-400">$3.5M+ in annual AWS savings</span> through ML pipeline optimization, predictive rightsizing (Karpenter/KEDA), and smart edge routing.
        </p>
        <p className="text-justify">
          Respected technical mentor and cross-functional leader skilled in aligning engineering roadmaps with business goals. Expert at accelerating developer velocity through self-service environment provisioning, GitOps automation (ArgoCD/FluxCD), and building automated, self-healing observability loops.
        </p>
      </div>
    </section>
  );
};

export default SummarySection;
