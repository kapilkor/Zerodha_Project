import { useCookies } from "react-cookie";

const [cookies, , removeCookie] = useCookies(["token"]);

const handleLogout = () => {
  removeCookie("token", { path: "/" });
  window.location.href = "/login";
};
