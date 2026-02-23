import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight, CloudSun, Search, ChevronDown, ChevronRight, Check, X, Plus, Pencil, Loader2, Info, PartyPopper } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Helper: render a visual swatch                                     */
/* ------------------------------------------------------------------ */
const Swatch: React.FC<{ color: string; label: string; hex?: string; className?: string }> = ({ color, label, hex, className }) => (
  <div className={`flex flex-col items-center gap-2 ${className}`}>
    <div className="w-16 h-16 border border-border-light" style={{ backgroundColor: color }} />
    <span className="text-base font-bold uppercase tracking-wider font-arquitecta text-charcoal">{label}</span>
    {hex && <span className="text-base text-muted-text font-mono">{hex}</span>}
  </div>
);

const SpacingBlock: React.FC<{ size: number; label: string }> = ({ size, label }) => (
  <div className="flex items-center gap-3">
    <div className="bg-accent-green opacity-60" style={{ width: size, height: 24 }} />
    <span className="text-base text-charcoal font-mono whitespace-nowrap">{label} &mdash; {size}px</span>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h2 id={id} className="text-2xl font-black uppercase tracking-wide font-arquitecta text-charcoal mt-16 mb-6 pb-3 border-b-2 border-accent-green">
    {children}
  </h2>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-lg font-black uppercase tracking-wide font-arquitecta text-charcoal mb-4">{title}</h3>
    {children}
  </div>
);

