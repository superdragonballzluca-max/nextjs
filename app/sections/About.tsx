import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';
import profileImg from "/public/assets/images/profile-img.jpg";
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <SectionTitle
                    title="about"
                    brief="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
                />                <div className="row">
                    <div className="col-lg-4">
                        <Image
                            src={profileImg}
                            className="img-fluid"
                            alt="Profile image"
                        />
                    </div>

                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>UI/UX Designer &amp; Full Stack Web Developer.</h3>

<p className="fst-italic">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<div className="row">
    <div className="col-lg-6">
<ul>
    <li>
        <i className="bi bi-chevron-right"></i>{' '}
        <strong>Birthday:</strong> <span>1 May 1995</span>
    </li>

    <li>
        <i className="bi bi-chevron-right"></i>{' '}
        <strong>Website:</strong> <span>www.example.com</span>
    </li>

    <li>
        <i className="bi bi-chevron-right"></i>{' '}
        <strong>Phone:</strong> <span>+123 456 7890</span>
    </li>

    <li>
        <i className="bi bi-chevron-right"></i>{' '}
        <strong>City:</strong> <span>Your City, State</span>
    </li>
</ul>
    </div>

    <div className="col-lg-6">
        <ul>
    <li>
        <i className="bi bi-chevron-right"></i>{' '}
        <strong>Age:</strong> <span>29</span>
    </li>

    <li>
        <i className="bi bi-chevron-right"></i>{' '}
        <strong>Degree:</strong> <span>Master</span>
    </li>

    <li>
        <i className="bi bi-chevron-right"></i>{' '}
        <strong>Email:</strong> <span>email@example.com</span>
    </li>

    <li>
        <i className="bi bi-chevron-right"></i>{' '}
        <strong>Freelance:</strong> <span>Available</span>
    </li>
</ul>
    </div>
</div>
<p> ICI ECRIRE PARAGRAPHGE DE TEXTE LOREM EPSUM BULLSHIT </p>
                    </div>
                </div>


            </div>
        </section>
    );
}