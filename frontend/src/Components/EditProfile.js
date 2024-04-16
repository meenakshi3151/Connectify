import React from 'react';
import NavbarDash from './NavbarDash';
class EditProfile extends React.Component {
  render() {
    const containerStyle = {
      background: '#BA68C8',
    };

    const formControlFocusStyle = {
      boxShadow: 'none',
      borderColor: '#BA68C8',
    };

    const profileButtonStyle = {
      background: '#BA68C8',
      boxShadow: 'none',
      border: 'none',
    };

    const profileButtonHoverStyle = {
      background: '#682773',
    };

    const profileButtonFocusStyle = {
      background: '#682773',
      boxShadow: 'none',
    };

    const profileButtonActiveStyle = {
      background: '#682773',
      boxShadow: 'none',
    };

    const backHoverStyle = {
      color: '#682773',
      cursor: 'pointer',
    };

    return (
        <>
        <NavbarDash/>
      <div className="container rounded bg-white mt-5" style={containerStyle}>
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://i.imgur.com/0eg0aG0.jpg" width="90" alt="Profile" /><span className="font-weight-bold">John Doe</span><span className="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row align-items-center back" style={backHoverStyle}><i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                  <h6>Back to home</h6>
                </div>
                <h6 className="text-right">Edit Profile</h6>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="First name" value="John" /></div>
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Last name" value="Doe" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" value="john_doe12@bbb.com" /></div>
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Phone number" value="+19685969668" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Address" value="D-113, right avenue block, CA,USA" /></div>
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Country" value="USA" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" value="Bank of America" /></div>
                <div className="col-md-6"><input type="text" className="form-control" placeholder="Account Number" value="043958409584095" /></div>
              </div>
              <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default EditProfile;