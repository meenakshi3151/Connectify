import React, { useEffect } from "react";
import '../profile.css';

function ProfileNavbar() {
    // Toggle fullscreen functionality
    const toggleFullScreen = () => {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    };

    // Function to show/hide mobile navbar options
    const toggleMobileOptions = () => {
        const navRight = document.querySelector(".navbar-container .nav-right");
        if (navRight.style.display === "block") {
            navRight.style.display = "none";
        } else {
            navRight.style.display = "block";
        }
    };

    // Search functionality
    const openSearch = () => {
        const mainSearch = document.querySelector(".main-search");
        const formControl = mainSearch.querySelector(".form-control");
        mainSearch.classList.add('open');
        formControl.style.width = "200px";
    };

    const closeSearch = () => {
        const mainSearch = document.querySelector(".main-search");
        const formControl = mainSearch.querySelector(".form-control");
        formControl.style.width = "0";
        setTimeout(() => {
            mainSearch.classList.remove('open');
        }, 300);
    };

    // Since we don't have componentDidMount or componentDidUpdate in functional components,
    // we use useEffect hook to handle component lifecycle events.
    useEffect(() => {
        // Here you can also integrate any jQuery plugins initialization if needed
    }, []);

    return(
        <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">
                <nav className="navbar header-navbar pcoded-header">
                    <div className="navbar-wrapper">
                        <div className="navbar-logo text-center">
                            <small style={{color: "#fff", fontSize: "16px"}}>BBOOTSTRAP.COM</small>
                            <a className="mobile-options waves-effect waves-light" onClick={toggleMobileOptions}>
                                <i className="feather icon-more-horizontal"></i>
                            </a>
                        </div>
                        <div className="navbar-container container-fluid">
                            {/* Navbar content including search and notification goes here */}
                            <div className="header-search">
                                <div className="main-search morphsearch-search">
                                    <div className="input-group">
                                        <span className="input-group-prepend search-close" onClick={closeSearch}>
                                            <i className="feather icon-x input-group-text"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Enter Keyword" />
                                        <span className="input-group-append search-btn" onClick={openSearch}>
                                            <i className="feather icon-search input-group-text"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <li>
                                <a href="#!" onClick={toggleFullScreen} className="waves-effect waves-light">
                                    <i className="full-screen feather icon-maximize"></i>
                                </a>
                            </li>
                            {/* Other navbar items */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default ProfileNavbar;
