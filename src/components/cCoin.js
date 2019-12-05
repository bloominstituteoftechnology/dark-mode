import React from "react";

const cCoin = ({ specificCoinData}) => {
    let descriptionObj = { ...specificCoinData.description};
    let communityObj = { ...specificCoinData.community_data };

    let description = Object.keys(descriptionObj)