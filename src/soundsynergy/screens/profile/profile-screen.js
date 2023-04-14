import PersonalInfoModule from "../../components/profile-modules/personal-info-module";
import FavAnalysisModule from "../../components/profile-modules/favorite-analysis-module";
import FriendsProfileModule from "../../components/profile-modules/friends-profile-module";
import FollowingProfileModule from "../../components/profile-modules/following-profile-module";
import SharedSummaryModule from "../../components/profile-modules/shared-summary-module";

function ProfileScreen() {
    return (
        <div>
            <div className="m-3">
                <div className="row">
                    <div className="col-9">
                        <PersonalInfoModule/>
                    </div>
                    <div className="col-3">
                        <SharedSummaryModule/>
                    </div>
                </div>
            </div>
            <div className="m-3">
                <div className="row">
                    <div className="col-6">
                        <FavAnalysisModule/>
                    </div>
                    <div className="col-3">
                        <FriendsProfileModule/>
                    </div>
                    <div className="col-3">
                        <FollowingProfileModule/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;