const { Breadcrumb } = require("components");

const Example = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="col-auto">
          <Breadcrumb data={breadcrumbList} />
        </div>
      </div>
    </div>
  );
};

export default Example;
