import React from 'react';
import { Bot, Keyboard, BarChart, FileJson } from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    title: "AI Job Alert System",
    description: "A fully autonomous cloud-based automation pipeline that scrapes remote job boards, filters for specific AI/Data roles, eliminates duplicates, and delivers formatted alerts directly to Telegram.",
    technologies: ["Python", "BeautifulSoup", "GitHub Actions", "Telegram API"],
    category: "Automation",
    status: "Completed",
    githubUrl: "https://github.com/aadhavan733/ai-job-alert-system",
    liveUrl: null,
    icon: <Bot size={32} color="var(--accent)" />
  },
  {
    id: 2,
    title: "Automation Typing Software",
    description: "A Python-based automation script engineered to simulate human-like typing for automated data entry and repetitive text tasks, reducing manual workload and increasing efficiency.",
    technologies: ["Python", "PyAutoGUI", "Automation"],
    category: "Automation",
    status: "Completed",
    githubUrl: null,
    liveUrl: null,
    icon: <Keyboard size={32} color="var(--accent)" />
  },
  {
    id: 3,
    title: "Executive Sales Dashboard",
    description: "An interactive Power BI dashboard extracting data from SQL databases to visualize key performance indicators, revenue growth, and regional sales distribution.",
    technologies: ["Power BI", "SQL Server", "DAX"],
    category: "Data Analytics",
    status: "In Progress",
    githubUrl: null,
    liveUrl: null,
    icon: <BarChart size={32} color="var(--accent)" />
  },
  {
    id: 4,
    title: "Automated Invoicing Pipeline",
    description: "A workflow built with n8n that reads new Stripe transactions, generates PDF invoices, and automatically emails them to clients.",
    technologies: ["n8n", "Stripe API", "Node.js"],
    category: "Automation",
    status: "In Progress",
    githubUrl: null,
    liveUrl: null,
    icon: <FileJson size={32} color="var(--accent)" />
  }
];
