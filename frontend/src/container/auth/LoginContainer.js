import React from "react";
import Auth from "../../components/auth/Auth";
import { useState } from "react";
import Axios from "axios";

const LoginContainer = () => {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const { id, password } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = () => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await Axios.post(`/user`);
      } catch (e) {
        setStatus(e);
      }
    };
  };

  return <Auth login id={id} password={password} handleChange />;
};

export default LoginContainer;
