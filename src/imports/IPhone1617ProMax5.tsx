import svgPaths from "./svg-ecnwzhcjwe";
import imgFeaturedBanner from "../assets/812d952efda787a47c2af5d2990685f9bb475b24.png";

function Right() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6615 11.336">
        <g id="Right">
          <g id="Battery">
            <path d={svgPaths.p31ccd600} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p37595400} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p283417c0} fill="var(--fill-0, black)" id="Rectangle_2" />
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

function Frame23() {
  return (
    <div className="absolute bg-[#e3e2df] h-[93px] left-0 top-0 w-[440px]">
      <div className="absolute bottom-0 h-[93px] left-0 pointer-events-none top-0">
        <SystemStatusBar />
      </div>
      <ChromeTop />
    </div>
  );
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

function Frame25() {
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

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Container />
      <Frame25 />
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

function Group() {
  return (
    <div className="h-[19.435px] relative shrink-0 w-[18.042px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0419 19.4349">
        <g id="Group">
          <path d={svgPaths.p2d478700} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2ed25d00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1c0c680} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center py-[2px] relative shrink-0">
      <Group />
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">Your membership ends on May 5th.</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[13.369px] relative shrink-0 w-[10.369px]">
      <div className="absolute inset-[0_-7.5%_-2.91%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1469 13.758">
          <g id="Frame 10958">
            <path d={svgPaths.p8cc0aa0} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeWidth="1.09982" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">Renew Now</p>
      </div>
      <Frame50 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start pr-[1.2px] relative w-full">
        <Frame9 />
        <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1a1a] text-[14px] w-[min-content]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[1.5] whitespace-pre-wrap">Renew your membership soon to continue visiting, reserving, and enjoying member perks.</p>
        </div>
        <Frame49 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e0e0e0] relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[18px] relative w-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Individual Plus Member</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] pt-[5.104px] px-[9.358px] relative rounded-[1.701px] shrink-0 w-[60px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#c5d63d] border-[0.851px] border-solid inset-0 pointer-events-none rounded-[1.701px]" />
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11.91px] text-black uppercase whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Active</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container3 />
      <Border />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#343433] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Tom Smith</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[286px]">
      <Container4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative">
      <Frame14 />
      <Frame13 />
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

function Frame27() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-[319px]">
      <Frame15 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <NpChevron />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] whitespace-nowrap">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[14px]">
          <span className="leading-[normal] text-[#6b6b6b]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Expires `}</span>
          <span className="leading-[normal] text-[#1a1a1a]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            October 5, 2026
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-end relative shrink-0">
      <Frame18 />
    </div>
  );
}

