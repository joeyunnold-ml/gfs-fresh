import svgPaths from "./svg-jcexthjzdy";

function Right() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6614 11.336">
        <g id="Right">
          <g id="Battery">
            <path d={svgPaths.p34925b00} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p24d75380} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p15a7dc80} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p30bafd00} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p2b7b2700} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Date() {
  return (
    <div className="absolute h-[11.089px] left-[33.45px] top-[17.17px] w-[28.426px]" data-name="Date">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4262 11.0889">
        <g id="Date">
          <g id="9:41">
            <path d={svgPaths.p1218b780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p25dc35c0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p38b62380} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3a930400} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SystemStatusBar() {
  return (
    <div className="h-[38px] overflow-clip pointer-events-auto sticky top-0 w-[440px]" data-name=".system/status-bar">
      <Right />
      <Date />
    </div>
  );
}

function IconsChromeShare() {
  return (
    <div className="absolute right-[24px] size-[21px] top-[16px]" data-name=".icons/chrome/share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id=".icons/chrome/share">
          <path d={svgPaths.p13310600} fill="var(--fill-0, #9AA0A6)" id="Share" />
        </g>
      </svg>
    </div>
  );
}

function IconsChromeLock() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name=".icons/chrome/lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id=".icons/chrome/lock">
          <path d={svgPaths.p50af900} fill="var(--fill-0, black)" id="Lock" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[7px] items-center justify-center left-[calc(50%-0.09px)] top-[16px]">
      <IconsChromeLock />
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#202124] text-[18px]">members.groundsforsculpture.org</p>
    </div>
  );
}

function ChromeTop() {
  return (
    <div className="absolute h-[55px] left-0 top-[38px] w-[440px]" data-name="Chrome - Top">
      <div className="absolute bg-[#e3e2df] inset-[0_0_1.82%_0] shadow-[0px_0.4px_0px_0px_#ccc]" data-name="bg" />
      <div className="absolute bg-[#ebe9e3] bottom-[10px] h-[36px] left-[11px] right-[10px] rounded-[30px]" data-name="chrome-bar-input" />
      <IconsChromeShare />
      <Frame />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[#e3e2df] h-[93px] left-0 top-0 w-[440px]">
      <div className="absolute bottom-0 h-[93px] left-0 pointer-events-none top-0">
        <SystemStatusBar />
      </div>
      <ChromeTop />
    </div>
  );
}

function Frame25() {
  return <div className="absolute bg-white h-[69px] left-[-4px] top-[171px] w-[447px]" />;
}

function Hero() {
  return (
    <div className="absolute contents inset-0" data-name="Hero">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.0001 32.7565">
        <g id="Logo">
          <path d={svgPaths.p2752daf0} fill="var(--fill-0, #B6D840)" id="Shape" />
          <path d={svgPaths.p37a30e00} fill="var(--fill-0, #B6D840)" id="Shape_2" />
          <path d={svgPaths.p21fdce00} fill="var(--fill-0, #B6D840)" id="Shape_3" />
          <path d={svgPaths.p12bc0600} fill="var(--fill-0, #B6D840)" id="Rectangle-path" />
          <path d={svgPaths.p35fb5780} fill="var(--fill-0, #B6D840)" id="Rectangle-path_2" />
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
    <div className="h-[32.756px] overflow-clip relative shrink-0 w-[67px]" data-name="b94sx3hzhfimkocl72i 1">
      <Homepage />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <B94Sx3Hzhfimkocl72I />
    </div>
  );
}

function Margin() {
  return <div className="h-[5.43px] shrink-0 w-[59.118px]" data-name="Margin" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container1 />
      <Margin />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative self-stretch shrink-0 w-[51px]">
      <div className="aspect-[53.08695602416992/33] relative shrink-0 w-full" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 19.2703">
          <path d={svgPaths.p23f6e800} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Container />
      <Frame22 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-start pb-px relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[0.72px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Welcome, Tom!</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[14px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d63d] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#343433] text-[18px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Visits</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f5f5f3] content-stretch flex flex-col items-start p-[14px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[24px] whitespace-nowrap">
        <p className="leading-[normal]">Upcoming</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[14px] relative shrink-0" data-name="HorizontalBorder">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[24px] whitespace-nowrap">
        <p className="leading-[normal]">Past</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-[384px]">
      <Margin2 />
      <Margin3 />
    </div>
  );
}

function TabNavigation() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tab Navigation">
      <Frame18 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Margin1 />
      <TabNavigation />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <Frame21 />
      <Heading />
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return <div className="absolute bg-white h-[1453px] left-[-36px] top-[-27.19px] w-[485px]" />;
}

