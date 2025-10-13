/**
 * Case Study Content
 * Contains all case study data and modal management
 */

const caseStudies = {
    'ai-agents': {
        title: 'AI Agent Platform UX Strategy',
        content: `
            <p style="font-style: italic; color: #6c757d; margin-bottom: 24px;">A hypothesis-driven design exercise exploring user comprehension and trust in emerging tech platforms</p>
            
            <div class="case-study-section">
                <h3>📌 Executive Summary</h3>
                <p>This is a strategic design exercise examining how AI agent launchpads currently prioritize speculation over comprehension, potentially limiting their long-term growth. Through systematic analysis of existing platforms, I developed hypotheses about how clearer UX structure and product framing could improve user understanding and engagement.</p>
                
                <div class="case-study-quote">
                    <strong>Key Insight:</strong> What you lead with—token, ticker, or tool—shapes the entire user journey and determines whether platforms build speculators or actual users.
                </div>
            </div>

            <div class="case-study-section">
                <h3>🔍 Problem Identification</h3>
                <p>While researching emerging AI agent platforms, I noticed a consistent pattern: despite claims of advanced functionality, most launchpads prioritize financial speculation over product comprehension.</p>
                
                <h4>Common patterns observed:</h4>
                <ul class="case-study-list">
                    <li>Price tickers and trading links dominate landing pages</li>
                    <li>Actual agent functionality buried or vaguely described</li>
                    <li>Wallet connection required before users understand value proposition</li>
                    <li>Limited opportunities to experience the product before financial commitment</li>
                </ul>
                
                <div class="case-study-highlight">
                    <strong>Why this matters:</strong> These patterns might drive initial hype but could suppress long-term user adoption and trust—critical metrics for platform sustainability.
                </div>
            </div>

            <div class="case-study-section">
                <h3>🔬 Research Methodology</h3>
                <p><strong>Platforms Analyzed:</strong> Virtuals, MakeFun, Spectral, Vital, Soulgraph</p>
                
                <h4>Approach:</h4>
                <ol>
                    <li><strong>Systematic audit</strong> of each platform's user flow and information hierarchy</li>
                    <li><strong>Community research</strong> through Discord servers and social media engagement</li>
                    <li><strong>Comparative analysis</strong> using consistent evaluation criteria</li>
                    <li><strong>Hypothesis development</strong> based on observed patterns</li>
                </ol>

                <table class="case-study-table">
                    <thead>
                        <tr>
                            <th>Platform</th>
                            <th>Shows Agent Demo First?</th>
                            <th>Financial CTA Prioritized?</th>
                            <th>Clear Use Case?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Virtuals</td><td>❌</td><td>✅</td><td>❌</td></tr>
                        <tr><td>MakeFun</td><td>❌</td><td>✅</td><td>❌</td></tr>
                        <tr><td>Spectral</td><td>⚠️ Partially</td><td>✅</td><td>⚠️</td></tr>
                        <tr><td>Vital</td><td>❌</td><td>✅</td><td>❌</td></tr>
                        <tr><td>Soulgraph</td><td>✅</td><td>⚠️</td><td>✅</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="case-study-section">
                <h3>🧪 Core Hypotheses</h3>
                <div class="case-study-quote">
                    <strong>Primary Hypothesis:</strong> Platforms that frame AI agents as tools rather than speculative assets will achieve better user comprehension and sustained engagement.
                </div>
                
                <h4>Supporting Hypotheses:</h4>
                <ul class="case-study-list">
                    <li><strong>H1:</strong> Delaying financial CTAs until after value demonstration increases user exploration time</li>
                    <li><strong>H2:</strong> Use-case-focused content improves actual agent interaction rates</li>
                    <li><strong>H3:</strong> Clearer information architecture reduces bounce rates and increases platform trust</li>
                </ul>
            </div>

            <div class="case-study-section">
                <h3>📊 Projected Impact</h3>
                <p>While I can't measure real impact from a speculative exercise, I used industry benchmarks and UX research to estimate potential improvements:</p>
                
                <div class="case-study-metrics">
                    <div class="metric-card">
                        <span class="metric-value">30-45%</span>
                        <div class="metric-label">Bounce Rate Reduction</div>
                    </div>
                    <div class="metric-card">
                        <span class="metric-value">3-5x</span>
                        <div class="metric-label">Agent Trial Rate Increase</div>
                    </div>
                    <div class="metric-card">
                        <span class="metric-value">40-60%</span>
                        <div class="metric-label">Time on Platform Increase</div>
                    </div>
                    <div class="metric-card">
                        <span class="metric-value">2-3x</span>
                        <div class="metric-label">Return Visit Increase</div>
                    </div>
                </div>
                
                <p style="font-size: 14px; color: #6c757d;"><em>Note: These projections are based on analogous UX improvements in fintech and SaaS onboarding flows, and would require actual testing to validate.</em></p>
            </div>

            <div class="case-study-section">
                <h3>🎯 Strategic Redesign Approach</h3>
                
                <h4>Current Information Architecture:</h4>
                <p style="background: #fff3cd; padding: 12px; border-radius: 6px; color: #856404;">Token Chart → Price Action → Vague Value Prop → Immediate Purchase CTA</p>
                
                <h4>Proposed Information Architecture:</h4>
                <p style="background: #d1edff; padding: 12px; border-radius: 6px; color: #0c5460;">Agent Introduction → Use Case Examples → Interactive Preview → Optional Financial Engagement</p>
                
                <h4>Key Changes:</h4>
                <ul class="case-study-list">
                    <li><strong>Lead with functionality</strong> rather than financial metrics</li>
                    <li><strong>Demonstrate value</strong> before requesting commitment</li>
                    <li><strong>Structure progressive disclosure</strong> from general to specific</li>
                    <li><strong>Position financial elements</strong> as optional rather than primary</li>
                </ul>
            </div>

            <div class="case-study-section">
                <h3>💡 Key Insights for Operations Work</h3>
                <p>This exercise demonstrates several capabilities valuable for operations and strategy roles:</p>
                
                <ul class="case-study-list">
                    <li><strong>Cross-functional thinking:</strong> Connected UX design decisions to business metrics and user psychology</li>
                    <li><strong>Process development:</strong> Created systematic methodology for analyzing complex user experiences</li>
                    <li><strong>Problem reframing:</strong> Identified how current approaches might be self-defeating for long-term goals</li>
                    <li><strong>Strategic communication:</strong> Translated technical concepts into business language</li>
                </ul>
            </div>

            <div class="case-study-section">
                <h3>🔚 Reflection</h3>
                <p>This started as curiosity about why promising AI technology was being presented in confusing ways. It became an exercise in systematic problem-solving and strategic thinking.</p>
                
                <div class="case-study-highlight">
                    <strong>Most interesting discovery:</strong> Some platforms seemed to intentionally embrace speculative framing, which made me question whether they truly wanted user comprehension or preferred the hype-driven model.
                </div>
                
                <p>This reflects my general approach to operations work—I dig into why things work the way they do, question whether that's optimal, and propose systematic improvements based on clear reasoning.</p>
                
                <p style="font-style: italic; color: #6c757d; margin-top: 24px;"><em>This case study represents my approach to strategic problem-solving and systematic UX thinking. All projections are speculative and based on industry research rather than actual testing.</em></p>
            </div>
        `
    },
    'banking': {
        title: 'Mobile Banking UX',
        content: `
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>Complex financial transactions on mobile devices cause user frustration and abandonment, particularly for first-time digital banking users.</p>
            </div>
            <div class="case-study-section">
                <h3>Research</h3>
                <p>Analyzed user journey maps, conducted usability testing with 20 participants, and reviewed customer support tickets for common pain points.</p>
            </div>
            <div class="case-study-section">
                <h3>Solution</h3>
                <p>Simplified transaction flows, added contextual help, and implemented progressive disclosure for complex features.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Reduced transaction completion time by 35% and decreased support tickets related to mobile banking by 50%.</p>
            </div>
        `
    },
    'ecommerce': {
        title: 'E-commerce Checkout Flow',
        content: `
            <div class="case-study-section">
                <h3>Problem</h3>
                <p>High cart abandonment rates (68%) during checkout process, with users dropping off at payment and shipping information steps.</p>
            </div>
            <div class="case-study-section">
                <h3>Research</h3>
                <p>A/B tested checkout variations, analyzed heatmaps and user recordings, and surveyed users who abandoned their carts.</p>
            </div>
            <div class="case-study-section">
                <h3>Solution</h3>
                <p>Streamlined checkout to single page, added guest checkout option, implemented trust signals, and optimized for mobile.</p>
            </div>
            <div class="case-study-section">
                <h3>Results</h3>
                <p>Reduced cart abandonment by 23% and increased conversion rate by 18% within first month of implementation.</p>
            </div>
        `
    }
};

// Case Study Modal Management
function openCaseStudy(studyId) {
    const study = caseStudies[studyId];
    if (!study) {
        console.error(`Case study '${studyId}' not found`);
        return;
    }

    document.getElementById('caseStudyTitle').textContent = study.title;
    document.getElementById('caseStudyContent').innerHTML = study.content;
    document.getElementById('caseStudyModal').classList.add('active');
}

function closeCaseStudy() {
    document.getElementById('caseStudyModal').classList.remove('active');
}