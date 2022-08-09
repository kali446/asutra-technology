import React, { Component } from "react";
import {
  FiLayers,
  FiMonitor,
  FiBarChart,
  FiSmartphone,
} from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Web Development",
    description:
      "We provide affordable website design services, for companies, businesses and individuals. We are able to provide your",
  },
  {
    icon: <FiLayers />,
    title: "Software Development",
    description:
      "We also provide cost-effective, quality oriented, and reliable software services to clients across",
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile App Development",
    description:
      "We love taking ideas and turning them into real apps. We are passionate, creative, and have experience developing",
  },
  {
    icon: <FiBarChart />,
    title: "SEO Enhancement",
    description:
      "Search engine optimization (SEO) is the process of improving the volume or quality of traffic to a web site from search",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/service-details">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
