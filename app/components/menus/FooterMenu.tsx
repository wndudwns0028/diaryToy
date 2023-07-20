import "./FooterMenu.css";

export default function FooterMenu() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Toge<span>Diary</span>
        </h3>

        <p className="footer-links">
          <a href="#" className="link-1">
            Home
          </a>

          <a href="#">diary</a>

          <a href="#">community</a>

          <a href="#">notice</a>

          <a href="#">Contact</a>
        </p>

        <p className="footer-company-name">주빵섭 토이프로젝트 ©2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>부산광역시 수영구 광안동</span>
            삼정그린코아
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+8210-1234-1234</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
