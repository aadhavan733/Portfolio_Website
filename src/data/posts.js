export const posts = [
  {
    id: 'ai-job-alert-system',
    title: 'How I Built an AI Job Alert System',
    date: 'June 19, 2026',
    summary: 'A deep dive into automating my job search using Python, GitHub Actions, and Telegram.',
    content: `
# Automating My Job Search

Searching for jobs is tedious. I wanted a system that would scrape remote job boards, filter out roles I didn't want, and send me an alert on Telegram only when a *new*, relevant job was posted.

## The Architecture
1. **Python Script:** Uses \`BeautifulSoup\` to parse RSS feeds.
2. **Filtering:** Checks titles against keywords like "Data Analyst" or "Python".
3. **State Management:** Saves seen jobs to a CSV so I never get duplicate alerts.
4. **Cloud Automation:** Runs every day via **GitHub Actions** completely for free.

By automating this, I save 5 hours a week and am always the first to apply!
    `
  },
  {
    id: 'sql-tips-for-beginners',
    title: 'SQL Tips for Beginners: Beyond SELECT *',
    date: 'June 15, 2026',
    summary: 'Stop writing slow queries. Here are the 3 SQL techniques every Data Analyst needs to know.',
    content: `
# SQL Beyond the Basics

Writing \`SELECT * FROM users\` is easy. Writing a query that processes 10 million rows in 3 seconds is hard.

## 1. Use CTEs (Common Table Expressions)
Instead of messy nested subqueries, use \`WITH\` clauses to make your code readable and modular.

## 2. Window Functions
\`ROW_NUMBER()\`, \`RANK()\`, and \`LEAD()\` are your best friends for time-series data.

## 3. Indexes
Always understand how the underlying database is indexed before running a \`JOIN\` on massive tables.
    `
  },
  {
    id: 'power-bi-dashboard-guide',
    title: 'Power BI Dashboard Guide: From Raw Data to KPIs',
    date: 'June 10, 2026',
    summary: 'How to build interactive dashboards that executives actually want to look at.',
    content: `
# Building Better Dashboards

A dashboard is only as good as the decisions it drives.

## Focus on the KPIs
Don't clutter the screen with 15 pie charts. Pick the 3 most important metrics (e.g., Revenue, Churn, CAC) and put them at the top.

## Clean Your Data with Power Query
Never transform data in DAX if you can do it in Power Query. It's much faster and easier to maintain.
    `
  },
  {
    id: 'free-ai-automation-tools',
    title: 'Free AI Automation Tools You Need to Try',
    date: 'June 05, 2026',
    summary: 'You don\'t need a $5,000/month enterprise software budget to automate your business.',
    content: `
# Democratizing Automation

Automation is no longer just for big tech companies.

## 1. n8n
An amazing, free alternative to Zapier. It has a slight learning curve but offers infinite flexibility.

## 2. GitHub Actions
You can run Python scripts in the cloud on a schedule for exactly $0.00.

## 3. Telegram API
The easiest way to get push notifications to your phone without building a mobile app.
    `
  }
];
