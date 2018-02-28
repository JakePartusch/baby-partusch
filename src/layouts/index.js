import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Content, Footer } from '../components';

import './index.css';

export default function TemplateWrapper({ children }) {
  return (
    <main className="container">
      <Helmet
        title="Where is Baby Partusch?"
        meta={[
          {
            name: 'description',
            content:
              'Jake and Katrina Partusch are expecting. When will baby Partusch arrive?'
          },
          { name: 'keywords', content: 'baby, due date, child' }
        ]}
      />
      <Content children={children} />
      <Footer />
    </main>
  );
}
