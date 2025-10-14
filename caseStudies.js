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
    

        {
        id: 'ai-agent-platform',
        icon: '🤖',
        title: 'AI Agent Platform',
        description: 'Redesigned complex AI workflows into guided conversations, improving task completion by 45%.',
        gradient: 'gradient2',
        meta: {
            client: 'TechCorp AI',
            role: 'Senior UX Designer',
            team: 'PM, 2 Engineers, Data Scientist',
            timeline: '6 weeks'
        },
        content: `
            <h2>Challenge</h2>
            <p>The AI agent platform was experiencing a <strong>40% drop-off rate</strong> during complex task flows. Users were abandoning workflows midway through multi-step processes.</p>
            
            <h2>Key Problems Identified</h2>
            <ul>
                <li><strong>Cognitive Overload:</strong> Too many choices presented simultaneously</li>
                <li><strong>Trust Issues:</strong> Users couldn't assess AI recommendation confidence</li>
                <li><strong>Context Loss:</strong> Multi-step processes lacked continuity</li>
                <li><strong>Feedback Loop:</strong> No clear way to refine AI outputs</li>
            </ul>
            
            <h2>Design Solution</h2>
            <p>Redesigned the interface as a <em>guided conversation</em>, breaking complex tasks into digestible questions with smart defaults and AI confidence indicators.</p>
            
            <h2>Results</h2>
            <ul>
                <li><strong>Task completion rate:</strong> 60% → 87% (+45%)</li>
                <li><strong>Average session time:</strong> 3.2min → 5.8min (+81%)</li>
                <li><strong>User satisfaction score:</strong> 6.2/10 → 8.4/10 (+35%)</li>
                <li><strong>Support tickets:</strong> -23% reduction</li>
            </ul>
        `
    },
    {
        id: 'bmx-archive',
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