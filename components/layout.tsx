import Header from "./header";
import "../public/sass/style.scss";

const Layout = props => (
  <div>
    <Header title={props.title}></Header>
    <div className="divider"></div>
    {props.children}
  </div>
);

export default Layout;