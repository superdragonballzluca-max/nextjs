'use client';

import React, { useState, useEffect } from 'react';
import { counterData } from '..data/data';
import SectionTitle from '../components/SectionTitle';

export default function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <SectionTitle
          title="Facts"
          brief="Magnam dolores commodi suscipit..."
        />
      </div>
    </section>
  );
}