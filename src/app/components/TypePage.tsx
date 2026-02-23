import React from "react";
import { Link } from "react-router";

/** Mapping from type scale item to existing CSS and optional recommendation note (note shown above code block). */
const EXISTING_CSS_BY_SCALE: Record<string, { css: string; note?: string }> = {
  hero: {
    note: "No named class; theme defines size only. Recommended adds: color: var(--charcoal); line-height not set in theme for 5xl.",
    css: `font-family: var(--font-display);   /* "Arquitecta", sans-serif */
font-size: var(--text-5xl);         /* 3rem / 48px */
font-weight: var(--font-weight-black);  /* 900 */
letter-spacing: var(--tracking-wide);   /* .025em */
text-transform: uppercase;`,
  },
  heroMobile: {
    note: "No --text-4xl in theme; no named class. Add to theme if needed: --text-4xl: 2.25rem (36px).",
    css: `font-family: var(--font-display);
font-size: 2.25rem;   /* 36px - not in current theme */
font-weight: var(--font-weight-black);
letter-spacing: var(--tracking-wide);
text-transform: uppercase;
color: var(--color-charcoal);`,
  },
  pageTitle: {
    note: "No --text-3xl in theme; no named class. Add to theme if needed: --text-3xl: 1.875rem (30px).",
    css: `font-family: var(--font-display);
font-size: 1.875rem;  /* 30px - not in current theme */
font-weight: var(--font-weight-black);
letter-spacing: var(--tracking-wide);
text-transform: uppercase;
color: var(--color-charcoal);`,
  },
  display: {
    note: "Recommended adds: color: var(--charcoal).",
    css: `.text-display {
  font-family: var(--font-display);
  font-size: var(--text-2xl);       /* 24px */
  font-weight: var(--font-weight-black);
  letter-spacing: var(--tracking-wide);
  line-height: var(--leading-tight);  /* 1.25 - recommended uses 1.5 */
  text-transform: uppercase;
}`,
  },
  heading: {
    note: "Recommended adds: color: var(--charcoal).",
    css: `.text-heading {
  font-family: var(--font-display);
  font-size: var(--text-xl);        /* 20px */
  font-weight: var(--font-black);
  letter-spacing: var(--tracking-wide);
  line-height: var(--leading-tight);
  text-transform: uppercase;
}`,
  },
  title: {
    note: "Recommended adds: color: var(--charcoal).",
    css: `.text-title {
  font-family: var(--font-display);
  font-size: var(--text-lg);        /* 18px */
  font-weight: var(--font-black);
  letter-spacing: var(--tracking-wide);
  line-height: var(--leading-tight);
  text-transform: uppercase;
}`,
  },
  body: {
    note: "Recommended adds: color: var(--charcoal).",
    css: `.text-body-base {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}`,
  },
  secondary: {
    note: "Recommended adds: color: var(--muted-text) / #6B6862 for secondary.",
    css: `.text-secondary-base {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}`,
  },
  labelsCaptions: {
    note: "Differs: recommended uses Open Sans + color: var(--muted-text).",
    css: `.text-labels-captions {
  font-family: var(--font-display);   /* Arquitecta - recommended uses Open Sans */
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}`,
  },
  label: {
    note: "Recommended adds: color: var(--muted-text).",
    css: `.text-label {
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-wider);
  line-height: var(--leading-tight);
  text-transform: uppercase;
}`,
  },
};

const existingCssBlockClass =
  "mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto";

/** Renders "Existing CSS" label, optional recommendation note (as a small line above the code block), and the code. */
function ExistingCssBlock({ scaleKey }: { scaleKey: keyof typeof EXISTING_CSS_BY_SCALE }) {
  const { css, note } = EXISTING_CSS_BY_SCALE[scaleKey];
  return (
    <>
      <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1 mt-4">
        Existing CSS
      </p>
      {note && (
        <p
          className="text-sm text-muted-text mt-1 mb-2 px-2 py-1.5 rounded bg-canvas border border-border-light"
          title={note}
        >
          {note}
        </p>
      )}
      <pre className={existingCssBlockClass}>{css}</pre>
    </>
  );
}

