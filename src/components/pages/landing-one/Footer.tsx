import Link from "next/link";

const Footer = () => {
  return (
    <footer className="landing-footer m-t-120px position-relative z-2">
      <div className="landing-footer__left">
        <p className="landing-footer__copyright-text textL">
          Copyright @ {new Date().getFullYear()}{" "} Social<span style={{color: "#03cfb4"}}>BETS</span>
          <Link href={`/`} className="footer-template-link">
          
          </Link>
        </p>
        
      </div>
      
    </footer>
  );
};

export default Footer;
