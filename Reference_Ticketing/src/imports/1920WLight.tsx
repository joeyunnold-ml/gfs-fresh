import svgPaths from "./svg-dz8oa2jgeo";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Open Today</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b1b1b1] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">10:00 AM – 5:00 PM</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#c5d63d] rounded-[5px] shrink-0 size-[10px]" data-name="Background" />
      <Container1 />
      <Margin />
    </div>
  );
}

function FooterBar() {
  return (
    <div className="absolute bg-[#1a1a1a] bottom-0 content-stretch flex items-center justify-between left-0 px-[48px] py-[16px] right-0" data-name="Footer Bar">
      <Container />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] text-right whitespace-nowrap">
        <p className="text-[16px]">
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[25.6px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Need help? `}</span>
          <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.6px] text-[#ccc]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Call us at 609.586.0616 or `}</span>
          <span className="decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.6px] text-[#d4567a] underline" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            review our guidelines
          </span>
          <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.6px] text-[#6b6b6b]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` `}</span>
          <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[25.6px] text-[#ccc]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            before your visit.
          </span>
        </p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute contents inset-0" data-name="Hero">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 44">
        <g id="Logo">
          <path d={svgPaths.p2c855500} fill="var(--fill-0, #B6D840)" id="Shape" />
          <path d={svgPaths.p33bf9900} fill="var(--fill-0, #B6D840)" id="Shape_2" />
          <path d={svgPaths.p318b4e80} fill="var(--fill-0, #B6D840)" id="Shape_3" />
          <path d={svgPaths.p32f34c70} fill="var(--fill-0, #B6D840)" id="Rectangle-path" />
          <path d={svgPaths.p2c63fa00} fill="var(--fill-0, #B6D840)" id="Rectangle-path_2" />
        </g>
      </svg>
    </div>
  );
}

function HomepageDesktop() {
  return (
    <div className="absolute contents inset-0" data-name="Homepage---Desktop">
      <Hero />
    </div>
  );
}

function Homepage() {
  return (
    <div className="absolute contents inset-0" data-name="Homepage">
      <HomepageDesktop />
    </div>
  );
}

function B94Sx3Hzhfimkocl72I() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-[90px]" data-name="b94sx3hzhfimkocl72i 1">
      <Homepage />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <B94Sx3Hzhfimkocl72I />
    </div>
  );
}

function AccountPortal() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Account Portal">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[0.96px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Account Portal</p>
      </div>
      <div className="flex h-[5.79px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[10px] relative w-[5.79px]" data-name="<">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.79042 9.99977">
              <path d={svgPaths.p5c1a100} fill="var(--fill-0, #1A1A1A)" id="<" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[48px] relative w-full">
          <Container2 />
          <AccountPortal />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center pb-px relative shrink-0" data-name="Container">
      <div className="h-[5.333px] relative shrink-0 w-[16px]" data-name="←">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 5.33333">
          <path d={svgPaths.p202678c0} fill="var(--fill-0, #8B8178)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function LinkReturnLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link - Return link">
      <div className="flex flex-row items-center self-stretch">
        <Container3 />
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8b8178] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Return to main site</p>
      </div>
    </div>
  );
}

function Heading1PageTitle() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-[1344px]" data-name="Heading 1 - Page Title">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[36px] tracking-[0.72px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Timed Tickets</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <LinkReturnLink />
      <Heading1PageTitle />
    </div>
  );
}

function SelectDate() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] pb-[19px] relative shrink-0 text-[#3d4a2d] text-[16px] whitespace-nowrap" data-name="Select date">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">1.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Select visit date</p>
      </div>
    </div>
  );
}

function SelectTime() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[4px] items-start leading-[0] pb-[19px] relative shrink-0 text-[#3d4a2d] text-[16px] whitespace-nowrap" data-name="Select time">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">2.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Select entry time</p>
      </div>
    </div>
  );
}

function ParagraphHorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[4px] items-start pb-[19px] relative shrink-0" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c5d63d] border-b-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">3.</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Select type of ticket</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[3.99px] items-start leading-[0] pb-[19px] relative shrink-0 text-[#8b8178] text-[16px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">4.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Checkout</p>
      </div>
    </div>
  );
}

