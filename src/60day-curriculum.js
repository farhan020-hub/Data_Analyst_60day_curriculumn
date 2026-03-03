
import { useState } from "react";

const curriculum = {
  phases: [
    {
      id: 1,
      name: "SQL Mastery",
      color: "#E85D3A",
      days: "1–14",
      tagline: "The skill that filters candidates instantly",
      weeks: [
        {
          week: 1,
          title: "Advanced SQL — Query Power",
          days: [
            {
              day: 1,
              focus: "Window Functions I",
              hours: [
                { label: "Theory", time: "1h", detail: "ROW_NUMBER, RANK, DENSE_RANK — understand partitioning vs ordering. Study mode.analytics.com Window Functions guide." },
                { label: "Practice", time: "2h", detail: "pgexercises.com: complete all 'Aggregates' section. Write at least 15 queries using window functions on real datasets." },
                { label: "Project Apply", time: "1h", detail: "Download KNBS county population data (CSV). Load into PostgreSQL locally. Use ROW_NUMBER to rank counties by population density." },
              ]
            },
            {
              day: 2,
              focus: "Window Functions II",
              hours: [
                { label: "Theory", time: "1h", detail: "LAG, LEAD, FIRST_VALUE, LAST_VALUE, NTILE. Critical for time-series analysis in business data. Use Mode Analytics tutorial." },
                { label: "Practice", time: "2h", detail: "Write queries comparing month-over-month sales changes using LAG. Use the public 'northwind' database. Solve 10 pgexercises recursive problems." },
                { label: "Project Apply", time: "1h", detail: "On your KNBS data: use LAG to calculate year-over-year population change per county. Export result as CSV." },
              ]
            },
            {
              day: 3,
              focus: "CTEs & Subqueries",
              hours: [
                { label: "Theory", time: "1h", detail: "WITH clauses, recursive CTEs, correlated vs uncorrelated subqueries. When to use each. Read: 'Modern SQL' by Markus Winand (modern-sql.com)." },
                { label: "Practice", time: "2h", detail: "Rewrite 5 of yesterday's complex queries using CTEs. Compare readability. SQLZoo: complete 'SELECT within SELECT' tutorial fully." },
                { label: "Project Apply", time: "1h", detail: "Build a multi-step CTE query that: (1) calculates avg salary by county, (2) identifies counties above national average, (3) ranks them. Use public Kenya wage data." },
              ]
            },
            {
              day: 4,
              focus: "JOINs — Advanced Patterns",
              hours: [
                { label: "Theory", time: "1h", detail: "SELF JOINs, CROSS JOINs, anti-joins (LEFT JOIN WHERE NULL). These appear in almost every technical interview. Also: JOIN performance — when indexes matter." },
                { label: "Practice", time: "2h", detail: "HackerRank SQL (Hard level): complete 5 problems. Focus on problems requiring multiple JOINs. Time yourself — target under 15 minutes per problem." },
                { label: "Project Apply", time: "1h", detail: "Using Northwind DB: build a query finding customers who NEVER placed an order (anti-join). Then find customers whose order value is above their own historical average." },
              ]
            },
            {
              day: 5,
              focus: "Aggregations & Grouping",
              hours: [
                { label: "Theory", time: "1h", detail: "GROUPING SETS, ROLLUP, CUBE — these are advanced GROUP BY extensions almost no junior analyst knows. Instant differentiation. Read modern-sql.com section on these." },
                { label: "Practice", time: "2h", detail: "Build a sales report using ROLLUP that shows: product-level totals, category-level totals, and grand total in one query. Use Northwind. Then replicate with CUBE." },
                { label: "Project Apply", time: "1h", detail: "Apply ROLLUP to your KNBS county data to produce a hierarchical regional summary. This is the type of query you'll be asked to write in interviews." },
              ]
            },
            {
              day: 6,
              focus: "Performance & Query Optimization",
              hours: [
                { label: "Theory", time: "1h", detail: "EXPLAIN ANALYZE in PostgreSQL. Index types (B-tree, Hash, partial). Understanding query plans. Read: 'Use The Index, Luke' (use-the-index-luke.com) — free book." },
                { label: "Practice", time: "2h", detail: "Take 3 slow queries you've written this week. Run EXPLAIN ANALYZE. Add indexes. Measure improvement. Document your findings in a markdown file." },
                { label: "Project Apply", time: "1h", detail: "Create a summary doc: '5 SQL performance lessons I learned this week.' This becomes blog/LinkedIn content AND interview talking points." },
              ]
            },
            {
              day: 7,
              focus: "Week 1 Review & Mini Project",
              hours: [
                { label: "Review", time: "1h", detail: "Redo 3 problems from the week that you found hardest, from scratch, without looking at your notes. Identify gaps." },
                { label: "Build", time: "2h", detail: "Build a complete SQL analysis: Load a Kaggle dataset (Kenya superstore sales or similar). Write 10 analytical queries covering: window functions, CTEs, anti-joins, ROLLUP." },
                { label: "Document", time: "1h", detail: "Write a proper README for this analysis. Push everything to GitHub. This is Day 1 of your public portfolio." },
              ]
            },
          ]
        },
        {
          week: 2,
          title: "SQL for Analytics — Real Business Problems",
          days: [
            {
              day: 8,
              focus: "Cohort Analysis",
              hours: [
                { label: "Theory", time: "1h", detail: "Cohort analysis is one of the most requested skills in analyst job descriptions. Understand: acquisition cohorts, retention cohorts, revenue cohorts. towardsdatascience.com has solid guides." },
                { label: "Practice", time: "2h", detail: "Build a customer retention cohort table from scratch in SQL. Use: first purchase date to define cohort, then track monthly retention. Use any e-commerce dataset from Kaggle." },
                { label: "Project Apply", time: "1h", detail: "Add this cohort query to your GitHub project. Write 3 sentences explaining what business decision this cohort analysis enables. Think like an analyst, not a coder." },
              ]
            },
            {
              day: 9,
              focus: "Funnel Analysis",
              hours: [
                { label: "Theory", time: "1h", detail: "Conversion funnels in SQL: tracking users through stages (visit → signup → purchase). Critical for product/e-commerce analyst roles. Study Amplitude's free analytics academy." },
                { label: "Practice", time: "2h", detail: "Build a 4-stage funnel query showing drop-off at each stage. Calculate conversion rates between stages. Use a web analytics dataset from Kaggle (Google Analytics sample data)." },
                { label: "Project Apply", time: "1h", detail: "Visualize this funnel in Excel or Google Sheets (you'll replace with Power BI in Phase 2). Screenshot it. Add to GitHub." },
              ]
            },
            {
              day: 10,
              focus: "RFM Segmentation",
              hours: [
                { label: "Theory", time: "1h", detail: "Recency, Frequency, Monetary segmentation — standard in retail/FMCG analytics. Every Kenyan FMCG company (Unilever, BAT, Bidco) uses this. Learn the scoring methodology." },
                { label: "Practice", time: "2h", detail: "Build complete RFM scoring in SQL: calculate R/F/M scores (1-5), assign customer segments (Champions, At-Risk, Lost, etc.). Use Northwind or a Kaggle retail dataset." },
                { label: "Project Apply", time: "1h", detail: "This is portfolio project #1 material. Document the business question: 'Which customers should sales prioritize for Q4 outreach?' Package query + findings." },
              ]
            },
            {
              day: 11,
              focus: "Time Series in SQL",
              hours: [
                { label: "Theory", time: "1h", detail: "Date functions across PostgreSQL/MySQL. Moving averages, rolling windows, period-over-period comparisons. Gap-filling (generating date series for missing periods)." },
                { label: "Practice", time: "2h", detail: "Build a 7-day rolling average of sales. Build a date spine (complete calendar table) and JOIN it to your sales data to expose gaps. This is advanced and rarely done by juniors." },
                { label: "Project Apply", time: "1h", detail: "Apply to Kenya-specific data: CBK monthly interest rate history. Calculate 3-month and 6-month rolling averages. What story does the data tell?" },
              ]
            },
            {
              day: 12,
              focus: "Data Quality & Profiling SQL",
              hours: [
                { label: "Theory", time: "1h", detail: "Null detection, duplicate detection, referential integrity checks, distribution analysis — all in SQL. This is what senior analysts actually do before any analysis." },
                { label: "Practice", time: "2h", detail: "Write a 'data profiling' SQL script: for any table, output row count, null % per column, duplicate row count, min/max/avg for numeric columns, distinct count for categoricals." },
                { label: "Project Apply", time: "1h", detail: "Run your profiling script on 2 of your existing datasets. Document findings. This becomes a reusable tool you'll use throughout your career." },
              ]
            },
            {
              day: 13,
              focus: "Interview Prep — SQL",
              hours: [
                { label: "Mock Interview", time: "1.5h", detail: "LeetCode SQL: solve 5 Medium problems timed (15 min each). Stratascratch.com: solve 3 company-specific SQL problems (filter by 'Kenya' or pick Safaricom-style telecom problems)." },
                { label: "Weak Point Drill", time: "1.5h", detail: "Identify your 2 weakest SQL areas from this week. Drill them specifically. Write the 5 most important queries you'd want to have memorized for an interview." },
                { label: "Document", time: "1h", detail: "Write a cheat sheet: '20 SQL patterns every analyst needs.' Put it on GitHub as a gist. Share it on LinkedIn. First piece of content that builds your brand." },
              ]
            },
            {
              day: 14,
              focus: "Week 2 Review & SQL Project Complete",
              hours: [
                { label: "Polish", time: "1h", detail: "Review all queries written this week. Refactor for readability: proper formatting, comments, meaningful aliases. Your code is part of your portfolio." },
                { label: "Build", time: "2h", detail: "Complete your SQL Portfolio Project: combine RFM + cohort + funnel + time series on one dataset. Write a 500-word analysis document explaining the business insights." },
                { label: "Publish", time: "1h", detail: "Push to GitHub with a complete README. Write a LinkedIn post: 'I analyzed [X dataset] and found [surprising insight]. Here's the SQL approach I used.' Include a screenshot." },
              ]
            },
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Python for Analysis",
      color: "#3A7BD5",
      days: "15–28",
      tagline: "Automate everything, analyze anything",
      weeks: [
        {
          week: 3,
          title: "Pandas & Data Wrangling — Professional Level",
          days: [
            {
              day: 15,
              focus: "Pandas Core — Beyond the Basics",
              hours: [
                { label: "Theory", time: "1h", detail: "Method chaining, .pipe(), .assign(), .query() — writing readable, professional Pandas code. Read: 'Effective Pandas' by Matt Harrison (free sample on GitHub). This is how senior analysts write code." },
                { label: "Practice", time: "2h", detail: "Take any messy CSV from Kaggle. Clean it using ONLY method chaining — no intermediate variables. Goal: one clean pipeline from raw to analysis-ready." },
                { label: "Project Apply", time: "1h", detail: "Rewrite any previous analysis you did naively. Compare before/after. The after version goes in your portfolio. Document why method chaining matters for maintainability." },
              ]
            },
            {
              day: 16,
              focus: "Data Cleaning — The Real Work",
              hours: [
                { label: "Theory", time: "1h", detail: "80% of analyst work is cleaning. Master: regex in pandas (str.extract, str.contains), handling mixed-type columns, outlier detection, fuzzy string matching with fuzzywuzzy." },
                { label: "Practice", time: "2h", detail: "Download a genuinely messy dataset (try: Kenya county health data from KHIS, or any government open data portal). Clean it end-to-end. Document every decision you make and why." },
                { label: "Project Apply", time: "1h", detail: "Build a reusable cleaning function library: functions for detecting outliers, standardizing names, validating dates, detecting duplicates. This becomes a tool you use in every future project." },
              ]
            },
            {
              day: 17,
              focus: "GroupBy & Aggregation Mastery",
              hours: [
                { label: "Theory", time: "1h", detail: "GroupBy internals, .agg() with multiple functions, .transform() vs .apply() vs .agg() — when each is appropriate. Named aggregations. MultiIndex handling." },
                { label: "Practice", time: "2h", detail: "Replicate your SQL cohort analysis from Day 8 entirely in Pandas. Compare the approaches. Then build a pivot_table analysis of the same data. Understand when SQL vs Python is appropriate." },
                { label: "Project Apply", time: "1h", detail: "Add a Python notebook to your GitHub SQL project. Show the same analysis in both SQL and Python. This demonstrates tool flexibility — a real differentiator." },
              ]
            },
            {
              day: 18,
              focus: "Visualization — Telling Stories with Data",
              hours: [
                { label: "Theory", time: "1h", detail: "Matplotlib architecture (Figure, Axes, Artists). Seaborn for statistical plots. Plotly for interactive charts. The key skill: choosing the RIGHT chart for the question, not just making it look pretty." },
                { label: "Practice", time: "2h", detail: "Build 8 publication-quality charts: distribution (hist+KDE), correlation (heatmap), time series (line with confidence interval), comparison (grouped bar), composition (stacked area), relationship (scatter with regression). Each chart must tell a specific story." },
                { label: "Project Apply", time: "1h", detail: "Apply your visualization skills to Kenya-specific data. Make charts that would appear in a business report. Export as high-res PNG. These go in your portfolio." },
              ]
            },
            {
              day: 19,
              focus: "EDA Framework — Systematic Approach",
              hours: [
                { label: "Theory", time: "1h", detail: "Build a systematic EDA framework: (1) understand shape/types, (2) missing data analysis, (3) distributions, (4) correlations, (5) outliers, (6) time patterns, (7) categorical breakdowns. Read: Kaggle's EDA guide by Rachael Tatman." },
                { label: "Practice", time: "2h", detail: "Apply your full EDA framework to a new dataset you've never seen before. Time yourself. Target: complete, meaningful EDA in under 90 minutes. This is what you'll do in analyst take-home tests." },
                { label: "Project Apply", time: "1h", detail: "Write an EDA template notebook: a skeleton with all standard EDA steps as commented cells. Publish on GitHub. This is a resource other analysts will star — building your visibility." },
              ]
            },
            {
              day: 20,
              focus: "Python + SQL Integration",
              hours: [
                { label: "Theory", time: "1h", detail: "SQLAlchemy, psycopg2, pandas read_sql(). Connecting Python to PostgreSQL. Best practice: when to query in SQL vs load into Python. Building analysis pipelines." },
                { label: "Practice", time: "2h", detail: "Build a pipeline: pull data from PostgreSQL using Python, clean in Pandas, analyze, output to Excel using openpyxl. This end-to-end pipeline is what real analyst jobs require." },
                { label: "Project Apply", time: "1h", detail: "Automate your RFM analysis: one Python script that pulls from DB, calculates RFM scores, and outputs a formatted Excel report. Schedule it with a cron job (or just show it can be scheduled). This is automation that employers pay for." },
              ]
            },
            {
              day: 21,
              focus: "Week 3 Review & Python Project",
              hours: [
                { label: "Review", time: "1h", detail: "Identify the 3 Pandas operations you're still slow at. Drill them with focused practice. Read the Pandas documentation for those specific methods — the docs have great examples." },
                { label: "Build", time: "2h", detail: "Complete Portfolio Project #2: full Python analysis on Kenyan data. Should include: data cleaning pipeline, EDA, 5 business insights, publication-quality visualizations, clear narrative." },
                { label: "Publish", time: "1h", detail: "Push Jupyter notebook to GitHub. Write a Medium article summarizing your findings (500 words + charts). Share on LinkedIn. This is your first published data article." },
              ]
            },
          ]
        },
        {
          week: 4,
          title: "Python — Statistical Analysis & Automation",
          days: [
            {
              day: 22,
              focus: "Statistical Analysis for Analysts",
              hours: [
                { label: "Theory", time: "1h", detail: "Descriptive stats beyond mean/median: skewness, kurtosis, percentiles. Correlation analysis (Pearson, Spearman, when each applies). Hypothesis testing basics (t-test, chi-square) — you'll be asked these in interviews." },
                { label: "Practice", time: "2h", detail: "Use scipy.stats: run a t-test comparing two groups in your dataset. Run chi-square on categorical data. Calculate and interpret correlation matrix. Write interpretations in plain English — this is the analyst skill." },
                { label: "Project Apply", time: "1h", detail: "Add statistical validation to your portfolio project. Any claim you make ('Region A performs better') should now be statistically supported, not just visually apparent." },
              ]
            },
            {
              day: 23,
              focus: "Excel Automation with Python",
              hours: [
                { label: "Theory", time: "1h", detail: "openpyxl and xlsxwriter: programmatic Excel creation. Formatting, formulas, charts, multiple sheets, conditional formatting — all from Python. This skill alone is worth a job." },
                { label: "Practice", time: "2h", detail: "Build a Python script that generates a formatted Excel report: cover sheet with summary stats, data sheet, 3 charts, conditional formatting highlighting top/bottom performers. It should look like something a senior analyst manually built." },
                { label: "Project Apply", time: "1h", detail: "Automate the KenMeat-style sales report you built earlier. The script takes raw CSV in, outputs formatted Excel out. This is a concrete portfolio piece employers immediately understand." },
              ]
            },
            {
              day: 24,
              focus: "Web Scraping for Data Collection",
              hours: [
                { label: "Theory", time: "1h", detail: "requests + BeautifulSoup for static sites. When to use APIs vs scraping. Robots.txt, rate limiting, ethical scraping. This expands what data you can analyze — and what portfolio projects you can build." },
                { label: "Practice", time: "2h", detail: "Scrape a public Kenyan data source: NAIROBI SECURITIES EXCHANGE listed companies, or county government tenders page, or job listings from BrighterMonday. Clean and analyze the scraped data." },
                { label: "Project Apply", time: "1h", detail: "This scraped dataset becomes the basis for a unique portfolio project. Nobody else has this exact data. Document your collection methodology clearly — data provenance matters." },
              ]
            },
            {
              day: 25,
              focus: "API Integration",
              hours: [
                { label: "Theory", time: "1h", detail: "REST APIs: requests library, authentication (API keys, OAuth basics), pagination, error handling. JSON parsing into DataFrames. This is how you access real-world data sources." },
                { label: "Practice", time: "2h", detail: "Pull data from World Bank API (free, covers Kenya extensively): GDP, inflation, education indicators. Build a multi-indicator analysis comparing Kenya to regional peers (Ethiopia, Tanzania, Uganda)." },
                { label: "Project Apply", time: "1h", detail: "This World Bank analysis is Portfolio Project #3 candidate. Regional economic comparison with clean visualizations is highly shareable content and demonstrates independent data collection." },
              ]
            },
            {
              day: 26,
              focus: "Reproducibility & Professional Code",
              hours: [
                { label: "Theory", time: "1h", detail: "Virtual environments (venv/conda), requirements.txt, .gitignore, project structure best practices. Writing docstrings. Code that others (or future you) can run. This separates professionals from hobbyists." },
                { label: "Practice", time: "2h", detail: "Take your messiest existing project. Refactor it: proper folder structure (data/, notebooks/, src/, outputs/), requirements.txt, README with setup instructions, docstrings on all functions. Make it reproducible." },
                { label: "Project Apply", time: "1h", detail: "Apply this structure to ALL your GitHub projects. Consistency signals professionalism. A recruiter who can clone your repo and run it in 5 minutes is a recruiter who remembers you." },
              ]
            },
            {
              day: 27,
              focus: "Python Interview Prep",
              hours: [
                { label: "Mock Test", time: "2h", detail: "Complete a timed take-home test simulation: find a sample analyst assessment on GitHub or use StrataScratch's Python challenges. Set a 2-hour timer. Treat it like the real thing." },
                { label: "Review", time: "1h", detail: "Review your solution critically: Is the code readable? Are insights clearly communicated? Is the output professional? Fix what you'd be embarrassed to submit." },
                { label: "Prep", time: "1h", detail: "Write answers to these questions: (1) How do you handle missing data? (2) What's your EDA process? (3) How would you automate a recurring report? These are standard interview questions." },
              ]
            },
            {
              day: 28,
              focus: "Python Phase Completion",
              hours: [
                { label: "Audit", time: "1h", detail: "Review all Python code you've written. Fix: inconsistent style, missing docstrings, hardcoded paths. Your GitHub is your portfolio — it should look deliberate." },
                { label: "Build", time: "2h", detail: "If Portfolio Project #3 isn't complete, finish it now. Every project needs: clear README, reproducible code, documented insights, professional visualizations." },
                { label: "Publish", time: "1h", detail: "LinkedIn post: 'Python skill I wish I learned earlier: [specific technique]. Here's how I applied it to [Kenya-specific analysis].' Attach a chart. Specific = more engagement than generic." },
              ]
            },
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Power BI Mastery",
      color: "#27AE60",
      days: "29–45",
      tagline: "The tool that gets you hired in East Africa",
      weeks: [
        {
          week: 5,
          title: "DAX — The Skill Most Power BI Users Skip",
          days: [
            {
              day: 29,
              focus: "DAX Fundamentals — Calculated Columns vs Measures",
              hours: [
                { label: "Theory", time: "1h", detail: "The most important concept in Power BI: the difference between calculated columns and measures, and why it matters for performance and correctness. SQLBI.com (free) is the best DAX resource in existence. Read their 'Introduction to DAX' article." },
                { label: "Practice", time: "2h", detail: "Build a sales model in Power BI Desktop (free). Create 10 measures: SUMX, AVERAGEX, COUNTROWS, DISTINCTCOUNT. Compare measure vs calculated column performance in the data model." },
                { label: "Project Apply", time: "1h", detail: "Download your KenMeat sales data. Import into Power BI. Create the data model from scratch. Build 5 core business measures. No visuals yet — the model is the foundation." },
              ]
            },
            {
              day: 30,
              focus: "DAX Time Intelligence",
              hours: [
                { label: "Theory", time: "1h", detail: "DATEADD, SAMEPERIODLASTYEAR, DATESYTD, TOTALYTD, MTD, QTD. Time intelligence is what separates basic Power BI users from analysts. Requires a proper Date Table — learn to build one correctly." },
                { label: "Practice", time: "2h", detail: "Build a Date Table using CALENDAR() or CALENDARAUTO(). Add fiscal year columns. Create measures: YTD Sales, MTD Sales, Sales vs SPLY, Rolling 3-month average. These appear in every business dashboard." },
                { label: "Project Apply", time: "1h", detail: "Add time intelligence to your KenMeat model. YTD Revenue, MoM Growth %, Sales vs Same Month Last Year. These are the measures management actually wants to see." },
              ]
            },
            {
              day: 31,
              focus: "DAX Filter Context — The Hard Part",
              hours: [
                { label: "Theory", time: "1h", detail: "Filter context vs row context — the most misunderstood concept in DAX. CALCULATE() and how it modifies filter context. REMOVEFILTERS, ALL, ALLEXCEPT. This is where most Power BI users give up. SQLBI.com has a dedicated deep-dive — read all of it." },
                { label: "Practice", time: "2h", detail: "Build these measures using CALCULATE: (1) Sales % of Total, (2) Sales % of Category, (3) Ranking within category, (4) Running total. These require understanding filter context — verify you get correct results when slicing by different dimensions." },
                { label: "Project Apply", time: "1h", detail: "Add '% of Total Revenue' and 'Product Rank within Category' to your KenMeat model. Test by filtering different dimensions. If the numbers change correctly, you understand filter context." },
              ]
            },
            {
              day: 32,
              focus: "DAX Advanced Patterns",
              hours: [
                { label: "Theory", time: "1h", detail: "SWITCH(TRUE()) pattern for conditional logic. DIVIDE() for safe division. VAR...RETURN for readable complex measures. SELECTEDVALUE() for dynamic titles. These patterns make your reports dynamic and maintainable." },
                { label: "Practice", time: "2h", detail: "Build a dynamic measure that changes based on slicer selection (e.g., show Revenue, Units, or Margin based on what user selects). This requires SELECTEDVALUE + SWITCH. Build dynamic report titles that reflect current filter state." },
                { label: "Project Apply", time: "1h", detail: "Add dynamic measure selector to KenMeat dashboard. Add dynamic title: 'Revenue Analysis | [Selected Region] | [Selected Period]'. This level of polish is what interviewers remember." },
              ]
            },
            {
              day: 33,
              focus: "Data Modeling in Power BI",
              hours: [
                { label: "Theory", time: "1h", detail: "Star schema vs snowflake. Fact tables vs dimension tables. Cardinality and cross-filter direction. Why many-to-many relationships are dangerous. SQLBI.com: 'The Definitive Guide to Data Modeling' summary." },
                { label: "Practice", time: "2h", detail: "Build a proper star schema in Power BI: fact_sales table, dim_date, dim_product, dim_customer, dim_region. Compare performance vs a flat table. Understand why the model matters more than the visuals." },
                { label: "Project Apply", time: "1h", detail: "Audit your existing Power BI files. Are they star schema? Rebuild if not. A properly modeled file that someone else can maintain is worth 10x a messy file with pretty visuals." },
              ]
            },
            {
              day: 34,
              focus: "Power Query — Data Transformation",
              hours: [
                { label: "Theory", time: "1h", detail: "Power Query (M language) is where data cleaning happens in Power BI. Understand: applied steps, custom columns, merge queries, append queries, unpivoting, parameter queries for dynamic data sources." },
                { label: "Practice", time: "2h", detail: "Use Power Query to: (1) merge two tables from different sources, (2) unpivot a wide table to long format, (3) create a parameter for dynamic file paths, (4) build a function that cleans column names. Document each step." },
                { label: "Project Apply", time: "1h", detail: "Rebuild your KenMeat data preparation in Power Query. Every transformation should be documented in query steps — no manual data changes outside Power BI. This is production-ready ETL." },
              ]
            },
            {
              day: 35,
              focus: "Week 5 Review — DAX & Modeling",
              hours: [
                { label: "Review", time: "1h", detail: "Without looking at notes: write the DAX for (1) YTD Sales, (2) Sales % of Total, (3) MoM Growth %, (4) Dynamic title. If you can't do any from memory, drill that specific concept today." },
                { label: "Build", time: "2h", detail: "Build a complete financial model in Power BI from scratch: P&L-style layout, 15+ measures, time intelligence, dynamic metric selection. Use publicly available financial data." },
                { label: "Document", time: "1h", detail: "Write 'My DAX Patterns Reference' — a GitHub gist documenting 10 patterns you'll reuse. This is your cheat sheet AND a shareable resource." },
              ]
            },
          ]
        },
        {
          week: 6,
          title: "Power BI — Dashboard Design & Advanced Features",
          days: [
            {
              day: 36,
              focus: "Dashboard Design Principles",
              hours: [
                { label: "Theory", time: "1h", detail: "Information hierarchy, pre-attentive attributes, the 5-second test. Read: 'Storytelling with Data' by Cole Nussbaumer Knaflic — summary version on her blog. Most Power BI dashboards are ugly and hard to read. Learn to make yours different." },
                { label: "Practice", time: "2h", detail: "Rebuild an existing dashboard applying design principles: limit to 3 colors max, clear hierarchy (big number KPIs at top, trends in middle, details at bottom), remove chart junk, add clear titles that state the insight not just the metric." },
                { label: "Project Apply", time: "1h", detail: "Apply 'the 5-second test': show your dashboard to someone for 5 seconds, then ask what they understood. If they can't answer the main question the dashboard asks, redesign until they can." },
              ]
            },
            {
              day: 37,
              focus: "Advanced Visuals & Custom Formatting",
              hours: [
                { label: "Theory", time: "1h", detail: "Conditional formatting in tables (data bars, color scales, icons). Small multiples. Decomposition tree. Key Influencers visual. These are Power BI features most users never explore but which add analytical depth." },
                { label: "Practice", time: "2h", detail: "Build a dashboard using: decomposition tree to analyze what drives sales variance, key influencers to show what factors correlate with high-value customers, small multiples to compare regional trends. Add conditional formatting to your main table." },
                { label: "Project Apply", time: "1h", detail: "Add a 'drill-through' page to your KenMeat dashboard: clicking on a product shows a detail page with that product's full performance history. This is interactivity that impresses non-technical stakeholders." },
              ]
            },
            {
              day: 38,
              focus: "Row-Level Security & Publishing",
              hours: [
                { label: "Theory", time: "1h", detail: "Row-Level Security (RLS) allows different users to see different data subsets. Essential for enterprise deployments — a report for 10 regional managers each seeing only their region. Power BI Service vs Power BI Desktop distinction." },
                { label: "Practice", time: "2h", detail: "Implement dynamic RLS in your model using USERNAME() or USERPRINCIPALNAME(). Create roles for 3 different user types (Nairobi region, Coast region, National manager). Test each role view. Publish to Power BI Service free tier." },
                { label: "Project Apply", time: "1h", detail: "Publish your KenMeat dashboard to Power BI Service. Configure scheduled refresh (simulated). Generate a shareable link. This is the complete enterprise workflow — from data to published report." },
              ]
            },
            {
              day: 39,
              focus: "Power BI + Python Integration",
              hours: [
                { label: "Theory", time: "1h", detail: "Python visuals in Power BI, Python scripts as data sources. This is advanced — almost no junior analyst knows this. It lets you use Seaborn/Matplotlib visuals directly in Power BI and run Python data prep." },
                { label: "Practice", time: "2h", detail: "Build a Python visual in Power BI: a violin plot (not natively available) showing sales distribution by region. Then create a Python data source script that pulls from an API and feeds into Power BI." },
                { label: "Project Apply", time: "1h", detail: "Add one Python-powered visual to your portfolio dashboard. Document that you used Python + Power BI integration. This is a concrete differentiator — list it explicitly on your resume." },
              ]
            },
            {
              day: 40,
              focus: "PL-300 Exam Preparation",
              hours: [
                { label: "Study", time: "2h", detail: "Microsoft Learn PL-300 learning path: work through the official modules you haven't covered. Focus on: Power BI Service administration, sharing/workspaces, dataflows, deployment pipelines." },
                { label: "Practice Test", time: "1.5h", detail: "Take a full practice exam (MeasureUp or ExamTopics PL-300 practice questions). Score yourself. Note every wrong answer and review that specific concept." },
                { label: "Gap Fill", time: "30min", detail: "For each wrong answer: read the Microsoft documentation for that feature. Don't just memorize the answer — understand WHY it's correct." },
              ]
            },
            {
              day: 41,
              focus: "Portfolio Dashboard — Final Polish",
              hours: [
                { label: "Build", time: "2h", detail: "Complete your showcase Power BI dashboard. This should be your absolute best work: proper star schema, 15+ DAX measures, time intelligence, professional design, RLS, drill-through, dynamic titles. This is what you show in interviews." },
                { label: "Record", time: "1h", detail: "Record a 5-minute Loom walkthrough of your dashboard. Narrate like you're presenting to management: start with the business problem, walk through insights, explain design decisions. This video goes on LinkedIn and your portfolio site." },
                { label: "Document", time: "1h", detail: "Write a case study document: problem → data → approach → insights → business impact. This is the narrative hiring managers need to understand your value." },
              ]
            },
            {
              day: 42,
              focus: "Week 6 Completion & PBI Project Published",
              hours: [
                { label: "Review", time: "1h", detail: "Critical self-assessment: If you were hiring an analyst, would this dashboard impress you? Ask someone you respect to review it honestly. Fix what they flag." },
                { label: "Publish", time: "2h", detail: "Share Power BI file (.pbix) on GitHub with documentation. Share the Loom video on LinkedIn with a post explaining your approach. Tag it with: #PowerBI #DataAnalytics #Kenya." },
                { label: "Apply", time: "1h", detail: "Your Power BI portfolio is now strong enough to apply to BI-focused roles. Identify 5 specific roles on LinkedIn/Fuzu that require Power BI. Tailor your application to each one." },
              ]
            },
          ]
        },
        {
          week: 7,
          title: "Power BI Advanced + PL-300 Prep",
          days: [
            {
              day: 43,
              focus: "Dataflows & Enterprise Architecture",
              hours: [
                { label: "Theory", time: "1h", detail: "Power BI Dataflows (cloud-based ETL using Power Query Online). Incremental refresh for large datasets. Composite models. These are enterprise features that show you understand production BI, not just desktop reports." },
                { label: "Practice", time: "2h", detail: "Set up a Dataflow in Power BI Service (free tier). Connect multiple reports to a single certified dataset. This is the architecture of enterprise BI — one source of truth, many reports." },
                { label: "Project Apply", time: "1h", detail: "Document your data architecture: draw a diagram showing data source → Power Query → Data Model → Reports → Users. Being able to explain architecture is a sign of senior thinking even at junior level." },
              ]
            },
            {
              day: 44,
              focus: "Advanced DAX — Iterator Functions",
              hours: [
                { label: "Theory", time: "1h", detail: "SUMX, AVERAGEX, MAXX, MINX, RANKX in depth. TOPN, GENERATE, GENERATEALL. These enable complex calculations impossible with simple SUM/AVERAGE. SQLBI.com: 'Understanding SUMX and Iterator Functions'." },
                { label: "Practice", time: "2h", detail: "Build: (1) weighted average price using SUMX/DIVIDE, (2) top 5 products by revenue using TOPN, (3) ranking with ties handled correctly using RANKX. Test each against expected results." },
                { label: "Project Apply", time: "1h", detail: "Add advanced DAX to your portfolio dashboard: a 'Top N Products' dynamic visual (user controls N with a slicer), weighted average calculation. Make it interactive." },
              ]
            },
            {
              day: 45,
              focus: "PL-300 Final Prep & Exam Strategy",
              hours: [
                { label: "Full Mock Exam", time: "2h", detail: "Take a complete timed PL-300 mock exam (65 questions, 120 minutes). Replicate real exam conditions. Target score: 70%+ on practice before booking the real exam." },
                { label: "Review", time: "1h", detail: "Deep-dive on every wrong answer. For each: understand the concept, find the Microsoft Learn module that covers it, re-test yourself." },
                { label: "Plan", time: "1h", detail: "If scoring 70%+ consistently: book the real PL-300 exam. If not: identify the 3 weakest domains and schedule focused remediation. The certification is the goal — plan concretely to achieve it." },
              ]
            },
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Portfolio & Job Campaign",
      color: "#8E44AD",
      days: "46–60",
      tagline: "Convert skills into opportunities",
      weeks: [
        {
          week: 8,
          title: "Portfolio Completion & Personal Brand",
          days: [
            {
              day: 46,
              focus: "Portfolio Site Build",
              hours: [
                { label: "Build", time: "2h", detail: "Create your portfolio site on GitHub Pages (free). Simple, clean, single page: name + tagline, 3 featured projects with screenshots and links, skills (only ones you can actually demonstrate), contact info. Do NOT overthink design. Content matters more." },
                { label: "Write", time: "1h", detail: "For each project, write a 3-sentence description: (1) The business problem, (2) Your approach, (3) The insight/outcome. These should be readable in 15 seconds." },
                { label: "Link", time: "1h", detail: "Add portfolio URL to: LinkedIn profile, resume header, email signature, every GitHub project README. Make it impossible not to find your work." },
              ]
            },
            {
              day: 47,
              focus: "Resume Rewrite",
              hours: [
                { label: "Rewrite", time: "2h", detail: "Complete resume overhaul. Format: clean, single page, ATS-compatible (no tables, no graphics). Each bullet = Action + Method + Outcome. Example: 'Built automated RFM segmentation (Python/SQL) reducing manual analysis time by 3 hours weekly.' Add portfolio link prominently." },
                { label: "ATS Check", time: "1h", detail: "Run your resume through Jobscan.co against 3 actual job descriptions you want. Check keyword match %. Add missing keywords where honest. ATS systems filter before humans see your resume." },
                { label: "Review", time: "1h", detail: "Ask someone in tech/data to review your resume honestly. Specific question: 'Based on this resume, what level analyst do you think I am?' If the answer isn't 'solid junior with strong technical skills,' revise." },
              ]
            },
            {
              day: 48,
              focus: "LinkedIn Overhaul",
              hours: [
                { label: "Optimize", time: "2h", detail: "Rewrite: headline (specific skills, not 'aspiring data analyst'), About section (2 paragraphs: what you do + what you're looking for), Featured section (link to portfolio, best project, best LinkedIn post). Add all verified skills. Request endorsements from people who've seen your work." },
                { label: "Content Strategy", time: "1h", detail: "Plan 4 weeks of LinkedIn content: Week 1 - SQL insight post, Week 2 - Python project share, Week 3 - Power BI dashboard reveal, Week 4 - Kenya data analysis insight. Write them now while they're fresh." },
                { label: "Network", time: "1h", detail: "Connect with 20 specific people: data team leads at Kenyan companies you want to work for, BI developers in Nairobi, hiring managers at top employers. Personalized note for each — reference something specific about their work." },
              ]
            },
            {
              day: 49,
              focus: "Medium/Blog — Establish Thought Leadership",
              hours: [
                { label: "Write", time: "2h", detail: "Publish your first proper data article on Medium: 'What [specific Kenya dataset] reveals about [interesting topic].' Structure: hook → context → methodology → 3 key findings → conclusion. Include your charts. 800-1000 words." },
                { label: "SEO", time: "1h", detail: "Add tags to your Medium post: Data Analytics, Kenya, Power BI, Python, Data Science. These help discovery. Share the article URL (not just the title) in 3 relevant LinkedIn/Twitter posts." },
                { label: "Plan", time: "1h", detail: "Outline 3 more articles to publish over the next month. Topics: (1) DAX pattern you found powerful, (2) SQL technique most analysts miss, (3) How you approached a specific business problem with data." },
              ]
            },
            {
              day: 50,
              focus: "Interview Preparation — Technical",
              hours: [
                { label: "SQL Drills", time: "1.5h", detail: "Final SQL interview prep: LeetCode Hard level — 3 problems. StrataScratch company-specific questions. Focus on explaining your thought process out loud while solving. Interviewers assess thinking, not just correct answers." },
                { label: "Python Drills", time: "1.5h", detail: "Take a complete analyst take-home test (find one on GitHub: 'data analyst take home test'). 2-hour time limit. Evaluate your own submission: is it production-quality? Is the narrative clear? Would it get you an interview?" },
                { label: "Prep", time: "1h", detail: "Write detailed answers (not bullet points) to: Tell me about a time you found an unexpected insight in data. How do you handle stakeholders who want different metrics. Describe your analysis workflow from raw data to recommendation." },
              ]
            },
            {
              day: 51,
              focus: "Interview Preparation — Behavioral",
              hours: [
                { label: "STAR Framework", time: "1h", detail: "Prepare 6 STAR stories (Situation, Task, Action, Result): data quality problem you found, stakeholder disagreement on metrics, tight deadline analysis, insight that changed a decision, failed analysis (and what you learned), collaborative project." },
                { label: "Practice", time: "2h", detail: "Record yourself answering 10 interview questions on video. Watch it back. Specifically check: Do you waffle? Do you quantify results? Do you sound confident? Redo any answer that wouldn't impress you if you were hiring." },
                { label: "Research", time: "1h", detail: "For each company you're actively targeting: research their industry, likely data challenges, tech stack (check their job posts). In interviews, show you understand their specific context — not just generic data analyst skills." },
              ]
            },
            {
              day: 52,
              focus: "Week 8 Review — Complete Audit",
              hours: [
                { label: "Audit", time: "2h", detail: "Full portfolio audit: (1) Can someone understand each project in 30 seconds? (2) Is every claim on your resume backed by something in your portfolio? (3) Does your LinkedIn tell a coherent story? Fix everything that falls short." },
                { label: "Apply", time: "1h", detail: "Apply to 5 targeted roles with fully customized applications. Not mass apply — 5 quality applications beat 50 generic ones. For each: tailored cover letter paragraph, portfolio link, reference specific role requirements." },
                { label: "Track", time: "1h", detail: "Build a simple job tracking spreadsheet: company, role, date applied, status, follow-up date, contact name. Treat job searching like a project. Track your conversion rates and optimize." },
              ]
            },
          ]
        },
        {
          week: 9,
          title: "Job Campaign — Active Execution",
          days: [
            {
              day: 53,
              focus: "Outreach & Networking",
              hours: [
                { label: "Direct Outreach", time: "1.5h", detail: "Message 5 people at companies you want to work for. Not asking for a job — asking for 15-minute informational conversations: 'I'm building my data analyst career and I'm very interested in how [company] uses analytics. Would you have 15 minutes for a call?' 20-30% response rate is normal." },
                { label: "Community", time: "1h", detail: "Find and join: Kenya Data Science community on Telegram, local Power BI user group, Nairobi tech meetups (check Meetup.com). Attend one event this week. In-person visibility accelerates hiring." },
                { label: "Follow Up", time: "1.5h", detail: "Follow up on all applications older than 7 days. Send a brief, non-pushy follow-up email: 'I wanted to confirm my application for [role] reached you and reiterate my interest. I've attached an updated portfolio link: [URL].' Some offers come from follow-ups, not applications." },
              ]
            },
            {
              day: 54,
              focus: "Upwork/Freelance Profile",
              hours: [
                { label: "Setup", time: "2h", detail: "Create or optimize your Upwork profile. Headline: 'Power BI & Python Data Analyst | Dashboard & Business Intelligence Expert | Kenya.' Write a profile that leads with outcomes, not skills. Add your best portfolio pieces. Set your hourly rate at market rate for Africa, not global ($15-25/hr to start)." },
                { label: "Propose", time: "1h", detail: "Write proposals for 3 data analyst/Power BI jobs on Upwork. Proposals that win: address the specific problem stated in the post, show a relevant past project, propose a clear deliverable, be specific not generic." },
                { label: "Strategy", time: "1h", detail: "Freelance income can fund you while you job search AND builds your portfolio with real paid work. Even 1 small project ($100-200) gives you a verified review, which unlocks better opportunities. Treat it seriously." },
              ]
            },
            {
              day: 55,
              focus: "Skills Gap Assessment & Fill",
              hours: [
                { label: "Assess", time: "1h", detail: "Look at the last 10 job descriptions you've applied to. Extract every required skill. Map each to: (1) confident, (2) basic, (3) missing. Be honest. Your 'confident' list is your current market value." },
                { label: "Fill", time: "2h", detail: "Pick the most common 'basic' or 'missing' skill that appears in job descriptions. Spend 2 hours building foundational knowledge. Common gaps: Excel Power Query advanced, DAX specific patterns, Python pandas advanced operations." },
                { label: "Add", time: "1h", detail: "Whatever you learned today: build a mini project showing it and push to GitHub. The goal is to convert every learning session into portfolio evidence within 24 hours." },
              ]
            },
            {
              day: 56,
              focus: "Excel Advanced — Often Underrated",
              hours: [
                { label: "Theory", time: "1h", detail: "Many Kenyan companies (SMEs, NGOs, government) are still Excel-first. Advanced Excel skills: dynamic arrays (FILTER, SORT, UNIQUE, XLOOKUP), Power Pivot, Power Query, structured references. These are often required even when job posts say 'Excel proficiency.'" },
                { label: "Practice", time: "2h", detail: "Build a dynamic Excel dashboard using: dynamic arrays for automatic filtering, XLOOKUP replacing VLOOKUP, Power Query for data prep, Power Pivot for relationships and DAX measures. This should rival a basic Power BI report in functionality." },
                { label: "Project Apply", time: "1h", detail: "Build one portfolio project that is Excel-only — targeting roles at SMEs that don't use Power BI. An impressive Excel dashboard shows versatility. Screenshot it and add to portfolio." },
              ]
            },
            {
              day: 57,
              focus: "Communication — The Underrated Analyst Skill",
              hours: [
                { label: "Theory", time: "1h", detail: "Data storytelling: Pyramid Principle (conclusion first, then supporting evidence), chart annotation (tell the reader what to see), executive summary writing. Read: 'The McKinsey Way' summary — free blog summaries exist. This is what makes analysts influential." },
                { label: "Practice", time: "2h", detail: "Take an existing analysis. Rewrite the narrative using Pyramid Principle: lead with the key insight, support with 3 pieces of evidence, each supported by data. Read it aloud — does it sound like a business briefing or a student report?" },
                { label: "Apply", time: "1h", detail: "Add an executive summary to each GitHub project: 3 sentences max, insight-first. Recruiters often read only this. Make every word count." },
              ]
            },
            {
              day: 58,
              focus: "Mock Interview Day",
              hours: [
                { label: "Technical Mock", time: "1.5h", detail: "Ask a friend/peer to interview you using these questions: Write a SQL query to find the top 3 customers by revenue in each region. How would you build a sales dashboard in Power BI? How do you handle a dataset with 30% missing values? Answer fully and talk through your thinking." },
                { label: "Portfolio Walkthrough", time: "1.5h", detail: "Present your portfolio as if to a hiring manager. Walk through each project in 3 minutes: business problem → approach → finding → recommendation. Practice the 'so what' — every finding needs an implication." },
                { label: "Debrief", time: "1h", detail: "After the mock: what were the 3 weakest moments? Fix them specifically. Interviews are skills — they improve with practice, not just preparation." },
              ]
            },
            {
              week: 9,
              day: 59,
              focus: "Intensive Application Week",
              hours: [
                { label: "Applications", time: "2h", detail: "Apply to 8 roles today. Mix: 3 Nairobi-based analyst roles (Fuzu, BrighterMonday, LinkedIn), 2 NGO/development sector roles (ReliefWeb, DevEx), 2 remote roles (Remote.co, Upwork), 1 stretch role (senior analyst or BI developer — understanding the level above yours helps you interview better)." },
                { label: "LinkedIn", time: "1h", detail: "Post your most compelling portfolio piece today. Include: problem statement, key visualization, 3-sentence insight summary. Ask a question at the end to drive engagement. Respond to every comment within 2 hours." },
                { label: "Track", time: "1h", detail: "Update your job tracking sheet. Any applications 10+ days old with no response: move to 'inactive' but send one final follow-up. Focus energy on active opportunities." },
              ]
            },
          ]
        },
        {
          week: 10,
          title: "Final Week — Refinement & Sustained Campaign",
          days: [
            {
              day: 60,
              focus: "60-Day Review & Next 30-Day Plan",
              hours: [
                { label: "Audit", time: "1h", detail: "Honest assessment: SQL — can you solve Hard LeetCode problems? Python — can you build a complete EDA in under 90 minutes? Power BI — can you build a star schema + 15 DAX measures + professional dashboard from scratch? Each 'no' is a specific target." },
                { label: "Portfolio Final", time: "2h", detail: "Final polish on all 3 portfolio projects. They should be: fully documented, reproducible, visually professional, and clearly tied to business outcomes. Send the portfolio URL to 3 people whose opinion you respect. Ask: 'Would this make you want to interview me?' Fix any objection." },
                { label: "Next Phase", time: "1h", detail: "Plan your next 30 days: (1) Continue applying 5 quality applications per week, (2) Publish one LinkedIn post per week, (3) Pursue PL-300 certification if not done, (4) Start a 4th portfolio project in a new domain (HR analytics, financial modeling, or geospatial data). The job search continues until you have an offer — the 60-day plan built your foundation." },
              ]
            },
          ]
        }
      ]
    }
  ]
};

const phaseColors = {
  1: { bg: "#E85D3A", light: "#FEF0EC", text: "#C0391B" },
  2: { bg: "#3A7BD5", light: "#EBF2FC", text: "#2060B8" },
  3: { bg: "#27AE60", light: "#E9F7EF", text: "#1E8449" },
  4: { bg: "#8E44AD", light: "#F4ECF7", text: "#7D3C98" },
};

export default function Curriculum() {
  const [activePhase, setActivePhase] = useState(1);
  const [activeWeek, setActiveWeek] = useState(null);
  const [activeDay, setActiveDay] = useState(null);
  const [completedDays, setCompletedDays] = useState({});

  const currentPhase = curriculum.phases.find(p => p.id === activePhase);
  const allWeeks = currentPhase?.weeks || [];
  const currentWeek = activeWeek !== null ? allWeeks[activeWeek] : null;
  const currentDay = activeDay !== null && currentWeek ? currentWeek.days[activeDay] : null;

  const toggleDay = (dayNum) => {
    setCompletedDays(prev => ({ ...prev, [dayNum]: !prev[dayNum] }));
  };

  const totalDays = 60;
  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progressPct = Math.round((completedCount / totalDays) * 100);

  const color = phaseColors[activePhase];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#F7F5F0", minHeight: "100vh", color: "#1a1a1a" }}>
      {/* Header */}
      <div style={{ background: "#1a1a1a", color: "#F7F5F0", padding: "32px 40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#888", marginBottom: 8 }}>60-Day Data Analyst Curriculum</div>
          <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, letterSpacing: -1 }}>Your Road to Market-Ready</h1>
          <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: 1, background: "#333", borderRadius: 4, height: 8, overflow: "hidden" }}>
              <div style={{ width: `${progressPct}%`, background: "#F7C948", height: "100%", transition: "width 0.4s ease", borderRadius: 4 }} />
            </div>
            <div style={{ fontSize: 13, color: "#aaa", whiteSpace: "nowrap" }}>
              <span style={{ color: "#F7C948", fontWeight: 700 }}>{completedCount}</span> / {totalDays} days completed ({progressPct}%)
            </div>
          </div>
        </div>
      </div>

      {/* Phase Tabs */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e4dc", padding: "0 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 0 }}>
          {curriculum.phases.map(phase => {
            const pc = phaseColors[phase.id];
            const isActive = activePhase === phase.id;
            return (
              <button key={phase.id} onClick={() => { setActivePhase(phase.id); setActiveWeek(null); setActiveDay(null); }}
                style={{
                  padding: "16px 24px", border: "none", borderBottom: isActive ? `3px solid ${pc.bg}` : "3px solid transparent",
                  background: "none", cursor: "pointer", fontSize: 13, fontWeight: isActive ? 700 : 400,
                  color: isActive ? pc.bg : "#666", letterSpacing: 0.3, transition: "all 0.2s", fontFamily: "Georgia, serif"
                }}>
                <span style={{ fontSize: 11, display: "block", color: "#aaa", letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>Days {phase.days}</span>
                {phase.name}
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 40px" }}>
        {/* Phase Overview */}
        {!currentWeek && (
          <div>
            <div style={{ background: color.light, border: `1px solid ${color.bg}20`, borderRadius: 12, padding: "24px 28px", marginBottom: 32 }}>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: color.text, marginBottom: 6 }}>Phase {activePhase} — Days {currentPhase.days}</div>
              <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px", color: "#1a1a1a" }}>{currentPhase.name}</h2>
              <p style={{ margin: 0, color: "#555", fontSize: 15, fontStyle: "italic" }}>{currentPhase.tagline}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {allWeeks.map((week, wi) => {
                const weekDaysCompleted = week.days?.filter(d => completedDays[d.day]).length || 0;
                const weekTotal = week.days?.length || 0;
                return (
                  <div key={wi} onClick={() => setActiveWeek(wi)}
                    style={{
                      background: "#fff", border: "1px solid #e8e4dc", borderRadius: 10, padding: "20px 22px",
                      cursor: "pointer", transition: "all 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = color.bg}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#e8e4dc"}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: 11, color: "#aaa", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Week {week.week}</div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a", lineHeight: 1.3 }}>{week.title}</div>
                      </div>
                      <div style={{ fontSize: 12, color: weekDaysCompleted === weekTotal ? "#27AE60" : "#aaa", fontWeight: 600 }}>
                        {weekDaysCompleted}/{weekTotal}
                      </div>
                    </div>
                    <div style={{ background: "#f0ece4", borderRadius: 4, height: 4, overflow: "hidden" }}>
                      <div style={{ width: `${weekTotal > 0 ? (weekDaysCompleted / weekTotal) * 100 : 0}%`, background: color.bg, height: "100%", borderRadius: 4 }} />
                    </div>
                    <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {week.days?.slice(0, 4).map(d => (
                        <span key={d.day} style={{
                          fontSize: 11, padding: "3px 8px", borderRadius: 20,
                          background: completedDays[d.day] ? color.light : "#f5f2ec",
                          color: completedDays[d.day] ? color.text : "#888",
                          border: completedDays[d.day] ? `1px solid ${color.bg}40` : "1px solid transparent"
                        }}>Day {d.day}</span>
                      ))}
                      {week.days?.length > 4 && <span style={{ fontSize: 11, color: "#aaa" }}>+{week.days.length - 4} more</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Week View */}
        {currentWeek && !currentDay && (
          <div>
            <button onClick={() => { setActiveWeek(null); setActiveDay(null); }}
              style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: 13, marginBottom: 20, padding: 0, fontFamily: "Georgia, serif" }}>
              ← Back to {currentPhase.name}
            </button>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, color: "#aaa", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Week {currentWeek.week}</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{currentWeek.title}</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {currentWeek.days?.map((day, di) => (
                <div key={di}
                  style={{
                    background: "#fff", border: `1px solid ${completedDays[day.day] ? color.bg + "60" : "#e8e4dc"}`,
                    borderRadius: 10, padding: "18px 20px", display: "flex", alignItems: "center", gap: 16,
                    background: completedDays[day.day] ? color.light : "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
                  }}>
                  <button onClick={() => toggleDay(day.day)}
                    style={{
                      width: 28, height: 28, borderRadius: "50%", border: `2px solid ${completedDays[day.day] ? color.bg : "#ccc"}`,
                      background: completedDays[day.day] ? color.bg : "transparent", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                    {completedDays[day.day] && <span style={{ color: "#fff", fontSize: 14 }}>✓</span>}
                  </button>
                  <div style={{ flex: 1, cursor: "pointer" }} onClick={() => setActiveDay(di)}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: 12, color: "#aaa", marginRight: 10 }}>Day {day.day}</span>
                        <span style={{ fontWeight: 700, fontSize: 15 }}>{day.focus}</span>
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        {day.hours.map((h, hi) => (
                          <span key={hi} style={{
                            fontSize: 11, padding: "3px 8px", background: "#f5f2ec",
                            borderRadius: 20, color: "#666"
                          }}>{h.label} · {h.time}</span>
                        ))}
                        <span style={{ color: "#bbb", fontSize: 16 }}>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Day Detail View */}
        {currentDay && (
          <div>
            <button onClick={() => setActiveDay(null)}
              style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: 13, marginBottom: 20, padding: 0, fontFamily: "Georgia, serif" }}>
              ← Back to Week {currentWeek.week}
            </button>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 28 }}>
              <div>
                <div style={{ fontSize: 11, color: "#aaa", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Day {currentDay.day} · Week {currentWeek.week}</div>
                <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0 }}>{currentDay.focus}</h2>
              </div>
              <button onClick={() => toggleDay(currentDay.day)}
                style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "10px 18px",
                  background: completedDays[currentDay.day] ? color.bg : "#fff",
                  color: completedDays[currentDay.day] ? "#fff" : "#1a1a1a",
                  border: `2px solid ${completedDays[currentDay.day] ? color.bg : "#ddd"}`,
                  borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14,
                  fontFamily: "Georgia, serif", transition: "all 0.2s"
                }}>
                {completedDays[currentDay.day] ? "✓ Completed" : "Mark Complete"}
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {currentDay.hours.map((block, bi) => {
                const blockColors = { "Theory": "#E85D3A", "Practice": "#3A7BD5", "Project Apply": "#27AE60", "Build": "#27AE60", "Review": "#F39C12", "Polish": "#F39C12", "Publish": "#8E44AD", "Document": "#8E44AD", "Rewrite": "#E85D3A", "Audit": "#E85D3A", "Apply": "#8E44AD", "Write": "#3A7BD5", "Plan": "#F39C12", "Study": "#3A7BD5", "Mock Exam": "#E85D3A", "Full Mock Exam": "#E85D3A", "Gap Fill": "#F39C12", "Optimize": "#3A7BD5", "Content Strategy": "#8E44AD", "Network": "#27AE60", "Setup": "#3A7BD5", "Propose": "#8E44AD", "Strategy": "#F39C12", "SQL Drills": "#E85D3A", "Python Drills": "#3A7BD5", "Prep": "#F39C12", "STAR Framework": "#8E44AD", "Research": "#3A7BD5", "Direct Outreach": "#E85D3A", "Community": "#27AE60", "Follow Up": "#F39C12", "Applications": "#E85D3A", "Assess": "#F39C12", "Fill": "#3A7BD5", "Add": "#27AE60", "Practice Test": "#E85D3A", "Mock Interview": "#E85D3A", "Portfolio Walkthrough": "#3A7BD5", "Debrief": "#F39C12", "SEO": "#27AE60", "ATS Check": "#3A7BD5", "Mock Test": "#E85D3A", "Weak Point Drill": "#F39C12", "Link": "#8E44AD" };
                const blockColor = blockColors[block.label] || color.bg;
                return (
                  <div key={bi} style={{
                    background: "#fff", borderRadius: 10, padding: "22px 24px",
                    border: "1px solid #e8e4dc", borderLeft: `4px solid ${blockColor}`,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
                          color: blockColor, padding: "3px 10px", background: blockColor + "15",
                          borderRadius: 20
                        }}>{block.label}</span>
                      </div>
                      <span style={{
                        fontSize: 20, fontWeight: 700, color: "#1a1a1a",
                        padding: "4px 12px", background: "#f5f2ec", borderRadius: 8
                      }}>{block.time}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "#333" }}>{block.detail}</p>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
              <button
                onClick={() => {
                  if (activeDay > 0) setActiveDay(activeDay - 1);
                  else if (activeWeek > 0) { setActiveWeek(activeWeek - 1); setActiveDay((allWeeks[activeWeek - 1]?.days?.length || 1) - 1); }
                }}
                style={{ padding: "10px 20px", background: "#fff", border: "1px solid #ddd", borderRadius: 8, cursor: "pointer", fontSize: 14, fontFamily: "Georgia, serif" }}>
                ← Previous Day
              </button>
              <button
                onClick={() => {
                  if (currentWeek.days && activeDay < currentWeek.days.length - 1) setActiveDay(activeDay + 1);
                  else if (activeWeek < allWeeks.length - 1) { setActiveWeek(activeWeek + 1); setActiveDay(0); }
                }}
                style={{ padding: "10px 20px", background: color.bg, color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "Georgia, serif" }}>
                Next Day →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
