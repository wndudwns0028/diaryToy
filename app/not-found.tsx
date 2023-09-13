import { Fragment } from "react";
import "./styles/not-found.scss";

export default function NotFound() {
  <Fragment>
    <div className="center">
      <div className="error">
        <div className="number">4</div>
        <div className="illustration">
          <div className="circle"></div>
          <div className="clip">
            <div className="paper">
              <div className="face">
                <div className="eyes">
                  <div className="eye eye-left"></div>
                  <div className="eye eye-right"></div>
                </div>
                <div className="rosyCheeks rosyCheeks-left"></div>
                <div className="rosyCheeks rosyCheeks-right"></div>
                <div className="mouth"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="number">4</div>
      </div>

      <div className="text">존재하지 않는 페이지입니다</div>
      <a className="button" href="#">
        Back Home
      </a>
    </div>
  </Fragment>;
}
