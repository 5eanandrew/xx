/**
 * CASE STUDIES DATA
 * 
 * To add a new case study:
 * 1. Add a new object to the CASE_STUDIES array
 * 2. Fill in all the required fields
 * 3. Save the file - the new case study will automatically appear on the site
 * 
 * Color options for gradients:
 * - gradient1: Pink to Red (#f093fb to #f5576c)
 * - gradient2: Blue to Cyan (#4facfe to #00f2fe)
 * - gradient3: Green to Teal (#43e97b to #38f9d7)
 * - gradient4: Purple to Blue (#667eea to #764ba2)
 * - gradient5: Lavender to Teal (#E6B3FF to #40E0D0 to #8A2BE2)
 */

const CASE_STUDIES = [
    

        // Replace the existing Norther Tourism object in your CASE_STUDIES array with this:

// Replace the existing Norther Tourism object in your CASE_STUDIES array with this:

{
    id: 'norther-tourism',
    icon: '🏔️',
    title: 'Norther Tourism',
    description: 'UX research and content strategy to bridge social media success with purposeful web experiences for national park travelers.',
    gradient: 'gradient5',
    meta: {
        client: 'Norther',
        role: 'UX Design & Research',
        team: 'Sonya, Blake & Myself',
        timeline: '2.5 weeks'
    },
    content: `
        <h2>Project Brief</h2>
        <p>Norther enlisted my student team at General Assembly to help revamp their current website and content strategy.</p>
        
        <div style="background: linear-gradient(135deg, #4a3f5c 0%, #2d2538 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #8A2BE2; margin: 24px 0;">
            <p style="color: #fff; font-style: italic; margin: 0; font-size: 16px; line-height: 1.6;">"Our current business model is to leverage off the growth of our social media accounts. We would love it if you could redesign the website to highlight the national parks and draw attention from the socials to the website."</p>
        </div>
        
        <h2>Preliminary Research</h2>
        <p>Before meeting with the CEO, our team investigated the Norther brand online. The results left us questioning what Norther actually was. Their website showcased them as a digital marketing company without real services, while their social media profiles displayed curated shots and travel information for National Parks in Australia.</p>
        
        <div style="background: linear-gradient(135deg, #5a3d3d 0%, #3d2828 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #ff6b6b; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">🚨</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">What is Norther?</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; line-height: 1.6;">On our deep dive into the Norther brand, we were a little caught off guard. Their website showcased Norther as a <em style="color: #fff;">digital marketing</em> company but they didn't offer any real services or information. Moving to their social media accounts, these profiles displayed curated shots and travel information for National Parks in Australia.</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 12px 0 0 0; line-height: 1.6;">My team didn't see an option for a redesign but instead believed we would be working to expand a social media brand's offering with a new website.</p>
                </div>
            </div>
        </div>
        
        <h2>Goals & Challenges</h2>
        <p>During our Zoom call with the CEO of Norther, Dany, we defined clear goals and expectations for this project.</p>
        
        <div style="background: linear-gradient(135deg, #4a4a3d 0%, #38382d 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #f4d03f; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">💡</span>
                <div style="flex: 1;">
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">High Level Goals</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>Research and develop a content strategy for the Norther brand</li>
                        <li>Find new opportunities through user research</li>
                        <li>Design high-fidelity prototype for new website</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #5a3d3d 0%, #3d2828 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #ff9f43; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">⚠️</span>
                <div style="flex: 1;">
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">Concerns & Challenges</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0 0 8px 0;"><strong style="color: #fff;">Highly competitive market.</strong> How might we create content that provides a unique perspective to traveling?</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0 0 8px 0;"><strong style="color: #fff;">What are users interested in?</strong> How might we integrate a website to successfully capture the social media users?</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0;"><strong style="color: #fff;">Maintain the brand goals?</strong> How might we educate travelers about the unique value of Australia Tourism?</p>
                </div>
            </div>
        </div>
        
        <h2>User Research</h2>
        <p>As a team, we crafted a 15-question survey to distribute directly to Norther's social media following. Norther provided an incentive for filling out our survey and we received 65 meaningful responses. Due to the survey being shared a few days late, we had a limited time to accept results.</p>
        <p>With the amazing opportunity to talk directly to their following, we wanted to define demographics, explore content interests and discover user behavior and goals.</p>
        
        <p><em>[Image placeholder: Norther's Audience Statistics]</em></p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="color: #fff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">51.6%</p>
                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Age 24-44</p>
            </div>
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="color: #fff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">66.7%</p>
                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Research trips with social media</p>
            </div>
            <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="color: #fff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">62.1%</p>
                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Do not plan travel with children</p>
            </div>
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="color: #fff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">54.8%</p>
                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Research trips on Mobile</p>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #4a3f5c 0%, #2d2538 100%); padding: 20px; border-radius: 12px; border-left: 4px solid #8A2BE2; margin: 24px 0;">
            <p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">Key quote from users</p>
            <p style="color: #fff; font-style: italic; margin: 0; font-size: 16px; line-height: 1.6;">"A clear summary of what's open and closed and the best weather"</p>
        </div>
        
        <h2>Synthesizing User Responses</h2>
        <p>Our most time-consuming aspect of the project. Using Miro, we added our survey response information and refined our information through affinity mapping.</p>
        
        <div style="background: linear-gradient(135deg, #3d4a5a 0%, #2d3840 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #40E0D0; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">👉</span>
                <div>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; line-height: 1.6;">This process was essential in helping Sonya develop a meaningful persona. Our findings here also helped us focus our content strategy at a later stage.</p>
                </div>
            </div>
        </div>
        
        <p><em>[Image placeholder: Affinity Mapping Process]</em></p>
        
        <h2>Competitive Analysis</h2>
        <p>Exploring the competition, I found tourism market in Northern Australia has high competition with well-known websites. These websites mostly focused on travel articles and destination overviews. But when comparing tourism websites from across the world, I found possibilities for differentiation and new strategies for connecting social media and websites.</p>
        
        <p><em>[Image placeholder: Competitive Analysis Grid]</em></p>
        
        <h2>Team Check-up</h2>
        <p>At this point of the project we were nearing our half-way point in the 2.5 weeks deadline. We stepped back and re-evaluated our position. We agreed that we would need to revise our initial goals and develop more realistic expectations for what we can deliver.</p>
        
        <div style="background: linear-gradient(135deg, #4a4a3d 0%, #38382d 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #f4d03f; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">💡</span>
                <div style="flex: 1;">
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">Revised High Level Goals</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>Research and develop a content strategy for the Norther brand</li>
                        <li>Find new opportunities through user-research</li>
                        <li style="text-decoration: line-through; opacity: 0.5;">Design high-fidelity prototype for new website</li>
                        <li>Provide design rollout recommendations based on MVP (minimum viable product)</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <p>We also developed our Problem and Solution statements at this point.</p>
        
        <div style="background: linear-gradient(135deg, #3d4a5a 0%, #2d3840 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #40E0D0; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">👉</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 8px 0;">Problem Statement</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; line-height: 1.6;">Young travelers need better insight into planning their adventures so that they can prepare accordingly and have an experience that matches their expectations.</p>
                </div>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #3d4a5a 0%, #2d3840 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #40E0D0; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">👉</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 8px 0;">Our Solution</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; line-height: 1.6;">Provide focused park information, insider insights, and resources to help educate and plan fulfilling destination visits, while helping them adapt to unexpected circumstances during their visit.</p>
                </div>
            </div>
        </div>
        
        <h2>Information Architecture</h2>
        <p>Dany provided us with a brief content strategy draft that she asked us to validate through our research. As Norther does not currently offer content it was difficult to fully grasp what we were provided. Overcoming this challenge, we worked as a team to develop a successful information architecture through the process of affinity mapping.</p>
        
        <p><em>[Image placeholder: Before - Original IA]</em></p>
        <p><em>[Image placeholder: After - Refined IA]</em></p>
        
        <h2>Content Rollout MVP</h2>
        <p>This phased approach is designed to create the most impactful content, soonest, and get the new Norther site up and running. This allows for a structured expansion of offerings as the team bandwidth allows for it.</p>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; margin: 24px 0; text-align: center;">
            <p style="color: #fff; font-weight: 600; margin: 0; font-size: 18px;">The MVP is Based on the User</p>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">User needs → Brand Voice → Beyond</p>
        </div>
        
        <p><em>[Image placeholder: MVP Phased Approach Diagram]</em></p>
        <p><em>[Image placeholder: Content Strategy Recommendations]</em></p>
        <p><em>[Image placeholder: Layout Recommendations]</em></p>
        
        <h2>Our Recommendations to Norther</h2>
        <ul>
            <li><strong>Well-defined content structure</strong> based on user research</li>
            <li><strong>Research-based understanding</strong> of their audience needs</li>
            <li><strong>Actionable layout recommendations</strong> for implementation</li>
            <li><strong>Starting point content strategy</strong> with phased rollout</li>
            <li><strong>Clear execution plan</strong> to implement recommendations</li>
        </ul>
        
        <h2>Key Deliverables</h2>
        <ul>
            <li><strong>65-response user survey</strong> with comprehensive analysis</li>
            <li><strong>Validated information architecture</strong> restructuring content from social-first to web-optimized</li>
            <li><strong>Phased content rollout strategy</strong> prioritizing quick wins and user needs</li>
            <li><strong>Design system recommendations</strong> with mobile-first approach (54.8% mobile usage)</li>
            <li><strong>Final presentation deck</strong> delivered to stakeholder</li>
        </ul>
        
        <h2>Impact & Results</h2>
        <p>Our recommendations provided Norther with a clear, research-backed path forward to bridge their successful social media presence with a purposeful web experience that serves their audience's actual needs for planning national park adventures.</p>
        
        <p><strong>Business Impact:</strong> Transformed Norther from a digital marketing company with unclear offerings into a focused content platform with a validated strategy for converting 60K+ social media followers into engaged website users.</p>
        
        <h2>What I Learned</h2>
        <ul>
            <li><strong>Adapting to ambiguity:</strong> When initial project scope didn't match reality, we pivoted quickly after preliminary research to redefine deliverables</li>
            <li><strong>Managing constraints:</strong> Adjusted from high-fidelity designs to strategic recommendations when timeline required pragmatic scoping at the halfway point</li>
            <li><strong>Direct user access is gold:</strong> Survey responses from actual followers provided insights no amount of secondary research could match</li>
            <li><strong>Research synthesis takes time:</strong> Affinity mapping was time-intensive but essential for translating 65 responses into actionable insights</li>
        </ul>
    `
},


// Replace the AI Agent Platform object in your CASE_STUDIES array with this:

{
    id: 'ai-agent-platform',
    icon: '🤖',
    title: 'AI Agent Launchpad Redesign',
    description: 'Redesigning AI agent platforms to prioritize utility over speculation—making real tech visible and usable.',
    gradient: 'gradient2',
    meta: {
        client: 'Independent Research',
        role: 'UX Design & Research',
        timeline: 'Ongoing'
    },
    content: `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 12px; margin: 0 0 32px 0; text-align: center;">
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 18px; line-height: 1.6; font-weight: 500;">Making agent platforms actually usable, beyond memecoin trading</p>
        </div>
        
        <h2>The Problem</h2>
        <p>Most AI agent launchpads are built like existing DEXs or memecoin platforms: a focus on price charts, trading metrics, and vague product descriptions. Users get hyped into buying tokens for features and roadmaps but don't know how (or if) they can actually use the agent. There's a complete disconnect between what's being sold and how it works.</p>
        
        <div style="background: linear-gradient(135deg, #4a3f5c 0%, #2d2538 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #8A2BE2; margin: 24px 0;">
            <p style="color: #fff; font-style: italic; margin: 0; font-size: 16px; line-height: 1.6;">"I bought the token… now what?"</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #5a3d3d 0%, #3d2828 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #ff6b6b; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">❌</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 8px 0;">This isn't a visual issue — it's structural</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; line-height: 1.6;">These platforms fail to understand web3, focusing solely on memecoin trading while ignoring the real product they have. No platform has been able to create a coherent journey that ties discovery, investment, and utility together.</p>
                </div>
            </div>
        </div>
        
        <h2>Research & Analysis</h2>
        <p><strong>Platforms Audited:</strong> Virtuals, MakeFun, Spectral, Vital, Soulgraph</p>
        <p><strong>Research Approach:</strong> Systematic product audits, community research through Discord and Twitter, AI-assisted deep research (GPT-4, Claude, Grok)</p>
        
        <div style="background: linear-gradient(135deg, #3d4a5a 0%, #2d3840 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #40E0D0; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">🔍</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">Consistent Patterns Across Platforms</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>Agent pages are 60–80% price chart, 1 vague sentence of description</li>
                        <li>Most don't show what the agent actually does (no demo, walkthrough, or preview)</li>
                        <li>Users buy tokens without understanding how to access or use the tech</li>
                        <li>Functional details (if they exist) are buried in docs or Twitter threads</li>
                        <li>Only Soulgraph slightly prioritized utility, but execution was still unclear</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <p><em>[Image placeholder: Platform comparison screenshots showing speculation-focused layouts]</em></p>
        
        <h2>User Feedback</h2>
        <p>Real quotes gathered from community Discord servers and social media:</p>
        
        <div style="display: grid; gap: 12px; margin: 24px 0;">
            <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #667eea;">
                <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Clarity</p>
                <p style="margin: 8px 0 0 0; color: #333; font-style: italic;">"I can't tell what this agent actually does from the landing page."</p>
            </div>
            <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #f5576c;">
                <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Trust</p>
                <p style="margin: 8px 0 0 0; color: #333; font-style: italic;">"You don't own your agent. It's centralized + opaque."</p>
            </div>
            <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #00f2fe;">
                <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Onboarding</p>
                <p style="margin: 8px 0 0 0; color: #333; font-style: italic;">"I bought the token… now what?"</p>
            </div>
            <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #38f9d7;">
                <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Utility</p>
                <p style="margin: 8px 0 0 0; color: #333; font-style: italic;">"It just shows a price chart. Is this even real?"</p>
            </div>
            <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #f093fb;">
                <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Differentiation</p>
                <p style="margin: 8px 0 0 0; color: #333; font-style: italic;">"How is this better than any other meme launchpad?"</p>
            </div>
        </div>
        
        <h2>Design Hypothesis</h2>
        <div style="background: linear-gradient(135deg, #4a4a3d 0%, #38382d 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #f4d03f; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">🧠</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">Core Hypothesis</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0 0 16px 0; line-height: 1.6;">If we flip the structure — leading with what the agent <strong>does</strong> instead of what it <strong>costs</strong> — users will understand the product better, trust the platform more, and actually engage with the technology.</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0 0 8px 0; font-weight: 600;">Supporting hypotheses:</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>Showing a quick preview or demo improves comprehension</li>
                        <li>Categorizing by functionality helps users explore and compare</li>
                        <li>Transparency about specs builds trust (training data, source, devs)</li>
                        <li>Clear post-purchase flows improve retention and reduce support tickets</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h2>Information Architecture Shift</h2>
        <p>The core problem is structural. Current platforms follow this flow:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0; border-left: 4px solid #ff6b6b;">
            <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Current Structure</p>
            <p style="margin: 8px 0 0 0; color: #333; font-family: monospace;">Token Chart → Price Action → Vague Value Prop → Immediate Purchase CTA</p>
        </div>
        
        <p>I'm proposing this alternative:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0; border-left: 4px solid #38f9d7;">
            <p style="margin: 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Proposed Structure</p>
            <p style="margin: 8px 0 0 0; color: #333; font-family: monospace;">Agent Introduction → Use Case Examples → Interactive Preview → Optional Financial Engagement</p>
        </div>
        
        <p><em>[Image placeholder: Side-by-side user flow comparison diagrams]</em></p>
        
        <h2>Target User</h2>
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 12px; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 32px;">👤</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">The Crypto-Native Explorer</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0 0 12px 0; line-height: 1.6;">Mid-20s, crypto-native user who came from NFTs and lives on Twitter/Discord.</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>Skeptical but curious about new technology</li>
                        <li>Doesn't read documentation — expects clarity from UI</li>
                        <li>Expects usable products, not just hype and speculation</li>
                        <li>Values transparency and authenticity</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h2>Problems to Solve</h2>
        <div style="background: linear-gradient(135deg, #5a3d3d 0%, #3d2828 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #ff9f43; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">⚠️</span>
                <div style="flex: 1;">
                    <ol style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li><strong>Utility buried under financial noise</strong> — Real functionality hidden behind price charts</li>
                        <li><strong>No clear explanation</strong> — Users can't understand what agents actually do</li>
                        <li><strong>Token ≠ access</strong> — Users confused after purchase about next steps</li>
                        <li><strong>Zero transparency</strong> — No info on how agents work or who built them</li>
                        <li><strong>Wrong mental model</strong> — Platforms feel like trading terminals, not tools</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <h2>Design Goals</h2>
        <div style="background: linear-gradient(135deg, #4a4a3d 0%, #38382d 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #f4d03f; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">✅</span>
                <div style="flex: 1;">
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>Make functionality the first thing people see</li>
                        <li>Explain what the agent does + how to use it</li>
                        <li>Connect token ownership to actual utility</li>
                        <li>Build trust through creator info and transparent tech specs</li>
                        <li>Help users compare agents based on use cases, not hype</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h2>Proposed Solution Framework</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="color: #8A2BE2; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Homepage Redesign</p>
            <ul style="margin: 0; padding-left: 20px; color: #444; line-height: 1.8;">
                <li>Agent categories based on <strong>what they do</strong> (Copytrading, Research, Content, etc.)</li>
                <li>Spotlight sections showing <strong>working examples</strong> in action</li>
                <li>Simple, jargon-free explanation of what AI agents are + how they work</li>
                <li>Financial information available but not dominant</li>
            </ul>
        </div>
        
        <p><em>[Image placeholder: Homepage wireframe with functional categories]</em></p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="color: #8A2BE2; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Agent Cards</p>
            <ul style="margin: 0; padding-left: 20px; color: #444; line-height: 1.8;">
                <li>Quick 5-second <strong>demo or preview</strong> showing actual functionality</li>
                <li>Clear tags like "Onchain Analyst" or "Telegram Trading Bot"</li>
                <li>Functional summary <strong>before</strong> price information</li>
                <li>Trust indicators: creator info, deployment date, user count</li>
            </ul>
        </div>
        
        <p><em>[Image placeholder: Agent card redesign mockup]</em></p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="color: #8A2BE2; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Agent Profile Pages</p>
            <ul style="margin: 0; padding-left: 20px; color: #444; line-height: 1.8;">
                <li><strong>"What it does"</strong> block at the top (not marketing fluff)</li>
                <li>Transparent specs: training data, use cases, source links, creator info</li>
                <li>Token information moved down — <strong>function first</strong></li>
                <li>Step-by-step usage guide + creator roadmap</li>
                <li>Community feedback and actual use examples</li>
            </ul>
        </div>
        
        <p><em>[Image placeholder: Agent profile page wireframe]</em></p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="color: #8A2BE2; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">User Dashboard</p>
            <ul style="margin: 0; padding-left: 20px; color: #444; line-height: 1.8;">
                <li>See your agents + <strong>what they do</strong></li>
                <li>Usage metrics and activity, not just price performance</li>
                <li>Quick-access tutorials, configuration, and integration steps</li>
                <li>Clear next steps after token purchase</li>
            </ul>
        </div>
        
        <h2>Business & Operations Benefits</h2>
        <ul>
            <li><strong>Reduced support burden</strong> — Fewer "What does this agent do?" tickets</li>
            <li><strong>Faster content production</strong> — Bio templates and design system speed up launches</li>
            <li><strong>Scalable design system</strong> — Framework works across new agents without redesign</li>
            <li><strong>Community trust</strong> — Easier to onboard creators with transparent structure</li>
            <li><strong>User retention</strong> — Clear utility leads to sustained engagement, not just speculation</li>
        </ul>
        
        <h2>Current Status & Next Steps</h2>
        <div style="background: linear-gradient(135deg, #3d4a5a 0%, #2d3840 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #40E0D0; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">🔜</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">What I'm Working On</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>Mid-fidelity wireframes in Figma</li>
                        <li>Exploring layout implementations with Tailwind</li>
                        <li>Getting feedback from builders and users via Discord and Grok</li>
                        <li>Testing hypotheses through prototype interactions</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h2>Why This Matters</h2>
        <p>Crypto UX is chaotic — especially when real products hide behind meme-driven front ends. This project is about making real technology visible and usable, proving that better structure leads to better trust, better usage, and a more honest launchpad experience.</p>
        
        <p><strong>The core insight:</strong> These platforms might be intentionally prioritizing speculation over comprehension. But if they want sustained growth beyond hype cycles, they need to help users actually understand and use what they're buying.</p>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 28px; border-radius: 12px; margin: 32px 0; text-align: center;">
            <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 20px;">Design Philosophy</p>
            <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: 17px; line-height: 1.6;">Lead with utility, not speculation.<br>Show what it does before showing what it costs.<br>Make real tech visible and usable.</p>
        </div>
        
        <h2>What I Learned</h2>
        <ul>
            <li><strong>Question assumptions</strong> — Even in emerging tech spaces, established patterns may not be optimal</li>
            <li><strong>Connect UX to business outcomes</strong> — Good design isn't just aesthetics; it's about sustainable growth</li>
            <li><strong>Systematic analysis matters</strong> — Auditing multiple platforms revealed consistent structural problems</li>
            <li><strong>Sometimes the problem IS the business model</strong> — Speculation-focused design might be intentional, not accidental</li>
        </ul>
    `
},

    // Add this to your CASE_STUDIES array in caseStudies.js

{
    id: 'inline-skate-archive',
    icon: '🛼',
    title: 'Aggressive Inline Archive',
    description: 'Building a Netflix for niche skate videos—preserving 20+ years of inline skating culture through community-driven digital archiving.',
    gradient: 'gradient3',
    meta: {
        client: 'Personal Project',
        role: 'UX Design, Development & Video Archiving',
        timeline: '2014 - Present (10 years)'
    },
    content: `
        <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 24px; border-radius: 12px; margin: 0 0 32px 0; text-align: center;">
            <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 18px; line-height: 1.6; font-weight: 500;">A decade-long journey preserving aggressive inline skating history</p>
        </div>
        
        <h2>The Vision</h2>
        <p>Create a comprehensive digital archive for aggressive inline skating videos—a Netflix for a niche community. Connect classic VHS-era content with modern filmers, preserving decades of skating culture while making it accessible and discoverable.</p>
        
        <div style="background: linear-gradient(135deg, #4a4a3d 0%, #38382d 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #f4d03f; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">💡</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 8px 0;">The Core Problem</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0; line-height: 1.6;">Decades of aggressive inline skating videos were scattered across degrading VHS tapes, lost YouTube channels, and personal collections. No central archive existed, and without modern tools, building a comprehensive database was unsustainable for one person.</p>
                </div>
            </div>
        </div>
        
        <h2>Version 1.0: The Manual Era (2014)</h2>
        <p>Ten years ago, I built the first version using basic HTML/CSS/Bootstrap. The process was entirely manual but driven by passion for preservation.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="color: #8A2BE2; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">The Workflow</p>
            <ul style="margin: 0; padding-left: 20px; color: #444; line-height: 1.8;">
                <li><strong>Digitization:</strong> Converting VHS tapes to digital formats</li>
                <li><strong>Restoration:</strong> Using AVI Synth and filters to repair old footage</li>
                <li><strong>Uploading:</strong> YouTube hosting for best resolution and accessibility</li>
                <li><strong>Metadata:</strong> Manually researching and cataloging video information</li>
                <li><strong>Networking:</strong> Connecting with skaters about their content and permissions</li>
            </ul>
        </div>
        
        <p><em>[Image placeholder: Screenshot of original HTML/Bootstrap site]</em></p>
        
        <div style="background: linear-gradient(135deg, #3d4a5a 0%, #2d3840 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #40E0D0; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">📊</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">Version 1.0 Results</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li><strong>150+ videos</strong> digitized and archived</li>
                        <li><strong>100+ skaters</strong> catalogued with profiles</li>
                        <li><strong>Consistent positive feedback</strong> from the community</li>
                        <li><strong>YouTube channel</strong> became a reference for the community</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h2>The Limitations</h2>
        <p>Despite success, the manual approach hit scalability walls that made the original vision impossible to fully realize.</p>
        
        <div style="background: linear-gradient(135deg, #5a3d3d 0%, #3d2828 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #ff9f43; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">⚠️</span>
                <div style="flex: 1;">
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0;">Unsustainable Challenges</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li><strong>Manual data entry</strong> — Every video required hand-coded HTML updates</li>
                        <li><strong>No search or filtering</strong> — Users couldn't explore by skater, year, or style</li>
                        <li><strong>Static structure</strong> — Hard to maintain and update as archive grew</li>
                        <li><strong>Upload bottleneck</strong> — Everything depended on me digitizing and uploading</li>
                        <li><strong>Limited metadata</strong> — Couldn't tag tricks, spots, or other useful details</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h2>The Pivot: AI-Enabled Rebuild</h2>
        <p>With the emergence of AI coding tools, I could finally build the database-driven platform I originally envisioned. The goal shifted from doing everything myself to creating infrastructure that empowers the community.</p>
        
        <div style="background: linear-gradient(135deg, #4a4a3d 0%, #38382d 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #f4d03f; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">🎯</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">Revised Goals for Version 2.0</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li>Build a proper content management system with search and filtering</li>
                        <li>Connect filmers directly with their content (artist with art)</li>
                        <li>Support community contributions rather than solo uploading</li>
                        <li>Create sustainable infrastructure that scales beyond one person</li>
                        <li>Preserve credit and context for each video and creator</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h2>Technical Approach</h2>
        <p>I designed the entire site from my vision and used AI (Claude Code and GPT) to build it out, handle data migration, and solve technical challenges.</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="color: #8A2BE2; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Tech Stack</p>
            <ul style="margin: 0; padding-left: 20px; color: #444; line-height: 1.8;">
                <li><strong>Next.js</strong> — Modern React framework for performance and SEO</li>
                <li><strong>Sanity CMS</strong> — Structured content database for videos, skaters, and metadata</li>
                <li><strong>AI-assisted development</strong> — Claude Code and GPT for building and migration</li>
                <li><strong>YouTube integration</strong> — Embedding videos while giving filmers control</li>
            </ul>
        </div>
        
        <p><em>[Image placeholder: New Next.js site architecture diagram]</em></p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 16px 0;">
            <p style="color: #8A2BE2; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Key Features</p>
            <ul style="margin: 0; padding-left: 20px; color: #444; line-height: 1.8;">
                <li><strong>Dynamic search and filtering</strong> — Browse by skater, year, video type, or crew</li>
                <li><strong>Skater profiles</strong> — Dedicated pages connecting all content from each skater</li>
                <li><strong>Rich metadata</strong> — Tags, locations, filming dates, and cultural context</li>
                <li><strong>Filmer credits</strong> — Proper attribution connecting artists to their work</li>
                <li><strong>Community contributions</strong> — Infrastructure for filmers to submit their content</li>
            </ul>
        </div>
        
        <p><em>[Image placeholder: Screenshot of new video detail page]</em></p>
        <p><em>[Image placeholder: Screenshot of skater profile page]</em></p>
        
        <h2>Video Restoration Process</h2>
        <p>The technical challenge of preserving decades-old footage while maintaining quality.</p>
        
        <div style="background: linear-gradient(135deg, #3d4a5a 0%, #2d3840 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #40E0D0; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">🎬</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">Digitization Pipeline</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0 0 12px 0; line-height: 1.6;"><strong>Current Status:</strong> Most videos ready for upload, with 20 raw footage pieces requiring restoration work.</p>
                    <p style="color: rgba(255,255,255,0.9); margin: 0 0 8px 0; line-height: 1.6;"><strong>Research Focus:</strong> Exploring new filter strategies and restoration techniques for remaining raw footage.</p>
                    <p style="color: rgba(255,255,255,0.8); margin: 0; line-height: 1.6; font-size: 14px;">Previous work included AVI Synth filters for VHS noise reduction, color correction, and stabilization.</p>
                </div>
            </div>
        </div>
        
        <h2>Community Philosophy</h2>
        <p>This project has always been about preservation and access, not ownership or monetization.</p>
        
        <div style="background: linear-gradient(135deg, #4a3f5c 0%, #2d2538 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #8A2BE2; margin: 24px 0;">
            <p style="color: #fff; font-style: italic; margin: 0; font-size: 16px; line-height: 1.6;">"It's just a library for the community. The response has always been positive."</p>
        </div>
        
        <ul>
            <li><strong>No permissions barriers</strong> — Focus on preservation and celebration</li>
            <li><strong>Proper attribution</strong> — Every video credits the filmer and skaters</li>
            <li><strong>Community ownership</strong> — Shifting from solo curation to collaborative archive</li>
            <li><strong>Cultural preservation</strong> — Documenting an underground sport's evolution</li>
        </ul>
        
        <h2>Launch Plan</h2>
        <div style="background: linear-gradient(135deg, #3d4a5a 0%, #2d3840 100%); padding: 24px; border-radius: 12px; border-left: 4px solid #40E0D0; margin: 24px 0;">
            <div style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="font-size: 24px;">🚀</span>
                <div>
                    <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 17px;">Initial Release</p>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                        <li><strong>20+ videos</strong> at launch to demonstrate platform</li>
                        <li><strong>Core functionality</strong> — Search, browse, and discovery features</li>
                        <li><strong>Filmer profiles</strong> — Connecting creators with their work</li>
                        <li><strong>Migration path</strong> — Strategy for bringing over 150+ archive videos</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <h2>Impact & Growth Over 10 Years</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="color: #fff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">150+</p>
                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Videos Preserved</p>
            </div>
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="color: #fff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">100+</p>
                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Skaters Documented</p>
            </div>
            <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="color: #fff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">10</p>
                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Years of Commitment</p>
            </div>
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 12px; text-align: center;">
                <p style="color: #fff; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">2</p>
                <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">Complete Rebuilds</p>
            </div>
        </div>
        
        <h2>Why This Matters</h2>
        <p>This isn't just about building a website—it's about preserving a subculture's history and making it accessible for future generations. Aggressive inline skating has a rich visual history that exists primarily in personal collections and degrading physical media. Without intentional preservation, it disappears.</p>
        
        <p><strong>The evolution from V1 to V2 represents more than technical growth</strong>—it's about recognizing when to wait for the right tools, adapting your approach, and building sustainable infrastructure that outlasts individual effort.</p>
        
        <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); padding: 28px; border-radius: 12px; margin: 32px 0; text-align: center;">
            <p style="color: #fff; font-weight: 600; margin: 0 0 12px 0; font-size: 20px;">Project Philosophy</p>
            <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: 17px; line-height: 1.6;">Preserve the culture. Credit the artists.<br>Build for the community, not for yourself.<br>Sometimes the best strategy is patience and iteration.</p>
        </div>
        
        <h2>What I Learned</h2>
        <ul>
            <li><strong>Long-term vision requires adaptation</strong> — The right solution 10 years ago isn't the right solution today</li>
            <li><strong>Community trust is earned through consistency</strong> — A decade of positive feedback comes from genuine care</li>
            <li><strong>Technical constraints are temporary</strong> — Waiting for better tools enabled the original vision</li>
            <li><strong>Sustainability over heroics</strong> — Building infrastructure for community contribution beats solo effort</li>
            <li><strong>Design + AI collaboration</strong> — Having clear vision while using AI for execution produces better results than either alone</li>
            <li><strong>Cultural preservation is design work</strong> — Information architecture and UX are crucial for making history accessible</li>
        </ul>
    `
},
];

// Gradient color schemes for case study cards
const GRADIENTS = {
    gradient1: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    gradient2: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    gradient3: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    gradient4: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradient5: 'linear-gradient(135deg, #E6B3FF 0%, #40E0D0 50%, #8A2BE2 100%)'
};