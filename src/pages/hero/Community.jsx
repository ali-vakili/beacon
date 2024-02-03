import CommunityBackground from "./CommunityBackground"
import GooglePlay from "./svg/GooglePlay_Black.svg"
import AppStore from "./svg/AppStore_Black.svg"

import "./community.css"

const Community = () => {
  return (
    <div className="community-content">
      <div className="community-apps">
        <h2 className="d-inline community-title">Join the community,<br/>Download the app<br/> today!</h2>
        <div className="d-flex gap-2 mt-4">
          <a href="#">
            <img style={{width:"100%", height: "auto"}} src={GooglePlay} alt="community background" loading="lazy"/>
          </a>
          <a href="#">
            <img style={{width:"100%", height: "auto"}} src={AppStore} alt="community background" loading="lazy"/>
          </a>
        </div>
      </div>
      <div className="community-background">
        {/* <img id="community_background" src={communityBackground} alt="community background" loading="lazy"/> */}
        <CommunityBackground />
      </div>
      
    </div>
  )
}

export default Community