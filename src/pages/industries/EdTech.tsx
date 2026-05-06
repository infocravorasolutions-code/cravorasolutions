import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const EdTech: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="EdTech Software Development | Learning Platform Development | Cravora"
      seoDescription="Cravora builds engaging EdTech products — LMS platforms, online learning apps, virtual classrooms, and adaptive learning tools. We create software that makes education accessible."
      heroSubtitle="EdTech Industry"
      heroTitle="EdTech Development That Makes Learning More Engaging and Accessible"
      heroDescription="We build learning management systems, online course platforms, virtual classrooms, and AI-powered educational tools that help educators teach better and learners achieve more."
      problemTitle="The Science and Business of Learning"
      problemContent={
        <>
          <p className="mb-4">Building effective EdTech software requires more than technical capability — it requires an understanding of learning design, learner motivation, and institutional dynamics.</p>
          <p>Cravora's EdTech team brings experience building products for both B2C learning markets and B2B institutional markets (schools and universities).</p>
        </>
      }
      solutionTitle="Modern Learning Experiences"
      solutionContent={
        <>
          <p className="mb-4">We understand SCORM and xAPI standards, accessibility requirements (WCAG 2.1), and the engagement mechanics that drive learner retention.</p>
          <p>We build platforms that are easy for teachers to use and engaging for students to learn from, ensuring high adoption and completion rates.</p>
        </>
      }
      buildSectionTitle="What We Build for EdTech"
      buildItems={[
        'Custom LMS (Learning Management System) platforms',
        'Online course creation and delivery platforms',
        'Virtual classroom and live session platforms',
        'Adaptive learning systems (personalised content)',
        'Student assessment, quiz, and certification tools',
        'AI-powered tutoring and feedback systems',
        'Corporate LMS and employee training platforms',
        'Mobile learning apps for on-the-go education',
        'Gamification (badges, leaderboards, streaks)',
        'SCORM/xAPI-compliant content players'
      ]}
      techStack={[
        { category: 'Streaming', items: 'Mux, AWS Elemental, HLS, WebRTC' },
        { category: 'Standards', items: 'SCORM, xAPI (Experience API), LTI' },
        { category: 'Interactive', items: 'H5P, Canvas API, WebSocket' },
        { category: 'Mobile', items: 'Flutter, React Native' }
      ]}
      ctaText="Build Your Learning Platform →"
    />
  );
};
