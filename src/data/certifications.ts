
import linuxImg from "../assets/certificates/5-Day AI Agents Intensive Course with Google.png";
import gitImg from "../assets/certificates/5-Day AI Agents Intensive Course with Google.png";
import googleImg from "../assets/certificates/5-Day AI Agents Intensive Course with Google.png";


export type Certification = {
  title: string;
  issuer: string;
  image?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    image: linuxImg,
    url: "https://www.netacad.com/courses/linux-essentials",
  },
  {
    title: "Git Training",
    issuer: "Simplilearn",
    image: gitImg,
    url: "https://www.simplilearn.com/free-git-course-for-beginners-skillup",
  },
  {
    title: "5-Day AI Agents Intensive Course",
    issuer: "Google × Kaggle",
    image: googleImg,
    url: "https://www.kaggle.com/learn-guide/5-day-genai",
  },
];

