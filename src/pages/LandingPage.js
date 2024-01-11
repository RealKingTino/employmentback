import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const onLinkClick = useCallback(() => {
    navigate("/form-page");
  }, [navigate]);

  return (
    <div className="relative bg-cdcfib-career-new-account-1583x759-dark-nero w-full h-[1024px] overflow-hidden text-left text-12xl text-cdcfib-career-new-account-1583x759-dark-oxford-blue font-segoe-ui">
      <div className="absolute w-[calc(100%_+_143px)] top-[0px] right-[-44px] left-[-99px] bg-cdcfib-career-new-account-1583x759-dark-alizarin-crimson overflow-hidden flex flex-col items-center justify-center">
        <div className="relative w-[1583px] h-32 overflow-hidden shrink-0">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start">
            <div className="self-stretch relative bg-cdcfib-career-new-account-1583x759-dark-burnt-sienna w-[791.5px]" />
            <div className="self-stretch relative bg-cdcfib-career-new-account-1583x759-dark-alizarin-crimson w-[791.5px]" />
          </div>
          <div className="absolute w-full top-[0px] right-[83.5px] left-[-83.5px] h-[308px] flex flex-row items-start justify-center">
            <img
              className="self-stretch relative max-h-full w-[1750px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/svg@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_224px)] top-[91px] right-[112px] left-[112px] rounded-lg bg-cdcfib-career-new-account-1583x759-dark-nero shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] h-[914px]">
        <img
          className="absolute top-[0px] left-[454px] w-[410px] h-[168px] object-cover"
          alt=""
          src="/f1f78bade4684b70b7b5ec9c5fa557d2-1@2x.png"
        />
        <div className="absolute w-[calc(100%_-_72px)] top-[155px] right-[29px] left-[43px]" />
        <div className="absolute h-[3.06%] w-full top-[28.77%] right-[0%] bottom-[68.16%] left-[0%] box-border border-b-[4px] border-solid border-cdcfib-career-new-account-1583x759-dark-froly" />
        <div className="absolute top-[319px] left-[132px] leading-[30px] flex items-center w-[1043px] h-[65px]">
          <span className="w-full">
            <p className="m-0">
              As the holding company for renowned brands like Paddy Power,
              Betfair, and
            </p>
            <p className="m-0">
              FanDuel, we are on a mission to lead the online sports betting and
              gaming industry.
            </p>
          </span>
        </div>
        <div className="absolute h-[calc(100%_-_894px)] top-[306.3px] bottom-[587.7px] left-[20.6px] w-5" />
        <img
          className="absolute h-[1.75%] w-[1.32%] top-[34.79%] right-[90.3%] bottom-[63.46%] left-[8.39%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[calc(100%_-_893px)] top-[408px] bottom-[485px] left-[99px] max-h-full w-[18px] object-cover"
          alt=""
          src="/frame@2x.png"
        />
        <b className="absolute top-[679px] left-[202px] leading-[28px] flex text-cdcfib-career-new-account-1583x759-dark-old-brick text-center items-center justify-center w-[883px] h-[31px]">
          NO PRIOR EXPERIENCE REQUIRED – IF YOU'RE SMART, YOU'RE IN!
        </b>
        <div className="absolute top-[563px] left-[126px] leading-[28px] flex items-center w-[1008px] h-[61px]">
          <span className="w-full">
            <p className="m-0">
              Elevate your career by applying below and be part of the
              innovative force driving
            </p>
            <p className="m-0">the future of sports betting and gaming.</p>
          </span>
        </div>
        <div className="absolute h-[calc(100%_-_892px)] top-[563px] bottom-[329px] left-[96px] w-[18px]" />
        <img
          className="absolute h-[1.93%] w-[1.18%] top-[61.27%] right-[90.51%] bottom-[36.81%] left-[8.31%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/vector1@2x.png"
        />
        <Button
          className="w-[316px] absolute h-[calc(100%_-_841px)] top-[751px] bottom-[90px] left-[486px] cursor-pointer"
          variant="primary"
          href="/form-page"
          onClick={onLinkClick}
        >
          APPLY
        </Button>
        <div className="absolute top-[425px] left-[131px] leading-[28px] flex items-center w-[1044px] h-[122px]">
          <span className="w-full">
            <p className="m-0">
              Join our diverse team of over 13,000 talented individuals who
              embody traits such as
            </p>
            <p className="m-0">{`competitiveness, agility, integrity, and an unwavering commitment to delivering `}</p>
            <p className="m-0">{`top-notch entertainment responsibly. `}</p>
          </span>
        </div>
        <div className="absolute h-[calc(100%_-_797px)] top-[168px] bottom-[629px] left-[103px] w-[987px] flex flex-col items-start justify-start text-[30px] text-cdcfib-career-new-account-1583x759-dark-old-brick">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative leading-[36px] flex items-center w-[1152px]">
              <span className="w-full">
                <p className="m-0">{`EXPLORE AN EXCITING CAREER OPPORTUNITY WITH MOHEGAN SUN, A GLOBAL `}</p>
                <p className="m-0">{`SPORTS BETTING, GAMING, AND ENTERTAINMENT POWERHOUSE SERVING `}</p>
                <p className="m-0">MILLIONS WORLDWIDE.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
