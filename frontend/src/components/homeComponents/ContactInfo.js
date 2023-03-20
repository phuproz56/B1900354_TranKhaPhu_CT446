import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Liên hệ 24/7</h5>
            <p>+84 858 456 029</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Địa Chỉ</h5>
            <p>Quận Ninh Kiều, Cần Thơ</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Fax</h5>
            <p>09 999 999 999</p>
          </div>
        </div> 
      </div>
      <div className="col-12 col-md-12 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-user"></i>
            </div>
            <h5>Được thực hiện bởi: </h5>
            <p>Trần Khả Phú</p>
          </div>
        </div>
    </div>
  );
};

export default ContactInfo;
