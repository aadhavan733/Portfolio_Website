import React from 'react';
import { Settings, BarChart2, TrendingUp, Table, LineChart, Database, Bot, Terminal, FileSpreadsheet } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: "AI Workflow Automation",
    description: "Integrating ChatGPT, n8n, and custom agents to create smart workflows that reply to emails, qualify leads, and manage CRMs.",
    icon: <Bot size={36} color="var(--accent)" />
  },
  {
    id: 2,
    title: "Data Analysis",
    description: "Deep diving into your historical data using Python and Pandas to uncover hidden trends, bottlenecks, and growth opportunities.",
    icon: <BarChart2 size={36} color="var(--accent)" />
  },
  {
    id: 3,
    title: "Power BI Dashboards",
    description: "Transform raw, unstructured data into beautiful, interactive dashboards that provide clear business insights and KPIs.",
    icon: <TrendingUp size={36} color="var(--accent)" />
  },
  {
    id: 4,
    title: "Python Automation",
    description: "Custom scripts designed to eliminate manual data entry, automate web scraping, and handle repetitive daily tasks instantly.",
    icon: <Terminal size={36} color="var(--accent)" />
  },
  {
    id: 5,
    title: "SQL Reporting",
    description: "Writing highly optimized SQL queries to extract, clean, and organize complex data sets from massive relational databases.",
    icon: <Database size={36} color="var(--accent)" />
  },
  {
    id: 6,
    title: "Google Sheets Automation",
    description: "Connecting APIs to Google Sheets to build live trackers, automated reporting, and lightweight CRMs for your team.",
    icon: <FileSpreadsheet size={36} color="var(--accent)" />
  }
];
