import React from "react";
import { generateStyle } from "utils/generateStyle";

export const Heading = ({blocks}) => {
   //console.log("heading",{blocks});
   const header_size_opening = blocks.settings.header_size ? blocks.settings.header_size : 'p';
   const title = blocks.settings.title ? blocks.settings.title : '';

   const fetchStyle = generateStyle({blocks});
   const style = {
      ...fetchStyle
    };
   
    return React.createElement(header_size_opening, {style}, title);
}