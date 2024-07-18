import React from "react";
import { generateStyle } from "utils/generateStyle";

export const Heading = ({blocks}) => {
   //console.log("heading",{blocks});
   const header_size_opening = blocks.settings.header_size ? blocks.settings.header_size : 'p';
   const title = blocks.settings.title ? blocks.settings.title : '';
   const title_color = blocks.settings.title_color ? {color:blocks.settings.title_color} : {color:'#fff'};

   const fetchStyle = generateStyle({blocks});
   const style = {
      ...fetchStyle,
      ...title_color
    };
   
    return React.createElement(header_size_opening, {style}, title);
}