function NpQrCode() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28.642px]" data-name="np_qr-code_1474690_000000 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6417 28.6416">
        <g id="Group">
          <path d={svgPaths.p2602ad00} fill="var(--fill-0, #343433)" id="Vector" />
          <path d={svgPaths.pc7344c0} fill="var(--fill-0, #343433)" id="Vector_2" />
          <path d={svgPaths.p102d6ec0} fill="var(--fill-0, #343433)" id="Vector_3" />
          <path d={svgPaths.p1039a400} fill="var(--fill-0, #343433)" id="Vector_4" />
          <path d={svgPaths.p3cf6cb80} fill="var(--fill-0, #343433)" id="Vector_5" />
          <path d={svgPaths.p1479e980} fill="var(--fill-0, #343433)" id="Vector_6" />
          <path d={svgPaths.p239c6880} fill="var(--fill-0, #343433)" id="Vector_7" />
          <path d={svgPaths.p8e1700} fill="var(--fill-0, #343433)" id="Vector_8" />
          <path d={svgPaths.p14b2d500} fill="var(--fill-0, #343433)" id="Vector_9" />
          <path d={svgPaths.p1752e00} fill="var(--fill-0, #343433)" id="Vector_10" />
          <path d={svgPaths.p26d74800} fill="var(--fill-0, #343433)" id="Vector_11" />
          <path d={svgPaths.p2b1ab600} fill="var(--fill-0, #343433)" id="Vector_12" />
          <path d={svgPaths.pc718900} fill="var(--fill-0, #343433)" id="Vector_13" />
          <path d={svgPaths.p17d2a600} fill="var(--fill-0, #343433)" id="Vector_14" />
          <path d={svgPaths.p36c41580} fill="var(--fill-0, #343433)" id="Vector_15" />
          <path d={svgPaths.p3d18cf80} fill="var(--fill-0, #343433)" id="Vector_16" />
          <path d={svgPaths.p2c0ff580} fill="var(--fill-0, #343433)" id="Vector_17" />
          <path d={svgPaths.p18f07f80} fill="var(--fill-0, #343433)" id="Vector_18" />
          <path d={svgPaths.pb4fd100} fill="var(--fill-0, #343433)" id="Vector_19" />
          <path d={svgPaths.p342c0400} fill="var(--fill-0, #343433)" id="Vector_20" />
          <path d={svgPaths.p2f6cfb70} fill="var(--fill-0, #343433)" id="Vector_21" />
          <path d={svgPaths.p28377e00} fill="var(--fill-0, #343433)" id="Vector_22" />
          <path d={svgPaths.p38e86200} fill="var(--fill-0, #343433)" id="Vector_23" />
          <path d={svgPaths.p270fe3f1} fill="var(--fill-0, #343433)" id="Vector_24" />
          <path d={svgPaths.p17aebd80} fill="var(--fill-0, #343433)" id="Vector_25" />
          <path d={svgPaths.p2c21ac00} fill="var(--fill-0, #343433)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-end relative" data-name="Container">
      <NpQrCode />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-end self-stretch">
        <Frame17 />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function MemberCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[22px] items-start p-[17px] relative shrink-0 w-[353px]" data-name="Member Card 12">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]" />
      <Frame27 />
      <Frame16 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#343433] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Emily Smith</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[286px]">
      <Container6 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame20 />
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
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-[319px]">
      <Frame19 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <NpChevron1 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] whitespace-nowrap">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[14px]">
          <span className="leading-[normal] text-[#6b6b6b]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Expires `}</span>
          <span className="leading-[normal] text-[#1a1a1a]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            October 5, 2026
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-end relative shrink-0">
      <Frame26 />
    </div>
  );
}

