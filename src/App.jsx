import { useState } from 'react'

const WEEKS = [
  {
    num: 1, title: 'Know Yourself Before You Build', theme: 'Identity, context, and the foundation your AI needs', compas: 'Context', color: 'var(--color-week-1)',
    objectives: [
      'Understand the Human-AI Augmentation Spectrum (H5 to H1) and where you currently operate',
      'Configure custom instructions on your platform with your role, organization, preferences, and voice',
      'Articulate what makes you *you* — the context an AI assistant needs to be useful',
      'Understand data privacy boundaries for your platform',
      'Recognize that building a PAI is a self-knowledge project, not a technology project — and why that matters for avoiding confirmation bias',
      'Take the Metacognitive Readiness Assessment and understand your personal risk profile',
    ],
    flow: [
      { time: '0:00', activity: 'Welcome, introductions, program arc overview', format: 'Facilitator-led' },
      { time: '0:10', activity: 'The Human-AI Augmentation Spectrum — where are you now?', format: 'Teaching + discussion' },
      { time: '0:17', activity: 'The Mirror Effect: "A Personal AI does not correct your biases — it scales them." AI sycophancy is proven (Anthropic ICLR 2024). Even a mathematically perfect thinker develops false beliefs through repeated AI interaction (MIT 2025). Self-knowledge is your primary safeguard.', format: 'Teaching (5 min)' },
      { time: '0:20', activity: 'Exercise: "Write Your User Manual" — draft a 1-page document describing your role, organization, communication style, what you care about, what you need help with', format: 'Individual work' },
      { time: '0:35', activity: 'Configure custom instructions on your platform (platform-specific walkthrough)', format: 'Guided hands-on' },
      { time: '0:45', activity: 'Test it — ask your AI "Who am I?" and see what it knows. Iterate.', format: 'Individual + share-out' },
      { time: '0:55', activity: 'Homework introduction, Q&A', format: 'Facilitator-led' },
    ],
    platforms: {
      chatgpt: 'Settings > Personalization > Custom Instructions (1,500 char limit)',
      claude: 'Settings > Profile Preferences + start a Project for PAI work',
      gemini: 'Settings > Extensions + create first Gem with identity context',
    },
    teachingPoints: [
      'The Mirror Effect: AI reflects your thinking patterns back at you — including your blind spots. If you feed it biased sources, it processes them faithfully. Research shows LLMs systematically agree with users (Anthropic/ICLR 2024).',
      'MIT researchers proved that even a mathematically perfect reasoner develops false beliefs through sycophantic AI interaction — at just 10% sycophancy rate. Humans have no chance without deliberate safeguards.',
      'Building a PAI is a self-knowledge project, not a technology project. The AI you build will show you exactly who you are in your unfiltered daily habits.',
      'The risk formula: smart + low self-awareness + isolated = dangerous. People who lack trusted humans to challenge their thinking are most vulnerable to AI-accelerated confirmation bias.',
      'Your custom instructions and foundational documents are not just setup work — they are cognitive safeguards that force self-examination before personalization begins.',
      'MIT CSAIL (2026) formally proved that even a mathematically perfect reasoner develops false beliefs through sycophantic AI interaction — at just 10% sycophancy rate. Warning users is insufficient; a sycophantic selection of true facts is just as distorting as fabricated ones. (arXiv 2602.19141)',
      'Microsoft Research (CHI 2025) found that across 936 real-world tasks, higher confidence in AI correlates with less critical thinking. Workers shift from problem-solving to "AI response integration." (Lee et al., CHI 2025)',
      'The Center for Humane Technology calls these "echo chambers of one" — individual-level feedback loops where a single person\'s beliefs become progressively more extreme without normal social corrective mechanisms.',
      'The hopeful counterpoint: Costello et al. (Science, 2024) showed that structured, evidence-based AI dialogue reduced conspiracy beliefs by 20% durably. The distinction is between passive AI use (which degrades metacognition) and deliberate, evidence-challenging use (which improves it). That distinction is what this course teaches.',
    ],
    homework: [
      'Refine your custom instructions — test with 5 different work tasks and adjust',
      'Start a "workflows I repeat" list — write down 5-10 tasks you do weekly that follow a pattern',
      'Join the MTM Together cohort channel and introduce yourself',
      'Reflection exercise: Write down 3 beliefs you hold strongly about your work. Ask your AI to argue the opposite position. Notice how it responds.',
      'Take the Metacognitive Readiness Assessment (https://are-you-ready-for-a-personal-ai.mtmapps.now/) and review your results. Bring your top finding to next week\'s session.',
    ],
    assessment: [
      'Custom instructions configured and tested',
      '"User manual" document drafted (even rough)',
      'Can explain the augmentation spectrum to a colleague',
      'Can articulate why self-knowledge matters more than AI features for building a useful PAI',
    ],
  },
  {
    num: 2, title: 'Document Before You Automate', theme: 'Workflow documentation, SOPs, and the skill of clear description', compas: 'Objective', color: 'var(--color-week-2)',
    objectives: [
      'Select your highest-value workflow for AI augmentation using the Square Wheel Calculator',
      'Document that workflow as a step-by-step SOP an AI could follow',
      'Understand the workflow breakdown method (trigger, steps, decisions, output)',
      'Recognize that the durable skill is communication — describing what you need',
    ],
    flow: [
      { time: '0:00', activity: 'Homework review — what did you learn testing your custom instructions?', format: 'Group discussion' },
      { time: '0:08', activity: 'The Square Wheel Paradox — when is the time investment worth it?', format: 'Teaching' },
      { time: '0:15', activity: 'The Workflow Breakdown Method: Name > Trigger > Steps > Decisions > Output', format: 'Teaching + demo' },
      { time: '0:25', activity: 'Exercise: "Break Down Your Workflow" — facilitator models with a volunteer, then participants document their own', format: 'Live demo + individual work' },
      { time: '0:45', activity: 'Feed your SOP to AI: "How would you improve this workflow?"', format: 'Individual hands-on' },
      { time: '0:52', activity: 'Share-out: What did AI suggest? What surprised you?', format: 'Group discussion' },
      { time: '0:57', activity: 'Homework introduction', format: 'Facilitator-led' },
    ],
    platforms: null,
    homework: [
      'Complete your workflow SOP document (full detail)',
      'Run it through AI and capture the redesign suggestions',
      'Draft a second workflow SOP (stretch goal)',
      'Post your biggest "aha" from the workflow exercise in MTM Together',
    ],
    assessment: [
      'One workflow fully documented as SOP (trigger through output)',
      'AI-generated improvement suggestions captured',
      'Can explain why documentation comes before automation',
    ],
    teachingPoints: [
      'Be extremely detailed — "Give the AI all the information as clearly as you can"',
      'The Robot Drawing Lesson: clear instructions > vague instructions, always',
      'Document what exists today first, then let AI help redesign',
      'This documentation is durable infrastructure — it works across any AI platform',
    ],
  },
  {
    num: 3, title: 'Build Your First Package', theme: 'Turning documented workflows into reusable AI packages', compas: 'Method', color: 'var(--color-week-3)',
    objectives: [
      'Understand the difference between packages, projects, and agents',
      'Create your first AI package from your documented workflow',
      'Test and iterate on your package until it reliably produces useful output',
      'Share your package with a peer for feedback',
    ],
    flow: [
      { time: '0:00', activity: 'Homework review — SOP documents, AI suggestions', format: 'Quick share-out' },
      { time: '0:08', activity: 'Packages vs. Projects vs. Agents: The training wheels analogy', format: 'Teaching' },
      { time: '0:15', activity: 'Anatomy of a good package: instruction, knowledge, examples', format: 'Teaching + demo' },
      { time: '0:22', activity: 'Exercise: "Build Your Package" — using the meta prompt technique, convert your SOP into a working package', format: 'Guided hands-on' },
      { time: '0:42', activity: 'Test your package with real inputs — does it work? Iterate.', format: 'Individual work' },
      { time: '0:50', activity: 'Peer swap: Share your package with a partner. Can they use it without explanation?', format: 'Paired activity' },
      { time: '0:55', activity: 'Debrief: What broke? What worked?', format: 'Group discussion' },
      { time: '0:58', activity: 'Homework introduction', format: 'Facilitator-led' },
    ],
    platforms: {
      chatgpt: 'Create > Configure Custom GPT (instructions + knowledge files)',
      claude: 'Create a Project with system instructions + reference documents',
      gemini: 'Create a Gem with instructions + uploaded files (up to 10)',
    },
    homework: [
      'Refine your package based on peer feedback',
      'Use your package at least 3 times in real work this week',
      'Start documenting a second workflow for Week 5-6',
      'Note what\'s missing — what does the package need to "know" that it doesn\'t?',
    ],
    assessment: [
      'One working AI package created and tested',
      'Package tested by a peer (peer feedback captured)',
      'Can explain package vs. project vs. agent distinction',
    ],
  },
  {
    num: 4, title: 'Teach It Your Voice and Your World', theme: 'Knowledge, context, and making AI sound like you', compas: 'Partnership', color: 'var(--color-week-4)',
    objectives: [
      'Upload organizational knowledge to your AI (policies, templates, reference docs)',
      'Train your AI on your communication voice and style',
      'Understand memory, context windows, and what AI retains vs. forgets',
      'Configure a Project/workspace as the persistent home for your PAI',
    ],
    flow: [
      { time: '0:00', activity: 'Homework review — how did the package perform in real work?', format: 'Group discussion' },
      { time: '0:08', activity: 'Memory, context, and persistence — what AI remembers and what it doesn\'t', format: 'Teaching' },
      { time: '0:18', activity: 'Exercise: "Voice Calibration" — give AI 3 emails you\'ve written. Ask it to describe your voice. Then draft a new email in your style. Compare.', format: 'Individual hands-on' },
      { time: '0:30', activity: 'Uploading organizational context: policies, templates, org charts, FAQs', format: 'Demo + guided hands-on' },
      { time: '0:40', activity: 'Exercise: "Build Your PAI Workspace" — set up a dedicated Project/GPT/Gem with identity docs, voice samples, org knowledge, and workflow SOPs', format: 'Individual work' },
      { time: '0:50', activity: 'Security checkpoint: What did you upload? Is any of it sensitive? Where does it live? Plus cognitive security: Review your Metacognitive Readiness Assessment results from Week 1 — has anything changed? Exercise: Run the Disagreement Audit — ask your AI to argue against a position you hold strongly on a current work issue. Does it push back substantively, or fold when you push back on its pushback? That pattern tells you how sycophantic your setup is. The research is clear: high capability + low self-awareness + intellectual isolation is the highest-risk profile for personal AI use.', format: 'Group discussion' },
      { time: '0:55', activity: 'Homework introduction', format: 'Facilitator-led' },
    ],
    platforms: null,
    homework: [
      'Add at least 3 organizational documents to your PAI workspace',
      'Draft 5 work communications using your PAI and rate: does this sound like me? (1-5)',
      'Document your second workflow SOP (for Week 5-6)',
      'Security self-check: review what you\'ve uploaded and where',
    ],
    assessment: [
      'PAI workspace configured with identity + org knowledge',
      'Voice calibration exercise completed (AI drafts match your style)',
      'Second workflow documented',
      'Security self-check completed',
    ],
  },
  {
    num: 5, title: 'Put Your PAI to Work', theme: 'Multi-step workflows, real tasks, and the path toward agents', compas: 'Assessment', color: 'var(--color-week-5)',
    objectives: [
      'Use your PAI to complete a real multi-step work task end-to-end (not a demo — real work)',
      'Understand the spectrum from "AI-assisted task" to "agent" (and where you sit today)',
      'Apply the Sorcerer\'s Apprentice lesson: why constraints matter more than capabilities',
      'Document a second workflow and configure your PAI to handle it',
    ],
    flow: [
      { time: '0:00', activity: 'Homework review — PAI workspace, voice calibration results', format: 'Quick share-out' },
      { time: '0:08', activity: 'The Sorcerer\'s Apprentice: why constraints matter more than capabilities', format: 'Teaching (story + real bot-flood example)' },
      { time: '0:15', activity: 'The autonomy spectrum: from "I ask, it drafts" to "it runs on its own"', format: 'Teaching + discussion' },
      { time: '0:22', activity: 'Multi-step workflow design: chaining tasks together in your PAI', format: 'Demo' },
      { time: '0:30', activity: 'Exercise: "Real Work, Real Time" — bring a genuine pending task and complete it using your PAI. Actual work product.', format: 'Individual hands-on' },
      { time: '0:45', activity: 'Share-out: What did your PAI produce? What did you have to fix?', format: 'Group discussion' },
      { time: '0:50', activity: 'The road to agents: what changes when the AI initiates instead of you? (Preview, not build)', format: 'Teaching' },
      { time: '0:55', activity: 'Homework: prepare for Week 6 showcase', format: 'Facilitator-led' },
    ],
    platforms: {
      chatgpt: 'Use your Custom GPT with multi-step instructions in a Project',
      claude: 'Use your Project with chained instructions across conversation turns',
      gemini: 'Use your Gem with Google Workspace documents as live context',
    },
    homework: [
      'Complete at least 3 real work tasks using your PAI this week',
      'Document: What worked? What did you have to fix? What\'s still missing?',
      'Prepare a 3-minute showcase for Week 6 (demo your PAI in action)',
      'Write your "Before & After" — what did this workflow look like before vs. now?',
    ],
    assessment: [
      'At least one real work task completed using PAI',
      'Second workflow documented and configured in PAI',
      'Can explain the spectrum from AI-assisted to agent',
      'Showcase preparation started',
    ],
  },
  {
    num: 6, title: 'Showcase, Reflect, and Road Ahead', theme: 'Demonstration, peer learning, and sustainable practice', compas: 'Sharing', color: 'var(--color-week-6)',
    objectives: [
      'Present your working PAI to the cohort',
      'Give and receive structured peer feedback',
      'Create a personal AI roadmap for the next 90 days',
      'Understand the path from here to more advanced agent workflows',
    ],
    flow: [
      { time: '0:00', activity: 'Setting the stage — celebration of what was built', format: 'Facilitator-led' },
      { time: '0:05', activity: 'Showcase presentations — each participant demos their PAI (3 min each)', format: 'Participant-led' },
      { time: '0:35', activity: 'Peer feedback: What impressed you? What would you steal?', format: 'Structured group activity' },
      { time: '0:42', activity: 'Exercise: "90-Day Roadmap" — What will you build next? What skills? Maintenance plan?', format: 'Individual work' },
      { time: '0:50', activity: 'The road ahead: from PAI to team AI, from one agent to workflows', format: 'Teaching' },
      { time: '0:55', activity: 'Program close: post-survey, MTM Together community, ongoing resources', format: 'Facilitator-led' },
    ],
    platforms: null,
    homework: [],
    assessment: [
      'Showcase presentation delivered',
      '90-day personal AI roadmap completed',
      'Post-program assessment survey completed',
      'Before & After document submitted',
    ],
  },
]

