import React from 'react';
import './resume.css';
import SectionTitle from '../components/SectionTitle';
import ResumeItem from '../components/ResumeItem';

async function getResumeData() {
const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/resume`);
  return res.json();
}

export default async function Resume() {
  const items : [] | any = await getResumeData();

  return (
    <section id="resume" className="resume">
      <div className="container">
        <SectionTitle
          title="Resume"
          brief="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga
           eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui i
           mpedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        />

        <div className="row">
  <div className="col-lg-6">
    <h3 className="resume-title">{items[0].category}</h3>

    {items &&
      items.length > 0 &&
      items[0].content.map(
        (item: {
          id: number;
          title: string;
          period: string;
          brief: string;
          details: [string];
        }) => <ResumeItem key={item.id} item={item} />
      )}
  </div>

  <div className="col-lg-6"></div>
  <h3 className="resume-title">{items[1].category}</h3>

    {items &&
      items.length > 0 &&
      items[1].content.map(
        (item: {
          id: number;
          title: string;
          period: string;
          brief: string;
          details: [string];
        }) => <ResumeItem key={item.id} item={item} />
      )}
</div>
      </div>
    </section>
  );
}