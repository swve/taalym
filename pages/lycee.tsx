import Head from "next/head";
import Layout from "../components/layout";
import getWebsite from "../services/getWebsite";

const Lycee = props => (
  <div>
    <Layout title="eLearning Morocco - Maroc">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <p className="lead">
            ElearningMA is a list of high quality moroccan elearning websites
            <br></br>موقع تجدون فيه أفضل المواقع المغربية للتعليم عن بعد
            <br></br>Les meilleurs sites de cours en ligne au Maroc
          </p>
          <button type="button" className="btn btn-success">
            Primaire الإبتدائي
          </button>{" "}
          <button type="button" className="btn btn-success">
            Lycée التانوي إعدادي
          </button>{" "}
          <button type="button" className="btn btn-success">
            Bac البكالوريا
          </button>
        </div>
      </div>
      <div className="container">
        <div className="alert alert-success text-center" role="alert">
          يتم إضافة مواقع جديدة بطريقة منتضمة
        </div>

        <div className="row justify-center ">
          
            {props.websites.map(web => (
              <div className="col">
              <div className="card mx-auto text-center">
                <img
                  className="card-img-top"
                  src={"/img/sites/"+web.img_url}
                  alt="Card image cap"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{web.name}</h5>
                 
                  <a href={web.link+"?ref=graphicmade"} target="_blink" className="btn btn-primary">
                    Go > 
                  </a>
                </div>
              </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  </div>
);

Lycee.getInitialProps = async function() {
  const getter = new getWebsite();
  const res = await getter.getAll();
  console.log(res);
  return { websites: res };
};

export default Lycee;
