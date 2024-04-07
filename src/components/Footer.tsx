import styles from './Footer.module.css';

import * as React from 'react';

import { useConfig } from 'nextra-theme-docs';

type SectionLink = {
  readonly url: string;
  readonly title: string;
};

type Section = {
  readonly title: string;
  readonly links: readonly SectionLink[];
};

type Props = {
  readonly github: string;
  readonly sections: readonly Section[];
};

export const Footer = (props: Props) => {
  const { sections } = props;

  const { project, chat } = useConfig();

  return (
    <div className={`${styles.root} lg:flex lg:flex-row-reverse`}>
      <div className={`${styles.columns} lg:w-3/4`}>
        {sections.map(section => {
          return (
            <section key={section.title}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map(link => {
                  return (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <section>
          <h4>Grapp.Dev</h4>
          <ul>
            <li>
              <a
                href={project.link}
                className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href={chat.link}
                className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              >
                Discord ↗
              </a>
            </li>
            <li>
              <a
                href={`${project.link}/discussions`}
                className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              >
                Discussions ↗
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sponsors/mobily"
                className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
              >
                Sponsor ↗
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="lg:w-1/4">
        © {new Date().getFullYear()}{' '}
        <a
          href="/"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
          Grapp.Dev
        </a>
      </div>
    </div>
  );
};