function Container4() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[6px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#1a1a1a]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Aug. 7, 2025</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#7f746c]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">9:30 AM</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[16px] w-full">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#6b6b6b] tracking-[0.6px] uppercase w-[213px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Date & Time`}</p>
      </div>
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Noodle Mountain Activation</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[0.6px] uppercase w-[213px]">
        <p className="leading-[normal] whitespace-pre-wrap">VISIT</p>
      </div>
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`2 Adult Member `}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[0.6px] uppercase w-[213px]">
        <p className="leading-[normal] whitespace-pre-wrap">Ticket</p>
      </div>
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Included</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[0.6px] uppercase w-[213px]">
        <p className="leading-[normal] whitespace-pre-wrap">Fee</p>
      </div>
      <Container7 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start pb-[12px] relative shrink-0 w-full">
      <Frame1 />
      <Frame8 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#1a1a1a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[16px] pt-[18px] px-[24px] relative size-full">
          <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] text-center tracking-[1.12px] uppercase whitespace-nowrap">
            <p className="leading-[normal]">Modify</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NpChevron() {
  return (
    <div className="relative size-[19px]" data-name="np_chevron_933246_000000 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="np_chevron_933246_000000 1">
          <path d={svgPaths.p2a0e4a80} fill="var(--fill-0, #6B6B6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <Button />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <NpChevron />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="-">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[25px] relative w-full">
        <Frame24 />
        <Frame26 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex font-['Open_Sans:Regular',sans-serif] font-normal gap-[6px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#1a1a1a]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Aug. 7, 2025</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#7f746c]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">9:30 AM</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[16px] w-full">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#6b6b6b] tracking-[0.6px] uppercase w-[213px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Date & Time`}</p>
      </div>
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Noodle Mountain Activation</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[0.6px] uppercase w-[213px]">
        <p className="leading-[normal] whitespace-pre-wrap">VISIT</p>
      </div>
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`2 Adult Member `}</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[0.6px] uppercase w-[213px]">
        <p className="leading-[normal] whitespace-pre-wrap">Ticket</p>
      </div>
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[16px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Included</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[16px] tracking-[0.6px] uppercase w-[213px]">
        <p className="leading-[normal] whitespace-pre-wrap">Fee</p>
      </div>
      <Container11 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start pb-[12px] relative shrink-0 w-full">
      <Frame2 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#1a1a1a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[16px] pt-[18px] px-[24px] relative size-full">
          <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[18px] text-center tracking-[1.12px] uppercase whitespace-nowrap">
            <p className="leading-[normal]">Modify</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NpChevron1() {
  return (
    <div className="relative size-[19px]" data-name="np_chevron_933246_000000 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="np_chevron_933246_000000 1">
          <path d={svgPaths.p2a0e4a80} fill="var(--fill-0, #6B6B6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <Button1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <NpChevron1 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="-">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[25px] relative w-full">
        <Frame27 />
        <Frame28 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-[290px]" data-name="Heading 3">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black uppercase whitespace-nowrap">
        <p className="leading-[normal]">Guest Passes</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[290px]" data-name="Container">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[0px] w-full">
        <p className="font-['Arquitecta:Regular',sans-serif] text-[20px] whitespace-pre-wrap">
          <span className="leading-[normal] text-[#1a1a1a]">1</span>
          <span className="leading-[normal] text-[#6b6b6b]">{` of 2 remaining`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Heading1 />
      <Container12 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="SVG">
          <path d={svgPaths.p38336c00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function ContainerAlignFlexEnd() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container:align-flex-end">
      <Container13 />
    </div>
  );
}

function GuestPasses() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Guest Passes">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Frame3 />
        <ContainerAlignFlexEnd />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Manage your membership</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="SVG">
          <path d={svgPaths.p3723b000} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function ContainerAlignFlexEnd1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Container:align-flex-end">
      <Container14 />
    </div>
  );
}

function GetTickets() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Get Tickets">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Heading2 />
        <ContainerAlignFlexEnd1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black uppercase whitespace-nowrap">
        <p className="leading-[normal]">Get tickets</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="SVG">
          <path d={svgPaths.p38336c00} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function ContainerAlignFlexEnd2() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Container:align-flex-end">
      <Container15 />
    </div>
  );
}

function GetTickets1() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Get Tickets">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Heading3 />
        <ContainerAlignFlexEnd2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black uppercase w-[147px]">
        <p className="leading-[normal] whitespace-pre-wrap">Weather at GFS</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[37.863px] relative shrink-0 w-[45.391px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.391 37.8631">
        <g id="Group">
          <path d={svgPaths.p2d953680} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p5ccb300} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p203ed500} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p25a3f880} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p15ee3780} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1a76dff2} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p33425500} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[107px] overflow-clip size-[46.006px] top-[19px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2.329px] relative shrink-0">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] h-[33.388px] justify-center leading-[0] not-italic relative shrink-0 text-[35.352px] text-black tracking-[0.707px] uppercase w-[36.494px]">
        <p className="leading-[normal] whitespace-pre-wrap">87</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[14.753px] relative shrink-0 w-[5.435px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.43536 14.7529">
        <g id="Frame 25">
          <circle cx="2.71765" cy="7.37647" id="Ellipse 1" r="1.94118" stroke="var(--stroke-0, black)" strokeWidth="1.55294" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[1.553px] relative shrink-0 w-[10.094px]">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[17.676px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">F</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6.988px] h-[33.388px] items-start relative shrink-0">
      <Svg3 />
      <Frame23 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[61px] items-start relative shrink-0 w-[153px]" data-name="Container">
      <Frame4 />
    </div>
  );
}

