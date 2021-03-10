import { Breadcrumb } from "components";
import Fade from "react-reveal/Fade";

const PageDetailTitle = ({ data, breadcrumb }) => {
  return (
    <Fade bottom>
      <section className="container spacing-sm">
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{data.title}</h1>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </section>
    </Fade>
  );
};

export default PageDetailTitle;
