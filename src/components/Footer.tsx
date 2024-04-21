import styles from './Footer.module.css';

import * as React from 'react';

import clsx from 'clsx';
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
  readonly logo: React.JSXElementConstructor<any>;
  readonly description?: string;
};

const useNextraConfig = () => {
  try {
    return useConfig();
  } catch (_) {
    return {} as ReturnType<typeof useConfig>;
  }
};

export const Footer = (props: Props) => {
  const { sections, logo: Logo, description } = props;

  const { project, chat } = useNextraConfig();

  return (
    <div className={clsx(styles.root, 'lg:flex lg:flex-row-reverse')}>
      <div className={clsx(styles.columns, 'lg:w-2/3')}>
        {sections.map(section => {
          return (
            <section key={section.title}>
              <h4 className="text-base mb-4 nx-font-semibold nx-text-gray-900 dark:nx-text-gray-100">
                {section.title}
              </h4>
              <ul>
                {section.links.map(link => {
                  return (
                    <li key={link.url} className="mb-2">
                      <a
                        href={link.url}
                        className="nx-text-gray-500 hover:nx-text-gray-900  dark:hover:nx-text-gray-300"
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
          <h4 className="text-base mb-4 nx-font-semibold nx-text-gray-900 dark:nx-text-gray-100">
            Community
          </h4>
          <ul>
            <li className="mb-2">
              <a
                href={project?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-text-gray-500 hover:nx-text-gray-900  dark:hover:nx-text-gray-300"
              >
                GitHub ↗
              </a>
            </li>
            <li className="mb-2">
              <a
                href={chat?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-text-gray-500 hover:nx-text-gray-900  dark:hover:nx-text-gray-300"
              >
                Discord ↗
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://x.com/__marcin_"
                target="_blank"
                rel="noopener noreferrer"
                className="nx-text-gray-500 hover:nx-text-gray-900  dark:hover:nx-text-gray-300"
              >
                Twitter ↗
              </a>
            </li>
            <li className="mb-2">
              <a
                href={`${project?.link}/discussions`}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-text-gray-500 hover:nx-text-gray-900  dark:hover:nx-text-gray-300"
              >
                Discussions ↗
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://github.com/sponsors/mobily"
                target="_blank"
                rel="noopener noreferrer"
                className="nx-text-gray-500 hover:nx-text-gray-900  dark:hover:nx-text-gray-300"
              >
                Sponsor ↗
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="lg:w-1/3 lg:pr-24">
        <Logo className={clsx('mb-6', styles.logo)} />
        <span className="block mb-6 nx-text-gray-600 dark:nx-text-gray-400">{description}</span>
        <span className="text-sm">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/grapp-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="nx-text-primary-600 dark:nx-text-gray-100"
          >
            Grapp.Dev
          </a>
        </span>
      </div>
    </div>
  );
};
