import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
              Register your self to add or view taks.
            </div>
            <br />
            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label class="form-control-label">Name </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">User Name </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Mail </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Stream </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Phone Number </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">Password </label>
                    <input type="password" class="form-control" />
                  </div>
                  <br />
                  <br />
                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-6 login-btm login-button">
                      <button type="submit" class="btn btn-outline-primary">
                        <Link style={{ color: "#ffffff" }} to="/">
                          REGISTER YOUR SELF
                        </Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
