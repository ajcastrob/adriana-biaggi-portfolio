import { Project, SocialLink } from './types';

export const SITE_TITLE = "ADRIANA BIAGGI";
export const ROLE_TITLE = "Pianist & Music Educator";

export const ABOUT_TEXT = `
Adriana Biaggi is a Venezuelan pianist and dedicated music educator, recognized for her exceptional talent and artistic sensitivity. She began her musical journey at age 4 through El Sistema (Venezuela's National System of Youth and Children's Orchestras and Choirs).
Her formative years included studies at the José Reyna Music Conservatory with Professor Marisabel Sánchez, and later with renowned Russian pianist Igor Lavrov at Simón Bolívar University. After earning a full scholarship to the United States, she completed her Master's Degree in Collaborative Piano at Louisiana State University under Dr. Ana Maria Otamendi.
Throughout her career, Adriana has distinguished herself in numerous competitions, including First Prize at the VII Angel Sauce National Venezuelan Piano Competition at age 12, and most notably, winning the Concerto Competition at the University of South Florida, which led to a performance with the USF Symphony Orchestra.
In addition to her performance career, Adriana holds a BA in Translation (Spanish-English-French) from the Central University of Venezuela. She currently teaches at Piano Pathways and Yee Piano Studio in Baton Rouge, Louisiana, where she continues to inspire the next generation of pianists.
`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "USF Concerto Competition Winner",
    category: "Competition Performance",
    year: "2022",
    description: "First place winner at the University of South Florida Concerto Competition. Performance with the USF Symphony Orchestra in Tampa, featuring a challenging piano concerto.",
    imageUrl: "https://static.wixstatic.com/media/159480_5b540b1f533540058a66a01b2cd1a695~mv2.jpg/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/159480_5b540b1f533540058a66a01b2cd1a695~mv2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TyTQ2KXWmJo"
  },
  {
    id: '2',
    title: "Master's Degree Recital - LSU",
    category: "Academic Performance",
    year: "2023",
    description: "Graduation recital at Louisiana State University under Dr. Ana Maria Otamendi. Interpretation of masterpieces from various periods including classical and romantic repertoire.",
    imageUrl: "https://static.wixstatic.com/media/159480_ab3db14c117b480abe3ed147442db114~mv2.jpg/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/159480_ab3db14c117b480abe3ed147442db114~mv2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=njxB_Nt_lvY"
  },
  {
    id: '3',
    title: "Venezuelan National Competition",
    category: "Competition",
    year: "2014",
    description: "First Prize winner at Level II in the VII Angel Sauce National Venezuelan Piano Competition in Caracas at age 12. Early recognition of exceptional talent.",
    imageUrl: "https://static.wixstatic.com/media/159480_486ae79cdf194f3db8a36c8e36bc5d28~mv2.jpg/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/159480_486ae79cdf194f3db8a36c8e36bc5d28~mv2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=PnyzItNnY6I"
  },
  {
    id: '4',
    title: "Collaborative Piano Works",
    category: "Chamber Music",
    year: "2020-2023",
    description: "Extensive work as collaborative pianist with the Orchestral Conducting Studio at Simón Bolívar University and Cantamérica Voice Studio in Caracas.",
    imageUrl: "https://static.wixstatic.com/media/159480_8d820bdc6eb449b69a35b5c31a99666e~mv2.jpg/v1/fill/w_777,h_777,fp_0.48_0.16,q_90,enc_avif,quality_auto/159480_8d820bdc6eb449b69a35b5c31a99666e~mv2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=bk5JOgrjINc"
  },
  {
    id: '5',
    title: "Latin American Repertoire",
    category: "Solo Performance",
    year: "2021",
    description: "Third Prize at III Latin American Piano Competition 'American Union Project'. Exploration of Venezuelan and Latin American composers, celebrating regional musical heritage.",
    imageUrl: "https://static.wixstatic.com/media/159480_2f0e95d8159b42498b2e2a8fba1dd055~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/159480_2f0e95d8159b42498b2e2a8fba1dd055~mv2.png",
    videoUrl: "https://www.youtube.com/watch?v=5ZQVuR3bTjE"
  },
  {
    id: '6',
    title: "Teaching & Pedagogy",
    category: "Education",
    year: "Present",
    description: "Currently teaching at Piano Pathways and Yee Piano Studio in Baton Rouge, Louisiana. Previously taught at José Reyna Conservatory and Emil Friedman School of Music in Venezuela.",
    imageUrl: "https://static.wixstatic.com/media/159480_322a146ed34d4bbf8713379acda12a5b~mv2.png/v1/fit/w_960,h_960,q_90,enc_avif,quality_auto/159480_322a146ed34d4bbf8713379acda12a5b~mv2.png",
    videoUrl: "https://www.youtube.com/watch?v=ihDre7covJg"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", url: "https://www.instagram.com/adrianabiaggi/", icon: "Instagram" },
  { platform: "LinkedIn", url: "#", icon: "Linkedin" },
  { platform: "YouTube", url: "https://www.youtube.com/@adrianabiaggi8166", icon: "Youtube" },
];

export const CONTACT_EMAIL = "adriana_biaggi17@hotmail.com";