function StepIndicator() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-[1184px]" data-name="Step Indicator">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <SelectDate />
      <SelectTime />
      <ParagraphHorizontalBorder />
      <Paragraph />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[1px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">tickets</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[11px] shrink-0 size-[22px]" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">i</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">Reminder: Prices are listed per ticket.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e0e0e0] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[14px] relative w-full">
          <Border />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.7px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Standard Tickets</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Adult</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">General admission for ages 18+. Includes outdoor sculptures and indoor galleries.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[550px] min-h-px min-w-px relative" data-name="Container">
      <Heading2 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">$25</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">−</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f5f5f3] content-stretch flex h-[36px] items-center justify-center pb-[6px] pt-[9px] relative shrink-0 w-[40px]" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8b8178] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">0</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">+</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Background1 />
      <BackgroundBorder1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Border1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[18px] items-center pl-[28px] pr-[25px] py-[21px] relative w-full">
          <Container8 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Child</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Ages 6–17. Children under 6 are free. Must be with an adult.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[550px] min-h-px min-w-px relative" data-name="Container">
      <Heading3 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">$15</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">−</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f5f5f3] content-stretch flex h-[36px] items-center justify-center pb-[6px] pt-[9px] relative shrink-0 w-[40px]" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">0</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">+</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <BackgroundBorder2 />
      <Background2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Border2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[18px] items-center pb-[21px] pl-[28px] pr-[25px] pt-[17px] relative w-full">
          <Container13 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[16px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.7px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Discounted Tickets</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Senior</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Ages 65+. Valid ID may be required.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[550px] min-h-px min-w-px relative" data-name="Container">
      <Heading5 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">$20</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">−</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f5f5f3] content-stretch flex h-[36px] items-center justify-center pb-[6px] pt-[9px] relative shrink-0 w-[40px]" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">0</p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">+</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <BackgroundBorder4 />
      <Background3 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Border3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[18px] items-center pl-[28px] pr-[25px] py-[21px] relative w-full">
          <Container18 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Veteran</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Active military and veterans. Military ID required at entry.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[550px] min-h-px min-w-px relative" data-name="Container">
      <Heading6 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">$12</p>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">−</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f5f5f3] content-stretch flex h-[36px] items-center justify-center pb-[6px] pt-[9px] relative shrink-0 w-[40px]" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">0</p>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">+</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <BackgroundBorder6 />
      <Background4 />
      <BackgroundBorder7 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Border4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[18px] items-center pb-[21px] pl-[28px] pr-[25px] pt-[17px] relative w-full">
          <Container23 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-[16px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[0.7px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Member</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Adult</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] w-full">
        <p className="leading-[28.8px] whitespace-pre-wrap">Free for Grounds For Sculpture members. Membership card required at entry.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[550px] min-h-px min-w-px relative" data-name="Container">
      <Heading8 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">$0</p>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">−</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f5f5f3] content-stretch flex h-[36px] items-center justify-center pb-[6px] pt-[9px] relative shrink-0 w-[40px]" data-name="Background">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[25.6px]">0</p>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[6px] pt-[8.5px] px-px relative shrink-0 size-[38px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28.8px]">+</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <BackgroundBorder8 />
      <Background5 />
      <BackgroundBorder9 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Border5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-l-4 border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[18px] items-center pl-[28px] pr-[25px] py-[21px] relative w-full">
          <Container28 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[694px] items-start max-w-[750px] relative shrink-0 w-[497px]" data-name="Container">
      <Heading1 />
      <Border1 />
      <Border2 />
      <Heading4 />
      <Border3 />
      <Border4 />
      <Heading7 />
      <Border5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1012px] items-start max-w-[700px] relative shrink-0" data-name="Container">
      <Heading />
      <Background />
      <Container7 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17px] relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Order Summary</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Date</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Aug. 7, 2025</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">TIME</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">9:30 AM</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[18px] items-start pb-[17px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <Container33 />
      <Container36 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Adult</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">2 × $25</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Total</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">$50</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pt-[17px] relative w-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[33px] relative shrink-0 w-[320px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute border-[#c5d63d] border-solid border-t-4 inset-0 pointer-events-none" />
      <Heading9 />
      <Frame2 />
      <Container39 />
      <HorizontalBorder />
    </div>
  );
}

function OrderSummaryMin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Order Summary_min">
      <div aria-hidden="true" className="absolute border-[#ccc] border-b border-l border-r border-solid inset-0 pointer-events-none" />
      <BackgroundShadow />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex h-[48px] items-center justify-center pb-[16px] pt-[18px] px-[24px] relative shrink-0 w-[320px]" data-name="Button">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[1.12px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Continue</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] opacity-0 relative shrink-0 text-[#6b6b6b] text-[14px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Sign in to see saved checkout details, or special pricing if you’re a Grounds for Sculpture member,</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <Button />
      <Container44 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
      <OrderSummaryMin />
      <Frame3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[53px] h-[578px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Frame1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[120px] pt-[48px] px-[48px] relative w-full">
        <Frame />
        <StepIndicator />
        <Container4 />
      </div>
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1920w light">
      <FooterBar />
      <Header />
      <MainContent />
    </div>
  );
}