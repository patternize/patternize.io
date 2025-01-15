import React from "react";
import GitHubButton from "react-github-btn";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";

export default function CustomGitHubButton() {
  const { siteConfig } = useDocusaurusContext();
  const { organizationName, themeConfig } = siteConfig;
  const projectName = "patternize.io";
  const { colorMode } = useColorMode();

  return (
    <div
      className="github-button-wrapper"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        height: "100%",
        marginTop: "6px",
      }}
    >
      <GitHubButton
        href={`https://github.com/${organizationName}/${projectName}`}
        data-size="large"
        data-show-count="true"
        data-color-scheme={colorMode}
        aria-label={`Star ${organizationName}/${projectName} on GitHub`}
      ></GitHubButton>
    </div>
  );
}
