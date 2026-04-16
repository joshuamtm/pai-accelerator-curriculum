// Platform-specific PAI architecture data for the Accelerator curriculum
// Research date: April 16, 2026

export const PLATFORMS = {
  google: {
    id: 'google',
    name: 'Google Gemini',
    color: '#4285f4',
    icon: '◆',
    tier: 'Free (Nonprofit Workspace) or $20/mo (Advanced)',
    nonprofitCost: '$0/user (donated license via Google for Nonprofits — full equivalent of paid tier) or $3.50/user/mo (Business Standard, 75% off)',
    individualCost: '$0 (nonprofit donated license) or $20/mo (Google One AI Premium for individuals)',
    dataPrivacy: 'Enterprise data protections included on free nonprofit tier. No human review, no model training on your data.',
    summary: 'Best for organizations already on Google Workspace. Google donates a full Workspace license to nonprofits at no cost, including Gems and NotebookLM with enterprise data protections. Strongest native integration with Gmail, Calendar, and Drive — but memory does not persist inside Gems.',

    architecture: {
      container: 'Gem (persona) + NotebookLM notebook (knowledge)',
      identity: 'Gem instruction field (no hard character limit documented)',
      knowledge: 'NotebookLM notebook — 50 sources free, 300 on paid tiers',
      memory: 'Personal Context exists but does NOT work inside Gems',
      integrations: 'Gmail, Calendar, Drive, Keep, Tasks (included on free nonprofit tier — admin must enable)',
      scheduling: 'None — no equivalent to Tasks or Routines',
      voice: 'Not separately configurable — defined in Gem instructions only',
    },

    setup: [
      {
        step: 1,
        title: 'Create your COMPAS notebook',
        detail: 'Open NotebookLM (notebooklm.google.com). Create a new notebook called "My COMPAS." Upload your 6 COMPAS markdown files as sources.',
        tip: 'NotebookLM gives you bonus tools — try generating an Audio Overview of your COMPAS files to hear your PAI identity read back to you.',
      },
      {
        step: 2,
        title: 'Create your PAI Gem',
        detail: 'Open Gemini (gemini.google.com). Go to Gem Manager and create a new Gem called "My PAI." Write instructions that define your role, organization, communication style, and how you want the AI to behave.',
        tip: 'Since memory doesn\'t work in Gems, front-load the most important identity context in your instructions. Think: "If my AI forgot everything except these instructions, would it still know who I am?"',
      },
      {
        step: 3,
        title: 'Link your notebook to your Gem',
        detail: 'In your Gem\'s Knowledge section, add your "My COMPAS" NotebookLM notebook. The Gem now has access to all your COMPAS documents and can reason against them.',
        tip: 'When you add new sources to your NotebookLM notebook later, the Gem automatically gets access — no re-linking needed.',
      },
      {
        step: 4,
        title: 'Enable Workspace apps',
        detail: 'In Gemini, connect your Google Workspace apps: Gmail, Google Calendar, Google Drive, Keep, and Tasks. This gives your Gem access to your live work data. This is available on the free nonprofit tier — but your organization\'s Workspace admin must enable it first in Admin Console → Apps → Gemini → Workspace apps.',
        tip: 'If you don\'t see the connection options, ask your IT admin to enable "Workspace apps in Gemini" in the Admin Console. It\'s available on the free nonprofit tier but is not turned on by default.',
      },
      {
        step: 5,
        title: 'Test your PAI',
        detail: 'Open your Gem and ask: "Based on my COMPAS files, who am I and what do I do?" Then ask it to check your calendar for this week. Verify it can access both your knowledge base and your live data.',
        tip: 'Bookmark your Gem — you\'ll open it every time you want to work with your PAI.',
      },
    ],

    weeklyGuidance: {
      1: 'Create your NotebookLM notebook and upload your "Write Your User Manual" draft as the first source. Create a Gem with your initial identity instructions. Link the notebook to the Gem.',
      2: 'Upload your workflow SOP to the NotebookLM notebook. Ask your Gem to review it: "Based on what you know about me, how would you improve this workflow?"',
      3: 'Create a second Gem for your specific workflow (e.g., "Meeting Prep Assistant"). Link the same COMPAS notebook for identity, plus a new notebook with workflow-specific templates.',
      4: 'Add 3+ organizational documents to your NotebookLM notebook (policies, templates, org chart). Update your Gem instructions with voice/tone guidance. Enable Gmail and Calendar if not already done.',
      5: 'Use your Gem for a real multi-step work task. Test: Can it check your email, reference your org docs, and draft a response in your voice — all in one conversation?',
      6: 'Prepare your showcase. Create a "90-Day Roadmap" notebook in NotebookLM with your plans for continued PAI development.',
    },

    strengths: [
      'Google donates a full Workspace license to nonprofits at no cost — Gems + NotebookLM + enterprise data protections included',
      'NotebookLM is uniquely powerful for document-grounded AI (citations, audio overviews, study guides)',
      'Native integration with Google Workspace (if licensing allows)',
      'Gems + NotebookLM integration auto-syncs — add a source, Gem sees it immediately',
      'Audio Overviews let you "listen" to your COMPAS files — unique onboarding experience',
    ],

    limitations: [
      'Memory does NOT persist inside Gems — each conversation starts fresh',
      'No scheduled tasks or proactive notifications',
      'Workspace apps available on free tier but admin must enable in Admin Console (not on by default)',
      'New "Gemini Notebooks" feature (April 2026) not yet available for Workspace accounts',
      'Voice/style cannot be separately configured — only through instructions',
      'Gem instruction character limits are undocumented and may be inconsistently enforced',
    ],

    memoryWorkaround: 'Since Gems don\'t retain memory across conversations, put your most critical identity context directly in the Gem instructions. Think of it as your "business card" — the minimum your AI needs to know about you every time it meets you. For ongoing project context, start each session by telling your Gem: "Here\'s what we\'re working on today..." The lack of memory is the biggest trade-off on this platform.',

    compasMapping: {
      where: 'NotebookLM notebook (6 files as sources) → linked to your Gem',
      instructions: 'Gem instruction field — condensed identity from your COMPAS files',
      persistence: 'Files persist in NotebookLM permanently. Conversation context does not persist.',
    },
  },

  claude: {
    id: 'claude',
    name: 'Anthropic Claude',
    color: '#d97706',
    icon: '●',
    tier: 'Pro ($20/mo) or Nonprofit Teams ($8/seat/mo)',
    nonprofitCost: '$8/seat/mo (Claude for Nonprofits Teams plan, min 5 seats)',
    individualCost: '$20/mo (Pro)',
    dataPrivacy: 'No model training on paid plans. Contractual guarantee on Teams. Claude for Nonprofits includes sector-specific data protections.',
    summary: 'Most coherent PAI architecture of the three. Projects with uploaded files, persistent memory, Google Workspace connectors, custom voice styles, and new Desktop Routines create the closest thing to a true personal AI assistant on a consumer platform.',

    architecture: {
      container: 'Project',
      identity: 'Project instructions (~1,500 characters) + uploaded COMPAS files',
      knowledge: 'Project file uploads (30MB each, unlimited files on Pro)',
      memory: 'Global + project-scoped memory, auto-synthesized every 24 hours',
      integrations: 'Google Workspace connectors (Gmail, Calendar, Drive) built into Pro',
      scheduling: 'Desktop Routines — 5/day on Pro (requires desktop app running)',
      voice: 'Custom Styles — upload writing samples, Claude generates a matching style profile',
    },

    setup: [
      {
        step: 1,
        title: 'Create your PAI Project',
        detail: 'Go to claude.ai → Projects → Create New Project. Name it "My PAI." Write your project instructions — a tight summary of who you are, your role, your organization, and how you want Claude to work with you. You have roughly 1,500 characters.',
        tip: 'Think of project instructions as your elevator pitch to your AI. You have about 3 short paragraphs. Focus on: who you are, what you do, how you communicate, and what you need help with. Your uploaded files provide the depth.',
      },
      {
        step: 2,
        title: 'Upload your COMPAS files',
        detail: 'Upload all 6 COMPAS markdown files to your Project\'s knowledge base. Claude will reference these in every conversation within the Project.',
        tip: 'You can also upload org docs, templates, writing samples, and reference materials alongside your COMPAS files. Claude\'s Project knowledge base is generous — unlimited files, 30MB each.',
      },
      {
        step: 3,
        title: 'Create your Custom Style',
        detail: 'Go to Settings → Styles → Create Style. Upload 3+ examples of your own writing (emails, reports, memos). Claude analyzes them and generates a voice profile. Name it something like "My Voice."',
        tip: 'Choose writing samples that represent how you actually communicate at work — not your most polished public writing. The goal is that when Claude drafts something, a colleague wouldn\'t be able to tell you didn\'t write it.',
      },
      {
        step: 4,
        title: 'Connect Google Workspace',
        detail: 'Go to Settings → Connectors. Connect Gmail, Google Calendar, and Google Drive. Claude can now search your email, check your schedule, and reference your Drive documents.',
        tip: 'Claude can draft emails but cannot send them — you always review and hit send yourself. This is a feature, not a limitation. It means your AI can\'t accidentally email your board chair something embarrassing.',
      },
      {
        step: 5,
        title: 'Enable Memory',
        detail: 'Memory should be on by default. Verify at Settings → Capabilities. As you use Claude, it builds a running understanding of your preferences, projects, and working style. Project memory is separate from global memory.',
        tip: 'Memory synthesizes every 24 hours, not in real-time. In your first few sessions, explicitly tell Claude important things: "Remember that I always want meeting notes in bullet format" or "I prefer direct communication over diplomatic hedging."',
      },
      {
        step: 6,
        title: 'Set up Desktop Routines (optional)',
        detail: 'Install the Claude Desktop app. Go to Routines and create a recurring task, like: "Every weekday morning at 8am, check my Google Calendar and draft a one-paragraph summary of today\'s meetings with any prep notes." Pro allows 5 routines per day.',
        tip: 'Routines require the desktop app to be running. This feature launched April 14, 2026 — it\'s very new. Start with one simple routine and see how it performs before building more.',
      },
    ],

    weeklyGuidance: {
      1: 'Create your Project and upload your "Write Your User Manual" draft. Write your Project instructions (1,500 chars). Create a Custom Style from 3 writing samples. Test: ask Claude "Who am I?" within your Project.',
      2: 'Upload your workflow SOP to the Project. Ask Claude to review it against your COMPAS files: "Given what you know about my role and priorities, how would you improve this workflow?"',
      3: 'Create a second Project for your specific workflow (e.g., "Grant Writing"). Upload workflow-specific templates and reference docs. Set the Project instructions to define the workflow behavior.',
      4: 'Connect Gmail, Calendar, and Drive. Test: "What\'s on my calendar this week?" and "Summarize my last 5 emails from [sender]." Add 3 org docs to your main Project. Refine your Custom Style.',
      5: 'Use your PAI Project for a real multi-step task. Try a Desktop Routine if on the desktop app. Test: Can Claude check your calendar, pull relevant docs from Drive, and draft a deliverable in your voice?',
      6: 'Prepare your showcase. Ask Claude to help you create a "90-Day Roadmap" artifact for your continued PAI development.',
    },

    strengths: [
      'Most coherent PAI architecture — Projects + Memory + Connectors + Styles work together naturally',
      'Custom Styles from writing samples is unique — real voice calibration, not just tone adjustment',
      'Google Workspace connectors built into Pro — no extra cost or configuration complexity',
      'Memory works both globally and per-project — context builds over time',
      'Desktop Routines add proactive behavior (check calendar, draft morning brief)',
      'Claude for Nonprofits at $8/seat is the best org-level deal for AI',
      'Artifacts produce shareable, persistent deliverables (documents, tools, visualizations)',
      'No model training on paid plans — contractual data protection',
    ],

    limitations: [
      'Project instructions limited to ~1,500 characters — requires tight, prioritized writing',
      'Memory synthesizes every 24 hours — not real-time. First-day context may be thin',
      'Desktop Routines require the desktop app to be running (won\'t fire if app is closed)',
      'Desktop Routines are very new (April 14, 2026) — reliability is unproven',
      'Gmail connector drafts only — cannot send email autonomously',
      'No web search by default (use Research mode or web connector)',
      'Claude for Nonprofits requires minimum 5 seats',
    ],

    memoryWorkaround: 'Claude\'s memory works well but has a 24-hour synthesis lag. In your first week of use, be intentional about priming: tell Claude explicitly what to remember. "I prefer bullet points." "Our fiscal year starts July 1." "When I say \'the board\' I mean our 12-person Board of Directors." After the first week, memory compounds and Claude starts anticipating your preferences without prompting.',

    compasMapping: {
      where: 'Project knowledge base (6 files uploaded directly)',
      instructions: 'Project instructions field — ~1,500 characters summarizing your COMPAS identity',
      persistence: 'Files persist permanently in the Project. Memory persists across conversations within the Project. Custom Style persists globally.',
    },
  },

  chatgpt: {
    id: 'chatgpt',
    name: 'OpenAI ChatGPT',
    color: '#10a37f',
    icon: '◇',
    tier: 'Plus ($20/mo) or Business ($25-30/user/mo)',
    nonprofitCost: '~$20/user/mo (ChatGPT Business with 20% nonprofit discount via Goodstack; Enterprise up to 50% off via sales)',
    individualCost: '$20/mo (Plus)',
    dataPrivacy: 'Plus: conversations train models by default — must opt out in Settings → Data Controls. Business: no training, contractual guarantee. Nonprofit Business at ~$20/user/mo gives you Business-tier data protections at a Plus price point.',
    summary: 'Strong PAI platform with the most mature scheduling feature (Tasks) and good document workflow tools (Canvas). Projects provide persistent file context and scoped memory. Nonprofit orgs get 20% off Business tier via Goodstack, bringing data-protected Business to roughly the same price as Plus.',

    architecture: {
      container: 'Project (recommended) — not Custom GPT',
      identity: 'Custom Instructions (1,500 + 1,500 chars global) + Project instructions',
      knowledge: 'Project files (25 files on Plus, 512MB each)',
      memory: 'Global + project-scoped memory, references all past conversations',
      integrations: 'Native connectors: Gmail, Calendar, Drive, Outlook, Teams, Canva, Dropbox',
      scheduling: 'Tasks — 10 active scheduled/recurring tasks',
      voice: 'Not separately configurable — defined in Custom Instructions only',
    },

    setup: [
      {
        step: 1,
        title: 'Check your data privacy settings',
        detail: 'If you\'re on ChatGPT Plus: go to Settings → Data Controls → "Improve the model for everyone" → turn OFF. This prevents your conversations from being used to train OpenAI\'s models. If your organization has ChatGPT Business (available to nonprofits at ~$20/user via Goodstack), data training is off by default — no action needed.',
        tip: 'If your org qualifies for ChatGPT Business nonprofit pricing, it\'s the same ~$20/user as Plus but with contractual data protections and admin controls. Worth asking your IT team about. Apply at validate.goodstack.org/openai.',
      },
      {
        step: 2,
        title: 'Set your Custom Instructions',
        detail: 'Go to Settings → Personalization → Custom Instructions. Fill in both fields: (1) "What would you like ChatGPT to know about you?" — your role, org, context (1,500 chars). (2) "How would you like ChatGPT to respond?" — your preferences for tone, format, approach (1,500 chars).',
        tip: 'Custom Instructions apply globally across all conversations and Projects. Think of this as your "always-on" identity. Put your most essential context here — it\'s the foundation everything else builds on.',
      },
      {
        step: 3,
        title: 'Create your PAI Project',
        detail: 'Create a new Project called "My PAI." Upload your 6 COMPAS markdown files. Set the Project instructions to define how ChatGPT should use your COMPAS files and what kind of assistant it should be.',
        tip: 'Enable project-scoped memory: More Options → Memory: Project-only. This keeps your PAI context separate from casual ChatGPT conversations.',
      },
      {
        step: 4,
        title: 'Connect Gmail, Calendar, and Drive',
        detail: 'Go to Settings → Connectors. Connect your Google account (Gmail, Calendar, Drive) or Microsoft account (Outlook, OneDrive). ChatGPT can now reference your email, schedule, and documents.',
        tip: 'Test immediately: "What\'s on my calendar this week?" and "Show me my most recent emails about [topic]." Verify the connection is working before building workflows around it.',
      },
      {
        step: 5,
        title: 'Set up recurring Tasks',
        detail: 'In the chat composer, select "Tasks" or say: "Create a recurring task: Every Monday at 8am, summarize my calendar for the week and suggest what I should prepare for." You can have up to 10 active tasks.',
        tip: 'Tasks deliver results as push notifications. Start with one or two weekly recurring tasks and see how useful the output is before creating more. Good first tasks: weekly calendar summary, Friday reflection prompt.',
      },
      {
        step: 6,
        title: 'Test your PAI',
        detail: 'Inside your Project, ask: "Based on my COMPAS files and what you know about me, who am I and what should I focus on this week?" Verify it references your uploaded files, your memory, and your connected services.',
        tip: 'Use Canvas for any document-length output. When ChatGPT opens Canvas, you can collaboratively edit, adjust reading level, and export to Word or PDF.',
      },
    ],

    weeklyGuidance: {
      1: 'Turn off data training. Set Custom Instructions (both fields). Create your PAI Project and upload your "Write Your User Manual" draft. Test: "Who am I?" Verify it uses both Custom Instructions and your uploaded file.',
      2: 'Upload your workflow SOP to the Project. Ask ChatGPT to review it using Canvas — this gives you an editable, collaborative view of the workflow with suggested improvements.',
      3: 'Create a second Project for your specific workflow. If you want to share your PAI with others, consider building a Custom GPT (8,000-char instructions, 20 files) — but note that memory doesn\'t transfer into Custom GPTs reliably.',
      4: 'Connect Gmail, Calendar, and Drive. Test integration. Add 3 org docs to your PAI Project. Ask ChatGPT to draft an email in your voice and compare against your actual writing style.',
      5: 'Set up 2-3 recurring Tasks (weekly calendar brief, Friday reflection). Use your PAI Project for a real multi-step task with Canvas for the output. Test: Can it check your calendar, reference your files, and produce a document?',
      6: 'Prepare your showcase. Ask ChatGPT to help you create your "90-Day Roadmap" in Canvas and export as a document.',
    },

    strengths: [
      'Most mature scheduling — Tasks with 10 active recurring/scheduled items',
      'Canvas is excellent for document-heavy work (grant writing, policy drafting, reports)',
      'Broadest connector ecosystem (Gmail, Calendar, Drive, Outlook, Teams, Canva, Dropbox)',
      'Memory references all past conversations (since April 2025 upgrade)',
      'Project-scoped memory keeps PAI context separate from casual use',
      'Custom Instructions provide a global identity layer across all interactions',
      'Agent Mode available (limited to 40 messages/month on Plus — demo use only)',
      'Nonprofit Business pricing (~$20/user via Goodstack) gives Business-tier data protections at a Plus price point',
    ],

    limitations: [
      'Data trains OpenAI models by default on Plus — must manually opt out (Business tier does not train)',
      'Memory does NOT reliably transfer into Custom GPTs — use Projects instead',
      'Custom Instructions limited to 1,500 chars per field (3,000 total)',
      'Agent Mode capped at 40 messages/month on Plus — not a daily workflow tool',
      'No custom voice/style feature — only controllable through instructions',
      'Project files limited to 25 on Plus',
    ],

    memoryWorkaround: 'ChatGPT\'s memory is actually the most capable of the three platforms — it now references all past conversations, not just explicitly saved memories. The key is to use project-scoped memory (More Options → Project-only) so your PAI context stays clean. The main gotcha is Custom GPTs: if you build one, it has its own isolated memory space. Stick with Projects as your PAI home.',

    compasMapping: {
      where: 'Project (6 files uploaded directly, up to 25 total)',
      instructions: 'Custom Instructions (global, 3,000 chars total) + Project instructions (project-scoped)',
      persistence: 'Files persist in the Project. Memory persists and references all past conversations. Custom Instructions persist globally.',
    },
  },
}

