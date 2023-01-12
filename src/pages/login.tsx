import React from "react";
import Link from "next/link";
import { Row, Col, Alert, Container } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

//Social Media Imports
// import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// actions
// import { loginUser, socialLogin } from "../../store/actions";

// import images
import logo from "../../assets/images/logo-sm.svg";

//Import config
// import config from "../../config";
import CarouselLogin from "../components/login/carousel";

interface LoginProps {
  history: object;
}

const Login = ({ history }: LoginProps) => {
  return (
    <React.Fragment>
      <div className="auth-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} md={5} className="col-xxl-3">
              <div className="auth-full-page-content d-flex p-sm-5 p-4">
                <div className="w-100">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-md-5 mb-4 text-center">
                      <p className="d-block auth-logo">
                        {/* <img src={logo} alt="" height="28" />{" "} */}
                        <span className="logo-txt">Fdinsight.</span>
                      </p>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Welcome Back!</h5>
                        <p className="text-muted mt-2">
                          Sign in to continue to FdInsight.
                        </p>
                      </div>
                      <AvForm className="custom-form mt-4 pt-2">
                        {/* {error ? <Alert color="danger">{error}</Alert> : null} */}
                        <div className="mb-3">
                          <AvField
                            name="email"
                            label="Email"
                            value="admin@fdinsight.com"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-start">
                            <div className="flex-grow-1">
                              <label className="form-label">Password</label>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="">
                                <p
                                  //   to="/auth-recoverpw"
                                  className="text-muted"
                                >
                                  Forgot password?
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <AvField
                              name="password"
                              value="123456"
                              type="password"
                              className="form-control"
                              required
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="remember-check"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember-check"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <button
                            className="btn btn-primary w-100 waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>
                      </AvForm>

                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            {/* <FacebookLogin
                              //   appId={config.facebook.APP_ID}
                              autoLoad={false}
                              callback={facebookResponse}
                              render={(renderProps: any) => (
                                <Link
                                  to="#"
                                  className="social-list-item bg-primary border-primary text-white"
                                  onClick={renderProps.onClick}
                                >
                                  <i className="mdi mdi-facebook" />
                                </Link>
                              )}
                            /> */}
                          </li>
                          {/*<li className="list-inline-item">*/}
                          {/*  <TwitterLogin*/}
                          {/*    loginUrl={*/}
                          {/*      "http://localhost:4000/api/v1/auth/twitter"*/}
                          {/*    }*/}
                          {/*    onSuccess={this.twitterResponse}*/}
                          {/*    onFailure={this.onFailure}*/}
                          {/*    requestTokenUrl={*/}
                          {/*      "http://localhost:4000/api/v1/auth/twitter/revers"*/}
                          {/*    }*/}
                          {/*    showIcon={false}*/}
                          {/*    tag={"div"}*/}
                          {/*  >*/}
                          {/*    <a*/}
                          {/*      href=""*/}
                          {/*      className="social-list-item bg-info text-white border-info"*/}
                          {/*    >*/}
                          {/*      <i className="mdi mdi-twitter"/>*/}
                          {/*    </a>*/}
                          {/*  </TwitterLogin>*/}
                          {/*</li>*/}
                          <li className="list-inline-item">
                            {/* <GoogleLogin
                              clientId="CLIENT_ID" // u can add your Client ID
                              render={(renderProps) => (
                                <Link
                                  to="#"
                                  className="social-list-item bg-danger border-danger text-white"
                                  onClick={renderProps.onClick}
                                >
                                  <i className="mdi mdi-google" />
                                </Link>
                              )}
                              onSuccess={googleResponse}
                              onFailure={() => {}}
                            /> */}
                          </li>
                        </ul>
                      </div>

                      <div className="mt-5 text-center">
                        <p className="text-muted mb-0">
                          Don't have an account ?{" "}
                          <p
                            to="/register"
                            className="text-primary fw-semibold"
                          >
                            {" "}
                            Signup now{" "}
                          </p>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <CarouselLogin />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
