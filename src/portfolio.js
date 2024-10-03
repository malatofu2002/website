import profileImage from './pages/imgs/profile.jpg';
import lancasterImage from './pages/imgs/lancaster.jpg';
import pateImage from './pages/imgs/pate.jpg';
import denmarkImage from './pages/imgs/denmark.png';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'ML.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Margaret Liu',
  role: 'psychology educator',
  description: 'Aspiring Educational Psychologist committed to shaping brighter futures through compassionate care and expert guidance, empowering every child to reach their fullest potential.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/margaret-liu234/'
  },
}

const social = {
  linkedin: 'https://www.linkedin.com/in/margaret-liu234/'
}

const profile = {
  image: profileImage,
  bio: [
    'I am a bilingual Psychology and Linguistics graduate working towards becoming an Educational Psychologist. With experience spanning across SEN/mainstream schools, tutoring, international summer camps, dementia care, and language training, this gives me a broad perspective on educational needs. Currently, I am working as a Children\'s Residential Care Practitioner at Witherslack Group, supporting children with complex needs and currently transitioning into a specialist teaching assistant for delivering tailored EHCP interventions for the children onsite. My roles in SEN schools have refined my skills in helping children with ASD, ADHD, trauma, and attachment issues.',
    'I am passionate about expanding my knowledge in child development and special educational needs, aiming to make a positive impact through evidence-based practices. As a native speaker in English and Mandarin, I bring a multicultural approach to my work, with the goal of contributing meaningfully to the field of educational psychology.'
  ],
};

const projects = [

  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'Child Development',
  'Educational Psychology',
  'Special Educational Needs (SEN)',
  'Behavioral Management',
  'Counseling Techniques',
  'Curriculum Development',
  'Assessment and Evaluation',
  'Classroom Management',
  'Inclusive Education',
  'Learning Theories',
  'Cognitive Psychology',
  'Research Methods',
  'Data Analysis',
  'Communication Skills',
  'Cultural Competence',
]

const contact = {
  email: 'margaret.liu234@gmail.com',
}

const experience = [
  {
    title: 'Children\'s Residential Care Practitioner',
    company: 'Witherslack Group',
    location: 'Oxfordshire',
    startDate: 'August 2024',
    endDate: 'Present',
    description: 'Supporting children with complex needs in a care home, focusing on emotional well-being and development. I collaborate with educational psychologists and social workers to create and implement care plans tailored to each child’s needs, deepening my expertise in child development and SEN.',
  },
  {
    title: 'Educational Support Worker (SEN)',
    company: 'Springfield SEN Secondary School',
    location: 'Witney',
    startDate: 'May 2024',
    endDate: 'July 2024',
    description: 'Supported students with autism, Down syndrome, and cerebral palsy in daily routines and learning. Implemented Individual Education Plans (IEPs) and helped students achieve AQA unit certificates, providing feedback to track progress.',
  },
  {
    title: 'Teaching Assistant (SEN)',
    company: 'Stepping Stones Behaviour-Based Primary School',
    location: 'Lancaster',
    startDate: 'October 2023',
    endDate: 'May 2024',
    description: 'Assisted with lesson delivery and pupil safety for children with ASD, ADHD, and trauma. Helped reintegrate students into mainstream education by adhering to Educational Health Care Plans (EHCPs) and managing challenging behaviours.',
  },
  {
    title: 'Student Support Leader/Manager',
    company: 'Oxford International',
    location: 'Winchester',
    startDate: 'June 30th, 2024',
    endDate: 'August 1st, 2024',
    description: 'Led support for 9-17-year-old international students in a 24/7 residential role. Coordinated with staff to ensure student welfare, resolved issues, and managed activities, providing a safe and engaging experience for all participants.',
  },
  {
    title: 'Chinese Mandarin and English Language Tutor',
    company: 'MyTutor and Self Employed',
    location: 'Remote',
    startDate: 'July 2015',
    endDate: 'Present',
    description: 'Provided Mandarin and English tutoring for GCSE, A-Level, and IELTS students. Tailored lessons to improve language skills and exam readiness, while also preparing students for university-level writing and critical thinking.',
  }
];

