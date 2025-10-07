import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ahmed Elarosi',
      href: 'https://linkedin.com/in/elarosi',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Ahmed Elarosi',
      href: 'https://github.com/ahmed-elarosi',
      color: 'text-gray-500',
      bgColor: 'bg-gray-500/10'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: t('contact.location'),
      href: '#',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-full ${method.bgColor}`}>
                    <method.icon className={`h-6 w-6 ${method.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {method.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {method.value}
                    </p>
                    {method.href !== '#' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(method.href, '_blank')}
                        className="w-full"
                      >
                        Connect
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-lg border border-border shadow-sm"
          >
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Let's Start a Conversation
              </h3>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you have a project in mind, need technical consultation, 
                or just want to discuss opportunities, I'd love to hear from you. 
                I typically respond within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => window.open(`mailto:${t('contact.email')}`, '_blank')}
                  className="flex items-center space-x-2 px-8 py-3"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/elarosi', '_blank')}
                  className="flex items-center space-x-2 px-8 py-3"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
              <p className="text-muted-foreground text-sm">
                Usually within 24 hours
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Availability</h4>
              <p className="text-muted-foreground text-sm">
                Open to new projects
              </p>
            </div>
            
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Time Zone</h4>
              <p className="text-muted-foreground text-sm">
                CET (Central European Time)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
