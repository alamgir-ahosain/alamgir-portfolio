
import linuxImg from "../assets/certificates/linux_essentials.png";
import gitImg from "../assets/certificates/git_training.png";
import googleImg from "../assets/certificates/5-day_ai_agents_intensive_course_with_google.png";
import luhackathonImg from "../assets/certificates/leading_university_hackathon_2026.png"
import claudecodeinactionImg from "../assets/certificates/claude_code_in_action.png"
import promtengforeveryoneImg from "../assets/certificates/promt_engineering_for_everyone.png"


export type Certification = {
  title: string;
  issuer: string;
  image?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: "HACKFUSION 2026",
    issuer: "IEEE Computer Society LU SB Chapter",
    image: luhackathonImg,
    // url: "https://www.kaggle.com/learn-guide/5-day-genai",
  },
  {
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    image: linuxImg,
    url: "https://www.credly.com/badges/842aaca9-433f-4c6a-a6c7-766a4357b9bd/public_url",
  },
  {
    title: "Claude Code in Action",
    issuer: "Cognitive Class",
    image: claudecodeinactionImg,
    url: "https://verify.skilljar.com/c/2jb3d426u24p",
  },

  {
    title: "5-Day AI Agents Intensive Course",
    issuer: "Google × Kaggle",
    image: googleImg,
    url: "https://www.kaggle.com/certification/badges/zvbbgdhddhdgsg/105",
  },

  {
    title: "Prompt Engineering for Everyone",
    issuer: "Cognitive Class",
    image: promtengforeveryoneImg,
    url: "https://courses.cognitiveclass.ai/certificates/179a81a2c14c45b89ca85e61eb370187",
  },
  {
    title: "Git Training",
    issuer: "Simplilearn",
    image: gitImg,
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI3NTgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC85NjY1OTg4Xzk5Mjg4MDNfMTc2NzI0ODM1Njk5MC5wbmciLCJ1c2VybmFtZSI6IkFsYW1naXIgSG9zYWluIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F2823%2FGIT%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1596479335090017633&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz0kLCk2qqkquikqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGNDSWFBAAAA",
  },
];

