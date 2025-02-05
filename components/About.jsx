"use client";
import React, { useEffect, useRef, useState } from "react";
import DevImg from "./DevImg";
import Reveal from "./reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  Cake,
  GraduationCap,
  Activity,
  UserIcon,
  Briefcase,
  CalendarDays,
} from "lucide-react";

const aboutText =
  "I really enjoy coming up with ideas, and through technology, make the idea come to fruition. Recently, I became very interested in Cloud Computing and the concept of designing a scalable, secure and resilient system!";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Bryan Melvison",
  },
  {
    icon: <Cake size={20} />,
    text: "21",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Major in Computer Science, with a Minor in Finance",
  },
  {
    icon: <Activity size={20} />,
    text: "Football, Badminton, Bouldering, Travelling",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "The University of Hong Kong",
        qualification: "Bachelor of Engineering (CompSc)",
        years: "2021 - 2025 (Expected)",
      },
      {
        university: "McGill University",
        qualification: "Bachelor of Science (Computer Science)",
        years: "2024 Winter Exchange Semester",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Kodifly Limited",
        position: "AI Engineer Intern",
        date: "Jun 2023 - Aug 2023",
      },
      {
        company: "HKU Innovation Wing",
        position: "Part Time Research Assistant (Robotics)",
        date: "Oct 2023 - Dec 2023",
      },
      {
        company: "Intact Financial Limited",
        position: "Data Science Intern",
        date: "Jun 2024 - Aug 2024",
      },
      {
        company: "MILA",
        position: "Research Volunteer (Software Engineer)",
        date: "Jun 2024 - Oct 2024",
      },
      {
        company: "Migrasia",
        position: "LLM Engineer Intern",
        date: "Jan 2025 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "Programming Languages",
    data: [{ name: "Python, R, Java, JavaScript, C/C++" }],
  },
  {
    title: "Back-end",
    data: [{ name: "Flask, FastAPI, Node.js" }],
  },
  {
    title: "Front-end",
    data: [{ name: "React.js, Next.js, TailwindCSS" }],
  },
  {
    title: "Data Science & ML",
    data: [
      {
        name: "PyTorch, Pandas, NumPy, Scikit-learn, Matplotlib, OpenCV, Hugging Face, LangChain",
      },
    ],
  },
  {
    title: "Databases",
    data: [{ name: "MySQL, MongoDB" }],
  },
  {
    title: "DevOps & Cloud",
    data: [{ name: "Git, AWS, Firebase, DVC, MLflow" }],
  },
];

const extraData = [
  {
    title: "extracurriculars",
    data: [
      {
        committee: "HKU Student Ambassador",
        date: "Oct 2022 - Present | Member",
        activity:
          "Represented HKU in a range of events (info day, 111th congregation), demonstrating professionalism and excellence in all endeavors.",
      },
      {
        committee: "HKU LapChee Running Club",
        date: "Jan 2023 - Jun 2024 | Co-Founder",
        activity:
          "Ensured seamless execution of the operations of the running activities, and set up the foundation for the club for instance the running routes, and attendance tracking excel sheets.",
      },
      {
        committee: "HKU LapChee College Ambassador",
        date: "Sept 2022 - Jun 2024 | Committee",
        activity:
          "Coordinated and managed various events hosted in Lap-Chee College while also taking responsibility to created various content for the instagram page.",
      },
    ],
  },
];

// Helper to find data from arrays
const getData = (arr, title) => {
  return arr.find((item) => item.title === title);
};

