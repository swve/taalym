import Link from "next/link";
import Head from "next/head";

const Header = props => (
  <div>
    <Head>
      <title> Taalym | {props.title}</title>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
       {/* SEO */}
      <meta name="description" content={props.desc} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta property="og:site_name" content="elearningMA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/img/img.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.desc} />
      <meta name="twitter:url" content="/" />
      <meta name="twitter:image" content="/img/img.png" />
      <meta name="twitter:site" content="@graphicmade" />
      <meta property="og:site_name" content="elearningMA"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:locale" content="en-EN"></meta>
      <meta name="twitter:creator" content="@graphicmade"></meta>
      <meta name="theme-color" content="#6426ec"></meta>
      {/* SEO */}
    </Head>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-center">
      <a className="navbar-brand" href="#">
      <img width="15px" src="../img/gmd.png"></img>  Taalym تعليم 
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
);

export default Header;