function NpQrCode1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28.642px]" data-name="np_qr-code_1474690_000000 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6417 28.6416">
        <g id="Group">
          <path d={svgPaths.p2602ad00} fill="var(--fill-0, #343433)" id="Vector" />
          <path d={svgPaths.pc7344c0} fill="var(--fill-0, #343433)" id="Vector_2" />
          <path d={svgPaths.p102d6ec0} fill="var(--fill-0, #343433)" id="Vector_3" />
          <path d={svgPaths.p1b04e080} fill="var(--fill-0, #343433)" id="Vector_4" />
          <path d={svgPaths.p4d65d00} fill="var(--fill-0, #343433)" id="Vector_5" />
          <path d={svgPaths.p1479e980} fill="var(--fill-0, #343433)" id="Vector_6" />
          <path d={svgPaths.p3159fc00} fill="var(--fill-0, #343433)" id="Vector_7" />
          <path d={svgPaths.p8e1700} fill="var(--fill-0, #343433)" id="Vector_8" />
          <path d={svgPaths.p2a79b980} fill="var(--fill-0, #343433)" id="Vector_9" />
          <path d={svgPaths.p1752e00} fill="var(--fill-0, #343433)" id="Vector_10" />
          <path d={svgPaths.p3e8acf00} fill="var(--fill-0, #343433)" id="Vector_11" />
          <path d={svgPaths.p2aa46e00} fill="var(--fill-0, #343433)" id="Vector_12" />
          <path d={svgPaths.pc718900} fill="var(--fill-0, #343433)" id="Vector_13" />
          <path d={svgPaths.p6bf7f10} fill="var(--fill-0, #343433)" id="Vector_14" />
          <path d={svgPaths.p36c41580} fill="var(--fill-0, #343433)" id="Vector_15" />
          <path d={svgPaths.p3d18cf80} fill="var(--fill-0, #343433)" id="Vector_16" />
          <path d={svgPaths.p2c0ff580} fill="var(--fill-0, #343433)" id="Vector_17" />
          <path d={svgPaths.p18f07f80} fill="var(--fill-0, #343433)" id="Vector_18" />
          <path d={svgPaths.pb4fd100} fill="var(--fill-0, #343433)" id="Vector_19" />
          <path d={svgPaths.p34f47e00} fill="var(--fill-0, #343433)" id="Vector_20" />
          <path d={svgPaths.p159cc020} fill="var(--fill-0, #343433)" id="Vector_21" />
          <path d={svgPaths.p5016270} fill="var(--fill-0, #343433)" id="Vector_22" />
          <path d={svgPaths.p38e86200} fill="var(--fill-0, #343433)" id="Vector_23" />
          <path d={svgPaths.p1890a900} fill="var(--fill-0, #343433)" id="Vector_24" />
          <path d={svgPaths.p17aebd80} fill="var(--fill-0, #343433)" id="Vector_25" />
          <path d={svgPaths.p2c21ac00} fill="var(--fill-0, #343433)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-end relative" data-name="Container">
      <NpQrCode1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-end self-stretch">
        <Frame22 />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function MemberCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[137px] items-start justify-between p-[17px] relative shrink-0 w-[353px]" data-name="Member Card 19">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]" />
      <Frame28 />
      <Frame21 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#343433] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Tom Smith</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[286px]">
      <Container8 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame31 />
    </div>
  );
}

function NpChevron2() {
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-[319px]">
      <Frame30 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <NpChevron2 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] whitespace-nowrap">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[14px]">
          <span className="leading-[normal] text-[#6b6b6b]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Expires `}</span>
          <span className="leading-[normal] text-[#1a1a1a]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            October 5, 2026
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-end relative shrink-0">
      <Frame34 />
    </div>
  );
}

function NpQrCode2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28.642px]" data-name="np_qr-code_1474690_000000 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6417 28.6416">
        <g id="Group">
          <path d={svgPaths.p2602ad00} fill="var(--fill-0, #343433)" id="Vector" />
          <path d={svgPaths.pc7344c0} fill="var(--fill-0, #343433)" id="Vector_2" />
          <path d={svgPaths.p102d6ec0} fill="var(--fill-0, #343433)" id="Vector_3" />
          <path d={svgPaths.p1b04e080} fill="var(--fill-0, #343433)" id="Vector_4" />
          <path d={svgPaths.p4d65d00} fill="var(--fill-0, #343433)" id="Vector_5" />
          <path d={svgPaths.p1479e980} fill="var(--fill-0, #343433)" id="Vector_6" />
          <path d={svgPaths.p3159fc00} fill="var(--fill-0, #343433)" id="Vector_7" />
          <path d={svgPaths.p8e1700} fill="var(--fill-0, #343433)" id="Vector_8" />
          <path d={svgPaths.p2a79b980} fill="var(--fill-0, #343433)" id="Vector_9" />
          <path d={svgPaths.p1752e00} fill="var(--fill-0, #343433)" id="Vector_10" />
          <path d={svgPaths.p3e8acf00} fill="var(--fill-0, #343433)" id="Vector_11" />
          <path d={svgPaths.p2aa46e00} fill="var(--fill-0, #343433)" id="Vector_12" />
          <path d={svgPaths.pc718900} fill="var(--fill-0, #343433)" id="Vector_13" />
          <path d={svgPaths.p6bf7f10} fill="var(--fill-0, #343433)" id="Vector_14" />
          <path d={svgPaths.p36c41580} fill="var(--fill-0, #343433)" id="Vector_15" />
          <path d={svgPaths.p3d18cf80} fill="var(--fill-0, #343433)" id="Vector_16" />
          <path d={svgPaths.p2c0ff580} fill="var(--fill-0, #343433)" id="Vector_17" />
          <path d={svgPaths.p18f07f80} fill="var(--fill-0, #343433)" id="Vector_18" />
          <path d={svgPaths.pb4fd100} fill="var(--fill-0, #343433)" id="Vector_19" />
          <path d={svgPaths.p34f47e00} fill="var(--fill-0, #343433)" id="Vector_20" />
          <path d={svgPaths.p159cc020} fill="var(--fill-0, #343433)" id="Vector_21" />
          <path d={svgPaths.p5016270} fill="var(--fill-0, #343433)" id="Vector_22" />
          <path d={svgPaths.p38e86200} fill="var(--fill-0, #343433)" id="Vector_23" />
          <path d={svgPaths.p1890a900} fill="var(--fill-0, #343433)" id="Vector_24" />
          <path d={svgPaths.p17aebd80} fill="var(--fill-0, #343433)" id="Vector_25" />
          <path d={svgPaths.p2c21ac00} fill="var(--fill-0, #343433)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-end relative" data-name="Container">
      <NpQrCode2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-end self-stretch">
        <Frame33 />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function MemberCard2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[137px] items-start justify-between p-[17px] relative shrink-0 w-[353px]" data-name="Member Card 20">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]" />
      <Frame29 />
      <Frame32 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#343433] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Tom Smith</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[286px]">
      <Container10 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame37 />
    </div>
  );
}

