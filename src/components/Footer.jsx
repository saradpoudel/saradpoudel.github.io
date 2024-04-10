import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const Footer = () => {
    return (
        <motion.footer
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            className="bg-gray-800 text-white py-10"
        >
            <SectionWrapper>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <motion.a
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.2 }}
                            href="https://github.com/yourgithubusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4"
                        >
                            <FaGithub size={24} />
                        </motion.a>
                        <motion.a
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.4 }}
                            href="https://linkedin.com/in/yourlinkedinusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4"
                        >
                            <FaLinkedin size={24} />
                        </motion.a>
                        <motion.p
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.6 }}
                            className="mr-4"
                        >
                            your-email@example.com
                        </motion.p>
                    </div>
                    <div>
                        <motion.p
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.8 }}
                        >
                            &copy; 2024 Your Name. All Rights Reserved.
                        </motion.p>
                    </div>
                </div>
            </SectionWrapper>
        </motion.footer>
    );
};

export default SectionWrapper(Footer, "");