function GetTickets2() {
  return (
    <div className="bg-[#f5f5f3] col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Get Tickets">
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Heading4 />
        <Container16 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="gap-x-[18px] gap-y-[18px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[361px] relative shrink-0 w-[392px]">
      <GuestPasses />
      <GetTickets />
      <GetTickets1 />
      <GetTickets2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Booked visits</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#343433] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">August 16</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">10:30 — 11:30AM</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Yoga</p>
      </div>
      <Container18 />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[14.875px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.875 14.875">
        <g id="Group">
          <path d={svgPaths.p307c0400} fill="var(--fill-0, #7F746C)" id="Vector" />
          <path d={svgPaths.p2436e00} fill="var(--fill-0, #7F746C)" id="Vector_2" />
          <path d={svgPaths.p374cf00} fill="var(--fill-0, #7F746C)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0">
      <Group1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[1.2px] relative w-full">
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[1.5] relative shrink-0 text-[#6b6b6b] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="mb-0">A limited number of mats are</p>
          <p>available to borrow, but attendees are encouraged to bring their own.</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f5f5f3] relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[10px] relative w-full">
        <Frame16 />
        <Container21 />
      </div>
    </div>
  );
}

function Visit1Yoga() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[22px] relative shrink-0 w-full" data-name="Visit 1 - Yoga">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <Container17 />
      <Background />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#343433] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">August 16</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">9:00AM</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Member Mornings</p>
      </div>
      <Container23 />
    </div>
  );
}

function Visit2MemberMornings() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22px] relative shrink-0 w-full" data-name="Visit 2 - Member Mornings">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
      <div className="flex flex-col font-['Open_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#7f746c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Members Only</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#343433] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">August 16</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">9:00AM</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Member Mornings</p>
      </div>
      <Container27 />
    </div>
  );
}

function Visit3MemberMornings() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Visit 3 - Member Mornings">
      <Container26 />
      <div className="flex flex-col font-['Open_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#7f746c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Members Only</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[25px] relative w-full">
        <Heading5 />
        <Visit1Yoga />
        <Visit2MemberMornings />
        <Visit3MemberMornings />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[22px] text-right w-full">
        <p className="decoration-solid leading-[normal] underline whitespace-pre-wrap">See all visits</p>
      </div>
    </div>
  );
}

function AsideRightSidebarBookedVisits() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full" data-name="Aside - Right Sidebar - Booked Visits">
      <Border />
      <Container30 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame7 />
      <AsideRightSidebarBookedVisits />
    </div>
  );
}

function ActionCardsGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action Cards Grid">
      <Frame15 />
    </div>
  );
}

function CenterContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[620px] items-start min-h-px min-w-px relative" data-name="Center Content">
      <Component1 />
      <Component2 />
      <ActionCardsGrid />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[392px]" data-name="-">
      <Frame19 />
      <CenterContent />
    </div>
  );
}

function AsideLeftSidebar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[1117px] items-start left-0 px-[24px] py-[32px] top-[93px] w-[440px]" data-name="Aside - Left Sidebar" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.87) 0%, rgba(255, 255, 255, 0.87) 100%), linear-gradient(90deg, rgb(127, 116, 108) 0%, rgb(127, 116, 108) 100%)" }}>
      <Frame25 />
      <Frame9 />
      <Component />
    </div>
  );
}

export default function IPhone1617ProMax() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 & 17 Pro Max - 6">
      <Frame20 />
      <AsideLeftSidebar />
    </div>
  );
}