function NpChevron3() {
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

function Frame35() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-[319px]">
      <Frame36 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <NpChevron3 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] whitespace-nowrap">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[14px]">
          <span className="leading-[normal] text-[#6b6b6b]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Expires `}</span>
          <span className="leading-[normal] text-[#1a1a1a]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            October 5, 2026
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-end relative shrink-0">
      <Frame40 />
    </div>
  );
}

function NpQrCode3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28.642px]" data-name="np_qr-code_1474690_000000 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6417 28.6416">
        <g id="Group">
          <path d={svgPaths.p2602ad00} fill="var(--fill-0, #343433)" id="Vector" />
          <path d={svgPaths.pc7344c0} fill="var(--fill-0, #343433)" id="Vector_2" />
          <path d={svgPaths.p102d6ec0} fill="var(--fill-0, #343433)" id="Vector_3" />
          <path d={svgPaths.p1b04e080} fill="var(--fill-0, #343433)" id="Vector_4" />
          <path d={svgPaths.p4d65d00} fill="var(--fill-0, #343433)" id="Vector_5" />
          <path d={svgPaths.p1479e980} fill="var(--fill-0, #343433)" id="Vector_6" />
          <path d={svgPaths.p3159fc00} fill="var(--fill-0, #343433)" id="Vector_7" />
          <path d={svgPaths.p8e1700} fill="var(--fill-0, #343433)" id="Vector_8" />
          <path d={svgPaths.p2a79b980} fill="var(--fill-0, #343433)" id="Vector_9" />
          <path d={svgPaths.p1752e00} fill="var(--fill-0, #343433)" id="Vector_10" />
          <path d={svgPaths.p3e8acf00} fill="var(--fill-0, #343433)" id="Vector_11" />
          <path d={svgPaths.p2aa46e00} fill="var(--fill-0, #343433)" id="Vector_12" />
          <path d={svgPaths.pc718900} fill="var(--fill-0, #343433)" id="Vector_13" />
          <path d={svgPaths.p6bf7f10} fill="var(--fill-0, #343433)" id="Vector_14" />
          <path d={svgPaths.p36c41580} fill="var(--fill-0, #343433)" id="Vector_15" />
          <path d={svgPaths.p3d18cf80} fill="var(--fill-0, #343433)" id="Vector_16" />
          <path d={svgPaths.p2c0ff580} fill="var(--fill-0, #343433)" id="Vector_17" />
          <path d={svgPaths.p18f07f80} fill="var(--fill-0, #343433)" id="Vector_18" />
          <path d={svgPaths.pb4fd100} fill="var(--fill-0, #343433)" id="Vector_19" />
          <path d={svgPaths.p34f47e00} fill="var(--fill-0, #343433)" id="Vector_20" />
          <path d={svgPaths.p159cc020} fill="var(--fill-0, #343433)" id="Vector_21" />
          <path d={svgPaths.p5016270} fill="var(--fill-0, #343433)" id="Vector_22" />
          <path d={svgPaths.p38e86200} fill="var(--fill-0, #343433)" id="Vector_23" />
          <path d={svgPaths.p1890a900} fill="var(--fill-0, #343433)" id="Vector_24" />
          <path d={svgPaths.p17aebd80} fill="var(--fill-0, #343433)" id="Vector_25" />
          <path d={svgPaths.p2c21ac00} fill="var(--fill-0, #343433)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-end relative" data-name="Container">
      <NpQrCode3 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-end self-stretch">
        <Frame39 />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function MemberCard3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[137px] items-start justify-between p-[17px] relative shrink-0 w-[353px]" data-name="Member Card 21">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]" />
      <Frame35 />
      <Frame38 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#343433] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Tom Smith</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[286px]">
      <Container12 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame43 />
    </div>
  );
}

