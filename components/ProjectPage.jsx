"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import Image from 'next/image';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ActivitySquareIcon, Briefcase, BoxesIcon } from 'lucide-react'
import Reveal from './reveal';

const Projects = [
    {
        name: 'Open Domain Question Answering System for RAG',
        tech_stacks: 'Pytorch, Huggingface, MongoDB',
        bullet_points: 'Implemented a Retrieval-Augmented Generation (RAG) pipeline for open-domain question answering, according to the Dense Passage Retrieval (DPR) paper, leveraging SOTA lightweight BERT models (ELECTRA, DistilBERT) for encoding passages.Fine-tuned model to achieve high performance metrics, with a recall of 0,95 and Mean Reciprocal Rank of 0,81.Managed data operations with MongoDB, ensuring robust data handling and quick retrieval for real-time question answering.',
        github_link: 'https://github.com/BryanMelvison/OQDA-RAG',
    },
    {
        name: 'Decoder-only Transformer',
        tech_stacks: 'Pytorch',
        bullet_points: 'Reconstructed the decoder only transformer model from the paper \'Attention is All you Need\'.Trained on Shakespeare\'s work, it was able to autoregressively generate texts that mimic Shakespearean English, can also be trained on other corpus of texts',
        github_link: 'https://github.com/BryanMelvison/Transformer',
    },
    {
        name: 'PocketVocab by Purple Cow',
        tech_stacks: 'React Native, Flask, Firebase',
        bullet_points: 'Made the quiz section of the app and the overall backend infrastructure using React Native for the UI and Python Flask for the server-side logic.Integrated Google Cloud Vision API for object recognition and annotation, and Google Cloud Translate API for translating object names to the user\'s selected target language, Gemini API for generating quizzes questions.Implemented Firebase services, including Firestore for database management, Functions for implementing serverless backend functionality and Storage for storing pictures taken by the user',
        github_link: 'https://github.com/archwyles/purplecow',
    },
    {
        name: 'Intelligent Course Management System',
        tech_stacks: 'OpenCV, Flask, MySQL, React.js',
        bullet_points: 'Developed facial recognition system to enable biometric authentication for course management platform.Built a machine learning pipeline including data collection, training, and integrated the model with the backend.Front-end and backend integration using Flask and MySQL for various functions',
        github_link: 'https://github.com/Kevindrayana/ICMS-Group-10',
    },
    {
        name: 'Digit Recognition with CNN Model',
        tech_stacks: 'Pytorch',
        bullet_points: 'Applied data augmentation techniques to prevent overfitting.Achieved a training accuracy of 94,3%, and testing accuracy of 94%.Modeled with 16 layers including convolution, pooling, activations, fully-connected, and dropout.Utilized max-pooling layer to effectively reduce dimension of feature map, numbers of parameters, and amount of computations performed to under 15 minutes',
        github_link: 'https://github.com/BryanMelvison/DigitRecognition',
    },
    {
        name: 'Stock Predictor and Visualization with LSTM Model',
        tech_stacks: 'Keras, Streamlit',
        bullet_points: 'Designed and implemented an intuitive user interface using the Streamlit framework, along with yfinance to retrieve up-to-date stock data, and visualize findings of essential aspects of stock market analysis.Employed LSTM modeling techniques to forecast future stock prices based on the historical stock price, on a 80-20 split, achieving an RMSE of 0,839',
        github_link: 'https://github.com/BryanMelvison/StockPredictorVisualizer',
    },
    {
        name: 'Big Two',
        tech_stacks: 'Java',
        bullet_points: 'Employed a multi-threaded approach to efficiently handle networking tasks, utilizing Java sockets for seamless network multiplayer functionality.Implemented Object Oriented Approach to effectively manage intricate game mechanisms and rules',
        github_link: 'https://github.com/BryanMelvison/BigTwoGUI',
    },
    {
        name: 'Virtual Paint',
        tech_stacks: 'Open CV',
        bullet_points: 'Utilized image processing theories to find the difference between current and previous frame, and drawing a bounding box around moving objects, acting as a pen.',
        github_link: 'https://github.com/BryanMelvison/VirtualPaint',
    },


]


const ProjectPage = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <Reveal>
                    <div className="flex flex-col xl:flex-row items-center section-title mb-12 xl:mb-24 text-center mx-auto">
                        <BoxesIcon className="text-green-500 animate-spin-slow" size={25} />
                        <h2 className="animate-fade-in-up">Highlighted Projects</h2>
                    </div>
                </Reveal>
                <Reveal>
                    <Swiper slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1400: { slidesPerView: 3 },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true
                        }}
                        className="h-[500px] "
                    >
                        {Projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg hover:-translate-y-2 transition-transform duration-300">
                                    <CardContent className="p-4 text-gray-600 dark:text-gray-300">
                                        <CardTitle className="text-lg font-medium mb-2 text-gray-800 dark:text-white">{project.name}</CardTitle>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{project.tech_stacks}</p>
                                        <div className="mb-3 text-sm">
                                            <ul className="list-disc list-inside">
                                                {project.bullet_points.split('.').filter(bullet => bullet).map((bullet, bulletIndex) => (
                                                    <li key={bulletIndex} className="text-gray-700 dark:text-gray-300">{bullet.trim()}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Link href={project.github_link} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300">
                                            View on GitHub
                                        </Link>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Reveal>

            </div>
        </section>
    )
}

export default ProjectPage;