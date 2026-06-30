import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <SectionTitle
                    title="about"
                    brief="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
                />
            </div>
        </section>
    );
}