function NpChevron4() {
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

function Frame41() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-[319px]">
      <Frame42 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <NpChevron4 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[0px] whitespace-nowrap">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal text-[14px]">
          <span className="leading-[normal] text-[#6b6b6b]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Expires `}</span>
          <span className="leading-[normal] text-[#1a1a1a]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            October 5, 2026
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-end relative shrink-0">
      <Frame46 />
    </div>
  );
}

function NpQrCode4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28.642px]" data-name="np_qr-code_1474690_000000 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6417 28.6416">
        <g id="Group">
          <path d={svgPaths.p2602ad00} fill="var(--fill-0, #343433)" id="Vector" />
          <path d={svgPaths.pc7344c0} fill="var(--fill-0, #343433)" id="Vector_2" />
          <path d={svgPaths.p102d6ec0} fill="var(--fill-0, #343433)" id="Vector_3" />
          <path d={svgPaths.p1b04e080} fill="var(--fill-0, #343433)" id="Vector_4" />
          <path d={svgPaths.p4d65d00} fill="var(--fill-0, #343433)" id="Vector_5" />
          <path d={svgPaths.p1479e980} fill="var(--fill-0, #343433)" id="Vector_6" />
          <path d={svgPaths.p3159fc00} fill="var(--fill-0, #343433)" id="Vector_7" />
          <path d={svgPaths.p8e1700} fill="var(--fill-0, #343433)" id="Vector_8" />
          <path d={svgPaths.p2a79b980} fill="var(--fill-0, #343433)" id="Vector_9" />
          <path d={svgPaths.p1752e00} fill="var(--fill-0, #343433)" id="Vector_10" />
          <path d={svgPaths.p3e8acf00} fill="var(--fill-0, #343433)" id="Vector_11" />
          <path d={svgPaths.p2aa46e00} fill="var(--fill-0, #343433)" id="Vector_12" />
          <path d={svgPaths.pc718900} fill="var(--fill-0, #343433)" id="Vector_13" />
          <path d={svgPaths.p6bf7f10} fill="var(--fill-0, #343433)" id="Vector_14" />
          <path d={svgPaths.p36c41580} fill="var(--fill-0, #343433)" id="Vector_15" />
          <path d={svgPaths.p3d18cf80} fill="var(--fill-0, #343433)" id="Vector_16" />
          <path d={svgPaths.p2c0ff580} fill="var(--fill-0, #343433)" id="Vector_17" />
          <path d={svgPaths.p18f07f80} fill="var(--fill-0, #343433)" id="Vector_18" />
          <path d={svgPaths.pb4fd100} fill="var(--fill-0, #343433)" id="Vector_19" />
          <path d={svgPaths.p34f47e00} fill="var(--fill-0, #343433)" id="Vector_20" />
          <path d={svgPaths.p159cc020} fill="var(--fill-0, #343433)" id="Vector_21" />
          <path d={svgPaths.p5016270} fill="var(--fill-0, #343433)" id="Vector_22" />
          <path d={svgPaths.p38e86200} fill="var(--fill-0, #343433)" id="Vector_23" />
          <path d={svgPaths.p1890a900} fill="var(--fill-0, #343433)" id="Vector_24" />
          <path d={svgPaths.p17aebd80} fill="var(--fill-0, #343433)" id="Vector_25" />
          <path d={svgPaths.p2c21ac00} fill="var(--fill-0, #343433)" id="Vector_26" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-end relative" data-name="Container">
      <NpQrCode4 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="flex flex-row items-end self-stretch">
        <Frame45 />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function MemberCard4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[137px] items-start justify-between p-[17px] relative shrink-0 w-[353px]" data-name="Member Card 22">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]" />
      <Frame41 />
      <Frame44 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <MemberCard />
      <MemberCard1 />
      <MemberCard2 />
      <MemberCard3 />
      <MemberCard4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Background />
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Heading />
      <Frame12 />
    </div>
  );
}

