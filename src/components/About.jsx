import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code,
      title: "3+ Years",
      subtitle: "Software Development",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      title: "10+ Years",
      subtitle: "Business & Finance",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Full-Stack",
      subtitle: "Web Development",
      color: "text-purple-500"
    },
    {
      icon: Award,
      title: "Problem",
      subtitle: "Solver",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.experience')}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.expertise')}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.passion')}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full bg-muted ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card p-8 rounded-lg border border-border shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Why Choose Me?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary mb-2">Technical Excellence</h4>
                <p className="text-muted-foreground text-sm">
                  Modern technologies and best practices
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Business Understanding</h4>
                <p className="text-muted-foreground text-sm">
                  10+ years of business experience
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Problem Solving</h4>
                <p className="text-muted-foreground text-sm">
                  Analytical approach to complex challenges
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
