"use client";

import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Instagram,
  Facebook,
  Brain,
  Code,
  Database,
  Server,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WissemImg from "@/app/data/images/Portfolioo.png";

const LeetCodeStats = () => {
  const [solvedCount, setSolvedCount] = useState("around 150");

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/skirrrrrra"
        );
        const data = await response.json();

        if (data.status === "success") {
          setSolvedCount(data.totalSolved.toString());
        } else {
          console.error("Failed to fetch LeetCode stats:", data.message);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return <span>{solvedCount}</span>;
};

export function PortfolioComponent() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Set the default theme to 'dark'
    if (theme === "system") {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 my-4">
        <header className="mb-16 text-center relative">
          <div className="absolute right-0 top-0 flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="#about" className="text-sm">
                About Me
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://drive.google.com/file/d/1p_IS5FtlcFp_tBsaNowCAil5MHswE6Kv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm">
                View Resume
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <Image
            src={WissemImg}
            alt={"Wissem's Image"}
            width={400}
            height={300}
            style={{
              objectFit: "cover",
              marginTop: "100px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "30px",
            }}
            className="rounded-md mt-24 mb-8 mx-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Wissem Karous
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            AI Engineer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            <span className="font-bold text-primary">AI</span>{" "}
            focused Telecommunications Engineer
          </p>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#experience" className="hover:underline">
              Experience
            </Link>
            <Link href="#education" className="hover:underline">
              Education
            </Link>
            <Link href="#featured-projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
            <Link href="#leadership" className="hover:underline">
              Leadership
            </Link>
            <Link href="/timeline" className="hover:underline">
              Timeline
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:karouswissem@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/ELkarousWissem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/wissem-karous/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </header>

        <main className="space-y-16">
          <section id="about">
            <div className="text-center">
              <p className="text-primary">
                AI focused Telecommunications Engineer with hands-on experience in building, training, and finetuning models for intelligent systems. Trilingual, analytical, and proactive, with a solid foundation in applied artificial Intelligence principles, strong programming expertise, and a collaborative mindset fueled by continuous learning.
              </p>
            </div>
          </section>

          <section id="experience">
            <h2 className="text-2xl font-semibold mb-6">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">AI Research Engineer</h3>
                <p className="text-muted-foreground">ReDX Technologies • 07/2025 – Present</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Responsible for the development of scalable multimodal AI pipelines</li>
                  <li>Research and develop AI pipelines for intelligent systems</li>
                  <li>Optimize models for edge and cloud deployment, applying advanced techniques, compute level performance tuning, and parameter efficient finetuning strategies</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">AI Research Engineer Intern</h3>
                <p className="text-muted-foreground">ReDX Technologies • 02/2025 – 06/2025</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Architected a scalable AI pipeline for intelligent image validation and categorization of massive datasets, leveraging Large Language Models (LLMs), Vision Language Models (VLMs), and Hugging Face Transformers</li>
                  <li>Developed an optimized image filtering framework with a novel strategy to minimize resource consumption while preserving fidelity for downstream semantic evaluation</li>
                  <li>Configured models with ONNX Runtime to enable low latency inference in constrained and low-performance environments</li>
                  <li>Applied advanced model optimization techniques including knowledge distillation, pruning, and quantization</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">AI Engineer Intern</h3>
                <p className="text-muted-foreground">Securas Technologies • 07/2024 – 09/2024</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Engineered advanced anomaly detection system using firewall journaling log data, achieving 99% detection rate for known attacks and 93% detection rate for unknown attacks through BERT-based models</li>
                  <li>Integrated detection system into a FastAPI service and containerized with Docker, enabling isolated, scalable, and production-ready deployment</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">AI Software Engineer Intern</h3>
                <p className="text-muted-foreground">Business Software • 07/2023 – 08/2023</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Constructed a mobile app for attendance tracking to achieve accurate results and address challenges where 5% of employees work remotely</li>
                  <li>Leveraged TensorFlow Lite, React Native, and OpenCV for mobile solution development</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="education">
            <h2 className="text-2xl font-semibold mb-6">
              Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">Telecommunications Engineering</h3>
                <p className="text-muted-foreground">National School of Electronics and Telecommunications of Sfax</p>
                <p className="text-sm text-muted-foreground">09/2022 – 06/2025</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">Pre-Engineering Degree</h3>
                <p className="text-muted-foreground">Preparatory Institute for Engineering Studies of Bizerte</p>
                <p className="text-sm text-muted-foreground">09/2020 – 06/2022</p>
              </div>
            </div>
          </section>

          <section id="featured-projects">
            <h2 className="text-2xl font-semibold mb-6">
              Featured Projects
            </h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-6 pb-2" style={{ width: 'max-content' }}>
                {/* Project 1 */}
                <div className="flex-shrink-0 w-80 bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary">Generative Question-Answering with RAG</h3>
                    <span className="text-sm text-muted-foreground">2025</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">LLama2</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">LangChain</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Faiss</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Multi-AI agent system leveraging advanced retrieval techniques
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                    <li>• Architected multi-AI agent architecture using LangGraph, AstraDB, and Llama 3.1</li>
                    <li>• Applied RAG techniques to improve response accuracy and performance</li>
                  </ul>
                  <div className="flex gap-2">
                    <a href="https://github.com/wissemkarous/LLMs/blob/main/RAG_with_Llama_2_and_LangChain_update.ipynb" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      📓 Notebook
                    </a>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="flex-shrink-0 w-80 bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary">GitHub Repository Q&A System</h3>
                    <span className="text-sm text-muted-foreground">09/2024</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">LLama3</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">ChromaDB</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Fine-Tuning</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI driven system for natural language querying of GitHub repositories
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                    <li>• Leveraged Llama 3 LLM with fine-tuning on GitHub code datasets</li>
                    <li>• Integrated Ollama and ChromaDB for efficient embedding and retrieval</li>
                  </ul>
                  <div className="flex gap-2">
                    <a href="https://github.com/ELkarousWissem/Chat_with_Github" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      🔗 GitHub
                    </a>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="flex-shrink-0 w-80 bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary">Smart City Traffic Forecasting</h3>
                    <span className="text-sm text-muted-foreground">04/2024</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">LSTM</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">IoT Sensors</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Time-Series Analysis</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Smart city initiative to optimize traffic management and support infrastructure planning
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                    <li>• Analyzed 20 months of traffic data from sensors at four major junctions, including irregular and sparse datasets</li>
                    <li>• Built predictive models using LSTM networks and statistical forecasting to anticipate traffic patterns on weekdays, holidays, and special events</li>
                    <li>• Provided actionable insights to manage traffic peaks and support data-driven decisions for a more efficient and intelligent urban traffic system</li>
                  </ul>
                  <div className="flex gap-2">
                    <a href="https://www.kaggle.com/code/wissemkarous911/time-series-prediction-in-iot" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      📊 Kaggle
                    </a>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="flex-shrink-0 w-80 bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary">Automotive Threat Evaluation</h3>
                    <span className="text-sm text-muted-foreground">06/2024</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">LSTM</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">CAN Data</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">ECU</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI-driven system to analyze and secure automotive internal networks
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                    <li>• Applied Active Automata Learning and LSTM models on ECU data</li>
                    <li>• Learned normal communication patterns and detected anomalies in real time</li>
                  </ul>
                  <div className="flex gap-2">
                    <a href="https://github.com/ELkarousWissem/CAN-secure_dream_drive" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      🔗 GitHub
                    </a>
                    <a href="https://huggingface.co/spaces/wissemkarous/Secure-Dream-Drive" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      🚀 Demo
                    </a>
                  </div>
                </div>

                {/* Project 5 */}
                <div className="flex-shrink-0 w-80 bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary">Visual Speech Recognition</h3>
                    <span className="text-sm text-muted-foreground">12/2023-04/2024</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">TensorFlow</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Streamlit</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">VRS</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    State of the art lipreading model with interactive web interface
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                    <li>• Achieved lowest CER (0.6%) and WER (1.7%) since 2016</li>
                    <li>• Conducted comprehensive benchmarking across 8 research papers</li>
                  </ul>
                  <div className="flex gap-2">
                    <a href="https://huggingface.co/spaces/wissemkarous/PFA-Demo" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      🚀 Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills">
            <h2 className="text-2xl font-semibold mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Libraries</h3>
                  <p className="text-muted-foreground">Scikit-learn, Transformers, TensorFlow, Keras, PyTorch, OpenCV, Huggingface Transformers, Ollama</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <GitBranch className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Version Control</h3>
                  <p className="text-muted-foreground">Git, GitHub, Huggingface</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Layers className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Frameworks</h3>
                  <p className="text-muted-foreground">LangChain, LangGraph, FastAPI, Pytest, Gradio, Streamlit, Node.js (Express.js)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Code className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                  <p className="text-muted-foreground">Python, Java, C, SQL, JavaScript</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Cpu className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Machine Learning Fields</h3>
                  <p className="text-muted-foreground">ML, DL, NLP, LLMs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Server className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">MLOps</h3>
                  <p className="text-muted-foreground">Docker, MLFlow</p>
                </div>
              </div>
            </div>
          </section>

          <section id="leadership">
            <h2 className="text-2xl font-semibold mb-6">
              Leadership & Volunteering
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">Microsoft Club Higher Institute of Applied Science and Technology of Sousse</h3>
                <p className="text-muted-foreground">Mentor & Instructor • 11/2024 – 05/2025 | Sousse, Tunisia</p>
                <p className="text-sm">Delivered over 15 AI workshops covering diverse topics including Machine Learning, Deep Learning, Natural Language Processing, Large Language Models, and Recommender Systems.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">Google Developer Student Club ENETCOM</h3>
                <p className="text-muted-foreground">Machine Learning Instructor & Department Lead • 09/2023 – 09/2024 | Sfax, Tunisia</p>
                <p className="text-sm">Spearheaded hands-on workshops and student projects, driving engagement and skill-building in Machine Learning through impactful initiatives.</p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-lg font-semibold">4C Career Center & Skills Certification ENETCOM</h3>
                <p className="text-muted-foreground">Member • 09/2022 – 09/2024 | Sfax, Tunisia</p>
                <p className="text-sm">Represented ENETCOM at an international process optimization event, organized with KNUST and Leipzig University.</p>
              </div>
            </div>
          </section>

          <section id="fun-stuff">
            <h2 className="text-2xl font-semibold mb-6">
              What I Do in My Free Time
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                I love playing football and enjoy the teamwork and strategy involved in the game
              </li>
              <li>
                I'm passionate about camping and love spending time outdoors, connecting with nature and exploring new places
              </li>
              <li>
                I also enjoy reading books and staying updated with the latest in AI and technology
              </li>
              <li>
                I also do random stuff, check out my{" "}
                <a
                  href="https://www.instagram.com/karous_wissem/"
                  className="link-blue"
                >
                  Instagram
                </a>{" "}
                if you're interested
              </li>
            </ul>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-primaryforeground mb-4">
              I&apos;m always open to new opportunities and collaborations, so
              feel free to reach out to me.
            </p>
            <div className="flex justify-center space-x-4 px-4 my-4 mb-6">
              <Button asChild>
                <Link href="mailto:karouswissem@gmail.com">
                  Contact me <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-primaryforeground mb-4">
              If you're interested in checking out my other socials, you can
              find them here:
            </p>
            <div className="flex justify-center space-x-4 px-4 my-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.facebook.com/wissem.karous"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/karous_wissem/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>© 2025 Wissem Karous. Keep IT SIMPLE.</p>
        </footer>
      </div>
    </div>
  );
}