function Frame47() {
  return <div className="absolute bg-white h-[1288px] left-[-36px] top-[138px] w-[485px]" />;
}

function Container16() {
  return (
    <div className="content-stretch flex items-center opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c5d63d] text-[18px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">Spring Member Preview Weekend</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[19px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">
        <p className="leading-[normal]">Reserve your spot</p>
      </div>
      <div className="relative shrink-0 size-[8.238px]" data-name="Vector">
        <div className="absolute inset-[-7.5%_-7.5%_-5.3%_-5.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.29284 9.29284">
            <path d={svgPaths.p2b58a640} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.23571" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start pb-[21px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[1.15] min-w-full not-italic relative shrink-0 text-[28px] text-white uppercase w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">See new Work before</p>
        <p>they open to the public</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[166px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Heading1 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[219px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[18px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function FeaturedBanner() {
  return (
    <div className="content-stretch flex flex-col h-[193px] items-start overflow-clip relative shrink-0 w-full" data-name="Featured Banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgFeaturedBanner} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(256.427deg, rgba(26, 26, 26, 0) 16.684%, rgba(26, 26, 26, 0.75) 112.04%)" }} />
      </div>
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-[290px]" data-name="Heading 3">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black uppercase whitespace-nowrap">
        <p className="leading-[normal]">Guest Passes</p>
      </div>
    </div>
  );
}

function Container17() {
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Heading2 />
      <Container17 />
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

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function ContainerAlignFlexEnd() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container:align-flex-end">
      <Container18 />
    </div>
  );
}

function GuestPasses() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Guest Passes">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Frame1 />
        <ContainerAlignFlexEnd />
      </div>
    </div>
  );
}

function Heading3() {
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

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function ContainerAlignFlexEnd1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Container:align-flex-end">
      <Container19 />
    </div>
  );
}

function GetTickets() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Get Tickets">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Heading3 />
        <ContainerAlignFlexEnd1 />
      </div>
    </div>
  );
}

function Heading4() {
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

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function ContainerAlignFlexEnd2() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Container:align-flex-end">
      <Container20 />
    </div>
  );
}

