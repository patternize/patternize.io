import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import CustomGitHubButton from './CustomGitHubButton';

export default function NavbarItemWrapper(props) {
  if (props.type === 'custom-github-button') {
    return <CustomGitHubButton {...props} />;
  }
  return <NavbarItem {...props} />;
}
