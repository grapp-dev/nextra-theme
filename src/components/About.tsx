import { GrappLogo } from './GrappLogo';

export const About = () => {
  return (
    <>
      {/* @ts-expect-error: this_is_fine.png */}
      <p align="center">
        <GrappLogo className="grapp-logo" />
      </p>
      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        Hello there! My name is Marcin Dziewulski, also known as{' '}
        <a
          href="https://github.com/mobily"
          target="_blank"
          rel="noreferrer"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
          @mobily
        </a>
        , and I would be delighted to invite you to explore my personal workspace for open-source
        projects,{' '}
        <a
          href="https://github.com/grapp-dev"
          target="_blank"
          rel="noreferrer"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
          Grapp
        </a>
        .
      </p>
      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        At <span className="grapp">Grapp</span>, I want to share my ideas and experience with
        various programming languages, technologies, and patterns such as TypeScript, Ruby, Lua,
        ReScript, React Native, Functional Programming, and Functional Reactive Programming. I'm
        always looking for new ways to improve my work and help others.
      </p>
      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        In my free time, I create and maintain open-source projects like{' '}
        <a
          href="https://github.com/mobily/stacks"
          target="_blank"
          rel="noreferrer"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
          Stacks
        </a>
        , a set of useful components for building and maintaining React Native layouts,{' '}
        <a
          href="https://github.com/mobily/ts-belt"
          target="_blank"
          rel="noreferrer"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
          ts-belt
        </a>
        , a fast, modern, and practical utility library for FP in TypeScript, and{' '}
        <a
          href="https://github.com/grapp-dev/nui-components.nvim"
          target="_blank"
          rel="noreferrer"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
          nui-components.nvim
        </a>
        , a highly customizable library for creating user interfaces in Neovim.
      </p>
      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        I plan to update all my created libraries and move them to the{' '}
        <span className="grapp">Grapp</span> organization. I also want to create and share more
        useful libraries for the community.
      </p>
      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        If you think my work is helpful, I would appreciate it if you could support me here on{' '}
        <a
          href="https://github.com/sponsors/mobily"
          target="_blank"
          rel="noreferrer"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
          GitHub
        </a>
        . Additionally, you can choose a membership plan to continuously support my work and help me
        spend more time contributing to the open-source community.
      </p>
      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        I would love for you to chat with me on{' '}
        <a
          href="https://discord.gg/tSvmWuEHVp"
          target="_blank"
          rel="noreferrer"
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
        >
          Discord
        </a>
        . I'm always there to help, so please don't hesitate to reach out if you have any questions
        or concerns.
      </p>
      <div className="nx-mt-16"></div>
    </>
  );
};