const KIRKPATRICK = [
  {
    level: 4, name: 'Results', subtitle: 'Organizational Outcomes',
    items: [
      'Participants save 3-5 hours/week on repetitive cognitive tasks within 60 days',
      'At least one documented, repeatable AI workflow is in active daily/weekly use',
      'Participant can articulate their organization\'s AI opportunity to leadership, board, or funders',
      'Shadow AI risk decreases — participants understand where data goes and why it matters',
      'Foundation exists for future agent adoption (documented SOPs, custom instructions, packages)',
    ],
    measure: 'Post-program survey at 30 and 60 days',
  },
  {
    level: 3, name: 'Behavior', subtitle: 'What Participants Do Differently',
    items: [
      'Open their AI tool daily as a work partner, not a novelty',
      'Document a workflow before trying to automate it (SOPs first, AI second)',
      'Configure and maintain custom instructions that reflect their role, context, and voice',
      'Build and iterate on AI packages (Custom GPTs / Gems / Skills) for repeatable tasks',
      'Run at least one multi-step workflow the AI handles with minimal supervision',
      'Evaluate new AI tools against a framework (not hype cycles)',
      'Articulate data privacy boundaries clearly',
    ],
    measure: 'Week 6 showcase — each participant demonstrates their working PAI',
  },
  {
    level: 2, name: 'Learning', subtitle: 'Knowledge & Mindset Shifts',
    items: [
      'How AI tools store, process, and learn from your data',
      'The difference between prompting, packages, projects, and agents',
      'How to document a workflow as an SOP an AI could follow',
      'How to write custom instructions that give AI persistent identity',
      'Platform-specific mechanics: Custom GPTs, Gems, Projects',
    ],
    beliefs: [
      '"I can build this" — the skill is clear communication, not coding',
      '"Documentation is infrastructure" — SOPs are building your AI\'s brain',
      '"Start small, increment" — packages before agents',
      '"My voice matters" — the AI should sound like me',
      '"Safety is part of the design, not an afterthought"',
      '"My AI is a mirror, not an oracle" — it reflects my thinking patterns, including my biases. Self-awareness is the real safeguard.',
    ],
    measure: 'Weekly reflections + pre/post self-assessment',
  },
  {
    level: 1, name: 'Reaction', subtitle: 'Engagement & Experience',
    items: [
      'Sessions feel practical — participants build something every week',
      'Platform-specific guidance prevents frustration',
      'Cohort creates peer accountability and idea cross-pollination',
      'Office hours provide a safety net for people who get stuck',
      'The arc feels like building toward something real',
    ],
    measure: 'Session pulse feedback + attendance trends',
  },
]

