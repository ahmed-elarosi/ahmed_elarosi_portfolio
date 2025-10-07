import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Layers, 
  Server, 
  Cloud, 
  GitBranch 
} from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      key: 'programming',
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      key: 'web',
      icon: Globe,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      key: 'webTech',
      icon: Layers,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      key: 'devops',
      icon: Server,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      key: 'cloud',
      icon: Cloud,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10'
    },
    {
      key: 'tools',
      icon: GitBranch,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t(`skills.categories.${category.key}`)}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {t(`skills.items.${category.key}`, { returnObjects: true }).map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-muted/30 p-8 rounded-lg border border-border">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
                I regularly explore new frameworks, tools, and methodologies to ensure I can deliver cutting-edge solutions 
                that meet modern business requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skill Proficiency Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Frontend', level: 90 },
            { label: 'Backend', level: 85 },
            { label: 'DevOps', level: 80 },
            { label: 'Data Analysis', level: 88 }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-muted stroke-current"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-primary stroke-current"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ strokeDasharray: "0 100" }}
                    whileInView={{ strokeDasharray: `${item.level} 100` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-foreground">
                    {item.level}%
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