export const PLATFORM_COMPARISON = {
  features: [
    { feature: 'Monthly cost (individual)', google: '$0 (donated license) or $20', claude: '$20 (Pro)', chatgpt: '$20 (Plus)' },
    { feature: 'Nonprofit org pricing', google: '$0 (donated) or $3.50/user', claude: '$8/seat (Teams)', chatgpt: '~$20/user (Business, 20% off)' },
    { feature: 'PAI container', google: 'Gem + NotebookLM', claude: 'Project', chatgpt: 'Project' },
    { feature: 'COMPAS file storage', google: 'NotebookLM (50 sources)', claude: 'Project files (unlimited)', chatgpt: 'Project files (25)' },
    { feature: 'Instruction limit', google: 'Undocumented', claude: '~1,500 chars', chatgpt: '3,000 chars (global) + project' },
    { feature: 'Memory across sessions', google: 'Not in Gems', claude: 'Yes (24hr lag)', chatgpt: 'Yes' },
    { feature: 'Gmail access', google: 'Via Workspace apps', claude: 'Built-in connector', chatgpt: 'Built-in connector' },
    { feature: 'Calendar access', google: 'Via Workspace apps', claude: 'Built-in connector', chatgpt: 'Built-in connector' },
    { feature: 'Drive access', google: 'Native', claude: 'Built-in connector', chatgpt: 'Built-in connector' },
    { feature: 'Scheduled tasks', google: 'None', claude: 'Routines (5/day, new)', chatgpt: 'Tasks (10 active)' },
    { feature: 'Voice/style config', google: 'Instructions only', claude: 'Custom Styles (writing samples)', chatgpt: 'Instructions only' },
    { feature: 'Document drafting', google: 'Standard chat', claude: 'Artifacts', chatgpt: 'Canvas' },
    { feature: 'Data privacy', google: 'Enterprise protections (donated)', claude: 'No training (paid)', chatgpt: 'Plus trains by default; Business does not' },
    { feature: 'Unique strength', google: 'NotebookLM knowledge grounding', claude: 'Deepest integration + Styles', chatgpt: 'Tasks + Canvas + breadth' },
  ],

  decisionTree: [
    { condition: 'Your organization uses Google Workspace and budget is tight', recommendation: 'google', reason: 'Google donates a full license to nonprofits with enterprise data protections, native Workspace integration, Gems + NotebookLM' },
    { condition: 'You want the most capable, coherent PAI experience', recommendation: 'claude', reason: 'Projects + Memory + Styles + Connectors + Routines work together most naturally' },
    { condition: 'You do a lot of document drafting (grants, policies, reports)', recommendation: 'chatgpt', reason: 'Canvas collaborative editing + export to Word/PDF, plus strong scheduling with Tasks' },
    { condition: 'Your organization is a 501(c)(3) with 5+ potential users', recommendation: 'claude', reason: 'Claude for Nonprofits at $8/seat is the best org-level deal' },
    { condition: 'Data privacy is your top concern', recommendation: 'google', reason: 'Enterprise data protections included in the donated nonprofit license. Claude is also strong. ChatGPT requires manual opt-out on Plus.' },
    { condition: 'You want scheduled, recurring AI tasks (weekly briefs, reminders)', recommendation: 'chatgpt', reason: 'Tasks feature is most mature — 10 active scheduled items. Claude Routines are new and less proven.' },
    { condition: 'You want your AI to learn your writing voice', recommendation: 'claude', reason: 'Custom Styles from writing samples is unique to Claude — no other platform offers this' },
    { condition: 'You already pay for ChatGPT Plus or Claude Pro', recommendation: 'Stay with what you have', reason: 'All three platforms can build a meaningful PAI. The platform you\'ll actually use daily is the right one.' },
  ],
}

