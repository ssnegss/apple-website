import { footerLinks } from "../constants";

const Footer = () => {
   return (
      <footer className="container footer">
         <div className="footer__top">
            <div>
               More ways to shop: {""}
               <a href="#">Find an Apple Store</a> or {""}
               <a href="#">other retailer</a> near you
            </div>
            <div>Or call 9-999-999-99-99</div>
         </div>
         <div className="footer__bottom">
            <div>Copyright 2024 Apple Inc. All rights reserved.</div>
            <div className="footer__links">
               {footerLinks.map((footerLink, i) => (
                  <>
                     <span className="footer__link" key={i}>
                        {footerLink}{" "}
                     </span>
                     {i !== footerLinks.length - 1 && "|"}
                  </>
               ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
