import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from '../NavBar/NavBar';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <div className="header_headerContainer">
  <header className='header_header'>
    <a href="https://www.upday.com/de">
    <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37688 0 0 5.37688 0 12C0 18.6231 5.37688 24 12 24C18.6231 24 24 18.6231 24 12C24 5.37688 18.6231 0 12 0Z" fill="#1DB8DA"/>
    <path d="M19.8011 12.0012C19.8011 16.3128 16.3137 19.8002 12.0021 19.8002C7.69056 19.8002 4.20312 16.3128 4.20312 12.0012H8.04232C8.04232 14.1922 9.81116 15.961 12.0021 15.961C14.1931 15.961 15.9619 14.1922 15.9619 12.0012H19.8011Z" fill="white"/>
    <path d="M36.8077 16.71C36.1966 17.5393 35.3672 17.9584 34.337 17.9584C33.2981 17.9584 32.5124 17.6005 31.9711 16.8846C31.4386 16.1687 31.168 15.1298 31.168 13.7592V6.42578H34.1275V13.829C34.145 14.929 34.5116 15.479 35.2275 15.479C35.8997 15.479 36.3886 15.1822 36.6942 14.5973V6.42578H39.6712V17.7401H36.8863L36.8077 16.71Z" fill="#1B1B1B"/>
    <path d="M50.2589 12.4407C50.2589 14.2217 49.9534 15.5836 49.3422 16.5352C48.7311 17.4868 47.8232 17.9582 46.6184 17.9582C45.7018 17.9582 44.9597 17.5828 44.401 16.8407V22.1051H41.4414V6.42559H44.1827L44.2875 7.46449C44.8549 6.63511 45.6232 6.21606 46.601 6.21606C47.8057 6.21606 48.7137 6.65258 49.3248 7.53433C49.9359 8.41608 50.2502 9.76053 50.2589 11.5764V12.4407ZM47.3081 11.7074C47.3081 10.6074 47.1859 9.83037 46.9502 9.3764C46.7057 8.92243 46.3041 8.69545 45.7279 8.69545C45.1256 8.69545 44.6803 8.94862 44.401 9.4637V14.7804C44.6629 15.2693 45.1168 15.5137 45.7541 15.5137C46.3391 15.5137 46.7494 15.2693 46.9764 14.7717C47.2033 14.2741 47.3168 13.5058 47.3168 12.4494V11.7074H47.3081Z" fill="#1B1B1B"/>
    <path d="M51.3095 11.7425C51.3095 9.89165 51.6238 8.50354 52.2524 7.58687C52.8809 6.6702 53.7889 6.21623 54.9937 6.21623C55.8667 6.21623 56.5913 6.59163 57.1675 7.34242V1.67651H60.1445V17.7401H57.4556L57.3159 16.5877C56.7135 17.4957 55.9278 17.9496 54.9762 17.9496C53.7889 17.9496 52.8897 17.4957 52.2611 16.5877C51.6413 15.6798 51.3182 14.3528 51.3008 12.5893V11.7425H51.3095ZM54.2865 12.4845C54.2865 13.602 54.4087 14.379 54.6445 14.8242C54.8802 15.2695 55.2818 15.4877 55.8492 15.4877C56.4341 15.4877 56.8794 15.2258 57.1762 14.702V9.53371C56.8794 8.97497 56.4429 8.69561 55.858 8.69561C55.3167 8.69561 54.9151 8.91386 54.6619 9.35037C54.4087 9.78688 54.2865 10.5726 54.2865 11.6901V12.4845Z" fill="#1B1B1B"/>
    <path d="M67.3649 17.74C67.2776 17.5653 67.199 17.2772 67.1117 16.8582C66.5792 17.5828 65.8633 17.9495 64.9554 17.9495C64.0038 17.9495 63.218 17.6352 62.5982 17.0066C61.9783 16.378 61.6641 15.5661 61.6641 14.5709C61.6641 13.3836 62.0395 12.4669 62.799 11.8209C63.5585 11.1748 64.6498 10.8431 66.0641 10.8256H66.9633V9.91768C66.9633 9.41132 66.876 9.05339 66.7014 8.84386C66.5268 8.63433 66.2736 8.52957 65.9419 8.52957C65.1998 8.52957 64.8331 8.96608 64.8331 9.83037H61.8736C61.8736 8.78275 62.2664 7.91846 63.0522 7.2375C63.8379 6.55654 64.8244 6.21606 66.0292 6.21606C67.2689 6.21606 68.2292 6.53908 68.9101 7.18512C69.5911 7.83115 69.9316 8.75656 69.9316 9.9526V15.278C69.949 16.2558 70.0887 17.0153 70.3506 17.5653V17.74H67.3649V17.74ZM65.6189 15.6272C65.9506 15.6272 66.23 15.5574 66.457 15.4264C66.6839 15.2955 66.8585 15.1383 66.972 14.955V12.5979H66.2649C65.7585 12.5979 65.3657 12.755 65.0776 13.078C64.7895 13.401 64.6411 13.8288 64.6411 14.3614C64.6323 15.2082 64.9641 15.6272 65.6189 15.6272Z" fill="#1B1B1B"/>
    <path d="M75.2038 12.8163L76.7141 6.42578H79.8744L76.1466 19.4425C75.5879 21.3632 74.5403 22.3235 72.995 22.3235C72.6371 22.3235 72.2355 22.2537 71.7815 22.1227V19.8005L72.1307 19.8092C72.5934 19.8092 72.9339 19.7219 73.1696 19.5386C73.4054 19.364 73.58 19.0497 73.7022 18.6132L73.9292 17.8536L70.6641 6.42578H73.8419L75.2038 12.8163Z" fill="#1B1B1B"/>
    <rect x="86.4219" y="3.68347" width="0.79626" height="16.633" fill="black"/>
    <path d="M101.605 7.31994V16H99.8166L96.3291 10.1815V16H94.5406V7.31994H96.3291L99.8226 13.1444V7.31994H101.605ZM106.023 16.1192C105.522 16.1192 105.073 16.0397 104.675 15.8808C104.278 15.7178 103.94 15.4933 103.662 15.2071C103.388 14.921 103.177 14.5891 103.03 14.2115C102.883 13.83 102.809 13.4246 102.809 12.9954V12.7569C102.809 12.268 102.879 11.8209 103.018 11.4155C103.157 11.0102 103.356 10.6584 103.614 10.3603C103.876 10.0623 104.194 9.83374 104.568 9.67476C104.942 9.51181 105.363 9.43034 105.832 9.43034C106.289 9.43034 106.694 9.50585 107.048 9.65688C107.402 9.8079 107.698 10.0225 107.936 10.3007C108.179 10.5789 108.362 10.9128 108.485 11.3023C108.608 11.6878 108.67 12.117 108.67 12.59V13.3054H103.543V12.1607H106.982V12.0296C106.982 11.7911 106.939 11.5785 106.851 11.3917C106.768 11.2009 106.641 11.0499 106.47 10.9386C106.299 10.8273 106.08 10.7717 105.814 10.7717C105.587 10.7717 105.393 10.8214 105.23 10.9207C105.067 11.0201 104.934 11.1592 104.83 11.338C104.731 11.5169 104.655 11.7275 104.604 11.97C104.556 12.2084 104.532 12.4707 104.532 12.7569V12.9954C104.532 13.2537 104.568 13.4922 104.64 13.7108C104.715 13.9293 104.82 14.1181 104.956 14.2771C105.095 14.4361 105.262 14.5593 105.456 14.6467C105.655 14.7342 105.88 14.7779 106.13 14.7779C106.44 14.7779 106.728 14.7183 106.994 14.599C107.265 14.4758 107.497 14.291 107.692 14.0446L108.527 14.9508C108.391 15.1455 108.207 15.3323 107.972 15.5112C107.742 15.69 107.463 15.8371 107.137 15.9523C106.812 16.0636 106.44 16.1192 106.023 16.1192ZM111.489 14.3308L112.831 9.54957H113.922L113.57 11.4275L112.229 16H111.317L111.489 14.3308ZM110.81 9.54957L111.77 14.3248L111.859 16H110.786L109.152 9.54957H110.81ZM115.15 14.2473L116.086 9.54957H117.749L116.116 16H115.048L115.15 14.2473ZM114.071 9.54957L115.406 14.295L115.591 16H114.673L113.332 11.4334L112.992 9.54957H114.071ZM122.101 14.2175C122.101 14.0943 122.065 13.983 121.994 13.8836C121.922 13.7843 121.789 13.6929 121.594 13.6094C121.404 13.522 121.127 13.4425 120.766 13.3709C120.44 13.2994 120.136 13.21 119.854 13.1027C119.575 12.9914 119.333 12.8582 119.126 12.7032C118.924 12.5482 118.765 12.3654 118.649 12.1548C118.534 11.9402 118.476 11.6957 118.476 11.4215C118.476 11.1512 118.534 10.8969 118.649 10.6584C118.769 10.42 118.937 10.2093 119.156 10.0265C119.379 9.8397 119.649 9.69463 119.967 9.5913C120.289 9.48399 120.65 9.43034 121.052 9.43034C121.612 9.43034 122.093 9.51976 122.494 9.69861C122.9 9.87745 123.21 10.1239 123.424 10.4378C123.643 10.7478 123.752 11.1016 123.752 11.499H122.035C122.035 11.3321 122 11.183 121.928 11.0519C121.861 10.9168 121.753 10.8114 121.606 10.7359C121.463 10.6564 121.276 10.6167 121.046 10.6167C120.855 10.6167 120.69 10.6505 120.551 10.718C120.412 10.7816 120.305 10.8691 120.229 10.9803C120.158 11.0877 120.122 11.2069 120.122 11.338C120.122 11.4374 120.142 11.5268 120.181 11.6063C120.225 11.6818 120.295 11.7514 120.39 11.815C120.485 11.8786 120.609 11.9382 120.76 11.9938C120.915 12.0455 121.105 12.0932 121.332 12.1369C121.797 12.2323 122.212 12.3575 122.578 12.5125C122.944 12.6635 123.234 12.8702 123.448 13.1325C123.663 13.3908 123.77 13.7306 123.77 14.1519C123.77 14.4381 123.707 14.7004 123.58 14.9388C123.452 15.1773 123.269 15.386 123.031 15.5648C122.793 15.7397 122.506 15.8768 122.173 15.9762C121.843 16.0715 121.471 16.1192 121.058 16.1192C120.458 16.1192 119.949 16.0119 119.532 15.7973C119.118 15.5827 118.804 15.3104 118.59 14.9806C118.379 14.6467 118.274 14.3049 118.274 13.9552H119.901C119.909 14.1897 119.969 14.3784 120.08 14.5215C120.195 14.6646 120.34 14.7679 120.515 14.8315C120.694 14.8951 120.887 14.9269 121.094 14.9269C121.316 14.9269 121.501 14.8971 121.648 14.8375C121.795 14.7739 121.906 14.6904 121.982 14.5871C122.061 14.4798 122.101 14.3566 122.101 14.2175Z" fill="#1B1B1B"/>
</svg>
    </a>
    <div className='header_editionToggle'>
    <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_1636_107944" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="19" ><rect width="28" height="18.6667" rx="2.66667" fill="#C4C4C4"></rect></mask><g mask="url(#mask0_1636_107944)"><rect width="28" height="6.22222" fill="#262626"></rect><rect y="6.22266" width="28" height="6.22222" fill="#F44653"></rect><rect y="12.4453" width="28" height="6.22222" fill="#FFCF3C"></rect></g></svg>
    <font ><font >EN</font></font>
    </div>
  </header>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="header_hamburgerIcon__wmtK5" data-testid="header-hamburgerIcon"><rect y="2" width="18" height="2" fill="#808080"></rect><rect y="8" width="18" height="2" fill="#808080"></rect><rect y="14" width="18" height="2" fill="#808080"></rect></svg>
    <NavBar/>
  </div>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
