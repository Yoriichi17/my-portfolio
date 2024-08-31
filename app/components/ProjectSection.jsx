"use client";
import React , {useState , useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import {motion , useInView} from "framer-motion"
const projectsData =[
    {
        id:1,
        title: "Weather App",
        description: "Displays the weather of the place entered",
        image: "/images/projects/WeatherApp.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/Weather-App",
        previewUrl: "https://gregarious-licorice-837f6b.netlify.app/"
    },
    {
        id:2,
        title: "Emi Calculator",
        description: "Calculates the EMI based on inputs",
        image: "/images/projects/emi.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/Emi-Calculator",
        previewUrl: ""
    },
    {
        id:3,
        title: "ToDo List",
        description: "Website to create and delete works to do",
        image: "/images/projects/todo.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/todo",
        previewUrl: ""
    },
    {
        id:4,
        title: "Event Management System",
        description: "Website to book tickets for comedy shows",
        image: "/images/projects/event.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/Django-booking-System",
        previewUrl: ""
    },
    {
        id:5,
        title: "Tempearture Converter",
        description: "Website to convert temperature between celcius and fahrenheit",
        image: "/images/projects/temp.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/Temp-Conv",
        previewUrl: "",
    },
    {
        id:6,
        title: "Student Management",
        description: "Website to store student details",
        image: "/images/projects/Student.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/Redux-Crud",
        previewUrl: "https://chic-vacherin-5d9019.netlify.app/",
    },
    {
        id:7,
        title: "BMI Calculator",
        description: "Website that calculates your bmi and checks if your healthy",
        image: "/images/projects/bmi.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/Bmi-calc",
        previewUrl: "",
    },
    {
        id:8,
        title: "Quote Generator",
        description: "Website that generates random quotes ",
        image: "/images/projects/Quote.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/Quote-generator",
        previewUrl: "https://merry-kringle-77fabb.netlify.app/",
    },
    {
        id:9,
        title: "Image Carousel",
        description: "Website that changes display pictures",
        image: "/images/projects/Carousel.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Yoriichi17/Image-Carousel",
        previewUrl: "https://velvety-banoffee-8b633c.netlify.app/",
    },
    {
        id:10,
        title: "Metro Parking App",
        description: "App to replace the paper-slip systems at metro parking",
        image: "/images/projects/Metro.png",
        tag: ["All","Mobile"],
        gitUrl: "https://github.com/Yoriichi17/Metro-Parking-App",
        previewUrl: "",
    },
    {
      id:11,
      title: "Quantum Stenography with BB84 Protocol",
      description: "This project implements  an interactive application for creating quantum circuits based on the number of qubits selected and provides a detailed overview of the encoding and decoding processes.",
      image: "/images/projects/quantam.png",
      tag: ["All","Web"],
      gitUrl: "https://github.com/Yoriichi17/JITHACK-2024",
      previewUrl: "",
  },
  {
    id:12,
    title: "Redesigning OpenBox",
    description: "This is a e-mail handling system  for companies or organizations.",
    image: "/images/projects/onebox.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/Yoriichi17/ReachInbox-Assignment",
    previewUrl: "https://yoriichi17.github.io/ReachInbox-Assignment/",
},

]
const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once : true})
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );

    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

  
    return (
      <section id="project" ref = {ref} >
        <h2 className="text-center text-4xl font-bold text-white mt-15 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
              <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
              </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  

export default ProjectSection
