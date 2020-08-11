import React, { useEffect } from "react";
import Auth from "../../components/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/auth";
import { withRouter } from "react-router-dom";

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  const { id, password } = form;
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return <Auth login id={id} password={password} handleChange={handleChange} />;
};

export default withRouter(LoginContainer);
