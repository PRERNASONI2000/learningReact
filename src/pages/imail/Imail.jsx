import React, {useEffect} from "react";
import "../imail/imail.css";
// import "../imail/bootstrap.min.css";


const Imail= () => {
  // useEffect(()=>{
  //   const link = document.createElement("link");
  //   link.rel = "stylesheet";
  //   link.href = "/bootstrap.min.css";
  //   document.head.appendChild(link);

  //   return () => {
  //     document.head.removeChild(link);
  //   }
  // },[])
  return (
    <>
     {/* <!-- header section starts --> */}
  <div className="header">
    <div className="container mycontainer">
      <div className="row">
        <div className="col-12"><nav className="navbar navbar-expand-lg navbar-light">

          <img src="/assets/images/logo.png" className="img-fluid d-block mx-auto" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbarCustom-menu d-flex align-items-center buttonChest">
              <li className="nav-item mr-md-5">
                <a className="nav-link" href="#" target="_blank" rel="noreferrer">
                  Jv Doc
                </a>
              </li>
              <li className="nav-item mr-md-5"><a className="nav-link" href="#" target="_blank" rel="noreferrer">DFY Swipes</a></li>

              <li className="nav-item mr-md-5"><a target="_blank" className="nav-link" href="#">Sales Page Preview</a></li>
              <li className="nav-item last w600 d-flex align-items-center">
                <a className="nav-link item btn-affiliate btn-top  btn-glint" href="#" target="_blank" rel="noreferrer">Get Affiliate Link 
                  <img src="images/asset-ar.png" className="img-fluid d-block ml-2" alt="vector" />
                </a>
              </li>
            </ul>
          </div>

        </nav></div>

      
      </div>
      </div>
    </div>
  {/* <!-- header section ends --> */}

    </>
  )
}

export default Imail;