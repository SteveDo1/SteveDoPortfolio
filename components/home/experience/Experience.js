import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "BlackBerry",
    position: "Junior Cyber Forensics Analyst Intern",
    time: "May 2023 - Aug 2023",
    location: "Waterloo, Canada",
    description:
      "I opened up laptops & desktops to retrieve their storage devices for investigations & cyber forensic analysis. Also migrated case data from MS Excel onto Omnigo for a better record management solution.",
    tech: [
      "OpenText Encase",
      "FTK Imager",
      "Magnet AXIOM",
      "Omnigo",
    ],
  },
  {
    title: "Royal Bank of Canada",
    position: "Automation Analyst Intern",
    time: "Jan 2022 - Jul 2022",
    location: "Toronto, Canada",
    description:
      "I developed custom SharePoint sites for internal & external stakeholders using ASP.NET. Also automated Tableau, SharePoint and Excel processes using VBA and Python.",
    tech: ["VBA", "Python", "SQL", "Java", "HTML/CSS", "JavaScript", "Tableau", "MS SharePoint", "MS Power Apps"],
  },
  {
    title: "RBC Investor & Treasury Services",
    position: "Automation Developer Intern",
    time: "Sep 2021 - Dec 2021",
    location: "Toronto, Canada",
    description:
      "I automated Tableau processes by creating a script using Python and PowerShell to retrieve data. Also created a Splunk dashboard for monitoring applications and ServiceNow tickets.",
    tech: [
      "Python",
      "VBA",
      "Ansible",
      "Splunk",
      "Moogsoft",
      "Linux",
      "Git",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Royal Bank of Canada",
    position: "Automation Analyst Intern",
    time: "May 2021 - Sep 2021",
    location: "Toronto, Canada",
    description:
      "Developed a SharePoint site for Quarterly Third-Party Risk Performance Monitoring surveys that tracks data through a Tableau dashboard. I also automated supplier risk reporting processes by using VBA.",
    tech: ["ASP.NET", "HTML/CSS", "VBA", "JavaScript", "jQuery", "Python", "MS SharePoint", "Tableau"],
  },
];
