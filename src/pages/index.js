import React from 'react';

import { Celebration } from '../components';

import './index.css';

const Emphasis = ({ children }) => <span className="emphasis">{children}</span>;

const Message = ({ arrived }) => {
  if (arrived) {
    return (
      <span>
        Baby Partusch <Emphasis>has arrived!</Emphasis>
      </span>
    );
  }
  return (
    <span>
      Baby Partusch has <Emphasis>not yet</Emphasis> arrived
    </span>
  );
};

const Title = ({ arrived = false }) => {
  return (
    <h1 className="title">
      <Message arrived={arrived} />
    </h1>
  );
};

export default function IndexPage({ data }) {
  const { arrived } = data.arrivedStatus;
  return (
    <React.Fragment>
      {arrived && <Celebration />}
      <span className="title-container">
        <Title arrived={arrived} />
        {!arrived && (
          <h2 className="sub-title">
            Stay Tuned! He will be joining us soon&hellip;
          </h2>
        )}
        {/* Insert image here Jake */}
      </span>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    arrivedStatus: arrivedYaml {
      arrived
    }
  }
`;