const societyExperience = [
  {
    title: 'LU Business Debate Team Captain',
    company: 'LU Business Debate Team',
    location: 'Lancaster University',
    startDate: 'August 2021',
    endDate: 'March 2024',
    description: 'Led the debate team, secured multiple Best Negotiator awards, and developed strategies for national competitions. I worked on fostering teamwork and collaboration, while ensuring that team members were well-prepared for negotiations and debates across various challenging scenarios.',
  },
  {
    title: 'LU Linguistics Academic Representative',
    company: 'LU Linguistics Department',
    location: 'Lancaster University',
    startDate: 'July 2021',
    endDate: 'July 2022',
    description: 'Represented student feedback at department meetings, ensuring that student concerns and suggestions were heard and addressed. I played a key role in promoting inclusivity within the linguistics program by actively collaborating with faculty members on curriculum development and student support initiatives.',
  },
  {
    title: 'LU Psychology Peer Mentor',
    company: 'LU Psychology Department',
    location: 'Lancaster University',
    startDate: 'July 2021',
    endDate: 'July 2022',
    description: 'Mentored first-year psychology students by offering support in areas such as time management, academic performance, and mental health. Through one-on-one and group sessions, I helped students adapt to university life and guided them in overcoming challenges during their academic journey.',
  },
  {
    title: 'LU Chinese Students & Scholars Association Ambassador',
    company: 'LU CSSA',
    location: 'Lancaster University',
    startDate: 'March 2021',
    endDate: 'August 2023',
    description: 'Managed partnerships with businesses based in the UK and China, organising various cultural and academic events. I also ensured the smooth operation of sponsorship agreements to support student activities, playing a key role in fostering strong relationships between the association and external partners.',
  },
  {
    title: 'LU ABACUS Founder & President',
    company: 'LU Association of British and Chinese Uni-Students',
    location: 'Lancaster University',
    startDate: 'March 2021',
    endDate: 'October 2022',
    description: 'Founded and expanded the society, successfully organising 30+ events designed to foster cultural understanding and collaboration between international and home students. Under my leadership, membership grew significantly, and I facilitated partnerships with local businesses and student organisations.',
  },
  {
    title: 'LU LAEL First-Year Liaison & President',
    company: 'LU Linguistics and English Language Society',
    location: 'Lancaster University',
    startDate: 'October 2020',
    endDate: 'November 2021',
    description: 'Led the society as president, focusing on promoting a welcoming and inclusive environment. I organised events, addressed student concerns, and ensured smooth operations to foster engagement. My efforts resulted in increased membership and more active participation from first-year students.',
  },
  {
    title: 'LU PSYCSOC Academic Officer',
    company: 'LU Psychology Society',
    location: 'Lancaster University',
    startDate: 'May 2021',
    endDate: 'July 2022',
    description: 'Organised academic talks, quizzes, and student advice sessions, coordinating events that promoted both academic engagement and peer interaction. These initiatives enhanced the society’s reputation and encouraged collaboration among students from various academic backgrounds.',
  },
  {
    title: 'LU DDSS Vice President',
    company: 'LU Defying Dementia Student Society',
    location: 'Lancaster University',
    startDate: 'June 2021',
    endDate: 'August 2022',
    description: 'Coordinated fundraising and awareness campaigns, such as readathons and quizzes, to raise awareness about dementia research and support programs. As Vice President, I played a leading role in organising events and ensuring they were successful in raising both funds and awareness.',
  }
];

const education = [
  {
    degree: 'Psychology & Linguistics \nBA Joint Honours',
    school: 'University of Lancaster',
    location: 'Lancaster, UK',
    startDate: 'October 2020',
    endDate: 'July 2023',
    description: (
      <>
        Uppser-Second Class. Member of multiple societies, including <a href="#society-experience" className="society-link">society work experience</a>.
      </>
    ),
    crestImage: lancasterImage,
  },
  {
    degree: 'Sixth-Form\nA-Levels',
    school: 'Pate\'s Grammar School',
    location: 'Cheltenham, UK',
    startDate: 'September 2018',
    endDate: 'July 2020',
    description: '4 A-Levels: Psychology, English Literature, Maths, Chinese Mandarin & Biology (AS-Level).',
    crestImage: pateImage,
  },
  {
    degree: 'Secondary School\nGCSEs',
    school: 'Denmark Road High School for Girls',
    location: 'Gloucester, UK',
    startDate: 'September 2013',
    endDate: 'July 2018',
    description: '13 GCSEs including Chinese, Sciences, Maths, English, History, Spanish and Design.',
    crestImage: denmarkImage,
  },
]

export { header, about, profile, projects, skills, contact, experience, societyExperience, education, social }