/** Section heading for the type page. */
function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-black uppercase tracking-wide font-arquitecta text-charcoal mt-16 mb-6 pb-3 border-b-2 border-accent-green first:mt-0"
    >
      {children}
    </h2>
  );
}

export const TypePage: React.FC = () => {
  return (
    <div className="min-h-screen font-opensans text-charcoal bg-white">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <Link
          to="/mp-style"
          className="inline-block text-base text-accent-green font-semibold hover:underline mb-6"
        >
          ← Style guide
        </Link>
        <p className="text-accent-green font-bold tracking-wider text-base mb-2 uppercase font-arquitecta">
          Design System
        </p>
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide font-arquitecta mb-4">
          Typography
        </h1>
        <p className="text-lg text-muted-text max-w-2xl">
          Token and stylesheet details for typeface, size, color, spacing, and line-height. Each sample shows the stylesheet definition (CSS/token).
        </p>

        {/* ── Typefaces (utility definitions) ── */}
        <SectionTitle id="typefaces">Typefaces</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border border-border-light rounded-lg p-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">
              font-arquitecta
            </p>
            <p className="text-2xl font-black font-arquitecta uppercase tracking-wide">
              Arquitecta
            </p>
            <p className="text-base text-muted-text mt-2">
              Loaded via @font-face (weights 400, 500, 700, 900) with fallback; see &quot;Arquitecta font loading&quot; below.
            </p>
          </div>
          <div className="border border-border-light rounded-lg p-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">
              font-opensans
            </p>
            <p className="text-2xl font-bold font-opensans">Open Sans</p>
            <p className="text-base text-muted-text mt-2">
              Loaded via @font-face (Google Fonts, weight 300–800) with fallback; see &quot;Open Sans font loading&quot; below.
            </p>
          </div>
        </div>

        {/* ── Arquitecta @font-face and fallback ── */}
        <div className="mt-6 p-4 border border-border-light rounded-lg bg-canvas">
          <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">
            Arquitecta font loading
          </p>
          <p className="text-base text-muted-text mb-3">
            Arquitecta is loaded via <code className="font-mono bg-white px-1 rounded">@font-face</code> with weights 400, 500, 700, 900. Use the fallback stack so metrics match when the font loads.
          </p>
          <pre className="text-base font-mono text-charcoal bg-white p-3 rounded border border-border-light overflow-x-auto whitespace-pre-wrap">{`@font-face {
  font-family: 'arquitecta';
  src: url('./fonts/Arquitecta.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'arquitecta';
  src: url('./fonts/ArquitectaMedium.woff2') format('woff2');
  font-display: swap;
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'arquitecta';
  src: url('./fonts/ArquitectaBold.woff2') format('woff2');
  font-display: swap;
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'arquitecta';
  src: url('./fonts/ArquitectaHeavy.woff2') format('woff2');
  font-display: swap;
  font-weight: 900;
  font-style: normal;
}

/* Fallback with size-adjust so layout is stable before load */
@font-face {
  font-family: 'arquitecta Fallback';
  src: local("Arial");
  ascent-override: 92.91%;
  descent-override: 30.97%;
  line-gap-override: 1.11%;
  size-adjust: 80.72%;
}

/* Usage: include fallback in stack and in variable */
.variable {
  --font-arquitecta: 'arquitecta', 'arquitecta Fallback';
}
/* Then: font-family: var(--font-arquitecta), sans-serif; */`}</pre>
        </div>

        {/* ── Open Sans @font-face and fallback ── */}
        <div className="mt-6 p-4 border border-border-light rounded-lg bg-canvas">
          <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">
            Open Sans font loading
          </p>
          <p className="text-base text-muted-text mb-3">
            Open Sans is loaded via <code className="font-mono bg-white px-1 rounded">@font-face</code> (Google Fonts, variable weight 300–800) with separate files per unicode range. Use the fallback stack so metrics match when the font loads.
          </p>
          <pre className="text-base font-mono text-charcoal bg-white p-3 rounded border border-border-light overflow-x-auto whitespace-pre-wrap">{`/* latin (example; same pattern for other ranges) */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300 800;
  font-stretch: 100%;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/opensans/v44/...latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, ...;
}
/* Plus: cyrillic-ext, cyrillic, greek-ext, greek, hebrew, math, symbols, vietnamese, latin-ext (same structure, different unicode-range and src). */

/* Fallback with size-adjust so layout is stable before load */
@font-face {
  font-family: 'Open Sans Fallback';
  src: local("Arial");
  ascent-override: 101.65%;
  descent-override: 27.86%;
  line-gap-override: 0.00%;
  size-adjust: 105.15%;
}

/* Usage: include fallback in stack and in variable */
.variable {
  --font-open-sans: 'Open Sans', 'Open Sans Fallback';
}
/* Then: font-family: var(--font-open-sans), sans-serif; */`}</pre>
        </div>

        {/* ── Base tokens (theme.css) ── */}
        <SectionTitle id="base-tokens">Base tokens (theme.css)</SectionTitle>
        <div className="space-y-4 mb-10">
          <div className="border border-border-light rounded-lg p-4 bg-canvas">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">
              Root font size
            </p>
            <code className="text-base font-mono text-charcoal bg-white px-2 py-1 rounded border">
              --font-size: 16px;
            </code>
            <p className="text-base text-muted-text mt-2">
              Set on <code className="font-mono bg-mist px-1 rounded">html</code>; all rem-based sizes (e.g. text-2xl → 1.5rem) scale from this.
            </p>
          </div>
          <div className="border border-border-light rounded-lg p-4 bg-canvas">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">
              Font weight variables
            </p>
            <ul className="text-base text-muted-text space-y-1 font-mono">
              <li>--font-weight-normal: 400;</li>
              <li>--font-weight-medium: 500;</li>
            </ul>
            <p className="text-base text-muted-text mt-2">
              Used in base element styles (e.g. <code className="font-mono bg-mist px-1 rounded">label</code>, <code className="font-mono bg-mist px-1 rounded">h1</code>).
            </p>
          </div>
        </div>

        {/* ── Type scale (sizes) ── */}
        <SectionTitle id="type-scale">Type scale</SectionTitle>
        <div className="space-y-0">
          <div className="border-b border-border-light pb-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Hero / 5xl — 48px
            </p>
            <p className="text-5xl font-black uppercase tracking-wide font-arquitecta text-charcoal">
              Hero Title
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Arquitecta', sans-serif;
font-size: 3rem; /* 48px */
font-weight: 900;
color: var(--charcoal);
letter-spacing: 0.025em;
text-transform: uppercase;`}</pre>
            <ExistingCssBlock scaleKey="hero" />
          </div>
          <div className="border-b border-border-light pb-4 pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Hero mobile / 4xl — 36px
            </p>
            <p className="text-4xl font-black uppercase tracking-wide font-arquitecta text-charcoal">
              Page Title
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Arquitecta', sans-serif;
font-size: 2.25rem; /* 36px */
font-weight: 900;
color: var(--charcoal);
letter-spacing: 0.025em;
text-transform: uppercase;`}</pre>
            <ExistingCssBlock scaleKey="heroMobile" />
          </div>
          <div className="border-b border-border-light pb-4 pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Page title / 3xl — 30px
            </p>
            <p className="text-3xl font-black uppercase tracking-wide font-arquitecta text-charcoal">
              Step Heading
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Arquitecta', sans-serif;
font-size: 1.875rem; /* 30px */
font-weight: 900;
color: var(--charcoal);
letter-spacing: 0.025em;
text-transform: uppercase;`}</pre>
            <ExistingCssBlock scaleKey="pageTitle" />
          </div>
          <div className="border-b border-border-light pb-4 pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Display / 2xl — 24px
            </p>
            <p className="text-2xl font-black uppercase tracking-wide font-arquitecta text-charcoal">
              Welcome, Tom!
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Arquitecta', sans-serif;
font-size: 1.5rem; /* 24px */
font-weight: 900;
color: var(--charcoal);
letter-spacing: 0.025em;
text-transform: uppercase;`}</pre>
            <ExistingCssBlock scaleKey="display" />
          </div>
          <div className="border-b border-border-light pb-4 pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Heading / xl — 20px
            </p>
            <p className="text-xl font-black uppercase tracking-wide font-arquitecta text-charcoal">
              Section Heading
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Arquitecta', sans-serif;
font-size: 1.25rem; /* 20px */
font-weight: 900;
color: var(--charcoal);
letter-spacing: 0.025em;
text-transform: uppercase;`}</pre>
            <ExistingCssBlock scaleKey="heading" />
          </div>
          <div className="border-b border-border-light pb-4 pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Title / lg — 18px
            </p>
            <p className="text-lg font-black uppercase tracking-wide font-arquitecta text-charcoal">
              Card Title
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Arquitecta', sans-serif;
font-size: 1.125rem; /* 18px */
font-weight: 900;
color: var(--charcoal);
letter-spacing: 0.025em;
text-transform: uppercase;`}</pre>
            <ExistingCssBlock scaleKey="title" />
          </div>
          <div className="border-b border-border-light pb-4 pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Body / base — 16px
            </p>
            <p className="text-base font-normal text-charcoal font-opensans">
              This is standard body text used throughout the portal for descriptions, paragraphs, and general UI copy.
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Open Sans', sans-serif;
font-size: 1rem; /* 16px */
font-weight: 400;
color: var(--charcoal);
line-height: 1.5;`}</pre>
            <ExistingCssBlock scaleKey="body" />
          </div>
          <div className="border-b border-border-light pb-4 pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Secondary / base — 16px
            </p>
            <p className="text-base text-muted-text font-opensans">
              Secondary text, dates, metadata, and supporting information. Minimum body size is 16px.
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Open Sans', sans-serif;
font-size: 1rem; /* 16px */
font-weight: 400;
color: var(--muted-text);
line-height: 1.5;`}</pre>
            <ExistingCssBlock scaleKey="secondary" />
          </div>
          <div className="border-b border-border-light pb-4 pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Labels &amp; captions — 16px
            </p>
            <p className="text-base text-muted-text font-opensans">
              Form labels, captions, and fine print use 16px (base) for accessibility.
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Open Sans', sans-serif;
font-size: 1rem; /* 16px */
font-weight: 400;
color: var(--muted-text);
line-height: 1.5;`}</pre>
            <ExistingCssBlock scaleKey="labelsCaptions" />
          </div>
          <div className="pt-4">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">
              Label — 16px bold uppercase
            </p>
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
              Form Label
            </p>
            <pre className="mt-2 text-base font-mono text-charcoal bg-mist p-3 rounded border border-border-light overflow-x-auto">{`font-family: 'Arquitecta', sans-serif;
