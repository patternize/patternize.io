import React from 'react';
import GitHubButton from 'react-github-btn';

export default function CustomGitHubButton() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0 10px' }}>
      <GitHubButton 
        href="https://github.com/patternize/patternize.io"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-size="large"
        data-show-count="true"
        aria-label="Star patternize/patternize.io on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  );
} 