import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import LectureContent from './LectureContent.mdx';
import 'katex/dist/katex.min.css';

const LectureIntroduction = () => (
  <MDXProvider>
    <LectureContent />
  </MDXProvider>
);

export default LectureIntroduction;
