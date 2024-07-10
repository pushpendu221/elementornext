"use client";
export const BlockRenderer = ({blocks}) =>{
  //  console.log("props",{blocks});
    const elementorData = JSON.parse(blocks.elementorData);
    console.log("props",elementorData);
    return(
        <div>BlockRenderer</div>
    )
}