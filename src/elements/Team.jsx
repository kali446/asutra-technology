import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

let TeamContent = [
  {
    images: "01",
    title: "Manjil Pangeni",
    designation: "Sr. Web Developer",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/manziljunior",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/manjil-pangeni-606511198/",
      },
      {
        icon: <FaTwitter />,
        url: "https://twitter.com/ManjilJunior",
      },
    ],
  },
  {
    images: "02",
    title: "Tirtha Pokhrel",
    designation: "Product Manager",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
];

class Team extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {TeamContent.map((value, i) => (
          <div className={`${column}`} key={i}>
            <div className="team">
              <div className="thumbnail">
                <img
                  src={`/assets/images/team/team-${value.images}.png`}
                  alt="Blog Images"
                />
              </div>
              <div className="content">
                <h4 className="title">{value.title}</h4>
                <p className="designation">{value.designation}</p>
              </div>
              <ul className="social-icon">
                {value.socialNetwork.map((social, index) => (
                  <li key={index}>
                    <a href={`${social.url}`}>{social.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default Team;
