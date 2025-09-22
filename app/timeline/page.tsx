import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <header className="mb-8">
          <Link href="/" passHref>
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Timeline</h1>
        </header>

        <main>
          <section className="space-y-8">
            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">September 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Built an AI driven system to enable natural language querying and exploration of GitHub repositories. Leveraged Llama 3 LLM, applying fine-tuning on a dataset of code collected from GitHub to enhance code comprehension and generate accurate answers [
                  <Link
                    href="https://github.com/ELkarousWissem/Chat_with_Github"
                    className="link-blue"
                  >
                    GitHub
                  </Link>
                  ].
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">August 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Developed and deployed AI driven anomaly detection solutions for web security at Securas Technologies. Engineered advanced anomaly detection system using firewall journaling log data, achieving 99% detection rate for known attacks and 93% detection rate for unknown attacks through BERT-based models.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">July 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Started AI Engineer Internship at Securas Technologies, focusing on developing AI-driven anomaly detection solutions for web security using advanced BERT-based models and FastAPI deployment.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">June 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Developed an AI-driven system to analyze and secure automotive internal networks. Applied Active Automata Learning and LSTM models on time-series Electronic Control Unit (ECU) and CAN bus data to learn normal communication patterns and detect anomalies in real time [
                  <Link
                    href="https://github.com/ELkarousWissem/CAN-secure_dream_drive"
                    className="link-blue"
                  >
                    GitHub
                  </Link>
                  , 
                  <Link
                    href="https://huggingface.co/spaces/wissemkarous/Secure-Dream-Drive"
                    className="link-blue"
                  >
                    Demo
                  </Link>
                  ].
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">April 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Worked on a smart city initiative to optimize traffic management and support infrastructure planning. Analyzed 20 months of traffic data from sensors at four major junctions, including irregular and sparse datasets. Built predictive models using LSTM networks and statistical forecasting [
                  <Link
                    href="https://www.kaggle.com/code/wissemkarous911/time-series-prediction-in-iot"
                    className="link-blue"
                  >
                    Kaggle
                  </Link>
                  ].
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">2023-2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-primary">
                  Formulated a state of the art lipreading model with interactive web interface. Built and deployed a lipreading model (automatic speech recognition from visual cues on lip movements) with a Streamlit web interface, achieving lowest CER (0.6%) and WER (1.7%) since the first related publication in 2016 [
                  <Link
                    href="https://huggingface.co/spaces/wissemkarous/PFA-Demo"
                    className="link-blue"
                  >
                    Demo
                  </Link>
                  ].
                </li>
                <li className="text-primary">
                  Crafted and implemented mobile solutions to improve operational efficiency at Business Software. Constructed a mobile app for attendance tracking using TensorFlow Lite, React Native, and OpenCV.
                </li>
                <li className="text-primary">
                  Served as Machine Learning Instructor & Department Lead at Google Developer Student Club ENETCOM, spearheading hands-on workshops and student projects in Machine Learning.
                </li>
                <li className="text-primary">
                  Delivered over 15 AI workshops as Mentor & Instructor at Microsoft Club Higher Institute of Applied Science and Technology of Sousse, covering Machine Learning, Deep Learning, Natural Language Processing, Large Language Models, and Recommender Systems.
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
