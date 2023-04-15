import React from "react";
import { useSelector } from "react-redux";
import SharedSummaryItem from "./shared-summary-item";

const SharedSummaryList = () => {
    const sharedSummaryArray = useSelector(state => state.shared);

    return (
        <ul className="list-group">
            {sharedSummaryArray.map(shared => (
                <SharedSummaryItem key={shared._id} shared={shared} />
            ))}
        </ul>
    );
};

export default SharedSummaryList;