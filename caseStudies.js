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
    {
        id: 'skate-archive',
        icon: '🚴',
        title: 'BMX Archive',
        description: 'Digital archive and community platform preserving 40+ years of BMX culture and enabling vintage restorations.',
        gradient: 'gradient3',
        meta: {
            client: 'Small Wheels BMX Collective',
            role: 'UX Designer & Information Architect',
            timeline: '12 weeks'
        },
        content: `
            <h2>Challenge</h2>
            <p>Building a comprehensive digital archive and community platform for vintage BMX enthusiasts spanning 40+ years of history.</p>
            
            <h2>Content Scope</h2>
            <ul>
                <li><strong>2,000+ photographs</strong> (1970s-2020s)</li>
                <li><strong>500+ race results</strong> and programs</li>
                <li><strong>150+ bike specifications</strong> and builds</li>
                <li><strong>Oral histories</strong> from 25+ community members</li>
            </ul>
            
            <h2>Design Solution</h2>
            <p>Created a visual timeline navigation with AI-assisted tagging and community crowdsourcing to identify people, bikes, and locations. Implemented story layering for community memories.</p>
            
            <h2>Impact</h2>
            <ul>
                <li><strong>450+ registered</strong> community members</li>
                <li><strong>85% of archive</strong> digitized and tagged</li>
                <li><strong>12 vintage bike restorations</strong> completed using archive specs</li>
                <li><strong>Featured in BMX Plus! Magazine</strong></li>
            </ul>
        `
    }
];

// Gradient color schemes for case study cards
const GRADIENTS = {
    gradient1: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    gradient2: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    gradient3: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    gradient4: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradient5: 'linear-gradient(135deg, #E6B3FF 0%, #40E0D0 50%, #8A2BE2 100%)'
};