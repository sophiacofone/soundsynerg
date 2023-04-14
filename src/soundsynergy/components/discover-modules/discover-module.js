import React, {useState} from "react";
import {useSelector} from "react-redux";

function DiscoverModule() {
    const {topStats} = useSelector((state) => state.topStats);
    const {businessStats} = useSelector((state) => state.businessStats);

    return (
        <div className="">
            <div className="accordion m-3" id="discoverBusiness">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="discoverArtist">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseArtist" aria-expanded="true" aria-controls="collapseArtist">
                            Discover - Artist
                        </button>
                    </h2>
                    <div id="collapseArtist" className="accordion-collapse collapse show" aria-labelledby="discoverArtist"
                         data-bs-parent="#discoverBusiness">
                        <div className="accordion-body">
                            <h5>You have been loving {topStats.monthlyTopArtist} this month!</h5>
                            <span>
                                <h6>{businessStats.business1Name} also plays {topStats.monthlyTopArtist}, discover them <a href={`https://example.com/${businessStats.business1Profile}`}>here</a></h6>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="discoverGenre">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseGenre" aria-expanded="false" aria-controls="collapseGenre">
                            Discover - Genre
                        </button>
                    </h2>
                    <div id="collapseGenre" className="accordion-collapse collapse" aria-labelledby="discoverGenre"
                         data-bs-parent="#discoverBusiness">
                        <div className="accordion-body">
                            <h5>You have been loving {topStats.monthlyTopGenre} this month!</h5>
                            <span>
                                <h6>{businessStats.business2Name} also plays {topStats.monthlyTopGenre}, discover them <a href={`https://example.com/${businessStats.business2Profile}`}>here</a></h6>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="discoverMood">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseMood" aria-expanded="false" aria-controls="collapseMood">
                            Discover - Mood
                        </button>
                    </h2>
                    <div id="collapseMood" className="accordion-collapse collapse" aria-labelledby="discoverMood"
                         data-bs-parent="#discoverBusiness">
                        <div className="accordion-body">
                            <h5>You have been loving {topStats.monthlyTopMood} music this month!</h5>
                            <span>
                                <h6>{businessStats.business3Name} also plays music {topStats.monthlyTopMood}, discover them <a href={`https://example.com/${businessStats.business3Name}`}>here</a></h6>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverModule;