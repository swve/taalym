import Header from "./header";
import "../public/sass/style.scss";

import withAnalytics from '../components/analytics'

const Layout = props => (
  <div>
    <Header title={props.title}></Header>
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e6fd01d747990e5"></script>
    <div className="divider"></div>
    {props.children}
  </div>
);

export default withAnalytics(Layout);