import React, { useEffect } from "react";
import Link from "next/link";
import { Row, Col, Alert, Container } from "reactstrap";
import { FcGoogle } from "react-icons/fc";
// import { AvForm, AvField } from "availity-reactstrap-validation";

import { useRouter } from "next/router";

import logo from "../../assets/images/logo-sm.svg";

import CarouselLogin from "../components/login/carousel";
import { useSession, signIn, signOut } from "next-auth/react";
interface LoginProps {
  history: object;
}

const Login = ({ history }: LoginProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  });

  return (
    <>
      <div className="auth-page">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={4} md={5} className=" col-xxl-3 z-50">
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

                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>
                        <button onClick={() => signIn("google")}>
                          <FcGoogle />
                        </button>

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
                          Dont have an account ?{" "}
                          <p className="text-primary fw-semibold">
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
    </>
  );
};

export default Login;