export const COMPAS_PLATFORM_MAP = [
  {
    phase: 'Context',
    file: 'Calling.md',
    description: 'Your role, mission, and why your work matters',
    google: 'Upload to NotebookLM → referenced by Gem. Also summarize key identity in Gem instructions.',
    claude: 'Upload to Project knowledge base. Reference in Project instructions (1,500 chars).',
    chatgpt: 'Upload to Project. Also reflect key identity in Custom Instructions ("What should ChatGPT know about you?").',
  },
  {
    phase: 'Objective',
    file: 'Alignment.md',
    description: 'Your goals, success metrics, and current priorities',
    google: 'Upload to NotebookLM. Update quarterly — Gem picks up changes automatically.',
    claude: 'Upload to Project. Memory will also learn your priorities over time from conversations.',
    chatgpt: 'Upload to Project. Set a quarterly Task to remind you to update this file.',
  },
  {
    phase: 'Method',
    file: 'Methods.md',
    description: 'Your decision frameworks, workflows, and how you approach problems',
    google: 'Upload to NotebookLM. Can create a separate "Methods" Gem for decision-support conversations.',
    claude: 'Upload to Project. Claude references this when you ask for recommendations or analysis.',
    chatgpt: 'Upload to Project. Reference in Canvas workflows for structured decision-making.',
  },
  {
    phase: 'Partnership',
    file: 'Partnership.md',
    description: 'How you want your AI to behave — boundaries, autonomy, disclosure rules',
    google: 'Upload to NotebookLM AND include key boundaries in Gem instructions (since memory doesn\'t persist).',
    claude: 'Upload to Project. Key boundaries should also go in Project instructions. Memory reinforces over time.',
    chatgpt: 'Upload to Project. Key boundaries should also go in Custom Instructions ("How should ChatGPT respond?").',
  },
  {
    phase: 'Assessment',
    file: 'Orbit.md',
    description: 'Your key relationships, stakeholders, and organizational context',
    google: 'Upload to NotebookLM. Combined with Workspace apps, Gem can cross-reference people in your email/calendar.',
    claude: 'Upload to Project. Combined with Gmail/Calendar connectors, Claude can cross-reference people in your communications.',
    chatgpt: 'Upload to Project. Combined with connectors, ChatGPT can cross-reference people in your email and calendar.',
  },
  {
    phase: 'Sharing',
    file: 'Sharing.md',
    description: 'How you learn, share knowledge, and what sources you trust',
    google: 'Upload to NotebookLM. This file guides how your Gem recommends resources and synthesizes information.',
    claude: 'Upload to Project. Influences how Claude curates recommendations and cites sources.',
    chatgpt: 'Upload to Project. Influences how ChatGPT recommends resources and approaches knowledge synthesis.',
  },
]
