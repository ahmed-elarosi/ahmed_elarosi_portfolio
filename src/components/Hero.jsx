import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    const { t, i18n } = useTranslation();

    const downloadCV = () => {
        const basePath = import.meta.env.BASE_URL;
        const cvFile = i18n.language === "en" ? "/assets/CV_EN.pdf" : "/assets/CV_DE.pdf";
        const fullPath = `${basePath}${cvFile}`;

        const link = document.createElement("a");
        link.href = fullPath;
        link.download = `Ahmed_Elarosi_resume_${i18n.language.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToAbout = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
                        >
                            {t("hero.name")}
                        </motion.h1>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold"
                        >
                            {t("hero.title")}
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        >
                            {t("hero.subtitle")}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                        >
                            <Button
                                onClick={downloadCV}
                                size="lg"
                                className="flex items-center space-x-2 px-8 py-3 text-lg font-semibold"
                            >
                                <Download className="h-5 w-5" />
                                <span>{t("hero.downloadCV")}</span>
                            </Button>

                            <Button
                                onClick={scrollToContact}
                                variant="outline"
                                size="lg"
                                className="flex items-center space-x-2 px-8 py-3 text-lg font-semibold"
                            >
                                <Mail className="h-5 w-5" />
                                <span>{t("hero.contactMe")}</span>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <button
                            onClick={scrollToAbout}
                            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            <span className="text-sm font-medium">Scroll down</span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <ArrowDown className="h-5 w-5" />
                            </motion.div>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                />
            </div>
        </section>
    );
};

export default Hero;
