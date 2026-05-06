import React from 'react';
import { DetailedServiceTemplate } from '../../components/ui/DetailedServiceTemplate';

export const MobileAppDev: React.FC = () => {
  return (
    <DetailedServiceTemplate
      seoTitle="Mobile App Development Services | iOS & Android | Cravora Solutions"
      seoDescription="Cravora builds native and cross-platform mobile apps for iOS and Android. From consumer apps to enterprise mobility solutions — we deliver mobile experiences users love."
      heroSubtitle="Mobile App Development"
      heroTitle="Mobile Apps That Users Download — and Actually Keep Using"
      heroDescription="We build iOS and Android applications that combine beautiful design with rock-solid engineering — delivering mobile experiences that retain users, drive engagement, and grow your business."
      problemTitle="Why Most Mobile Apps Fail to Gain Traction"
      problemContent={
        <>
          <p className="mb-4">The app stores are full of products that launched with excitement and faded within months. The reasons are predictable: poor onboarding that loses users in the first session, sluggish performance that earns one-star reviews, and UI that looks great in a pitch deck but confuses real users in the real world.</p>
          <p>Many businesses also waste significant budget building separate native apps for iOS and Android — only to find that maintaining two codebases doubles their development cost and creates a fragmented user experience.</p>
        </>
      }
      solutionTitle="Mobile Development That Prioritises the User Experience"
      solutionContent={
        <>
          <p className="mb-4">At Cravora, every mobile app project starts with the user journey — not the feature list. We map out how real users will move through your app, where they will encounter friction, and how we can design flows that feel natural and effortless on a small screen.</p>
          <p>For most clients, we recommend Flutter for cross-platform development — a framework that delivers truly native-like performance on both iOS and Android from a single, maintainable codebase.</p>
        </>
      }
      buildSectionTitle="What We Deliver"
      buildItems={[
        'Consumer-facing iOS and Android applications',
        'Enterprise mobility and internal operations apps',
        'On-demand and marketplace apps (Uber/Airbnb style)',
        'E-commerce and m-commerce mobile apps',
        'Real-time messaging and notification systems',
        'Payment integration (Stripe, Apple Pay, Google Pay)',
        'Biometric authentication (Face ID, fingerprint)',
        'GPS, location tracking, and maps integration',
        'Offline-first apps with local data sync',
        'App Store Optimisation (ASO) guidance and support'
      ]}
      techStack={[
        { category: 'Cross-Platform', items: 'Flutter (Dart), React Native' },
        { category: 'Native iOS', items: 'Swift, SwiftUI, Xcode' },
        { category: 'Native Android', items: 'Kotlin, Jetpack Compose, Android Studio' },
        { category: 'Backend', items: 'Node.js, Firebase, Supabase, AWS Amplify' },
        { category: 'Analytics', items: 'Firebase Analytics, Mixpanel, Amplitude' }
      ]}
      faqs={[
        {
          question: 'Should I build a native app or a cross-platform app?',
          answer: 'For 90% of businesses, cross-platform (Flutter) is the best choice — it saves 40% in cost and 50% in maintenance time while feeling native. We only recommend pure native if you need very heavy 3D graphics or deep hardware integration.'
        },
        {
          question: 'How long does it take to get an app in the App Store?',
          answer: 'A standard MVP mobile app takes 10–16 weeks. This includes design, development, and the 1–2 week review period required by Apple and Google.'
        }
      ]}
      ctaText="Discuss Your App Idea →"
    />
  );
};
