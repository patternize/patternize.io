import React from 'react';
import GitHubButton from 'react-github-btn';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CustomGitHubButton() {
  const {siteConfig} = useDocusaurusContext();
  const {organizationName} = siteConfig;
  const projectName = 'patternize.io';

  return (
    <div className="github-button-wrapper" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0 10px', 
      height: '100%',
      marginTop: '6px' // Added margin-top to align with other navbar items
    }}>
      <GitHubButton
        href={`https://github.com/${organizationName}/${projectName}`}
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-size="large"
        data-show-count="true"
        aria-label={`Star ${organizationName}/${projectName} on GitHub`}
      >
        Star
      </GitHubButton>
    </div>
  );
} 