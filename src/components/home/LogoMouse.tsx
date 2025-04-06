"use client";

import { useEffect, useRef, useState } from "react";

export default function LogoMouse() {
  const followerRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const animationTime = "5s";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth animation
  useEffect(() => {
    const ease = 0.00007; // lower is slower

    const animate = () => {
      setFollowerPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;

        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [mousePos]);

  return (
    <div
      ref={followerRef}
      className="pointer-events-none fixed -left-72 -top-72 -z-20 h-8 w-8 transform opacity-10 transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${followerPos.x - 16}px, ${followerPos.y - 16}px)`,
      }}
    >
      <svg
        width="1000"
        height="1000"
        viewBox="0 0 48 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3377_6354)">
          <path
            d="M13.9501 24.8984L17.293 34.4962C19.0936 39.6666 25.8176 40.9508 29.394 36.8041L36.035 29.1102C39.6137 24.9658 37.3619 18.5022 31.9826 17.4762L22.001 15.5723C16.6217 14.5463 12.1495 19.728 13.9501 24.8984Z"
            stroke="white"
            stroke-width="0.0808232"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M13.6268 25.1884L17.3649 34.977C19.3787 40.2507 26.3452 41.3665 29.9059 36.9863L36.5132 28.8569C40.0739 24.4767 37.5572 17.8851 31.9826 16.9916L21.6373 15.3347C16.0627 14.4412 11.613 19.9169 13.6268 25.1906V25.1884Z"
            stroke="white"
            stroke-width="0.0830683"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M13.3044 25.501L17.4556 35.4714C19.6917 40.8439 26.9052 41.7801 30.4412 37.1575L37.0013 28.5767C40.5351 23.9541 37.74 17.2368 31.9701 16.4892L21.2588 15.0972C15.4866 14.3474 11.0705 20.1262 13.3067 25.4987L13.3044 25.501Z"
            stroke="white"
            stroke-width="0.0853134"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M12.981 25.8296L17.5632 35.9774C20.0328 41.4465 27.4933 42.1896 30.9956 37.3177L37.4929 28.2745C40.993 23.4027 37.9082 16.5686 31.9385 15.9714L20.859 14.8646C14.8893 14.2697 10.5136 20.3583 12.981 25.8274V25.8296Z"
            stroke="white"
            stroke-width="0.0875585"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 80,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M12.6572 26.1792L17.6884 36.4977C20.4005 42.0565 28.1124 42.5953 31.5698 37.4675L37.9885 27.9506C41.4482 22.8228 38.0581 15.8743 31.8886 15.4432L20.4364 14.6417C14.2669 14.2107 9.94286 20.6204 12.6549 26.1792H12.6572Z"
            stroke="white"
            stroke-width="0.0920486"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 70,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M12.3338 26.5474L17.8343 37.0253C20.7978 42.6717 28.7612 42.9905 32.1692 37.6L38.4936 27.5959C41.9017 22.2054 38.195 15.1491 31.8257 14.8932L20.0008 14.4172C13.6293 14.1613 9.37032 20.8988 12.3338 26.543V26.5474Z"
            stroke="white"
            stroke-width="0.0942937"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 70,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M12.0126 26.9372L18.0025 37.5654C21.2287 43.2927 29.4457 43.378 32.7931 37.7204L39.003 27.2201C42.3482 21.5625 38.316 14.4029 31.7424 14.3355L19.5426 14.2075C12.969 14.1379 8.78639 21.2122 12.0126 26.9372Z"
            stroke="white"
            stroke-width="0.0965388"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 60,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M11.6922 27.353L18.1895 38.1227C21.6896 43.9262 30.1603 43.7623 33.4336 37.8308L39.5111 26.8186C42.7867 20.8849 38.411 13.6332 31.6353 13.7634L19.0606 14.0059C12.2849 14.1361 8.1921 21.5517 11.6922 27.3552V27.353Z"
            stroke="white"
            stroke-width="0.0987839"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 60,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M11.378 27.7849L18.4028 38.6848C22.1881 44.558 30.9102 44.1314 34.1027 37.917L40.0298 26.384C43.2223 20.1696 38.4919 12.8304 31.5142 13.1716L18.5622 13.8047C11.5845 14.146 7.59274 21.914 11.378 27.7849Z"
            stroke="white"
            stroke-width="0.103274"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 50,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M11.063 28.2445L18.6334 39.2612C22.7128 45.1972 31.6886 44.49 34.7891 37.9904L40.5432 25.9253C43.6437 19.4236 38.5451 12.0058 31.3653 12.5693L18.0385 13.6178C10.8587 14.1835 6.98142 22.3085 11.0607 28.2445H11.063Z"
            stroke="white"
            stroke-width="0.105519"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 40,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M10.7562 28.7251L18.8947 39.845C23.2793 45.8372 32.5066 44.8336 35.5038 38.04L41.0649 25.4315C44.0621 18.6379 38.5796 11.1483 31.1977 11.9498L17.4982 13.4383C10.1164 14.2398 6.37155 22.733 10.7562 28.7251Z"
            stroke="white"
            stroke-width="0.110009"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: 30,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M10.4527 29.2285L19.1793 40.4382C23.8805 46.4775 33.3593 45.1641 36.2398 38.0719L41.5853 24.909C44.4658 17.8167 38.5881 10.2665 31.0042 11.3172L16.932 13.2704C9.35033 14.3234 5.74921 23.1892 10.4527 29.2285Z"
            stroke="white"
            stroke-width="0.112254"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: 50,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M10.1564 29.7584L19.4915 41.0445C24.5228 47.1242 34.2485 45.4808 36.9987 38.0832L42.104 24.3545C44.8543 16.9569 38.568 9.35731 30.7866 10.6729L16.3439 13.1156C8.56242 14.4312 5.12519 23.6765 10.1542 29.7584H10.1564Z"
            stroke="white"
            stroke-width="0.116745"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: 70,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M9.86718 30.3157L19.8331 41.6602C25.2034 47.7713 35.1761 45.7799 37.7826 38.0725L42.623 23.769C45.2318 16.0639 38.519 8.42162 30.5422 10.0179L15.7358 12.9769C7.7568 14.5709 4.49693 24.2046 9.86718 30.3157Z"
            stroke="white"
            stroke-width="0.11899"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: 40,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M9.5838 30.8941L20.2008 42.2789C25.9213 48.4125 36.1365 46.0552 38.5881 38.0334L43.1389 23.1463C45.5905 15.1246 38.4399 7.45758 30.2678 9.34346L15.1 12.8458C6.92786 14.7317 3.86332 24.7582 9.58156 30.8918L9.5838 30.8941Z"
            stroke="white"
            stroke-width="0.12348"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: 20,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M9.31269 31.5035L20.601 42.9108C26.6829 49.0579 37.1383 46.3144 39.4193 37.9739L43.6536 22.494C45.9346 14.1535 38.3327 6.47079 29.9698 8.66424L14.4472 12.7368C6.08425 14.9303 3.23074 25.3565 9.31269 31.5035Z"
            stroke="white"
            stroke-width="0.12797"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: 70,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M9.04982 32.1351L21.0319 43.5447C27.4865 49.6917 38.1776 46.5463 40.2723 37.8825L44.163 21.801C46.2599 13.1372 38.1888 5.45223 29.6373 7.96898L13.7667 12.641C5.21521 15.1578 2.59519 25.9881 9.04982 32.1351Z"
            stroke="white"
            stroke-width="0.13246"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M8.80063 32.7968L21.4966 44.1884C28.3374 50.3264 39.2553 46.7567 41.1501 37.7652L44.6682 21.0752C46.563 12.0836 38.0137 4.41213 29.2781 7.26563L13.0663 12.564C4.33065 15.4198 1.96208 26.6587 8.80287 32.7968H8.80063Z"
            stroke="white"
            stroke-width="0.134705"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 130,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M8.56239 33.4893L21.9925 44.8382C29.2284 50.9538 40.3708 46.9418 42.0479 37.618L45.1618 20.3128C46.8389 10.989 37.7934 3.34447 28.8804 6.5527L12.3364 12.5089C3.42338 15.7172 1.32423 27.3737 8.56239 33.4893Z"
            stroke="white"
            stroke-width="0.139196"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 140,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M8.33781 34.2056L22.5245 45.4894C30.1691 51.5691 41.527 47.0946 42.9705 37.4363L45.6489 19.507C47.0925 9.84635 37.5374 2.24673 28.4493 5.82764L11.5842 12.4709C2.49609 16.0495 0.691038 28.1259 8.33557 34.2056H8.33781Z"
            stroke="white"
            stroke-width="0.143686"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 140,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M8.12961 34.9505L23.0931 46.1445C31.1552 52.1771 42.7242 47.2177 43.9163 37.2203L46.13 18.6646C47.3221 8.66726 37.2439 1.126 27.9897 5.09307L10.8125 12.4547C1.55599 16.4218 0.0652532 28.918 8.12961 34.9505Z"
            stroke="white"
            stroke-width="0.148176"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 140,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M7.93616 35.7276L23.6989 46.8048C32.1921 52.7745 43.9609 47.31 44.8836 36.9713L46.5966 17.7826C47.5193 7.44393 36.9023 -0.0187492 27.4886 4.35244L10.0129 12.4639C0.596967 16.8351 -0.55701 29.7601 7.93616 35.7276Z"
            stroke="white"
            stroke-width="0.152666"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 150,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M7.7609 36.5306L24.3431 47.4642C33.2763 53.3553 45.2382 47.3654 45.8735 36.6833L47.0522 16.8569C47.6876 6.17475 36.5182 -1.18914 26.9497 3.60188L9.18878 12.4947C-0.379789 17.2857 -1.17231 30.6395 7.7609 36.5306Z"
            stroke="white"
            stroke-width="0.157156"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 160,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M7.60588 37.3667L25.0278 48.1274C34.4145 53.9242 46.5559 47.3865 46.8837 36.3586L47.4921 15.8924C47.8199 4.8645 36.0871 -2.38264 26.3726 2.84841L8.34227 12.5539C-1.37223 17.785 -1.78083 31.5698 7.60588 37.3667Z"
            stroke="white"
            stroke-width="0.161646"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 160,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
          <path
            d="M7.47089 38.2334L25.7526 48.7876C35.6018 54.4744 47.9162 47.3665 47.9162 35.9928V14.8823C47.9162 3.50865 35.6041 -3.5993 25.7526 2.08751L7.47089 12.6417C-2.37832 18.3285 -2.37832 32.5466 7.47089 38.2334Z"
            stroke="white"
            stroke-width="0.168382"
            stroke-miterlimit="10"
            style={{
              strokeDasharray: 160,
              strokeDashoffset: 90,
              animation: `draw ${animationTime} ease-out forwards`,
            }}
          />
        </g>
        <defs>
          <clipPath id="clip0_3377_6354">
            <rect width="48" height="50.8715" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
