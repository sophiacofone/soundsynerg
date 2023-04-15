import React, {useState} from "react";
import {useSelector} from "react-redux";
import SharedSummaryList from "../shared-summary";

function SharedSummaryModule() {

    return (
        <div className="">
            <div className="card border-secondary">
                <div className="card-header">Recently Shared Songs</div>
                <div className="card-body">
                    <div className="row">
                        <SharedSummaryList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharedSummaryModule;