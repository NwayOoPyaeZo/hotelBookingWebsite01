import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (section, param = null) => {
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePropertyType = (type) => {
    navigate(`/?propertyType=${type}`);
    setTimeout(() => {
      const element = document.getElementById('property-type-bar');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="
      flex flex-col justify-between items-center 
      w-full h-auto lg:h-[500px] bg-[#121316] 
      text-white
      pb-8 lg:pb-0
    ">
      
      {/* --- Top Section --- */}
      <div className="
        relative lg:top-10 
        flex flex-col lg:flex-row justify-between items-start 
        w-full max-w-[1232px] 
        px-5 py-10 lg:py-0
        gap-10 lg:gap-[50px]
      ">
        
        {/* Column 1: Brand & App  */}
        <div className="
          flex flex-col gap-8 w-full lg:w-[310px]
          items-center lg:items-start
          text-center lg:text-left
        ">
          
          <div className="relative top-5 lg:top-0 flex flex-col items-center lg:items-start gap-4">
            {/* Tripto Logo */}
            <div className="w-[80px] h-[30px]">
              <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3906 14.144C12.3906 13.1045 12.5958 12.0754 12.9942 11.1154C13.3926 10.1554 13.9766 9.28325 14.7123 8.54917C15.4479 7.81519 16.3208 7.23327 17.2811 6.83665C18.2411 6.44018 19.27 6.23717 20.3086 6.23775V6.23718H23.456V10.4903H20.3069C19.8249 10.49 19.3477 10.5846 18.9025 10.7684C18.4574 10.9523 18.0533 11.2218 17.713 11.5613C17.3728 11.9008 17.103 12.3035 16.9191 12.7466C16.7352 13.1897 16.6406 13.6646 16.6406 14.144V21.5071H12.3906V14.144Z" fill="white"/>
                <path d="M0 12.5513V0H4.24997V12.5513C4.24997 13.7905 4.74296 14.9802 5.62192 15.858C6.50105 16.7359 7.69455 17.2298 8.93982 17.2298L11.2195 17.2711V21.4835H8.93982C6.57033 21.4835 4.2969 20.5435 2.62 18.869C0.942888 17.1943 0 14.9216 0 12.5513Z" fill="white"/>
                <path d="M11.2272 6.21814V10.4713H0.302734V6.21814H11.2272Z" fill="white"/>
                <path d="M46.4492 12.5513V0H50.6992V12.5513C50.6992 13.7905 51.1922 14.9802 52.0711 15.858C52.9503 16.7359 54.1438 17.2298 55.389 17.2298H57.6763V21.4748L55.389 21.4835C53.0195 21.4835 50.7461 20.5435 49.0692 18.869C47.3921 17.1943 46.4492 14.9216 46.4492 12.5513Z" fill="white"/>
                <path d="M57.6764 6.21814V10.4713H46.752V6.21814H57.6764Z" fill="white"/>
                <path d="M30.0684 14.1615L34.3183 14.82V29.9999H30.0684V14.1615Z" fill="white"/>
                <path d="M41.0989 13.8802C41.0988 12.0004 39.5713 10.4687 37.6776 10.4687C35.7839 10.4687 34.2565 12.0004 34.2563 13.8802C34.2563 15.7601 35.7839 17.2923 37.6776 17.2923C39.5714 17.2922 41.0989 15.7601 41.0989 13.8802ZM45.2869 13.8802C45.2869 18.0835 41.8758 21.4833 37.6776 21.4834C33.4794 21.4834 30.0684 18.0835 30.0684 13.8802C30.0685 9.67701 33.4795 6.27759 37.6776 6.27759C41.8757 6.27761 45.2867 9.67702 45.2869 13.8802Z" fill="white"/>
                <path d="M24.6211 6.21643L28.9039 6.21643L28.8874 21.5066H24.6375L24.6211 6.21643Z" fill="white"/>
                <path d="M23.9277 2.83299C23.9277 1.26837 25.1961 0 26.7607 0C28.3253 0 29.5937 1.26837 29.5937 2.83299C29.5937 4.39761 28.3253 5.66599 26.7607 5.66599C25.1961 5.66599 23.9277 4.39761 23.9277 2.83299Z" fill="white"/>
                <path d="M67.0729 8.39914C68.3691 7.10292 70.4707 7.10292 71.7669 8.39914C73.0632 9.69536 73.0632 11.7969 71.7669 13.0932C70.4707 14.3894 68.3691 14.3894 67.0729 13.0932C65.7767 11.7969 65.7767 9.69536 67.0729 8.39914Z" fill="white"/>
                <path d="M75.8729 10.7459C75.8728 7.1264 72.9835 4.19249 69.4196 4.19249C65.8557 4.19258 62.9669 7.12645 62.9668 10.7459V17.2998H69.4196V21.4911H58.8398V10.7459C58.8399 4.81181 63.5766 0.0013047 69.4196 0.0012207L69.6927 0.00458314C75.4096 0.151633 79.9998 4.90445 79.9999 10.7459L79.996 11.0233C79.8535 16.7372 75.3189 21.3424 69.6927 21.4872L69.4196 21.4911V17.2998C72.9836 17.2998 75.8729 14.3654 75.8729 10.7459Z" fill="white"/>
              </svg>
            </div>

            <p className="font-roboto font-medium text-[16px] leading-[24px] text-white">
              We help you find and book the perfect stay from cozy guesthouses to top hotels-with ease, trust, and the best deals.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start gap-4 w-full">
            <h3 className="font-roboto font-semibold text-[18px] leading-[24px] text-[#99BDFF]">
              Download Our App
            </h3>
            
            <div className="flex flex-row justify-center lg:justify-start items-center gap-4">
              
              {/* Apple Store Button */}
              <button className="flex items-center justify-center gap-2 w-[128px] h-[40px] bg-white/20 backdrop-blur-[1.5px] rounded-[8px] hover:bg-white/30 transition-colors">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" className="text-white shrink-0">
                  <path d="M15.54 13.23C15.59 9.87 18.28 8.19 18.42 8.11C16.92 6 14.75 5.75 13.92 5.71C11.95 5.51 10.05 6.86 9.07 6.86C8.07 6.86 6.49 5.71 4.87 5.74C2.75 5.77 0.81 7 0.28 9.69C-0.81 15.11 3.25 23.33 5.37 23.27C7.38 23.22 8.13 21.97 10.55 21.97C12.92 21.97 13.62 23.27 15.74 23.23C18.01 23.18 19.42 21.2 20.5 19.63C21.75 17.81 22.27 16.03 22.29 15.96C22.25 15.94 19.39 14.81 19.44 11.45" fill="white" transform="scale(0.8) translate(2,2)"/>
                  <path d="M12.9 3.9C13.78 2.82 14.37 1.34 14.2 0C12.96 0.05 11.46 0.84 10.57 1.9C9.76 2.84 9.06 4.35 9.25 5.67C10.63 5.78 12.02 4.98 12.9 3.9" fill="white" transform="scale(0.8) translate(2,2)"/>
                </svg>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[8px] leading-none">Download on the</span>
                  <span className="text-[13px] font-semibold leading-none mt-0.5">App Store</span>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="flex items-center justify-center gap-2 w-[128px] h-[40px] bg-white/20 backdrop-blur-[1.5px] rounded-[8px] hover:bg-white/30 transition-colors">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" className="shrink-0">
                  <path d="M1.3 0.8L1.3 23.2L12.9 12L1.3 0.8Z" fill="#00D2FF"/>
                  <path d="M12.9 12L17.7 16.8L21.5 14.6L12.9 12Z" fill="#FFBD00"/>
                  <path d="M1.3 23.2L12.9 12L17.7 16.8L1.3 23.2Z" fill="#FF3A44"/>
                  <path d="M1.3 0.8L17.7 7.2L12.9 12L1.3 0.8Z" fill="#00E376"/>
                </svg>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[8px] leading-none uppercase">Get it on</span>
                  <span className="text-[13px] font-semibold leading-none mt-0.5">Google Play</span>
                </div>
              </button>

            </div>
          </div>

        </div>

        {/* --- NAVIGATION LINKS WRAPPER ---*/}
        <div className="
          w-full lg:w-auto
          grid grid-cols-2 gap-x-6 gap-y-10
          lg:flex lg:flex-row lg:gap-[50px]
        ">

          {/* Column 2: Explore */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-[200px]">
            <h3 className="font-roboto font-semibold text-[18px] leading-[24px] text-[#99BDFF] text-center lg:text-left">
              Explore
            </h3>
            <ul className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
              {[
                { label: 'Trending Destinations', action: () => handleNavigation('trending') },
                { label: 'Summer Hotspots', action: () => { navigate('/?season=summer'); handleNavigation('trending'); } },
                { label: 'Winter Getaways', action: () => { navigate('/?season=winter'); handleNavigation('trending'); } },
                { label: 'Weekend Deals', action: () => handleNavigation('weekend-deals') },
                { label: 'Family-Friendly Stays', action: () => { navigate('/?filter=family'); handleNavigation('trending'); } }
              ].map((item) => (
                <li 
                  key={item.label} 
                  onClick={item.action}
                  className="font-roboto font-normal text-[16px] leading-[24px] hover:text-[#99BDFF] cursor-pointer transition-colors"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Property Types */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-[170px]">
            <h3 className="font-roboto font-semibold text-[18px] leading-[24px] text-[#99BDFF] text-center lg:text-left">
              Property Types
            </h3>
            <ul className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
              {[
                { label: 'Hotels', type: 'hotel' },
                { label: 'House', type: 'house' },
                { label: 'Guest house', type: 'guestHouse' },
                { label: 'Cabins', type: 'cabin' },
                { label: 'Glamping', type: 'glamping' },
                { label: 'Domes', type: 'domes' }
              ].map((item) => (
                <li 
                  key={item.label} 
                  onClick={() => handlePropertyType(item.type)}
                  className="font-roboto font-normal text-[16px] leading-[24px] hover:text-[#99BDFF] cursor-pointer transition-colors"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-[127px]">
            <h3 className="font-roboto font-semibold text-[18px] leading-[24px] text-[#99BDFF] text-center lg:text-left">
              Support
            </h3>
            <ul className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
              {['Help Centre', 'Live Chat Support', 'FAQs', 'Contact Us'].map((item) => (
                <li key={item} className="font-roboto font-normal text-[16px] leading-[24px] hover:text-[#99BDFF] cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Get In Touch */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-[155px]">
            <h3 className="font-roboto font-semibold text-[18px] leading-[24px] text-[#99BDFF] text-center lg:text-left">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <span className="font-roboto font-normal text-[16px] leading-[24px]">
                +1 (800) 123-456
              </span>
              <span className="font-roboto font-normal text-[16px] leading-[24px]">
                support@tripto.com
              </span>
            </div>

            {/* Social Icons - Centered on Mobile */}
            <div className="flex flex-row justify-center lg:justify-between items-center gap-2 mt-2 w-full lg:w-auto">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, idx) => (
                <div key={idx} className="w-6 h-6 bg-white/20 backdrop-blur-[2px] rounded-[4px] flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">
                  <Icon size={14} className="text-white" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* --- Divider --- */}
      <div className="w-full px-5 lg:px-[104px]">
        <div className="w-full h-[1px] bg-[#B5BAC2] opacity-30" />
      </div>

      {/* --- Bottom Section: Copyright & Payments --- */}
      <div className="relative lg:bottom-5 flex flex-col lg:flex-row justify-between items-center w-full px-5 lg:px-[104px] pb-8 gap-6 lg:gap-0">
        
        {/* Copyright */}
        <span className="font-roboto font-normal text-[12px] leading-[16px] text-[#F1F2F3] text-center lg:text-left">
          © 2025 Tripto. All rights reserved.
        </span>

        {/* Payment Methods */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 lg:gap-6">
          {/* Visa */}
          <div className="w-[35px] h-[24px] bg-white border border-[#DDDFE3] rounded-[4px] flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 object-contain" />
          </div>
          {/* Diners Club */}
          <div className="w-[35px] h-[24px] bg-white border border-[#DDDFE3] rounded-[4px] flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg" alt="Diners Club" className="h-3 object-contain" />
          </div>
          {/* Mastercard */}
          <div className="w-[35px] h-[24px] bg-white border border-[#DDDFE3] rounded-[4px] flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-3 object-contain" />
          </div>
          {/* Stripe */}
          <div className="w-[35px] h-[24px] bg-white border border-[#DDDFE3] rounded-[4px] flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-3 object-contain" />
          </div>
          {/* PayPal */}
          <div className="w-[35px] h-[24px] bg-white border border-[#DDDFE3] rounded-[4px] flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3 object-contain" />
          </div>
          {/* Google Pay */}
          <div className="w-[35px] h-[24px] bg-white border border-[#DDDFE3] rounded-[4px] flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-3 object-contain" />
          </div>
          {/* Apple Pay */}
          <div className="w-[35px] h-[24px] bg-white border border-[#DDDFE3] rounded-[4px] flex items-center justify-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-3 object-contain" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;