function GetTickets1() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Get Tickets">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Heading4 />
        <ContainerAlignFlexEnd2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black uppercase w-[147px]">
        <p className="leading-[normal] whitespace-pre-wrap">Weather at GFS</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[37.863px] relative shrink-0 w-[45.391px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.3912 37.8631">
        <g id="Group">
          <path d={svgPaths.p3836eb80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p9c6d800} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p189b3e00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p33a8c000} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p2d949800} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.pb83a00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p1839b180} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[107px] overflow-clip size-[46.006px] top-[19px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2.329px] relative shrink-0">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] h-[33.388px] justify-center leading-[0] not-italic relative shrink-0 text-[35.352px] text-black tracking-[0.707px] uppercase w-[36.494px]">
        <p className="leading-[normal] whitespace-pre-wrap">87</p>
      </div>
    </div>
  );
}

function Frame3() {
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[1.553px] relative shrink-0 w-[10.094px]">
      <div className="flex flex-col font-['Arquitecta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[17.676px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">F</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6.988px] h-[33.388px] items-start relative shrink-0">
      <Svg3 />
      <Frame48 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[61px] items-start relative shrink-0 w-[153px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function GetTickets2() {
  return (
    <div className="bg-[#f5f5f3] col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Get Tickets">
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <Heading5 />
        <Container21 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="gap-x-[18px] gap-y-[18px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[361px] relative shrink-0 w-[392px]">
      <GuestPasses />
      <GetTickets />
      <GetTickets1 />
      <GetTickets2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Arquitecta:Heavy',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-black uppercase w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Booked visits</p>
      </div>
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
        <p className="leading-[normal]">10:30 — 11:30AM</p>
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
        <p className="leading-[normal]">Yoga</p>
      </div>
      <Container23 />
    </div>
  );
}

function Group2() {
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

function Frame11() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0">
      <Group2 />
    </div>
  );
}

function Container26() {
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

function Background1() {
  return (
    <div className="bg-[#f5f5f3] relative shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[10px] relative w-full">
        <Frame11 />
        <Container26 />
      </div>
    </div>
  );
}

function Visit1Yoga() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[22px] relative shrink-0 w-full" data-name="Visit 1 - Yoga">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Background1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#343433] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">August 16</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">9:00AM</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Member Mornings</p>
      </div>
      <Container28 />
    </div>
  );
}

function Visit2MemberMornings() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22px] relative shrink-0 w-full" data-name="Visit 2 - Member Mornings">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
      <Container27 />
      <div className="flex flex-col font-['Open_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#7f746c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Members Only</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#343433] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">August 16</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">9:00AM</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Arquitecta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[normal]">Member Mornings</p>
      </div>
      <Container32 />
    </div>
  );
}

function Visit3MemberMornings() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Visit 3 - Member Mornings">
      <Container31 />
      <div className="flex flex-col font-['Open_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#7f746c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[normal]">Members Only</p>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[25px] relative w-full">
        <Heading6 />
        <Visit1Yoga />
        <Visit2MemberMornings />
        <Visit3MemberMornings />
      </div>
    </div>
  );
}

function Container35() {
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
      <Border1 />
      <Container35 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame5 />
      <AsideRightSidebarBookedVisits />
    </div>
  );
}

function ActionCardsGrid() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action Cards Grid">
      <Frame10 />
    </div>
  );
}

function CenterContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[620px] items-start min-h-px min-w-px relative" data-name="Center Content">
      <FeaturedBanner />
      <ActionCardsGrid />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[392px]" data-name="-">
      <Frame47 />
      <CenterContent />
    </div>
  );
}

function AsideLeftSidebar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[1117px] items-start left-0 px-[24px] py-[32px] top-[93px] w-[440px]" data-name="Aside - Left Sidebar" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.87) 0%, rgba(255, 255, 255, 0.87) 100%), linear-gradient(90deg, rgb(127, 116, 108) 0%, rgb(127, 116, 108) 100%)" }}>
      <Frame7 />
      <Component />
    </div>
  );
}

export default function IPhone1617ProMax() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 & 17 Pro Max - 5">
      <Frame23 />
      <AsideLeftSidebar />
    </div>
  );
}