function About() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // For "Qualifications" auto-scroll
  useEffect(() => {
    const smoothScroll = (start, end, duration) => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOut = (t) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const currentPosition = start + (end - start) * easeInOut(progress);

        if (containerRef.current) {
          containerRef.current.scrollTop = currentPosition;
        }

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const startAutoScroll = () => {
      if (containerRef.current) {
        const scrollContainer = containerRef.current;
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        if (scrollHeight > clientHeight) {
          smoothScroll(0, scrollHeight - clientHeight, 1000);
        }
      }
    };

    const stopAutoScroll = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (containerRef.current) {
        smoothScroll(containerRef.current.scrollTop, 0, 1000);
      }
    };

    if (isHovered) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  /***************************************************
   * Carousel State and Logic for "Skills" Tab
   ***************************************************/
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = skillData.length;

  return (
    <section className="xl:h-screen mb-12 xl:mb-24 pb-12 xl:py-24">
      <div className="container mx-auto">
        <Reveal>
          <div className="flex flex-col xl:flex-row items-center section-title mb-8 mt-10 xl:mb-12 text-center mx-auto">
            <UserIcon className="text-green-500" size={25} />
            <h2>About Me</h2>
          </div>
        </Reveal>

        <div className="flex">
          {/* Left side image */}
          <div className="hidden xl:flex flex-1 relative">
            <Reveal>
                <DevImg containerStyles="w-[505px] h-[505px] bg-no-repeat relative " imgSrc="/about/developer.jpg" />
            </Reveal>
          </div>

          {/* Right side tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <Reveal>
                <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[630px] xl:border dark:border-none">
                  <TabsTrigger className="w-40 xl:w-auto" value="personal">
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger className="w-40 xl:w-auto" value="qualifications">
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger className="w-40 xl:w-auto" value="skills">
                    Skills
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-40 xl:w-auto"
                    value="extracurriculars"
                  >
                    Extracurriculars
                  </TabsTrigger>
                </TabsList>
              </Reveal>

              <div className="text-lg mt-12 xl:mt-8">
                {/* PERSONAL TAB */}
                <Reveal>
                  <TabsContent value="personal">
                    <div className="text-center xl:text-left">
                      <h3 className="h3 mb-4">Motivated Lifelong Learner</h3>
                      <p className="subtitle max-w-xl mx-auto xl:mx-0">
                        {aboutText}
                      </p>
                      {/* Info icons */}
                      <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {infoData.map((item, index) => (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-8"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        ))}
                      </div>
                      {/* Language skills */}
                      <div className="flex flex-col gap-y-2">
                        <div className="text-primary">Language Skill</div>
                        <div className="border-b border-border"></div>
                        <div>English, Indonesian, Mandarin Chinese</div>
                      </div>
                    </div>
                  </TabsContent>
                </Reveal>

                {/* QUALIFICATIONS TAB */}
                <Reveal>
                  <TabsContent value="qualifications">
                    <div>
                      <h3 className="h3 mb-8 text-center xl:text-left">
                        My Journey
                      </h3>
                      <div className="grid md:grid-cols-2 gap-y-8">
                        {/* Experience */}
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-2xl text-primary">
                            <Briefcase size={28} />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "experience").title}
                            </h4>
                          </div>
                          <div
                            ref={containerRef}
                            className="flex flex-col gap-y-8 max-h-72 overflow-hidden hover:overflow-y-auto transition-all duration-500"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            {getData(qualificationData, "experience").data.map(
                              (item, index) => {
                                const { company, position, date } = item;
                                return (
                                  <div className="flex gap-x-8 group" key={index}>
                                    <div className="h-20 w-px bg-border relative ml-2">
                                      <div className="w-3 h-3 rounded-full bg-primary absolute -left-1 group-hover:translate-y-20 transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {position}
                                      </div>
                                      <div className="text-base font-medium">
                                        {date}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        {/* Education */}
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-2xl text-primary">
                            <GraduationCap size={28} />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "education").title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {getData(qualificationData, "education").data.map(
                              (item, index) => {
                                const { university, qualification, years } = item;
                                return (
                                  <div className="flex gap-x-8 group" key={index}>
                                    <div className="h-20 w-px bg-border relative ml-2">
                                      <div className="w-3 h-3 rounded-full bg-primary absolute -left-1 group-hover:translate-y-20 transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {university}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Reveal>

                {/* SKILLS TAB */}
                <Reveal>
                <TabsContent value="skills">
                    <div className="text-center">
                    {React.useEffect(() => {
                        const interval = setInterval(() => {
                        setCurrentSlide((prev) => (prev + 1) % totalSlides);
                        }, 2000);

                        // Cleanup on unmount
                        return () => clearInterval(interval);
                    }, [])}

                    <h3 className="h3 mb-8">Tech Stack</h3>

                    {/* Carousel Container */}
                    <div className="relative mx-auto max-w-sm md:max-w-lg lg:max-w-2xl">
                        <div className="overflow-hidden rounded-lg bg-gray-50">
                        <div
                            className="transition-transform duration-500 ease-in-out flex"
                            style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {skillData.map((skill, index) => (
                            <div key={index} className="w-full flex-shrink-0 p-6">
                                <div className="min-h-[200px] flex flex-col items-center justify-center">
                                <h3 className="text-xl font-semibold mb-4 text-green-600">
                                    {skill.title}
                                </h3>
                                <p className="text-sm text-gray-600 max-w-xs mx-auto">
                                    {skill.data[0].name}
                                </p>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                        {skillData.map((_, idx) => (
                            <button
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                currentSlide === idx
                                ? "bg-green-600 w-4"
                                : "bg-gray-300"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                        </div>
                    </div>
                    </div>
                </TabsContent>
                </Reveal>


                {/* EXTRACURRICULARS TAB */}
                <Reveal>
                  <TabsContent value="extracurriculars">
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-2xl text-primary">
                        <CalendarDays size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(extraData, "extracurriculars").title}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(extraData, "extracurriculars").data.map(
                          (item, index) => {
                            const { committee, date, activity } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-20 w-px bg-border relative ml-2">
                                  <div className="w-3 h-3 rounded-full bg-primary absolute -left-1 group-hover:translate-y-20 group-hover:w-5 group-hover:h-5 transition-all duration-500" />
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {committee}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-1">
                                    {date}
                                  </div>
                                  <div className="text-base font-medium">
                                    <i>{activity}</i>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </TabsContent>
                </Reveal>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;