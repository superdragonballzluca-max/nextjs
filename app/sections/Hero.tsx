'use client';

import React from 'react';
import './hero.css';
import { ReactTyped } from 'react-typed';

export default function Hero() {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container">
                <h1>Luca Bianco</h1>

                <p>
                    Je suis{' '}
                    <ReactTyped
                        strings={[
                            'Sportif',
                            'Performer',
                            'Chef de projet',
                            'Consultant',
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={2000}
                        loop
                    />
                </p>
            </div>
        </section>
    );
}