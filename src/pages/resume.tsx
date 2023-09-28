// Resume.tsx
import React from 'react';
import { Layout } from '~/layouts';

const ResumePage: React.FC = () => {
  return (
    <Layout.Default seo={{ title: 'Xiangyi ─ resume' }}>
      <div className="my-4 mx-4 sm:mx-6 lg:mb-6 lg:mx-8">
        <h1>Xiangyi Kong</h1>
        <p>Contact Information...</p>
        <section id="education">
          <h2>Education</h2>
          <p>Details...</p>
        </section>
        <section id="work-experience">
          <h2>Work Experience</h2>
          <p>Details...</p>
        </section>
        <section id="research">
          <h2>Research Experience</h2>
          <p>Details...</p>
        </section>
        <section id="technical-skills">
          <h2>Technical Skills</h2>
          <p>Details...</p>
        </section>
      </div>
    </Layout.Default>
  );
};

export default ResumePage;













