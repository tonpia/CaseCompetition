🧠 1. Case Competition Engine  
Core of the platform – structured, timed challenges that simulate real-world consulting problems.

**Key Features:**  

- **Weekly/Monthly Challenges**: Sponsored by companies or created by admins. Timed submissions.  
- **Team or Solo Mode**: Encourage collaboration, or allow solo sprint submissions.  
- **Structured Submission Format**: PPT, PDF, or fill-in forms with clear rubric (problem analysis, solutions, financials, etc.)  
- **Judging System**: Human judges (mentors, industry experts) or peer review + rubric scoring.  
- **Themes & Tracks**: Like FinTech, ESG, eSports, etc. Users can pick based on interest or specialization.

---

🏆 2. Leaderboard & Gamified Progression  
Keeps people engaged and builds friendly competition.

**Key Features:**  

- Global, Track-Specific, and University Leaderboards  
- Badges & Achievements: “First Case Solved,” “Top 5%,” “Industry Expert,” “100+ Feedback Points”  
- **Rank Titles**: Users progress through competitive tiers like *Novice → Intermediate → Master → Grandmaster* based on performance and contribution.  
- Streaks & Missions: “Solve 3 cases in a week” or “Give 5 peer reviews.”  
- Visual rank badges and color-coded indicators on the leaderboard

---

📈 3. Career Progression System  
Not just fun—turns the platform into a stepping stone to real consulting or strategy careers.

**Key Features:**  

- **Skill Graph / Growth Map**: Visual tracker of consulting-relevant skills: research, presentation, financial modeling, etc.  
- **Feedback & Ratings**: Judges or peers can rate your work, tag strong points (e.g., “Strong SWOT analysis”).  
- **Portfolio Export**: Turn your top submissions into a mini-portfolio (PDF or web link) for job applications.  
- **Industry Certifications**: Complete X number of cases in Marketing and unlock a *Garena x CaseArena* Badge.

---

🧑‍💼 4. Profile Page (Your Consulting Avatar)  
Personal brand builder—shows progress, reputation, and readiness.

**Key Features:**  

- **Competitive Rank Title**, Badges, Challenge History  
- Specializations & Skills: Show top strengths (e.g., “Market Entry Expert,” “Pricing Strategy”)  
- Endorsements/Peer Comments  
- **Recruiter View Mode**: Partnered companies can browse top talents based on scores and work examples.

---

🧰 5. Support & Community Features  
Builds stickiness and mentorship ecosystem.

**Key Features:**  

- Peer Review System: Users give structured feedback to others’ submissions  
- Mentor Marketplace: Industry mentors can opt-in to give feedback or host case workshops  
- Discussion Forums: Case breakdowns, strategy Q&A, resource sharing  
- Templates & Resources Library: Frameworks (SWOT, 3Cs, BCG Matrix), past winners’ submissions, case decks

---

✅ Overall Goal  
You want to build a fake but functional frontend (no backend logic), with:

- Pages: Home, Challenge List, Challenge Page, Leaderboard, Profile  
- Components: Navbar, Challenge Card, Rank Tier Badge, etc.  
- Dummy data to simulate real content

---

🔧 Step-by-Step Prompting Strategy

### Step 1: Project Setup Prompt  

📌 Prompt:  
> “Set up a basic Next.js app with Tailwind CSS and typescript. Add a simple layout with a navbar and a sidebar.”

🎯 Expected Result:  

- A working Next.js project  
- Layout file (e.g., `Layout.tsx`)  
- Home page using the layout  
- Navbar component with links: Home, Challenges, Leaderboard, Profile

---

### Step 2: Build the Challenge Listing Page  

📌 Prompt:  
> “Create a `challenges.tsx` page that displays a list of mock case challenges. Each challenge should be shown in a card with title, difficulty, reward, and a ‘Start’ button. Use dummy JSON data.”

🎯 Expected Result:  

- Cards with: Case Title, Industry, Reward, Difficulty  
- Dummy data (inline or in `mockData.ts`)  
- Responsive, styled layout

---

### Step 3: Design the Challenge Details Page  

📌 Prompt:  
> “Create a challenge details page (`[id].tsx`) that shows case instructions, a countdown timer (mocked), and a ‘Submit’ button. Use dummy data.”

🎯 Expected Result:  

- Dynamic route works (e.g., `/challenges/123`)  
- Case Overview, Objectives, Deliverables  
- Countdown Timer (UI only)

---

### Step 4: Add Leaderboard Page  

📌 Prompt:  
> “Create a `leaderboard.tsx` page showing a table of top users with username, rank, badge, and competitive title (e.g., Grandmaster, Master). Use Tailwind for styling.”

🎯 Expected Result:  

- Responsive table  
- Rank numbers and tier titles  
- Badge display with emoji/tooltips  
- Dummy data (top 10)

---

### Step 5: Add a Profile Page  

📌 Prompt:  
> “Create a `profile.tsx` page with user avatar, name, rank tier, badges, and list of solved challenges. Use mock data.”

🎯 Expected Result:  

- Avatar + name  
- Rank Tier badge  
- Grid of badges (with hover info)  
- List of past challenges with titles + reward

---

### Step 6: Add Rank Tier & Badge System UI  

📌 Prompt:  
> “Create a reusable `RankBadge` component to display titles like Grandmaster, Master, etc. Also create a `BadgeDisplay` component for showing badge icons with tooltips.”

🎯 Expected Result:  

- Styled badge for competitive tier  
- Grid of emoji/icon badges  
- Tooltip with description

---

### Step 7: Polish & Connect Pages  

📌 Prompt:  
> “Update the Navbar to include links to all pages and highlight the active one. Ensure every page uses the shared layout and maintains consistent styling.”

🎯 Expected Result:  

- Seamless navigation  
- Active link highlighting  
- Unified design language

---

🧠 Bonus Prompts (if time allows)  

- Add dark mode toggle  
- Animate tier transitions with Framer Motion  
- Make everything mobile-responsive  
- Add a floating CTA button: “Submit Your Own Challenge”

---

📦 What You’ll End Up With  
By following this strategy, your final mockup will include:

- Realistic UI with multiple pages  
- Competitive tiers instead of raw XP  
- Gamified elements that mimic a live product  
- Clickable flow that feels demo-ready