const MATERIALS = [
  { name: '"Write Your User Manual" template', weeks: 'Week 1', notes: 'Structured prompts for role, org, voice, preferences' },
  { name: 'The Mirror Effect research brief', weeks: 'Week 1', notes: 'AI sycophancy evidence, confirmation bias risks, the self-knowledge safeguard (peer-reviewed citations)' },
  { name: 'Metacognitive Readiness Assessment', weeks: 'Weeks 1, 4', notes: 'are-you-ready-for-a-personal-ai.mtmapps.now — 5-10 min self-assessment, no data collected' },
  { name: 'MIT CSAIL: Sycophantic Chatbots Cause Delusional Spiraling', weeks: 'Week 1', notes: 'arxiv.org/abs/2602.19141 — formal proof that even rational reasoners spiral' },
  { name: 'CHT: Echo Chambers of One', weeks: 'Week 1', notes: 'centerforhumanetechnology.substack.com — MIT Media Lab research on individual AI echo chambers' },
  { name: 'Costello et al.: AI Reduces Conspiracy Beliefs', weeks: 'Week 1', notes: 'science.org — structured AI dialogue improves thinking (the hopeful counterpoint)' },
  { name: 'Platform setup guides (x3)', weeks: 'Week 1', notes: 'ChatGPT, Claude, Gemini custom instructions walkthrough' },
  { name: 'Square Wheel Calculator', weeks: 'Week 2', notes: 'Joshua\'s existing tool' },
  { name: 'Workflow Breakdown Worksheet', weeks: 'Week 2', notes: 'Trigger > Steps > Decisions > Output template' },
  { name: 'Meta Prompt template', weeks: 'Week 3', notes: 'For converting SOPs into package instructions' },
  { name: 'Package creation guides (x3)', weeks: 'Week 3', notes: 'Custom GPT, Gem, Project step-by-step' },
  { name: 'Voice calibration exercise guide', weeks: 'Week 4', notes: '"Give AI 3 emails, ask it to describe your voice"' },
  { name: 'Security self-check checklist', weeks: 'Week 4', notes: 'What did you upload? Where? Sensitive?' },
  { name: 'Multi-step workflow worksheet', weeks: 'Week 5', notes: 'Task > Steps > Constraints > Output > Checkpoint' },
  { name: '90-Day Roadmap template', weeks: 'Week 6', notes: 'Next builds, skills, maintenance plan' },
  { name: 'Pre/post assessment surveys', weeks: 'Weeks 1, 6', notes: 'Quantitative + qualitative' },
  { name: '30/60-day follow-up surveys', weeks: 'Post-program', notes: 'Retention and impact measurement' },
]

