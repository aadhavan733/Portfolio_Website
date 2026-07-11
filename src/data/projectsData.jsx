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
    icon: <Bot size={32} color="var(--accent)" />,
    detailedReport: {
      problem: "Finding relevant remote AI and Data roles requires manually checking dozens of job boards daily, which is time-consuming and prone to missing early applications.",
      solution: "I architected an autonomous Python pipeline using BeautifulSoup to scrape multiple job boards. The script filters for specific keywords, eliminates duplicate postings using a local SQLite cache, and leverages the Telegram API to push formatted real-time alerts to my phone.",
      results: "The system runs daily via GitHub Actions, tracking over 500 job postings per week and successfully delivering highly curated, relevant job alerts with a 0% duplicate rate."
    }
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
    icon: <Keyboard size={32} color="var(--accent)" />,
    detailedReport: {
      problem: "Repetitive manual data entry and testing processes were causing massive bottlenecks and exposing workflows to human error.",
      solution: "I developed a highly customizable automation tool using PyAutoGUI. The software goes beyond simple copy-pasting by simulating natural human typing patterns, including variable keystroke delays and randomized pauses, to bypass basic bot-detection mechanisms.",
      results: "Reduced manual data entry time by 80% for specific testing scenarios and eliminated typographic errors entirely during large-scale text migrations."
    }
  },
  {
    id: 3,
    title: 'Executive Sales Dashboard',
    description: 'An interactive Power BI dashboard extracting data from SQL databases to visualize key performance indicators, revenue growth, and regional sales distribution.',
    status: 'Completed',
    category: 'Data Analytics',
    technologies: ['Power BI', 'SQL Server', 'DAX', 'Python'],
    githubUrl: 'https://github.com/aadhavan733/executive-sales-dashboard',
    liveUrl: null,
    image: '/dashboard.png',
    icon: <BarChart size={32} color="var(--accent)" />,
    detailedReport: {
      problem: "Stakeholders lacked a centralized, intuitive way to view high-level sales metrics, regional profitability, and product performance trends, leading to delayed decision-making.",
      solution: "I engineered an end-to-end analytics solution. First, I used a Python script to generate and manage robust datasets (`dim_customers`, `dim_products`, `fact_sales`). Then, I built a relational data model in Power BI and wrote complex DAX measures (Total Revenue, Profit Margin) to power the visuals.",
      results: "Delivered a premium, dark-themed interactive dashboard featuring dynamic KPI cards, temporal revenue tracking, and drill-down matrices that empowered executives to immediately identify the top 5 most profitable regions and products."
    }
  },
  {
    id: 4,
    title: "Automated Invoicing Pipeline",
    description: "A workflow built with n8n that reads new Stripe transactions, generates PDF invoices, and automatically emails them to clients.",
    technologies: ["n8n", "Stripe API", "Node.js"],
    category: "Automation",
    status: "Completed",
    githubUrl: "https://github.com/aadhavan733/automated-invoicing-pipeline",
    liveUrl: null,
    icon: <FileJson size={32} color="var(--accent)" />,
    detailedReport: {
      problem: "Manually generating and emailing PDF invoices for every successful Stripe transaction is extremely tedious and prone to delays or human error.",
      solution: "I designed a decoupled backend automation system. An n8n workflow listens for Stripe webhook events and extracts the billing details. It then triggers a custom Node.js/Express microservice I built which utilizes pdfkit to dynamically draw a professional invoice and nodemailer to instantly dispatch it to the client.",
      results: "The system fully automates the invoicing lifecycle, reducing manual billing time to absolute zero and ensuring customers receive their receipts immediately upon purchase."
    }
  }
];