font-size: 1rem; /* 16px */
font-weight: 700;
color: var(--muted-text);
letter-spacing: 0.05em;
text-transform: uppercase;`}</pre>
            <ExistingCssBlock scaleKey="label" />
          </div>
        </div>

        {/* ── Base element styles (theme.css) ── */}
        <SectionTitle id="base-styles">Base element styles (theme.css)</SectionTitle>
        <p className="text-base text-muted-text mb-4">
          Default typography for HTML elements in <code className="font-mono bg-mist px-1 rounded">@layer base</code>. Tailwind utilities override these.
        </p>
        <pre className="text-base font-mono text-charcoal bg-mist p-4 rounded-lg border border-border-light overflow-x-auto whitespace-pre-wrap">
{`html {
  font-size: var(--font-size);  /* 16px */
}

h1 {
  font-size: var(--text-2xl);   /* 24px */
  font-weight: var(--font-weight-medium);  /* 500 */
  line-height: 1.5;
}

h2 {
  font-size: var(--text-xl);    /* 20px */
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h3 {
  font-size: var(--text-lg);    /* 18px */
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h4 {
  font-size: var(--text-base);  /* 16px */
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

label, button {
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

input, select {
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
  min-height: 3.25rem;
}`}
        </pre>

        <p className="text-base text-muted-text mt-10">
          Typography reference — design system. See also{" "}
          <Link to="/mp-style#typography" className="text-accent-green font-semibold hover:underline">
            Style guide → Typography
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