const DATES = [
  { week: 1, date: 'April 23', topic: 'Know Yourself Before You Build' },
  { week: 2, date: 'April 30', topic: 'Document Before You Automate' },
  { week: 3, date: 'May 7', topic: 'Build Your First Package' },
  { week: 4, date: 'May 14', topic: 'Teach It Your Voice and Your World' },
  { week: 5, date: 'May 21', topic: 'Put Your PAI to Work' },
  { week: 6, date: 'May 28', topic: 'Showcase, Reflect, and Road Ahead' },
]

function Nav({ activeSection }) {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'kirkpatrick', label: 'Kirkpatrick' },
    { id: 'weeks', label: 'Weekly Plan' },
    { id: 'materials', label: 'Materials' },
    { id: 'calendar', label: 'Calendar' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-[var(--font-display)] font-bold text-sm text-mtm-navy">PAI Accelerator Curriculum</span>
        <div className="hidden md:flex items-center gap-1">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeSection === s.id ? 'bg-mtm-teal/10 text-mtm-teal' : 'text-ink-muted hover:text-ink'}`}>{s.label}</a>
          ))}
        </div>
        <span className="text-xs text-ink-faint font-[var(--font-mono)]">For Kim</span>
      </div>
    </nav>
  )
}

function WeekCard({ week, isExpanded, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button onClick={onToggle} className="w-full text-left p-6 md:p-8 flex items-start gap-5 cursor-pointer">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-[var(--font-display)] text-2xl font-bold shrink-0" style={{ backgroundColor: week.color }}>
          {week.num}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-ink">{week.title}</h3>
            <span className="px-2.5 py-1 rounded-full text-xs font-[var(--font-mono)] font-semibold text-white shrink-0" style={{ backgroundColor: week.color }}>{week.compas}</span>
          </div>
          <p className="text-sm text-ink-muted">{week.theme}</p>
        </div>
        <svg className={`w-5 h-5 text-ink-faint shrink-0 mt-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>

      {isExpanded && (
        <div className="px-6 md:px-8 pb-8 space-y-6 border-t border-black/5 pt-6">
          {/* Learning Objectives */}
          <div>
            <h4 className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-wider mb-3">Learning Objectives</h4>
            <ol className="space-y-2">
              {week.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed">
                  <span className="font-[var(--font-mono)] text-xs font-bold text-ink-faint mt-0.5 shrink-0">{i + 1}.</span>
                  {obj}
                </li>
              ))}
            </ol>
          </div>

          {/* Session Flow */}
          <div>
            <h4 className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-wider mb-3">Session Flow (60 min)</h4>
            <div className="space-y-1">
              {week.flow.map((item, i) => (
                <div key={i} className={`flex items-start gap-4 py-2.5 px-3 rounded-lg text-sm ${item.activity.includes('Exercise') ? 'bg-mtm-teal/5 border border-mtm-teal/10' : ''}`}>
                  <span className="font-[var(--font-mono)] text-xs text-ink-faint w-10 shrink-0 mt-0.5">{item.time}</span>
                  <span className="flex-1 text-ink-muted leading-relaxed">{item.activity}</span>
                  <span className="text-xs text-ink-faint shrink-0 hidden sm:block">{item.format}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Guidance */}
          {week.platforms && (
            <div>
              <h4 className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-wider mb-3">Platform-Specific Guidance</h4>
              <div className="grid sm:grid-cols-3 gap-3">
                {Object.entries(week.platforms).map(([platform, guidance]) => (
                  <div key={platform} className="bg-cream rounded-xl p-4 border border-black/5">
                    <p className="font-[var(--font-mono)] text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: platform === 'chatgpt' ? '#10a37f' : platform === 'claude' ? '#d97706' : '#4285f4' }}>
                      {platform === 'chatgpt' ? 'ChatGPT' : platform === 'claude' ? 'Claude' : 'Gemini'}
                    </p>
                    <p className="text-xs text-ink-muted leading-relaxed">{guidance}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teaching Points */}
          {week.teachingPoints && (
            <div>
              <h4 className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-wider mb-3">Key Teaching Points</h4>
              <ul className="space-y-2">
                {week.teachingPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-muted leading-relaxed">
                    <span className="text-mtm-orange mt-1">&#9670;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Homework */}
          {week.homework.length > 0 && (
            <div>
              <h4 className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-wider mb-3">Homework</h4>
              <ol className="space-y-2">
                {week.homework.map((hw, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed">
                    <span className="w-5 h-5 rounded-md border-2 border-black/10 shrink-0 mt-0.5" />
                    {hw}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Assessment */}
          <div>
            <h4 className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-wider mb-3">Assessment Criteria</h4>
            <ul className="space-y-2">
              {week.assessment.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed">
                  <span className="w-5 h-5 rounded-full border-2 border-mtm-teal/30 shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-mtm-teal/40" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [expandedWeek, setExpandedWeek] = useState(null)

  return (
    <div className="min-h-screen">
      <Nav activeSection="overview" />

      <div className="max-w-5xl mx-auto px-6 pt-14">
        {/* ═══ HERO ═══ */}
        <section id="overview" className="py-16 md:py-24 text-center">
          <p className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-[0.2em] mb-4">MTM Accelerator — Curriculum Outline</p>
          <h1 className="font-[var(--font-display)] text-4xl md:text-6xl font-extrabold text-ink leading-[1.1] tracking-tight mb-4">
            Build Your Personal<br />AI <span className="text-mtm-teal">Assistant</span>
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed mb-8">
            A 6-week accelerator helping nonprofit professionals move from "generic AI user" to "someone whose AI actually knows them and works like a partner."
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center"><p className="font-[var(--font-display)] text-3xl font-bold text-ink">6</p><p className="text-xs text-ink-faint">weeks</p></div>
            <div className="text-center"><p className="font-[var(--font-display)] text-3xl font-bold text-ink">1 hr</p><p className="text-xs text-ink-faint">live / week</p></div>
            <div className="text-center"><p className="font-[var(--font-display)] text-3xl font-bold text-ink">0</p><p className="text-xs text-ink-faint">coding</p></div>
            <div className="text-center"><p className="font-[var(--font-display)] text-3xl font-bold text-ink">3</p><p className="text-xs text-ink-faint">platforms</p></div>
          </div>

          <div className="bg-white rounded-2xl border border-black/5 p-6 md:p-8 text-left max-w-3xl mx-auto shadow-sm">
            <h2 className="font-[var(--font-display)] text-xl font-bold text-ink mb-4">Program Details</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div><span className="font-[var(--font-mono)] text-xs text-ink-faint uppercase">Format</span><p className="text-ink-muted mt-1">Thursdays 2:00-3:00 PM ET + separate office hours</p></div>
              <div><span className="font-[var(--font-mono)] text-xs text-ink-faint uppercase">Dates</span><p className="text-ink-muted mt-1">April 23 - May 28, 2026</p></div>
              <div><span className="font-[var(--font-mono)] text-xs text-ink-faint uppercase">Facilitators</span><p className="text-ink-muted mt-1">Joshua Peskay & Kim Snyder</p></div>
              <div><span className="font-[var(--font-mono)] text-xs text-ink-faint uppercase">Pricing</span><p className="text-ink-muted mt-1">Paid per person (TBD)</p></div>
              <div><span className="font-[var(--font-mono)] text-xs text-ink-faint uppercase">Platforms</span><p className="text-ink-muted mt-1">ChatGPT Plus, Claude Pro, Gemini Advanced</p></div>
              <div><span className="font-[var(--font-mono)] text-xs text-ink-faint uppercase">Community</span><p className="text-ink-muted mt-1">MTM Together (async support)</p></div>
            </div>
            <div className="mt-6 p-4 bg-mtm-orange/5 border border-mtm-orange/10 rounded-xl">
              <p className="text-sm text-ink-muted leading-relaxed">
                <span className="font-semibold text-mtm-orange">Note on Copilot:</span> Microsoft Copilot (consumer/Pro) lacks the custom persona, projects, and memory features required for this program's core exercises. Participants should use ChatGPT Plus, Claude Pro, or Gemini Advanced (all $20/month).
              </p>
            </div>
          </div>
        </section>

        {/* ═══ KIRKPATRICK ═══ */}
        <section id="kirkpatrick" className="pb-16 md:pb-24">
          <div className="text-center mb-12">
            <p className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-[0.2em] mb-2">Design Framework</p>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-ink">Kirkpatrick Model</h2>
            <p className="text-sm text-ink-muted mt-2">Working backwards from organizational outcomes to engagement design</p>
          </div>

          <div className="space-y-4">
            {KIRKPATRICK.map(k => (
              <div key={k.level} className="bg-white rounded-2xl border border-black/5 p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-mtm-navy flex items-center justify-center">
                    <span className="font-[var(--font-display)] text-xl font-bold text-white">{k.level}</span>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] text-xl font-bold text-ink">{k.name}</h3>
                    <p className="text-xs text-ink-faint">{k.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {k.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-muted leading-relaxed">
                      <span className="text-mtm-teal mt-1 shrink-0">&#8226;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {k.beliefs && (
                  <div className="mt-4 p-4 bg-cream-warm rounded-xl">
                    <p className="font-[var(--font-mono)] text-xs font-semibold text-mtm-orange uppercase tracking-wider mb-2">Mindset Shifts</p>
                    <ul className="space-y-1.5">
                      {k.beliefs.map((b, i) => (
                        <li key={i} className="text-sm text-ink-muted italic leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4 flex items-center gap-2">
                  <span className="font-[var(--font-mono)] text-xs text-ink-faint uppercase">Measured by:</span>
                  <span className="text-xs text-ink-muted">{k.measure}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ WEEKLY PLAN ═══ */}
        <section id="weeks" className="pb-16 md:pb-24">
          <div className="text-center mb-12">
            <p className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-[0.2em] mb-2">The Journey</p>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-ink">6-Week Curriculum</h2>
            <p className="text-sm text-ink-muted mt-2">Click any week to expand the full session plan</p>
          </div>

          {/* Visual arc */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {WEEKS.map(w => (
              <div key={w.num} className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: w.color }} onClick={() => setExpandedWeek(expandedWeek === w.num ? null : w.num)}>
                  {w.num}
                </div>
                <span className="text-[9px] md:text-[10px] font-[var(--font-mono)] text-ink-faint uppercase">{w.compas}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {WEEKS.map(w => (
              <WeekCard key={w.num} week={w} isExpanded={expandedWeek === w.num} onToggle={() => setExpandedWeek(expandedWeek === w.num ? null : w.num)} />
            ))}
          </div>
        </section>

        {/* ═══ MATERIALS ═══ */}
        <section id="materials" className="pb-16 md:pb-24">
          <div className="text-center mb-12">
            <p className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-[0.2em] mb-2">For Kim to Develop</p>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-ink">Materials Checklist</h2>
          </div>

          <div className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-0 text-xs font-[var(--font-mono)] text-ink-faint uppercase tracking-wider px-6 py-3 border-b border-black/5 bg-cream">
              <span>Material</span>
              <span className="text-center">When</span>
              <span className="text-right">Notes</span>
            </div>
            {MATERIALS.map((m, i) => (
              <div key={i} className={`grid grid-cols-[1fr_auto_1fr] gap-4 items-start px-6 py-4 text-sm ${i < MATERIALS.length - 1 ? 'border-b border-black/5' : ''}`}>
                <span className="font-medium text-ink">{m.name}</span>
                <span className="font-[var(--font-mono)] text-xs text-ink-faint text-center">{m.weeks}</span>
                <span className="text-ink-muted text-right text-xs leading-relaxed">{m.notes}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CALENDAR ═══ */}
        <section id="calendar" className="pb-16 md:pb-24">
          <div className="text-center mb-12">
            <p className="font-[var(--font-mono)] text-xs font-semibold text-mtm-teal uppercase tracking-[0.2em] mb-2">Schedule</p>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold text-ink">Session Calendar</h2>
            <p className="text-sm text-ink-muted mt-2">Thursdays 2:00-3:00 PM ET + separate office hours (TBD)</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {DATES.map(d => (
              <div key={d.week} className="bg-white rounded-2xl border border-black/5 p-5 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: WEEKS[d.week - 1].color }}>
                  {d.week}
                </div>
                <p className="font-[var(--font-display)] text-lg font-bold text-ink">{d.date}</p>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">{d.topic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ PREREQUISITES ═══ */}
        <section className="pb-16 md:pb-24">
          <div className="bg-mtm-navy rounded-2xl p-8 md:p-10 text-white text-center">
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold mb-4">Prerequisites</h2>
            <div className="max-w-2xl mx-auto space-y-3 text-left">
              {[
                'A paid subscription to ONE of: ChatGPT Plus ($20/mo), Claude Pro ($20/mo), or Gemini Advanced ($20/mo)',
                'Comfort with basic computer tasks (email, documents, web browsing)',
                'At least one repeatable work task they want to improve',
                'Willingness to commit 1 hour/week live + 1-2 hours/week practice',
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                  <span className="text-mtm-teal font-bold mt-0.5">{i + 1}.</span>
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {['No coding experience', 'No prior AI experience', 'No technical background'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-medium">{tag} required</span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer className="border-t border-black/5 py-8 text-center">
          <p className="text-sm text-ink-muted font-semibold">Meet the Moment</p>
          <p className="text-xs text-ink-faint mt-1">Prepared for Kim Snyder, March 28, 2026</p>
          <p className="text-[10px] text-ink-faint mt-3">This document was drafted with AI assistance and reviewed before sharing.</p>
        </footer>
      </div>
    </div>
  )
}
