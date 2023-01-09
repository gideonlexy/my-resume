import React, { Component } from "react";
import Fade from "react-reveal";
import { Icon } from "@iconify/react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.main.name;
    const profilepic = "images/" + this.props.data.main.image;
    const bio = this.props.data.main.bio;
    const city = this.props.data.main.address.city;
    const code = this.props.data.main.address.code;
    const phone = this.props.data.main.phone;
    const email = this.props.data.main.email;
    const linkedin = this.props.data.main.social[1].url;
    const facebook = this.props.data.main.social[0].url;
    const resumeDownload = this.props.data.main.resumedownload;

    return (
      <section id='about'>
        <Fade duration={1000}>
          <div className='row'>
            <div className='three columns'>
              <img className='profile-pic' src={profilepic} alt='Nordic Giant Profile Pic' />
            </div>
            <div className='nine columns main-col'>
              <h2>About Me </h2>

              <p>{bio}</p>
              <div className='row'>
                <div className='columns contact-details'>
                  <h2>Contact Details</h2>
                  <p className='address'>
                    <span>{name}</span>
                    <br />
                    <span>
                      <br />
                      {city}, {code}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                  <a href={linkedin}>
                    <Icon icon='bxl:linkedin-square' width='30' />
                  </a>
                  <a href={facebook}>
                    <Icon icon='bxl:facebook-circle' width='30' />
                  </a>
                </div>
                <div className='columns download'>
                  <p>
                    <a href={resumeDownload} className='button'>
                      <i className='fa fa-download'></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
