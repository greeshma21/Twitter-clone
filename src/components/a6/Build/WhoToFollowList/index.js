import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item fw-bold">Who To Follow</li>
                <li className="list-group-item">
                    {
                        who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                        })
                    }
                </li>
            </ul>
            );
}
export default WhoToFollowList;
