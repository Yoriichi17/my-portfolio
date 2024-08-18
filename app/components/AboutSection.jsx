"use client";
import React, { useTransition , useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "skills",
        id : "skills",
        content : (
            <ul className="list-disc pl-2">
               <li>Programming Languages: C, C++, Java, Python.</li> 		
               <li>Operating systems: Windows, Ubuntu, Kali Linux.</li> 
               <li>Web Development: HTML, CSS, JavaScript.</li> 
               <li>Frameworks: React JS, Express JS, Node JS, Next JS, TypeScript, Django.</li> 
               <li>App Development: React Native, EXPO App.</li> 
               <li>Database: MySQL, MongoDB, Fire Base.</li> 
               <li>Platforms: VS Code, Code Blocks, Git Hub</li> 
            </ul>
        )
    },
    {
        title: "education",
        id : "education",
        content : (
<div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{  textAlign: 'left' }}>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Qualification</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Institution</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Score</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>B.E in Computer Science and Engineering</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Jyothy Institute of Technology, Bengaluru</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>CGPA – 8.3</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>2021 - 2025</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>PUC in PCME</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Sri Chaitanya PU College, Bengaluru</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Percentage – 81%</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>2019 - 2021</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>10th in ICSE</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Mitra Academy, Bengaluru</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Percentage – 77%</td>
            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>2008 - 2019</td>
          </tr>
        </tbody>
      </table>
    </div>
        )
    },
    {
        title: "certifications",
        id : "certifications",
        content : (
            <ul className="list-disc pl-2">
                <li>Building Web Site with WordPress</li>
                <li>Full Stack Web Development with Django Framework</li>
                <li>Ethical hacking </li>
                <li>MERN Stack Development</li>
                <li>Mastering Next JS</li>
            </ul>
        )
    },
]
const AboutSection = () => {
    const [tab , setTab] = useState("skills")
    const [ isPending,startTransition ] = useTransition()
    const handleTabChange = (id) => {
            startTransition(()=>{
                setTab(id)
            })
    }
  return (
<section id="about" className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16 xl:px-16  '>
    <Image src="/images/imag2.png" alt='image2' width={1000} height={5000}/>
    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-4xl font-bold text-white mb-4 mt-12'>About Me</h2>
        <p className='text-base lg:text-lg'>I am a passionate and dedicated software developer with a strong foundation in full-stack development.
             My expertise lies in creating robust and user-friendly applications, blending both front-end and back-end technologies to deliver seamless user experiences. 
             With a background in computer science, I enjoy tackling complex challenges and continuously learning new skills to stay ahead in the rapidly evolving tech landscape. 
             Whether working on web or mobile platforms, I am driven by a commitment to quality, innovation, and the pursuit of excellence. 
             Outside of coding, I have a keen interest in exploring new technologies and contributing to open-source projects, always eager to collaborate and share knowledge within the tech community
        </p>
        <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={()=> handleTabChange("skills")} active={tab == "skills"}>
                {" "}
                Skills{" "}
            </TabButton>
            <TabButton selectTab={()=> handleTabChange("education")} active={tab == "education"}>
                {" "}
                Education{" "}
            </TabButton>
            <TabButton selectTab={()=> handleTabChange("certifications")} active={tab == "certifications"}>
                {" "}
                Certifications{" "}
            </TabButton>

        </div>
        <div className='mt-8 mb-10'>
            {TAB_DATA.find((t) => t.id === tab).content}
        </div>
    </div>
    </div>
</section>
  )
}

export default AboutSection
