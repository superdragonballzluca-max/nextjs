import React from 'react';
import './resume.css';
import SectionTitle from '../components/SectionTitle';
import ResumeItem from '../components/ResumeItem';
import { resume } from '../data/data';

export default function Resume() {
  const items = resume;

  return (
    <section id="resume" className="resume">
      <div className="container">
        <SectionTitle
          title="Resume"
          brief="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit."
        />

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">{items[0].category}</h3>

            {items[0].content.map((item) => (
              <ResumeItem key={item.id} item={item} />
            ))}

            <h3 className="resume-title">{items[1].category}</h3>

            {items[1].content.map((item) => (
              <ResumeItem key={item.id} item={item} />
            ))}
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">{items[2].category}</h3>

            {items[2].content.map((item) => (
              <ResumeItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}