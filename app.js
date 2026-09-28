/**
 * CX Working Diary & Pragmatic Hub
 * Modular Vanilla JavaScript Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     DATA: PRAGMATIC CX MATURITY AUDIT SPECIFICATION (20Q)
     ========================================================================== */
  const AUDIT_DATA = {
    metadata: {
      title: "Pragmatic CX Maturity Diagnostic & Scoring Engine",
      framework_reference: "CXPA Book of Knowledge & Human-Centered Design Lifecycle",
      version: "1.0.0",
      total_questions: 20
    },
    dimensions: [
      {
        id: "dim_1",
        name: "Executive Direction & Strategic Intent",
        description: "Evaluates executive sponsorship, outside-in strategy formulation, direct customer listening, and business case governance."
      },
      {
        id: "dim_2",
        name: "Cross-Functional Alignment & Silo Elimination",
        description: "Assesses multi-stakeholder governance, handoff clarity (RACI), back-office integration, and shared journey KPIs."
      },
      {
        id: "dim_3",
        name: "Design Thinking & Human-Centered Innovation",
        description: "Examines customer discovery, root cause analysis, iterative prototyping, and balancing desirability, feasibility, and viability."
      },
      {
        id: "dim_4",
        name: "Frontline Enablement & Culture (EX to CX)",
        description: "Measures the Service-Profit Chain, frontline resolution autonomy, Voice of Employee (VoE) channels, and non-gaming incentives."
      },
      {
        id: "dim_5",
        name: "Measurement, Lagging Metrics & Closed-Loop Action",
        description: "Evaluates leading operational indicators, statistical correlation with lagging financial outcomes, and Inner/Outer Loop operations."
      }
    ],
    ratingDefinitions: [
      { rating: 1, label: "Absent / Ad-Hoc" },
      { rating: 2, label: "Developing / Siloed" },
      { rating: 3, label: "Coordinated / Tactical" },
      { rating: 4, label: "Integrated / Strategic" },
      { rating: 5, label: "Ingrained / Transformational" }
    ],
    questions: [
      { id: 1, dimension_id: "dim_1", category: "Executive Alignment", statement: "The CEO and executive leadership treat CX as an active driver of sustainable business strategy and budget allocation, rather than an operational cost center.", evaluates: "Executive sponsorship, resource prioritization, and strategic mindset." },
      { id: 2, dimension_id: "dim_1", category: "Strategic Intent", statement: "Business strategies and resource allocations are formulated around outside-in customer journeys rather than inside-out functional convenience.", evaluates: "Journey-centric strategy versus departmental convenience." },
      { id: 3, dimension_id: "dim_1", category: "Executive Empathy", statement: "Senior executives routinely review unfiltered customer feedback and directly participate in customer listening sessions or frontline shadowing.", evaluates: "Executive ground-truth awareness and listening hygiene." },
      { id: 4, dimension_id: "dim_1", category: "Financial Justification", statement: "CX initiatives require substantiated business cases that link planned experience enhancements to projected ROI, cost-to-serve reductions, or revenue growth.", evaluates: "Financial discipline and business case maturity." },
      { id: 5, dimension_id: "dim_2", category: "Governance", statement: "A multi-stakeholder governance council (Product, Ops, IT, Marketing, Finance) actively aligns roadmaps to harmonize competing functional priorities.", evaluates: "Cross-functional decision making and friction triage." },
      { id: 6, dimension_id: "dim_2", category: "Operational Handoffs", statement: "Customer touchpoint handoffs between departments are governed using clear RACI roles, actively eliminating areas of 'responsibility ambiguity.'", evaluates: "Process continuity and reduction of inter-department handoff drop-offs." },
      { id: 7, dimension_id: "dim_2", category: "Back-Office Integration", statement: "Back-office and enabling teams (IT, Finance, Legal, Compliance) clearly understand and evaluate how their internal policies directly impact customer friction.", evaluates: "Enabling department empathy and policy friction management." },
      { id: 8, dimension_id: "dim_2", category: "KPI Harmonization", statement: "Operational KPIs across business units are structured to reward end-to-end journey success rather than encouraging teams to protect their own siloed metrics.", evaluates: "Systemic incentives versus localized functional optimization." },
      { id: 9, dimension_id: "dim_3", category: "Customer Discovery", statement: "Teams use structured discovery (such as customer interviews and journey maps) to uncover unarticulated customer needs before defining technical solutions.", evaluates: "Qualitative research and problem definition discipline." },
      { id: 10, dimension_id: "dim_3", category: "Root Cause Analysis", statement: "Problems are addressed using Root Cause Analysis (e.g., the 5 Whys, Fishbone diagrams) to solve foundational defects rather than deploying operational 'band-aids.'", evaluates: "Depth of analytical problem solving." },
      { id: 11, dimension_id: "dim_3", category: "Iterative Validation", statement: "New service concepts and digital workflows are iteratively tested via low-cost prototypes with real customers to validate usability before full technical deployment.", evaluates: "De-risking innovation and testing before scaling." },
      { id: 12, dimension_id: "dim_3", category: "Balanced Innovation", statement: "Experience innovation systematically balances human desirability, technical feasibility, and economic/business viability.", evaluates: "Triple-lens innovation filter for viable transformation." },
      { id: 13, dimension_id: "dim_4", category: "Service-Profit Chain", statement: "Leadership systematically manages the Service-Profit Chain, recognizing that frontline employee experience directly drives customer retention and service quality.", evaluates: "Executive understanding of the direct link between EX and CX." },
      { id: 14, dimension_id: "dim_4", category: "Frontline Autonomy", statement: "Frontline employees possess the documented authority and autonomy to resolve customer complaints in real time without navigating bureaucratic manager sign-offs.", evaluates: "First-contact empowered resolution and low-friction service recovery." },
      { id: 15, dimension_id: "dim_4", category: "Voice of the Employee", statement: "A structured Voice of the Employee (VoE) channel regularly gathers, acknowledges, and acts on frontline insights regarding broken internal workflows.", evaluates: "Frontline knowledge capture and process bottleneck remediation." },
      { id: 16, dimension_id: "dim_4", category: "Performance Integrity", statement: "Performance incentives celebrate customer-centric behaviors and quality resolution, specifically designed to avoid the manipulation or 'gaming' of survey scores.", evaluates: "Incentive design hygiene and score integrity." },
      { id: 17, dimension_id: "dim_5", category: "Leading Indicators", statement: "Operational leading indicators (e.g., system outages, queue backlogs, handle times) are monitored in real time alongside lagging survey metrics to predict customer distress.", evaluates: "Telemetry pairing of operational (O-data) with experience (X-data)." },
      { id: 18, dimension_id: "dim_5", category: "Lagging Financial Impact", statement: "Customer sentiment metrics (CSAT, CES, NPS) are statistically correlated with lagging commercial outcomes: Churn Rate, Retention Rate, CLV, or Earned Growth.", evaluates: "Commercial validation and economic correlation of sentiment." },
      { id: 19, dimension_id: "dim_5", category: "Inner Loop Execution", statement: "A frontline 'Inner Loop' process ensures that dissatisfied customer feedback triggers a direct, rapid operational follow-up to recover the relationship.", evaluates: "Individual transactional service recovery within 24 to 48 hours." },
      { id: 20, dimension_id: "dim_5", category: "Outer Loop Remediation", statement: "An 'Outer Loop' cross-functional mechanism aggregates feedback trends and error telemetry to prioritize structural product, system, and policy redesigns.", evaluates: "Cross-functional systemic defect eradication." }
    ],
    maturityStages: [
      {
        stage_id: "stage_1",
        name: "Nascent",
        min: 20,
        max: 35,
        summary: "Customer experience is ad-hoc, informal, and viewed as an isolated cost center.",
        operational_reality: [
          "Leadership Detachment: Executive discussions focus on short-term sales volume and throughput; CX is treated as a soft slogan.",
          "The 'Meandering Project' Trap: Handed to a project manager with zero authority or budget.",
          "Siloed Blame Culture: When onboarding or billing fails, Support, Ops, and Tech fault each other.",
          "Frontline Exhaustion: Agents bear customer complaints without autonomy, judged strictly on call speed."
        ],
        immediate_operational_priorities: [
          "Establish a Single Journey Baseline: Map one high-friction touchpoint (e.g., onboarding/checkout) from outside-in.",
          "Capture Paired O-Data and X-Data: Collect cycle drop-offs alongside CES/CSAT.",
          "Deliver and Quantify an Early Quick Win: Fix one root defect and calculate operational savings.",
          "Educate Senior Leadership: Present unfiltered verbatims directly to management to show real costs."
        ],
        relevant_lagging_metrics: ["Transactional CSAT", "Complaint Volume", "Early Churn Rate"]
      },
      {
        stage_id: "stage_2",
        name: "Basic",
        min: 36,
        max: 51,
        summary: "Pockets of uncoordinated CX activity operate within functional silos with an inside-out focus on scores.",
        operational_reality: [
          "Uncoordinated Activity: Support and Marketing run disjointed surveys with conflicting scales.",
          "Score Obsession: Teams worry about 'hitting the metric' rather than understanding the root friction.",
          "Handoff Black Holes: Individual touchpoints look fine, but customers drop between departmental handoffs.",
          "Back-Office Disconnect: Policy teams write procedures solely for internal convenience."
        ],
        immediate_operational_priorities: [
          "Form an Informal Working Group: Bi-weekly cross-functional syncs across Support, Sales, and Ops.",
          "Harmonize Feedback Scales: Standardize survey formats and establish frequency rules.",
          "Map the Full Journey: Run cross-functional workshops to surface where internal rules clash.",
          "Pareto Root Cause Analysis: Categorize customer complaints via the 5 Whys."
        ],
        relevant_lagging_metrics: ["Customer Effort Score (CES)", "First Contact Resolution (FCR)", "Survey Response Rate"]
      },
      {
        stage_id: "stage_3",
        name: "Tactical",
        min: 52,
        max: 67,
        summary: "Core CX competencies and frontline closed loops exist, but systemic cross-functional alignment remains uneven.",
        operational_reality: [
          "Emergence of Competency: Journey maps and personas exist, but project funding is piecemeal.",
          "Active Inner Loop, Stalled Outer Loop: Frontline apologizes to upset clients, but systemic root defects stay unfixed.",
          "Role Ambiguity: Journey maps are visually acknowledged, but handoff ownership is contested.",
          "Descriptive Metric Saturation: Dashboards monitor NPS/CSAT, but struggle to correlate with financial retention."
        ],
        immediate_operational_priorities: [
          "Charter a Formal Steering Committee: Monthly executive council aligning operational roadmaps.",
          "Establish RACI Frameworks: Explicitly document cross-departmental transition points.",
          "Operationalize Outer Loop Squads: Dedicated squads targeting top systemic friction sources.",
          "Link to Financial Outcomes: Partner with Finance to correlate sentiment movements with churn cost."
        ],
        relevant_lagging_metrics: ["Customer Retention Rate", "Net Promoter Score (NPS)", "Cost-to-Serve"]
      },
      {
        stage_id: "stage_4",
        name: "Strategic",
        min: 68,
        max: 83,
        summary: "Enterprise governance, human-centered design, and financial metric integration drive decision-making.",
        operational_reality: [
          "Institutionalized Governance: An executive CX leader guides cross-functional enterprise roadmaps.",
          "Outside-In Planning: Strategy balances operational efficiency with intended customer ease.",
          "Telemetry Pairing: System error spikes and queue lags trigger proactive resolutions.",
          "Active Design Prototyping: Usability testing with users occurs before engineering code is finalized."
        ],
        immediate_operational_priorities: [
          "Scale Low-Fidelity Prototyping: Institutionalize user validation across business units.",
          "Deepen Frontline Discretion: Provide frontline teams with immediate compensation/fix authority.",
          "Build VoE Architecture: Formal pipeline where frontline feedback enters engineering sprint planning.",
          "Key Driver Analytics: Apply regression to identify core levers impacting customer lifetime value."
        ],
        relevant_lagging_metrics: ["Customer Lifetime Value (CLV)", "Net Revenue Retention (NRR)", "Earned Growth Rate"]
      },
      {
        stage_id: "stage_5",
        name: "Transformational",
        min: 84,
        max: 100,
        summary: "Customer-centricity is the natural operating system, uniting employee experience, continuous innovation, and predictive delivery.",
        operational_reality: [
          "Cultural DNA: Every department—from Legal to DevOps—understands their customer impact.",
          "Living Service-Profit Chain: Frontline psychological safety and support quality are prioritized.",
          "Safe Experimentation: Rapid iterations happen blamelessly without bureaucratic friction.",
          "Proactive Anomaly Detection: System flaws are fixed and customers compensated before they complain."
        ],
        immediate_operational_priorities: [
          "Drive Continuous Discovery: Co-creation sessions to pioneer new low-friction service patterns.",
          "Unify EX and CX Architectures: Embed customer-centric competencies directly into HR appraisals.",
          "Automate Prescriptive Care: Real-time telemetry automates customer recovery interventions.",
          "Guard Against Complacency: Benchmark against cross-industry leaders to stay ahead of expectations."
        ],
        relevant_lagging_metrics: ["Earned Growth Rate", "Employee Engagement Index", "Total Shareholder Return"]
      }
    ]
  };

  /* ==========================================================================
     DATA: PRAGMATIC CASE STUDIES & RESOLUTION TREES
     ========================================================================== */
  const CASE_STUDIES = [
    {
      id: "case-1",
      domain: "FinTech",
      title: "Bank-Account Linking Drop-Off in Mobile Payments",
      summary: "High user abandonment during mandatory bank linking. Frontline received repeat inquiries regarding ambiguous error 502 messages.",
      problem: "Customers attempting to bind their direct debit card encountered generic 'Connection Failed' dialogs without next steps, triggering 2,400+ monthly manual support tickets.",
      tree: [
        { step: "1. Diagnostic / Telemetry", desc: "Paired gateway timeout logs (O-Data) with drop-off session recordings (X-Data) to isolate specific bank partner delays." },
        { step: "2. Frontline Triage", desc: "Discovered agents were manually telling users to retry during non-peak banking hours with no system transparency." },
        { step: "3. Root Fix", desc: "Engineered real-time partner bank health checks in-app with proactive status alerts and automated SMS retries." }
      ],
      tradeoffs: "Required engineering to prioritize partner bank webhook integrations over a new marketing promo carousel. Direct ticket inquiries dropped significantly.",
      metric: "Frontline Escalations Reduced & Flow Abandonment Decreased"
    },
    {
      id: "case-2",
      domain: "Operations",
      title: "Cross-Departmental SLA Friction on Fraud Claims",
      summary: "Customers reporting unauthorized micro-transactions were caught between Frontline Support, Fraud Risk, and Payment Operations.",
      problem: "Support agents promised 48-hour resolution based on customer expectations, while the Fraud Risk team had an internal 5-day back-office SLA without automated updates.",
      tree: [
        { step: "1. Diagnostic / RACI Audit", desc: "Mapped the end-to-end claim journey and uncovered two unmonitored intermediary approval queues." },
        { step: "2. Policy Realignment", desc: "Established unified journey KPIs and an automated status tracker inside the user application." },
        { step: "3. Service Recovery", desc: "Granted frontline specialists authority to issue temporary credits up to $25 immediately for verified accounts." }
      ],
      tradeoffs: "Risk management initially resisted frontline credit autonomy; risk parameters were tuned with strict automated audit trails.",
      metric: "Repeat Status Inquiries Dropped & First-Contact Resolution Lifted"
    },
    {
      id: "case-3",
      domain: "Self-Service",
      title: "Refactoring Knowledge Base Deflection Architecture",
      summary: "A sprawling 400-article help center failed to reduce inquiries because articles used internal legal jargon rather than customer language.",
      problem: "Customers searching for 'refund' found no results because the internal terminology was 'reversal transaction adjustment'.",
      tree: [
        { step: "1. Search Query Telemetry", desc: "Audited top zero-result search strings from help center logs against actual frontline call reasons." },
        { step: "2. Taxonomy Rewriting", desc: "Restructured articles with outside-in terminology, visual step GIFs, and immediate contextual in-app links." },
        { step: "3. Sticky Contact Routing", desc: "Placed direct escalation buttons only at the bottom of specific complex articles, ensuring basic answers solved questions." }
      ],
      tradeoffs: "Legal insisted on retaining compliance disclaimers; compromises placed disclosures in collapsible footnote accordions.",
      metric: "Inbound Tier-1 Deflection Improved & CES Lowered"
    }
  ];

  /* ==========================================================================
     MODULE 1: SUB-PAGE ROUTING (HOME vs BIO)
     ========================================================================== */
  const pageHome = document.getElementById('page-home');
  const pageBio = document.getElementById('page-bio');
  const navLinks = document.querySelectorAll('.nav-link[data-page]');

  function handleRouting() {
    const hash = window.location.hash.toLowerCase() || '#home';
    
    if (hash === '#bio') {
      pageHome.hidden = true;
      pageBio.hidden = false;
      updateActiveNav('bio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      pageHome.hidden = false;
      pageBio.hidden = true;
      updateActiveNav('home');
      
      // If navigating to a specific homepage anchor
      if (hash.startsWith('#') && hash !== '#home') {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          setTimeout(() => targetEl.scrollIntoView({ behavior: 'smooth' }), 50);
        }
      }
    }
  }

  function updateActiveNav(pageKey) {
    navLinks.forEach(link => {
      const isTarget = link.getAttribute('data-page') === pageKey;
      link.classList.toggle('active', isTarget);
      link.setAttribute('aria-current', isTarget ? 'page' : 'false');
    });
  }

  window.addEventListener('hashchange', handleRouting);
  // Initial check on page load
  handleRouting();

  /* ==========================================================================
     MODULE 2: 20-QUESTION MATURITY AUDIT ENGINE
     ========================================================================== */
  const accordionContainer = document.getElementById('dimensions-accordion');
  const answeredCountText = document.getElementById('answered-count-text');
  const completionPctText = document.getElementById('completion-pct-text');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const calculateScoreBtn = document.getElementById('calculate-score-btn');
  const resetAuditBtn = document.getElementById('reset-audit-btn');
  const auditResultsCard = document.getElementById('audit-results');

  // Answers State: { [questionId]: ratingValue (1-5) }
  const auditAnswers = {};

  // Render 20 Questions grouped by Dimension
  function renderAuditQuestions() {
    if (!accordionContainer) return;
    accordionContainer.innerHTML = '';

    AUDIT_DATA.dimensions.forEach((dim, idx) => {
      const dimQuestions = AUDIT_DATA.questions.filter(q => q.dimension_id === dim.id);
      
      const panel = document.createElement('div');
      panel.className = `dimension-panel ${idx === 0 ? 'open' : ''}`;
      panel.id = `panel-${dim.id}`;

      // Panel Header
      const headerBtn = document.createElement('button');
      headerBtn.type = 'button';
      headerBtn.className = 'dimension-header';
      headerBtn.setAttribute('aria-expanded', idx === 0 ? 'true' : 'false');
      headerBtn.setAttribute('aria-controls', `body-${dim.id}`);
      headerBtn.innerHTML = `
        <div class="dimension-title-group">
          <h3>Pillar ${idx + 1}: ${dim.name}</h3>
          <p>${dim.description}</p>
        </div>
        <div class="dimension-status">
          <span class="dim-answered-label" id="status-${dim.id}">0 / ${dimQuestions.length} rated</span>
          <span class="accordion-chevron" aria-hidden="true">▾</span>
        </div>
      `;

      // Accordion Toggle Behavior
      headerBtn.addEventListener('click', () => {
        const isOpen = panel.classList.contains('open');
        panel.classList.toggle('open', !isOpen);
        headerBtn.setAttribute('aria-expanded', String(!isOpen));
      });

      // Panel Body
      const bodyDiv = document.createElement('div');
      bodyDiv.className = 'dimension-body';
      bodyDiv.id = `body-${dim.id}`;

      dimQuestions.forEach(q => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';

        const ratingsHtml = AUDIT_DATA.ratingDefinitions.map(def => `
          <div class="rating-option">
            <input type="radio" 
                   id="q${q.id}_r${def.rating}" 
                   name="q_${q.id}" 
                   value="${def.rating}">
            <label for="q${q.id}_r${def.rating}" class="rating-label">
              <span class="rating-value">${def.rating}</span>
              <span class="rating-text">${def.label}</span>
            </label>
          </div>
        `).join('');

        questionItem.innerHTML = `
          <div class="question-header">
            <span class="question-number">Q${String(q.id).padStart(2, '0')}</span>
            <span class="question-category">${q.category}</span>
          </div>
          <p class="question-statement">${q.statement}</p>
          <p class="question-evaluates">Evaluates: ${q.evaluates}</p>
          <div class="rating-scale" role="radiogroup" aria-label="Question ${q.id} scale">
            ${ratingsHtml}
          </div>
        `;

        // Attach change listener to radio options
        questionItem.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.addEventListener('change', (e) => {
            auditAnswers[q.id] = parseInt(e.target.value, 10);
            updateAuditProgress();
          });
        });

        bodyDiv.appendChild(questionItem);
      });

      panel.appendChild(headerBtn);
      panel.appendChild(bodyDiv);
      accordionContainer.appendChild(panel);
    });
  }

  function updateAuditProgress() {
    const answeredCount = Object.keys(auditAnswers).length;
    const totalCount = AUDIT_DATA.metadata.total_questions;
    const pct = Math.round((answeredCount / totalCount) * 100);

    answeredCountText.textContent = `Questions Answered: ${answeredCount} / ${totalCount}`;
    completionPctText.textContent = `${pct}% Complete`;
    progressBarFill.style.width = `${pct}%`;

    // Update pillar specific statuses
    AUDIT_DATA.dimensions.forEach(dim => {
      const dimQuestions = AUDIT_DATA.questions.filter(q => q.dimension_id === dim.id);
      const dimAnswered = dimQuestions.filter(q => auditAnswers[q.id] !== undefined).length;
      const statusLabel = document.getElementById(`status-${dim.id}`);
      if (statusLabel) {
        statusLabel.textContent = `${dimAnswered} / ${dimQuestions.length} rated`;
      }
    });

    // Enable/disable calculate button
    calculateScoreBtn.disabled = answeredCount !== totalCount;
  }

  function calculateAuditScore() {
    const answeredCount = Object.keys(auditAnswers).length;
    if (answeredCount !== AUDIT_DATA.metadata.total_questions) return;

    let totalScore = 0;
    const dimScores = { dim_1: 0, dim_2: 0, dim_3: 0, dim_4: 0, dim_5: 0 };

    AUDIT_DATA.questions.forEach(q => {
      const val = auditAnswers[q.id] || 0;
      totalScore += val;
      dimScores[q.dimension_id] += val;
    });

    // Match Stage
    const stage = AUDIT_DATA.maturityStages.find(
      s => totalScore >= s.min && totalScore <= s.max
    ) || AUDIT_DATA.maturityStages[0];

    // Populate Results DOM
    document.getElementById('result-stage-name').textContent = `Stage: ${stage.name}`;
    document.getElementById('result-total-score').textContent = totalScore;
    document.getElementById('result-stage-summary').textContent = stage.summary;

    // Dimension breakdown bars (max score per dim is 20)
    const dimBarsContainer = document.getElementById('dimension-score-bars');
    dimBarsContainer.innerHTML = '';
    AUDIT_DATA.dimensions.forEach(dim => {
      const score = dimScores[dim.id];
      const pct = Math.round((score / 20) * 100);
      const row = document.createElement('div');
      row.className = 'dim-bar-row';
      row.innerHTML = `
        <span class="dim-bar-label" title="${dim.name}">${dim.name}</span>
        <div class="dim-bar-track">
          <div class="dim-bar-fill" style="width: ${pct}%"></div>
        </div>
        <span class="dim-bar-val">${score} / 20</span>
      `;
      dimBarsContainer.appendChild(row);
    });

    // Operational Realities
    const realitiesList = document.getElementById('result-realities-list');
    realitiesList.innerHTML = '';
    stage.operational_reality.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      realitiesList.appendChild(li);
    });

    // Operational Priorities
    const prioritiesList = document.getElementById('result-priorities-list');
    prioritiesList.innerHTML = '';
    stage.immediate_operational_priorities.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      prioritiesList.appendChild(li);
    });

    // Metric Tags
    const metricsTagsContainer = document.getElementById('result-metrics-tags');
    metricsTagsContainer.innerHTML = '';
    stage.relevant_lagging_metrics.forEach(metric => {
      const tag = document.createElement('span');
      tag.className = 'badge badge-earth';
      tag.textContent = metric;
      metricsTagsContainer.appendChild(tag);
    });

    // Show Card & Focus
    auditResultsCard.hidden = false;
    auditResultsCard.scrollIntoView({ behavior: 'smooth' });
    auditResultsCard.focus();
  }

  function resetAudit() {
    if (!confirm('Are you sure you want to reset all answers?')) return;
    Object.keys(auditAnswers).forEach(key => delete auditAnswers[key]);
    
    document.querySelectorAll('#cx-audit-form input[type="radio"]').forEach(r => {
      r.checked = false;
    });

    updateAuditProgress();
    auditResultsCard.hidden = true;
    window.scrollTo({ top: document.getElementById('maturity-audit').offsetTop - 80, behavior: 'smooth' });
  }

  calculateScoreBtn.addEventListener('click', calculateAuditScore);
  resetAuditBtn.addEventListener('click', resetAudit);
  renderAuditQuestions();

  /* ==========================================================================
     MODULE 3: CASE STUDY CATALOG, SEARCH & MODAL
     ========================================================================== */
  const caseStudiesGrid = document.getElementById('case-studies-grid');
  const caseSearchInput = document.getElementById('case-search-input');
  const filterPills = document.querySelectorAll('.filter-pills .filter-pill');
  const caseResultsCount = document.getElementById('case-results-count');

  let activeFilter = 'all';
  let searchTerm = '';

  function renderCaseStudies() {
    if (!caseStudiesGrid) return;
    caseStudiesGrid.innerHTML = '';

    const filteredCases = CASE_STUDIES.filter(cs => {
      const matchesFilter = activeFilter === 'all' || cs.domain.toLowerCase() === activeFilter.toLowerCase();
      const searchTarget = `${cs.title} ${cs.summary} ${cs.problem} ${cs.domain} ${cs.metric}`.toLowerCase();
      const matchesSearch = !searchTerm || searchTarget.includes(searchTerm);
      return matchesFilter && matchesSearch;
    });

    caseResultsCount.textContent = `Showing ${filteredCases.length} of ${CASE_STUDIES.length} case studies`;

    if (filteredCases.length === 0) {
      caseStudiesGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--earth-loam-muted);">
          No field teardowns match your current query or category filter.
        </div>
      `;
      return;
    }

    filteredCases.forEach(cs => {
      const card = document.createElement('article');
      card.className = 'case-card';
      card.innerHTML = `
        <div class="case-card-header">
          <span class="badge badge-earth">${cs.domain}</span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--earth-loam-muted);">Teardown</span>
        </div>
        <h3 class="case-title">${cs.title}</h3>
        <p class="case-summary">${cs.summary}</p>
        <div class="case-meta">
          <div class="case-meta-item">
            <span class="case-meta-label">Primary Challenge:</span>
            <span class="case-meta-val">${cs.domain} Alignment</span>
          </div>
          <div class="case-meta-item">
            <span class="case-meta-label">Key Metric Impact:</span>
            <span class="case-meta-val">${cs.metric}</span>
          </div>
        </div>
        <button type="button" class="btn btn-secondary btn-block open-case-btn" data-id="${cs.id}">
          View Resolution Tree & Teardown →
        </button>
      `;

      card.querySelector('.open-case-btn').addEventListener('click', () => openCaseModal(cs));
      caseStudiesGrid.appendChild(card);
    });
  }

  // Debounced Search Handler
  let debounceTimeout;
  caseSearchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      searchTerm = e.target.value.trim().toLowerCase();
      renderCaseStudies();
    }, 200);
  });

  // Category Filter Pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-checked', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-checked', 'true');
      activeFilter = pill.getAttribute('data-filter');
      renderCaseStudies();
    });
  });

  renderCaseStudies();

  /* ==========================================================================
     MODULE 4: DIALOGS / MODALS (NATIVE HTML5 <dialog>)
     ========================================================================== */
  const caseModal = document.getElementById('case-modal');
  const closeCaseModalBtn = document.getElementById('close-case-modal');
  const modalCloseAction = document.getElementById('modal-close-action');

  function openCaseModal(cs) {
    document.getElementById('modal-case-category').textContent = cs.domain;
    document.getElementById('modal-case-title').textContent = cs.title;
    document.getElementById('modal-case-problem').textContent = cs.problem;
    document.getElementById('modal-case-tradeoffs').textContent = cs.tradeoffs;
    document.getElementById('modal-case-metric').textContent = cs.metric;

    const treeContainer = document.getElementById('modal-case-tree');
    treeContainer.innerHTML = '';
    cs.tree.forEach(node => {
      const nodeEl = document.createElement('div');
      nodeEl.className = 'tree-node';
      nodeEl.innerHTML = `
        <span class="tree-label">${node.step}</span>
        <span class="tree-desc">${node.desc}</span>
      `;
      treeContainer.appendChild(nodeEl);
    });

    if (typeof caseModal.showModal === 'function') {
      caseModal.showModal();
    } else {
      caseModal.setAttribute('open', '');
    }
  }

  function closeCaseModal() {
    if (typeof caseModal.close === 'function') {
      caseModal.close();
    } else {
      caseModal.removeAttribute('open');
    }
  }

  closeCaseModalBtn.addEventListener('click', closeCaseModal);
  modalCloseAction.addEventListener('click', closeCaseModal);

  // Close modal when backdrop is clicked
  caseModal.addEventListener('click', (e) => {
    const rect = caseModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeCaseModal();
    }
  });

  /* Connect / Advisory Modal */
  const connectModal = document.getElementById('connect-modal');
  const closeConnectModalBtn = document.getElementById('close-connect-modal');
  const cancelConnectBtn = document.getElementById('cancel-connect-btn');
  const connectForm = document.getElementById('connect-form');
  const connectFeedback = document.getElementById('connect-feedback');

  const openConnectNav = document.getElementById('open-connect-nav');
  const openConnectHero = document.getElementById('open-connect-hero');
  const openConnectBio = document.getElementById('open-connect-bio');

  function openConnect() {
    connectForm.reset();
    connectFeedback.hidden = true;
    connectFeedback.className = 'form-feedback';
    if (typeof connectModal.showModal === 'function') {
      connectModal.showModal();
    } else {
      connectModal.setAttribute('open', '');
    }
  }

  function closeConnect() {
    if (typeof connectModal.close === 'function') {
      connectModal.close();
    } else {
      connectModal.removeAttribute('open');
    }
  }

  [openConnectNav, openConnectHero, openConnectBio].forEach(btn => {
    if (btn) btn.addEventListener('click', (e) => {
      e.preventDefault();
      openConnect();
    });
  });

  closeConnectModalBtn.addEventListener('click', closeConnect);
  cancelConnectBtn.addEventListener('click', closeConnect);

  connectModal.addEventListener('click', (e) => {
    const rect = connectModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeConnect();
    }
  });

  // Connect Form Submission Simulation
  connectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!connectForm.checkValidity()) {
      connectFeedback.hidden = false;
      connectFeedback.className = 'form-feedback error';
      connectFeedback.textContent = 'Please complete all required fields.';
      return;
    }

    const name = document.getElementById('connect-name').value;
    connectFeedback.hidden = false;
    connectFeedback.className = 'form-feedback success';
    connectFeedback.textContent = `Thank you, ${name}. Your note has been queued. I look forward to connecting over pragmatic CX operations!`;

    setTimeout(() => {
      closeConnect();
    }, 2500);
  });

  /* ==========================================================================
     MODULE 5: UTILITY ACTIONS (CLIPBOARD COPY)
     ========================================================================== */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyToast = document.getElementById('copy-toast');
  const CONTACT_EMAIL = 'nhut.cxleader@gmail.com'; // Default contact handle

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(CONTACT_EMAIL);
        } else {
          // Fallback text selection
          const textArea = document.createElement('textarea');
          textArea.value = CONTACT_EMAIL;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        copyToast.textContent = 'Email copied to clipboard!';
        setTimeout(() => { copyToast.textContent = ''; }, 3000);
      } catch (err) {
        copyToast.textContent = CONTACT_EMAIL;
      }
    });
  }
});