const TokenRow: React.FC<{ token: string; value: string; desc?: string }> = ({ token, value, desc }) => (
  <div className="grid grid-cols-12 gap-4 py-3 border-b border-border-light items-start text-base">
    <code className="col-span-4 font-mono text-charcoal text-base">{token}</code>
    <code className="col-span-3 font-mono text-muted-text text-base">{value}</code>
    {desc && <span className="col-span-5 text-muted-text">{desc}</span>}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main StyleGuide Component                                          */
/* ------------------------------------------------------------------ */
export const StyleGuide: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('a');
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <div className="min-h-screen font-opensans text-charcoal bg-white">
      {/* Header */}
      <div className="bg-charcoal text-white py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent-green font-bold tracking-wider text-base mb-2 uppercase font-arquitecta">Design System</p>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide font-arquitecta mb-4">MP Style Guide</h1>
          <p className="text-disabled-icon text-base max-w-xl">
            A living reference for the Member Portal&apos;s visual language &mdash; typography, color, spacing, components, and interaction patterns.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24">

        {/* ============================================================ */}
        {/*  TABLE OF CONTENTS                                           */}
        {/* ============================================================ */}
        <div className="mt-10 mb-12 bg-canvas p-6 border border-border-light">
          <h3 className="text-base font-black uppercase tracking-wide font-arquitecta mb-4">Contents</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              ['#typography', 'Typography'],
              ['#colors', 'Colors'],
              ['#spacing', 'Spacing'],
              ['#grid-layout', 'Grid & Layout'],
              ['#breakpoints', 'Breakpoints'],
              ['#elevation', 'Elevation / Shadows'],
              ['#border-radius', 'Border Radius'],
              ['#strokes', 'Strokes / Borders'],
              ['#icons', 'Icons'],
              ['#motion', 'Motion / Transitions'],
              ['#interactive-states', 'Interactive States'],
              ['#accessibility', 'Accessibility'],
              ['#buttons', 'Buttons'],
              ['#inputs', 'Inputs'],
              ['#links', 'Links'],
              ['#tags-badges', 'Tags / Badges'],
              ['#tooltips', 'Tooltips'],
              ['#dividers', 'Dividers'],
              ['#loaders', 'Loaders'],
              ['#guest-checkout', 'Guest Checkout Components'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-base text-charcoal hover:text-accent-green transition-colors font-semibold">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/*  1. TYPOGRAPHY                                                */}
        {/* ============================================================ */}
        <SectionTitle id="typography">Typography</SectionTitle>

        <SubSection title="Typefaces">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-border-light">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Display / Heading</p>
              <p className="text-3xl font-black font-arquitecta uppercase tracking-wide mb-2">Arquitecta</p>
              <p className="text-base text-muted-text">Used for all headings, labels, buttons, navigation, and branded display text. Always uppercase with wide tracking.</p>
              <div className="mt-4 space-y-1 text-base text-muted-text">
                <p><span className="font-arquitecta" style={{ fontWeight: 400 }}>Regular 400</span> &mdash; Dropdowns, subtle labels</p>
                <p><span className="font-arquitecta" style={{ fontWeight: 500 }}>Medium 500</span> &mdash; Rare, secondary emphasis</p>
                <p><span className="font-arquitecta font-bold">Bold 700</span> &mdash; Buttons, sub-headings</p>
                <p><span className="font-arquitecta font-black">Black 900</span> &mdash; Primary headings, titles</p>
              </div>
            </div>
            <div className="p-6 border border-border-light">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Body / UI</p>
              <p className="text-3xl font-bold font-opensans mb-2">Open Sans</p>
              <p className="text-base text-muted-text">Used for body copy, descriptions, form inputs, and general UI text. Variable weight from 300&ndash;800.</p>
              <div className="mt-4 space-y-1 text-base text-muted-text">
                <p><span className="font-opensans font-normal">Normal 400</span> &mdash; Body text, input values</p>
                <p><span className="font-opensans font-semibold">Semibold 600</span> &mdash; Links, emphasis</p>
                <p><span className="font-opensans font-bold">Bold 700</span> &mdash; Strong emphasis</p>
              </div>
            </div>
          </div>
        </SubSection>

        <SubSection title="Type Scale">
          <div className="space-y-6">
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Hero / 5xl &mdash; 48px</p>
              <p className="text-5xl font-black uppercase tracking-wide font-arquitecta">Hero Title</p>
            </div>
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Hero Mobile / 4xl &mdash; 36px</p>
              <p className="text-4xl font-black uppercase tracking-wide font-arquitecta">Page Title</p>
            </div>
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Page Title / 3xl &mdash; 30px</p>
              <p className="text-3xl font-black uppercase tracking-wide font-arquitecta">Step Heading</p>
            </div>
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Display / 2xl &mdash; 24px</p>
              <p className="text-2xl font-black uppercase tracking-wide font-arquitecta">Welcome, Tom!</p>
            </div>
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Heading / xl &mdash; 20px</p>
              <p className="text-xl font-black uppercase tracking-wide font-arquitecta">Section Heading</p>
            </div>
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Title / lg &mdash; 18px</p>
              <p className="text-lg font-black uppercase tracking-wide font-arquitecta">Card Title</p>
            </div>
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Body / base &mdash; 16px</p>
              <p className="text-base font-normal">This is standard body text used throughout the portal for descriptions, paragraphs, and general UI copy.</p>
            </div>
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Secondary / base &mdash; 16px</p>
              <p className="text-base text-muted-text">Secondary text, dates, metadata, and supporting information. Minimum body size is 16px.</p>
            </div>
            <div className="border-b border-border-light pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Labels &amp; captions &mdash; 16px</p>
              <p className="text-base text-muted-text">Form labels, captions, and fine print use 16px (base) for accessibility.</p>
            </div>
            <div className="pb-4">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Label &mdash; 16px Bold Uppercase</p>
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Form Label</p>
            </div>
          </div>
        </SubSection>

        <SubSection title="Typography Tokens">
          <div className="border border-border-light p-4 overflow-x-auto">
            <div className="grid grid-cols-12 gap-4 py-2 border-b border-charcoal text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text">
              <span className="col-span-4">Token</span>
              <span className="col-span-3">Value</span>
              <span className="col-span-5">Usage</span>
            </div>
            <TokenRow token="font-arquitecta" value="Arquitecta, sans-serif" desc="Headings, buttons, nav, branded text" />
            <TokenRow token="font-opensans" value="Open Sans, sans-serif" desc="Body copy, form inputs, descriptions" />
            <TokenRow token="font-black" value="900" desc="Primary headings, page titles" />
            <TokenRow token="font-bold" value="700" desc="Buttons, sub-headings, emphasis" />
            <TokenRow token="font-semibold" value="600" desc="Links, secondary emphasis" />
            <TokenRow token="font-normal" value="400" desc="Body text, input values" />
            <TokenRow token="tracking-wide" value="0.025em" desc="Standard heading tracking" />
            <TokenRow token="tracking-wider" value="0.05em" desc="Labels, buttons, all-caps" />
            <TokenRow token="leading-tight" value="1.25" desc="Headings with tight line height" />
            <TokenRow token="leading-relaxed" value="1.625" desc="Body text, descriptions" />
          </div>
        </SubSection>

        {/* ============================================================ */}
        {/*  2. COLORS                                                    */}
        {/* ============================================================ */}
        <SectionTitle id="colors">Colors</SectionTitle>

        <SubSection title="Brand Palette">
          <div className="flex flex-wrap gap-6">
            <Swatch color="#B6D840" label="Accent Green" hex="#B6D840" />
            <Swatch color="#C5D63D" label="Lime" hex="#C5D63D" />
            <Swatch color="#D4567A" label="Accent Pink" hex="#D4567A" />
            <Swatch color="#343433" label="Charcoal" hex="#343433" />
            <Swatch color="#1a1a1a" label="Near Black" hex="#1A1A1A" />
            <Swatch color="#ffffff" label="White" hex="#FFFFFF" />
          </div>
        </SubSection>

        <SubSection title="Neutral Grays (Light to Dark)">
          <div className="flex flex-wrap gap-6">
            <Swatch color="#FFFFFF" label="White" hex="#FFFFFF" />
            <Swatch color="#F7F7F6" label="Hover" hex="#F7F7F6" />
            <Swatch color="#F5F4F2" label="Mist" hex="#F5F4F2" />
            <Swatch color="#F3F2F0" label="Canvas" hex="#F3F2F0" />
            <Swatch color="#F2F1EF" label="Input BG" hex="#F2F1EF" />
            <Swatch color="#EEEDEC" label="Shell" hex="#EEEDEC" />
            <Swatch color="#ECEAE7" label="Muted BG" hex="#ECEAE7" />
            <Swatch color="#E5E5E3" label="Used Badge" hex="#E5E5E3" />
            <Swatch color="#DDDBD8" label="Border" hex="#DDDBD8" />
            <Swatch color="#CCCCCC" label="Card Stroke" hex="#CCCCCC" />
            <Swatch color="#ADA9A4" label="Disabled Icon" hex="#ADA9A4" />
            <Swatch color="#8B8178" label="Stone" hex="#8B8178" />
            <Swatch color="#7F746C" label="Warm Muted" hex="#7F746C" />
            <Swatch color="#736E69" label="Muted FG" hex="#736E69" />
            <Swatch color="#6B6862" label="Muted Text" hex="#6B6862" />
          </div>
          <p className="text-base text-muted-text mt-3">All neutrals use a warm undertone to stay cohesive with the brand palette. No cool/blue grays.</p>
        </SubSection>

        <SubSection title="Semantic Colors">
          <div className="flex flex-wrap gap-6">
            <Swatch color="#B6D840" label="Success" hex="#B6D840" />
            <Swatch color="#CE4069" label="Error / Accent" hex="#CE4069" />
          </div>
          <p className="text-base text-muted-text mt-3"><code className="font-mono text-charcoal">#CE4069</code> serves double duty as the error/destructive color and as a secondary brand accent.</p>
        </SubSection>

        <SubSection title="Overlay & Shadow Colors">
          <div className="space-y-3 p-6 border border-border-light">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 border border-border-light" style={{ backgroundColor: 'rgba(139,129,120,0.24)' }} />
              <div>
                <span className="text-base font-bold uppercase tracking-wider font-arquitecta text-charcoal">Shadow</span>
                <code className="block text-base text-muted-text font-mono">rgba(139,129,120,0.24)</code>
                <span className="text-base text-muted-text">Card hover shadow (level 1)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 border border-border-light" style={{ backgroundColor: 'rgba(139,129,120,0.32)' }} />
              <div>
                <span className="text-base font-bold uppercase tracking-wider font-arquitecta text-charcoal">Shadow Deep</span>
                <code className="block text-base text-muted-text font-mono">rgba(139,129,120,0.32)</code>
                <span className="text-base text-muted-text">Card active hover shadow (level 2)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 border border-border-light" style={{ background: 'linear-gradient(45deg, rgba(26,26,26,0.75), rgba(26,26,26,0))' }} />
              <div>
                <span className="text-base font-bold uppercase tracking-wider font-arquitecta text-charcoal">Hero Overlay</span>
                <code className="block text-base text-muted-text font-mono">rgba(26,26,26,0.75) &rarr; rgba(26,26,26,0)</code>
                <span className="text-base text-muted-text">45&deg; gradient overlay on hero images</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 border border-border-light" style={{ backgroundColor: 'rgba(0,0,0,0.60)' }} />
              <div>
                <span className="text-base font-bold uppercase tracking-wider font-arquitecta text-charcoal">Dialog Overlay</span>
                <code className="block text-base text-muted-text font-mono">bg-black/60</code>
                <span className="text-base text-muted-text">Modal and dialog backdrop overlay</span>
              </div>
            </div>
          </div>
        </SubSection>

        <SubSection title="All Color Tokens">
          <div className="border border-border-light p-4 overflow-x-auto">
            <div className="grid grid-cols-12 gap-4 py-2 border-b border-charcoal text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text">
              <span className="col-span-4">Token / Value</span>
              <span className="col-span-3">Hex</span>
              <span className="col-span-5">Usage</span>
            </div>

            <div className="py-2 text-base font-bold uppercase tracking-wider font-arquitecta text-accent-green mt-2">Brand</div>
            <TokenRow token="#B6D840" value="Accent Green" desc="Logo, active indicators, accent borders, links hover" />
            <TokenRow token="#C5D63D" value="Lime" desc="Active member badge border (lighter green variant)" />
            <TokenRow token="#D4567A" value="Accent Pink" desc="Secondary brand accent (error/destructive uses --destructive #CE4069)" />
            <TokenRow token="#343433" value="Charcoal" desc="Primary text, button fills, heading text" />
            <TokenRow token="#1A1A1A" value="Near Black" desc="Hover state for primary buttons, deep text" />

            <div className="py-2 text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text mt-2">Neutral — Backgrounds</div>
            <TokenRow token="#FFFFFF" value="White" desc="Page background, card backgrounds" />
            <TokenRow token="#F7F7F6" value="Hover" desc="Card/button hover background" />
            <TokenRow token="#F5F4F2" value="Mist" desc="Active tab bg, mobile nav bg, member card bg" />
            <TokenRow token="#F3F2F0" value="Canvas" desc="Sidebar bg, weather card bg, info banners" />
            <TokenRow token="#F2F1EF" value="Input BG" desc="Default input background (CSS var --input-background)" />
            <TokenRow token="#EEEDEC" value="Shell" desc="Mobile header band, hero bg extension" />
            <TokenRow token="#ECEAE7" value="Muted BG" desc="Muted backgrounds (CSS var --muted)" />
            <TokenRow token="#E5E5E3" value="Used Badge" desc="Used guest pass badge background" />
            <TokenRow token="#DDDBD8" value="Border" desc="Input borders, subtle separators, dashed borders" />

            <div className="py-2 text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text mt-2">Neutral — Text & Icons</div>
            <TokenRow token="#CCCCCC" value="Card Stroke" desc="Card borders, dividers (CSS var --card-stroke)" />
            <TokenRow token="#ADA9A4" value="Disabled Icon" desc="Muted/disabled ticket icon, inactive states" />
            <TokenRow token="#8B8178" value="Stone" desc="Warm mid-gray, shadow base tone" />
            <TokenRow token="#7F746C" value="Warm Muted" desc="Event tags italic text, warm-toned secondary text" />
            <TokenRow token="#736E69" value="Muted FG" desc="Placeholder text, disabled text (CSS var --muted-foreground)" />
            <TokenRow token="#6B6862" value="Muted Text" desc="Secondary text, labels, inactive nav, descriptions" />

            <div className="py-2 text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text mt-2">Semantic</div>
            <TokenRow token="#CE4069" value="Error / Accent" desc="Error borders, validation messages, secondary brand accent" />

            <div className="py-2 text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text mt-2">CSS Theme Variables</div>
            <TokenRow token="--background" value="#FFFFFF" desc="Page background" />
            <TokenRow token="--foreground" value="#343433 (var(--charcoal))" desc="Default text color" />
            <TokenRow token="--primary" value="#343433 (var(--charcoal))" desc="shadcn/ui primary (buttons, links)" />
            <TokenRow token="--card-stroke" value="#CCCCCC" desc="Card borders, dividers" />
            <TokenRow token="--destructive" value="#CE4069" desc="Error states, destructive actions, accent" />
            <TokenRow token="--muted" value="#ECEAE7" desc="Muted backgrounds" />
            <TokenRow token="--muted-foreground" value="#736E69" desc="Placeholder text, disabled text" />
            <TokenRow token="--ring" value="#8B8178 (var(--stone))" desc="Focus ring color" />
            <TokenRow token="--input-background" value="#F2F1EF" desc="Default input background" />
            <TokenRow token="--border" value="#DDDBD8 (var(--border-light))" desc="Default border color" />

            <div className="py-2 text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text mt-2">Shadow / Overlay</div>
            <TokenRow token="rgba(139,129,120,0.24)" value="Shadow L1" desc="Flat offset shadow — card hover" />
            <TokenRow token="rgba(139,129,120,0.32)" value="Shadow L2" desc="Flat offset shadow — active hover" />
            <TokenRow token="rgba(26,26,26,0.75)" value="Overlay Dark" desc="Hero image gradient overlay (45deg)" />
            <TokenRow token="bg-black/60" value="Dialog Overlay" desc="Modal and dialog backdrop overlay" />
          </div>
        </SubSection>

        {/* ============================================================ */}
        {/*  3. SPACING                                                   */}
        {/* ============================================================ */}
        <SectionTitle id="spacing">Spacing</SectionTitle>

        <SubSection title="Scale">
          <div className="space-y-3 p-6 border border-border-light">
            <SpacingBlock size={4} label="1 (4px)" />
            <SpacingBlock size={8} label="2 (8px)" />
            <SpacingBlock size={12} label="3 (12px)" />
            <SpacingBlock size={16} label="4 (16px)" />
            <SpacingBlock size={24} label="6 (24px)" />
            <SpacingBlock size={32} label="8 (32px)" />
            <SpacingBlock size={48} label="12 (48px)" />
            <SpacingBlock size={64} label="16 (64px)" />
          </div>
        </SubSection>

        <SubSection title="Usage Guidance">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border-light">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Padding</p>
              <ul className="space-y-2 text-base text-muted-text">
                <li><code className="text-charcoal font-mono">p-4</code> &mdash; Mobile page padding (16px)</li>
                <li><code className="text-charcoal font-mono">p-6</code> &mdash; Card internal padding (24px)</li>
                <li><code className="text-charcoal font-mono">p-8</code> &mdash; Desktop page padding (32px)</li>
                <li><code className="text-charcoal font-mono">px-3 py-2</code> &mdash; Input fields</li>
                <li><code className="text-charcoal font-mono">px-6 py-4</code> &mdash; Buttons (CTA)</li>
              </ul>
            </div>
            <div className="p-6 border border-border-light">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Gap / Margin</p>
              <ul className="space-y-2 text-base text-muted-text">
                <li><code className="text-charcoal font-mono">gap-4</code> &mdash; Mobile grid gap (16px)</li>
                <li><code className="text-charcoal font-mono">gap-6</code> &mdash; Desktop grid gap (24px)</li>
                <li><code className="text-charcoal font-mono">mb-4</code> &mdash; Between section title and content</li>
                <li><code className="text-charcoal font-mono">mb-6</code> &mdash; Between major sections</li>
                <li><code className="text-charcoal font-mono">mb-8</code> &mdash; Between page regions</li>
              </ul>
            </div>
          </div>
        </SubSection>

        {/* ============================================================ */}
        {/*  4. GRID & LAYOUT                                             */}
        {/* ============================================================ */}
        <SectionTitle id="grid-layout">Grid & Layout</SectionTitle>

        <SubSection title="Grid System">
          <div className="space-y-4 text-base text-muted-text">
            <div className="p-6 border border-border-light">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Columns</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[1, 2].map(i => (
                  <div key={i} className="bg-accent-green opacity-20 h-12 flex items-center justify-center text-base font-bold text-charcoal">{i}</div>
                ))}
              </div>
              <p className="mb-2"><code className="font-mono text-charcoal">grid-cols-2</code> &mdash; Default card grid (dashboard, mobile)</p>
              <div className="grid grid-cols-3 gap-2 mb-4 mt-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-accent-green opacity-20 h-12 flex items-center justify-center text-base font-bold text-charcoal">{i}</div>
                ))}
              </div>
              <p><code className="font-mono text-charcoal">grid-cols-3</code> &mdash; Membership tiers, guest passes (lg+)</p>
            </div>
          </div>
        </SubSection>

        <SubSection title="Container & Max Widths">
          <div className="border border-border-light p-4 overflow-x-auto">
            <div className="grid grid-cols-12 gap-4 py-2 border-b border-charcoal text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text">
              <span className="col-span-4">Token</span>
              <span className="col-span-3">Value</span>
              <span className="col-span-5">Usage</span>
            </div>
            <TokenRow token="max-w-[1400px]" value="1400px" desc="App shell max width" />
            <TokenRow token="max-w-7xl" value="1280px" desc="Dashboard content area" />
            <TokenRow token="max-w-5xl" value="1024px" desc="Style guide, focused content" />
            <TokenRow token="w-80" value="320px" desc="Desktop sidebar width" />
            <TokenRow token="min-[1400px]:w-[300px]" value="300px" desc="Booked visits sidebar" />
          </div>
        </SubSection>

        {/* ============================================================ */}
        {/*  5. BREAKPOINTS                                               */}
        {/* ============================================================ */}
        <SectionTitle id="breakpoints">Breakpoints</SectionTitle>

        <div className="space-y-4">
          {[
            { bp: 'Base', px: '0px', desc: 'Mobile — single column, p-4, hamburger nav, grey header band, 2-col card grid' },
            { bp: 'md', px: '768px', desc: 'Tablet+ — sidebar visible, desktop top nav, p-8, 2-col grids expand, hero banner shows' },
            { bp: 'lg', px: '1024px', desc: 'Desktop — 3-col grids (membership tiers, guest passes)' },
            { bp: 'min-[1400px]', px: '1400px', desc: 'Wide — Booked Visits becomes sidebar column alongside card grid' },
          ].map(({ bp, px, desc }) => (
            <div key={bp} className="flex items-start gap-4 p-4 border border-border-light">
              <code className="font-mono text-base text-charcoal font-bold whitespace-nowrap min-w-[120px]">{bp} <span className="text-muted-text font-normal">({px})</span></code>
              <p className="text-base text-muted-text">{desc}</p>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/*  6. ELEVATION / SHADOWS                                       */}
        {/* ============================================================ */}
        <SectionTitle id="elevation">Elevation / Shadows</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-border-light flex flex-col items-center gap-4">
            <div className="w-full h-24 bg-white border border-border-light" />
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Level 0 &mdash; Flat</p>
            <p className="text-base text-muted-text text-center">Default cards, containers. No shadow.</p>
          </div>
          <div className="p-6 border border-border-light flex flex-col items-center gap-4">
            <div className="w-full h-24 bg-white border border-border-light shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]" />
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Level 1 &mdash; Hover</p>
            <code className="text-base text-muted-text font-mono text-center">shadow-[4px_4px_0px_0px _rgba(139,129,120,0.24)]</code>
          </div>
          <div className="p-6 border border-border-light flex flex-col items-center gap-4">
            <div className="w-full h-24 bg-white border border-border-light shadow-[6px_6px_0px_0px_rgba(139,129,120,0.32)]" />
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Level 2 &mdash; Active Hover</p>
            <code className="text-base text-muted-text font-mono text-center">shadow-[6px_6px_0px_0px _rgba(139,129,120,0.32)]</code>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-border-light flex flex-col items-center gap-4">
            <div className="w-full h-24 bg-white border border-border-light shadow-lg" />
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Level 3 &mdash; Modal</p>
            <code className="text-base text-muted-text font-mono text-center">shadow-lg</code>
            <p className="text-base text-muted-text text-center">Modals, dialogs, and elevated overlays</p>
          </div>
          <div className="p-6 border border-border-light flex flex-col items-center gap-4">
            <div className="w-full h-24 bg-black/60 border border-border-light" />
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Dialog Overlay</p>
            <code className="text-base text-muted-text font-mono text-center">bg-black/60</code>
            <p className="text-base text-muted-text text-center">Backdrop behind modals and dialogs</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-canvas text-base text-muted-text">
          <strong className="text-charcoal">Note:</strong> Card shadows are flat, offset-style (no blur) for a tactile, print-inspired feel. Modal overlays use standard <code className="font-mono">shadow-lg</code> with a <code className="font-mono">bg-black/60</code> backdrop.
        </div>

        {/* ============================================================ */}
        {/*  7. BORDER RADIUS                                             */}
        {/* ============================================================ */}
        <SectionTitle id="border-radius">Border Radius</SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'None', value: '0px', className: 'rounded-none', token: 'rounded-none' },
            { label: 'SM', value: '6px', className: 'rounded-sm', token: 'rounded-sm' },
            { label: 'MD', value: '8px', className: 'rounded-md', token: 'rounded-md' },
            { label: 'LG', value: '10px', className: 'rounded-lg', token: 'rounded-lg' },
          ].map(({ label, value, className: rClass, token }) => (
            <div key={label} className="flex flex-col items-center gap-3 p-4 border border-border-light">
              <div className={`w-20 h-20 bg-charcoal ${rClass}`} />
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">{label} ({value})</p>
              <code className="text-base text-muted-text font-mono">{token}</code>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-canvas text-base text-muted-text">
          <strong className="text-charcoal">Convention:</strong> The portal primarily uses <code className="font-mono">rounded-none</code> for cards, buttons, and inputs — producing sharp, geometric edges. <code className="font-mono">rounded-md</code> is used by the shadcn/ui base components.
        </div>

        {/* ============================================================ */}
        {/*  8. STROKES / BORDERS                                         */}
        {/* ============================================================ */}
        <SectionTitle id="strokes">Strokes / Borders</SectionTitle>

        <div className="space-y-4">
          {[
            { label: 'Card Stroke', style: '1px solid #CCCCCC', token: 'border border-card-stroke', desc: 'Standard card and container borders' },
            { label: 'Light Border', style: '1px solid #E0E0E0', token: 'border border-border-light', desc: 'Input borders, subtle separators' },
            { label: 'Button Outline', style: '1.5px solid #343433', token: 'style={{ border: "1.5px solid #343433" }}', desc: 'Secondary/tertiary button borders' },
            { label: 'Accent Underline', style: '2px solid #B6D840', token: 'border-b-2 border-accent-green', desc: 'Active nav indicator, section labels' },
            { label: 'Dashed', style: '2px dashed #E0E0E0', token: 'border-2 border-dashed border-border-light', desc: 'Add member / empty state' },
            { label: 'Divider', style: '1px solid #E0E0E0', token: 'border-b border-border-light', desc: 'Horizontal dividers between sections' },
          ].map(({ label, style, token, desc }) => (
            <div key={label} className="flex items-center gap-4 p-4 border border-border-light">
              <div className="w-24 shrink-0" style={{ borderBottom: style, height: 0 }} />
              <div>
                <p className="text-base font-bold text-charcoal">{label}</p>
                <code className="text-base text-muted-text font-mono">{token}</code>
                <p className="text-base text-muted-text mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/*  9. ICONS                                                     */}
        {/* ============================================================ */}
        <SectionTitle id="icons">Icons</SectionTitle>

        <SubSection title="Library & Style">
          <div className="p-6 border border-border-light text-base text-muted-text space-y-2">
            <p><strong className="text-charcoal">Library:</strong> Lucide React (outline style, consistent 24px viewBox)</p>
            <p><strong className="text-charcoal">Stroke Weight:</strong> Default 2px. Custom: 1.5px (detail icons), 2.5px (hamburger menu)</p>
            <p><strong className="text-charcoal">Fill:</strong> Outline only &mdash; no filled variants</p>
          </div>
        </SubSection>

        <SubSection title="Size Scale">
          <div className="flex flex-wrap items-end gap-8 p-6 border border-border-light">
            {[
              { size: 'w-3 h-3', px: '12px', label: 'XS' },
              { size: 'w-3.5 h-3.5', px: '14px', label: 'SM' },
              { size: 'w-4 h-4', px: '16px', label: 'MD' },
              { size: 'w-5 h-5', px: '20px', label: 'LG' },
              { size: 'w-7 h-7', px: '28px', label: 'XL' },
              { size: 'w-10 h-10', px: '40px', label: '2XL' },
              { size: 'w-12 h-12', px: '48px', label: '3XL' },
            ].map(({ size, px, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <ArrowUpRight className={`${size} text-charcoal`} />
                <span className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">{label}</span>
                <span className="text-base text-muted-text font-mono">{px}</span>
              </div>
            ))}
          </div>
        </SubSection>

        <SubSection title="Common Icons">
          <div className="flex flex-wrap gap-6 p-6 border border-border-light">
            {[
              { icon: <ArrowUpRight className="w-5 h-5" />, name: 'ArrowUpRight' },
              { icon: <ChevronDown className="w-5 h-5" />, name: 'ChevronDown' },
              { icon: <ChevronRight className="w-5 h-5" />, name: 'ChevronRight' },
              { icon: <Check className="w-5 h-5" />, name: 'Check' },
              { icon: <X className="w-5 h-5" />, name: 'X' },
              { icon: <Plus className="w-5 h-5" />, name: 'Plus' },
              { icon: <Pencil className="w-5 h-5" />, name: 'Pencil' },
              { icon: <Search className="w-5 h-5" />, name: 'Search' },
              { icon: <CloudSun className="w-5 h-5" />, name: 'CloudSun' },
              { icon: <Info className="w-5 h-5" />, name: 'Info' },
            ].map(({ icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-2 min-w-[60px]">
                <div className="text-charcoal">{icon}</div>
                <span className="text-base text-muted-text font-mono">{name}</span>
              </div>
            ))}
          </div>
        </SubSection>

        {/* ============================================================ */}
        {/*  10. MOTION / TRANSITIONS                                     */}
        {/* ============================================================ */}
        <SectionTitle id="motion">Motion / Transitions</SectionTitle>

        <div className="border border-border-light p-4 overflow-x-auto">
          <div className="grid grid-cols-12 gap-4 py-2 border-b border-charcoal text-base font-bold uppercase tracking-wider font-arquitecta text-muted-text">
            <span className="col-span-3">Token</span>
            <span className="col-span-2">Duration</span>
            <span className="col-span-3">Property</span>
            <span className="col-span-4">Use Case</span>
          </div>
          {[
            { token: 'transition-colors', dur: '150ms', prop: 'color, bg, border', use: 'Buttons, links, hover states' },
            { token: 'duration-200', dur: '200ms', prop: 'all / colors', use: 'Cards, interactive elements' },
            { token: 'transition-shadow', dur: '200ms', prop: 'box-shadow', use: 'Card hover shadow' },
            { token: 'transition-opacity', dur: '150ms', prop: 'opacity', use: 'Close buttons, toggles' },
            { token: 'transition-transform', dur: '700ms', prop: 'transform', use: 'Hero image zoom on hover' },
            { token: 'transition-all', dur: '300ms', prop: 'all', use: 'Layout shifts, nav indicator' },
          ].map(({ token, dur, prop, use }) => (
            <div key={token} className="grid grid-cols-12 gap-4 py-3 border-b border-border-light items-start text-base">
              <code className="col-span-3 font-mono text-charcoal text-base">{token}</code>
              <code className="col-span-2 font-mono text-muted-text text-base">{dur}</code>
              <span className="col-span-3 text-muted-text text-base">{prop}</span>
              <span className="col-span-4 text-muted-text text-base">{use}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-canvas text-base text-muted-text">
          <strong className="text-charcoal">Easing:</strong> Default CSS <code className="font-mono">ease</code> for most transitions. Navigation indicator uses <code className="font-mono">ease-in-out</code> via <code className="font-mono">transition-all duration-300 ease-in-out</code>.
        </div>

        {/* ============================================================ */}
        {/*  11. INTERACTIVE STATES                                        */}
        {/* ============================================================ */}
        <SectionTitle id="interactive-states">Interactive States</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { state: 'Default', desc: 'Base visual state', classes: 'bg-white border border-card-stroke text-charcoal' },
            { state: 'Hover', desc: 'Mouse over interactive elements', classes: 'bg-hover border border-card-stroke text-charcoal shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]' },
            { state: 'Focus', desc: 'Keyboard focus via tab', classes: 'bg-white border border-accent-green text-charcoal ring-2 ring-[#B6D840]/30' },
            { state: 'Active', desc: 'Currently pressed / selected', classes: 'bg-mist border border-card-stroke text-charcoal' },
            { state: 'Disabled', desc: 'Non-interactive', classes: 'bg-canvas border border-border-light text-disabled-icon cursor-not-allowed opacity-50' },
            { state: 'Loading', desc: 'Awaiting response', classes: 'bg-canvas border border-border-light text-muted-text cursor-wait opacity-70' },
          ].map(({ state, desc, classes }) => (
            <div key={state} className="p-4 border border-border-light">
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">{state}</p>
              <div className={`p-4 text-base font-bold uppercase tracking-wider font-arquitecta text-center ${classes}`}>
                {state} State
              </div>
              <p className="text-base text-muted-text mt-2">{desc}</p>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/*  12. ACCESSIBILITY                                             */}
        {/* ============================================================ */}
        <SectionTitle id="accessibility">Accessibility Baseline</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-border-light">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Contrast Ratios</p>
            <ul className="space-y-3 text-base text-muted-text">
              <li className="flex items-center gap-3">
                <span className="inline-block w-6 h-6 bg-charcoal border border-border-light" />
                <span><code className="font-mono text-charcoal">#343433</code> on white &mdash; <strong className="text-charcoal">12.56:1</strong> (AAA)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-6 h-6 bg-muted-text border border-border-light" />
                <span><code className="font-mono text-charcoal">#6B6862</code> on white &mdash; <strong className="text-charcoal">5.56:1</strong> (AA)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-6 h-6 bg-accent-green border border-border-light" />
                <span><code className="font-mono text-charcoal">#B6D840</code> on <code className="font-mono">#343433</code> &mdash; <strong className="text-charcoal">7.6:1</strong> (AAA)</span>
              </li>
            </ul>
          </div>
          <div className="p-6 border border-border-light">
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Focus & Touch Targets</p>
            <ul className="space-y-2 text-base text-muted-text">
              <li><strong className="text-charcoal">Focus ring:</strong> 3px ring, <code className="font-mono">ring-ring/50</code> (50% opacity)</li>
              <li><strong className="text-charcoal">Min touch target:</strong> 44&times;44px (WCAG 2.5.5)</li>
              <li><strong className="text-charcoal">Min text size:</strong> 12px (captions), 14px preferred minimum</li>
              <li><strong className="text-charcoal">Keyboard nav:</strong> All interactive elements reachable via Tab</li>
              <li><strong className="text-charcoal">ARIA:</strong> Dialog components use <code className="font-mono">DialogTitle</code>, <code className="font-mono">DialogOverlay</code></li>
            </ul>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  13. BUTTONS (Atoms)                                           */}
        {/* ============================================================ */}
        <SectionTitle id="buttons">Buttons</SectionTitle>

        <SubSection title="Primary">
          <div className="flex flex-wrap gap-4 items-center p-6 border border-border-light">
            <button className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white hover:bg-near-black transition-colors">
              Primary CTA
            </button>
            <button className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white opacity-50 cursor-not-allowed">
              Disabled
            </button>
            <button className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-charcoal text-white opacity-70 cursor-wait flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Loading
            </button>
          </div>
          <code className="block mt-2 text-base text-muted-text font-mono">bg-charcoal text-white hover:bg-near-black px-6 py-4 font-bold uppercase tracking-wider font-arquitecta</code>
        </SubSection>

        <SubSection title="Primary Green">
          <div className="flex flex-wrap gap-4 items-center p-6 border border-border-light">
            <button className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-accent-green text-charcoal border-2 border-accent-green hover:bg-white hover:border-accent-green transition-colors">
              Primary Green CTA
            </button>
            <button className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-accent-green text-charcoal border-2 border-accent-green opacity-50 cursor-not-allowed">
              Disabled
            </button>
            <button className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta bg-accent-green text-charcoal border-2 border-accent-green opacity-70 cursor-wait flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Loading
            </button>
          </div>
          <code className="block mt-2 text-base text-muted-text font-mono">bg-accent-green text-charcoal border-2 border-accent-green hover:bg-white hover:border-accent-green px-6 py-4 font-bold uppercase tracking-wider font-arquitecta</code>
        </SubSection>

        <SubSection title="Secondary (Outlined)">
          <div className="flex flex-wrap gap-4 items-center p-6 border border-border-light">
            <button
              className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal hover:bg-hover transition-colors"
            >
              Secondary
            </button>
            <button
              className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta border-[1.5px] border-charcoal opacity-50 cursor-not-allowed"
            >
              Disabled
            </button>
          </div>
          <code className="block mt-2 text-base text-muted-text font-mono">border: 1.5px solid #343433; hover:bg-hover px-6 py-4 font-bold uppercase tracking-wider font-arquitecta</code>
        </SubSection>

        <SubSection title="Accent Outlined (on dark bg)">
          <div className="flex flex-wrap gap-4 items-center p-6 bg-charcoal border border-border-light">
            <button
              className="px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta text-white border-[1.5px] border-accent-green hover:bg-near-black transition-colors"
            >
              Renew Membership
            </button>
          </div>
          <code className="block mt-2 text-base text-muted-text font-mono">border: 1.5px solid #B6D840; text-white hover:bg-near-black (on dark backgrounds)</code>
        </SubSection>

        <SubSection title="Tertiary / Text">
          <div className="flex flex-wrap gap-4 items-center p-6 border border-border-light">
            <button className="text-base font-semibold flex items-center gap-1 hover:underline font-arquitecta text-charcoal">
              Text Link <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button className="text-base font-semibold flex items-center gap-1 hover:underline text-charcoal">
              Renew Now <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </SubSection>

        <SubSection title="Icon Button">
          <div className="flex flex-wrap gap-4 items-center p-6 border border-border-light">
            <button className="p-2 text-charcoal hover:opacity-70 transition-opacity">
              <X className="w-7 h-7" strokeWidth={2.5} />
            </button>
            <button className="p-2 text-muted-text hover:text-charcoal transition-colors">
              <Pencil className="w-4 h-4" />
            </button>
            <button className="p-2 border-2 border-dashed border-border-light text-muted-text hover:border-accent-green hover:text-accent-green transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </SubSection>

        {/* ============================================================ */}
        {/*  14. INPUTS (Atoms)                                            */}
        {/* ============================================================ */}
        <SectionTitle id="inputs">Input Fields</SectionTitle>

        <SubSection title="Text Input">
          <div className="space-y-6 p-6 border border-border-light max-w-md">
            <div className="flex flex-col gap-1">
              <label className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
                First Name <span className="text-accent-pink">*</span>
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter first name"
                className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
                Email <span className="text-accent-pink">*</span>
              </label>
              <input
                type="email"
                value="tom@example.com"
                readOnly
                className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
                Error State
              </label>
              <input
                type="text"
                defaultValue="Invalid value"
                className="text-base text-charcoal border border-accent-pink px-3 py-2 bg-white focus:outline-none focus:border-accent-pink transition-colors"
              />
              <span className="text-base text-accent-pink">This field is required.</span>
            </div>
            <div className="flex flex-col gap-1 opacity-50">
              <label className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
                Disabled
              </label>
              <input
                type="text"
                disabled
                value="Cannot edit"
                className="text-base text-muted-text border border-border-light px-3 py-2 bg-canvas cursor-not-allowed"
              />
            </div>
          </div>
        </SubSection>

        <SubSection title="Form label (large) — Login / Member Portal entry">
          <p className="text-base text-muted-text mb-4">16px label for better readability when the input is prominent (e.g. <Link to="/member-portal-entry" className="font-semibold text-charcoal underline hover:text-accent-green">Member Portal entry</Link>). Same weight and tracking as standard label. Input uses same border, padding, and focus ring as standard text input; add <code className="font-mono text-charcoal">w-full</code> for full-width in forms.</p>
          <div className="flex flex-col gap-1 max-w-md">
            <label className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
              Enter your email address to get started
            </label>
            <input
              type="email"
              placeholder="Email Address"
              readOnly
              className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
            />
          </div>
          <p className="mt-2 text-base text-muted-text font-mono">Label: <code className="text-charcoal">text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta</code></p>
          <p className="mt-1 text-base text-muted-text font-mono">Input: <code className="text-charcoal">text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full</code></p>
        </SubSection>
        <SubSection title="Form label (extra large)">
          <p className="text-base text-muted-text mb-4">16px label for high emphasis or when the field is the primary focus (e.g. hero forms, modals). Same weight and tracking as standard and large labels.</p>
          <div className="flex flex-col gap-1 max-w-md">
            <label className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
              Enter your email
            </label>
            <input
              type="email"
              placeholder="Email"
              readOnly
              className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors w-full"
            />
          </div>
          <p className="mt-2 text-base text-muted-text font-mono">Label: <code className="text-charcoal">text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta</code></p>
        </SubSection>

        <SubSection title="Textarea">
          <div className="p-6 border border-border-light max-w-md">
            <div className="flex flex-col gap-1">
              <label className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
                Notes
              </label>
              <textarea
                rows={3}
                placeholder="Additional notes..."
                className="text-base text-charcoal border border-border-light px-3 py-2 bg-white focus:outline-none focus:border-accent-green transition-colors resize-y"
              />
            </div>
          </div>
        </SubSection>

        <SubSection title="Select">
          <div className="p-6 border border-border-light max-w-md">
            <div className="flex flex-col gap-1">
              <label className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">
                State
              </label>
              <div className="relative">
                <select
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  className="w-full appearance-none text-base text-charcoal border border-border-light px-3 py-2 pr-10 bg-white focus:outline-none focus:border-accent-green transition-colors"
                >
                  <option value="">Select a state</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text pointer-events-none" />
              </div>
            </div>
          </div>
        </SubSection>

        <SubSection title="Checkbox & Radio">
          <div className="p-6 border border-border-light max-w-md space-y-6">
            <div>
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Checkbox</p>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  onClick={() => setCheckboxChecked(!checkboxChecked)}
                  className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${checkboxChecked ? 'bg-charcoal border-charcoal' : 'border-card-stroke group-hover:border-charcoal'}`}
                >
                  {checkboxChecked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
                <span className="text-base text-charcoal">I agree to the terms</span>
              </label>
            </div>
            <div>
              <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Radio</p>
              <div className="space-y-3">
                {['a', 'b', 'c'].map((val) => (
                  <label key={val} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      onClick={() => setRadioValue(val)}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${radioValue === val ? 'border-charcoal' : 'border-card-stroke group-hover:border-charcoal'}`}
                    >
                      {radioValue === val && <div className="w-2.5 h-2.5 rounded-full bg-charcoal" />}
                    </div>
                    <span className="text-base text-charcoal">Option {val.toUpperCase()}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </SubSection>

        <SubSection title="Toggle">
          <div className="p-6 border border-border-light max-w-md">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setToggleOn(!toggleOn)}
                className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${toggleOn ? 'bg-accent-green' : 'bg-card-stroke'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${toggleOn ? 'translate-x-[22px]' : 'translate-x-0.5'}`} />
              </div>
              <span className="text-base text-charcoal">Email notifications</span>
            </label>
          </div>
        </SubSection>

        {/* ============================================================ */}
        {/*  15. LINKS (Atoms)                                             */}
        {/* ============================================================ */}
        <SectionTitle id="links">Links</SectionTitle>

        <div className="space-y-6 p-6 border border-border-light">
          <div>
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">Inline Link</p>
            <p className="text-base text-charcoal">
              Visit our <a href="#" className="font-semibold text-charcoal underline hover:text-accent-green transition-colors">member benefits page</a> to learn more.
            </p>
          </div>
          <div>
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">Standalone Link (with icon)</p>
            <a href="#" className="text-base font-semibold flex items-center gap-1 cursor-pointer hover:underline font-arquitecta text-charcoal">
              See All Visits <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div>
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">Navigation Link (active indicator)</p>
            <div className="inline-block border-b-2 border-accent-green pb-1">
              <span className="font-bold text-charcoal uppercase tracking-wider font-arquitecta">Dashboard</span>
            </div>
          </div>
          <div>
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-2">Text Link</p>
            <a href="#" className="text-base font-semibold text-charcoal underline hover:text-muted-text transition-colors">
              Add a Membership
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  16. TAGS / BADGES (Atoms)                                     */}
        {/* ============================================================ */}
        <SectionTitle id="tags-badges">Tags / Badges / Chips</SectionTitle>

        <div className="flex flex-wrap gap-4 items-center p-6 border border-border-light">
          <span className="px-2.5 py-1.5 text-base font-bold uppercase tracking-wider border border-accent-green text-charcoal leading-none">
            Your Membership
          </span>
          <span className="px-2.5 py-1.5 text-base font-bold text-black uppercase tracking-wider border border-lime leading-none">
            Active
          </span>
          <span className="px-2.5 py-1.5 text-base font-bold text-accent-pink uppercase tracking-wider border border-accent-pink leading-none">
            Expired
          </span>
          <span className="px-4 py-2 bg-used-badge text-muted-text text-base font-bold uppercase tracking-wider font-arquitecta">
            Sent Jan 15, 2025
          </span>
          <span className="px-4 py-2 bg-mist text-charcoal text-base font-semibold">
            Upcoming
          </span>
          <span className="px-4 py-2 bg-charcoal text-white text-base font-bold uppercase tracking-wider font-arquitecta">
            New
          </span>
        </div>
        <div className="mt-3 text-base text-muted-text">
          <p>Badge pattern: <code className="font-mono text-charcoal">px-2.5 py-1.5 text-base font-bold uppercase tracking-wider border leading-none</code></p>
        </div>

        {/* ============================================================ */}
        {/*  17. TOOLTIPS (Atoms)                                          */}
        {/* ============================================================ */}
        <SectionTitle id="tooltips">Tooltips</SectionTitle>

        <div className="p-6 border border-border-light">
          <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-4">Info Banner (inline tooltip pattern)</p>
          <div className="bg-canvas p-3 text-base text-muted-text leading-relaxed flex gap-2 max-w-md">
            <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-text" />
            This ticket requires advance reservations. You&apos;ll receive a confirmation email after booking.
          </div>
          <p className="text-base text-muted-text mt-3">Used in booked visits and contextual info banners. Pattern: <code className="font-mono">bg-canvas p-3 text-base text-muted-text leading-relaxed</code></p>

          <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-4 mt-8">Info Banner — Large</p>
          <div className="bg-canvas p-4 text-base text-muted-text leading-relaxed flex gap-3 max-w-lg">
            <PartyPopper className="w-5 h-5 mt-0.5 shrink-0 text-muted-text" />
            You&apos;ve saved $250 with your membership this year.
          </div>
          <p className="text-base text-muted-text mt-3">Used for prominent page-level banners. Pattern: <code className="font-mono">bg-canvas p-4 text-base text-muted-text leading-relaxed flex gap-3</code> with <code className="font-mono">w-5 h-5</code> icon.</p>
        </div>

        {/* ============================================================ */}
        {/*  18. DIVIDERS (Atoms)                                          */}
        {/* ============================================================ */}
        <SectionTitle id="dividers">Dividers / Separators</SectionTitle>

        <div className="space-y-6 p-6 border border-border-light">
          <div>
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Standard Divider</p>
            <hr className="border-border-light" />
            <code className="text-base text-muted-text font-mono mt-2 block">border-b border-border-light or border-b border-card-stroke</code>
          </div>
          <div>
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Accent Divider</p>
            <div className="border-b-2 border-accent-green w-32" />
            <code className="text-base text-muted-text font-mono mt-2 block">border-b-2 border-accent-green</code>
          </div>
          <div>
            <p className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-3">Dark Accent Line (top of card)</p>
            <div className="w-full h-[3px] bg-accent-green mb-2" />
            <code className="text-base text-muted-text font-mono">h-[3px] bg-accent-green (top accent on current membership tier)</code>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  19. LOADERS (Atoms)                                           */}
        {/* ============================================================ */}
        <SectionTitle id="loaders">Loaders / Spinners</SectionTitle>

        <div className="flex flex-wrap gap-8 items-center p-6 border border-border-light">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-6 h-6 animate-spin text-charcoal" />
            <span className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Default</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-accent-green" />
            <span className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">Accent</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-4 h-4 animate-spin text-white" />
            <span className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta">In-button</span>
          </div>
        </div>
        <div className="mt-3 text-base text-muted-text">
          Uses Lucide <code className="font-mono text-charcoal">Loader2</code> icon with <code className="font-mono text-charcoal">animate-spin</code>. Sizes: <code className="font-mono">w-4</code> (inline), <code className="font-mono">w-6</code> (default), <code className="font-mono">w-8</code> (page-level).
        </div>

        {/* ============================================================ */}
        {/*  20. GUEST CHECKOUT COMPONENTS                                 */}
        {/* ============================================================ */}
        <SectionTitle id="guest-checkout">Guest Checkout Components</SectionTitle>
        <p className="text-base text-muted-text mb-8">
          Components and patterns used in the timed-ticket guest checkout flow. See <Link to="/ticket-flow-guest" className="font-semibold text-charcoal underline hover:text-accent-green transition-colors">Guest Checkout Flow</Link> for live usage.
        </p>

        <SubSection title="Card Field">
          <p className="text-base text-muted-text mb-4">Large, tappable card-style field for date/time selection. Label in uppercase, value below, pencil icon on right.</p>
          <div className="max-w-md space-y-4">
            <button
              type="button"
              className="w-full text-left border border-border-light bg-white px-6 py-4 flex items-center justify-between hover:bg-hover transition-colors"
            >
              <div>
                <div className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Date</div>
                <div className="text-base text-charcoal">Aug. 7, 2025</div>
              </div>
              <Pencil className="w-4 h-4 text-muted-text" />
            </button>
            <button
              type="button"
              className="w-full text-left border border-border-light bg-white px-6 py-4 flex items-center justify-between hover:bg-hover transition-colors"
            >
              <div>
                <div className="text-base font-bold uppercase tracking-wider text-muted-text font-arquitecta mb-1">Entry time</div>
                <div className="text-base text-charcoal">9:30 AM</div>
              </div>
              <Pencil className="w-4 h-4 text-muted-text" />
            </button>
          </div>
          <p className="text-base text-muted-text mt-3">Pattern: <code className="font-mono text-charcoal">border border-border-light bg-white px-6 py-4 flex items-center justify-between hover:bg-hover</code></p>
        </SubSection>

        <SubSection title="Membership Upsell Card">
          <p className="text-base text-muted-text mb-4">Sidebar card promoting membership upgrade. Used in Step 1 (date/time) and Step 3 (checkout).</p>
          <section className="bg-canvas border border-border-light p-6 max-w-sm">
            <h3 className="font-bold text-base tracking-widest text-charcoal uppercase mb-3 font-arquitecta">
              Become a member
            </h3>
            <p className="text-base text-muted-text leading-relaxed mb-4">
              Skip future ticket fees — upgrade to membership for $70 &amp; unlock member benefits.
            </p>
            <button className="w-full border-[1.5px] border-charcoal bg-white px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta hover:bg-hover transition-colors">
              Add Membership
            </button>
          </section>
          <p className="text-base text-muted-text mt-3">Pattern: <code className="font-mono text-charcoal">bg-canvas border border-border-light p-6</code></p>
        </SubSection>

        <SubSection title="Primary CTA (Guest Flow)">
          <p className="text-base text-muted-text mb-4">Full-width primary button for Continue / Complete order. Near-black fill, disabled state uses border-light.</p>
          <div className="max-w-sm space-y-4">
            <button className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta text-white bg-near-black hover:bg-charcoal transition-colors text-center">
              Continue
            </button>
            <button className="w-full px-6 py-4 text-base font-bold uppercase tracking-wider font-arquitecta text-white bg-border-light cursor-not-allowed transition-colors text-center">
              Continue
            </button>
          </div>
          <p className="text-base text-muted-text mt-3">Enabled: <code className="font-mono text-charcoal">bg-near-black hover:bg-charcoal</code> — Disabled: <code className="font-mono text-charcoal">bg-border-light cursor-not-allowed</code></p>
        </SubSection>

        <SubSection title="Layout — Two-Column (Desktop)">
          <p className="text-base text-muted-text mb-4">Guest flow uses <code className="font-mono text-charcoal">grid-cols-1 lg:grid-cols-12</code> with main content in <code className="font-mono text-charcoal">lg:col-span-8</code> and sidebar (order summary, upsell, CTA) in <code className="font-mono text-charcoal">lg:col-span-4</code>. Sidebar is <code className="font-mono text-charcoal">lg:sticky lg:top-8</code> on ticket/checkout steps.</p>
        </SubSection>

        {/* ============================================================ */}
        {/*  FOOTER                                                        */}
        {/* ============================================================ */}
        <div className="mt-20 pt-8 border-t border-border-light text-center">
          <p className="text-base text-muted-text">
            MP Style Guide &mdash; Last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};
