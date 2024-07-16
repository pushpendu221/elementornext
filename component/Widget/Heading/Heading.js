import React from "react";
import { convertPxToRem, isEmptyObject } from "utils/convertPxtoRem";

export const Heading = ({blocks}) => {
   //console.log("heading",{blocks});
   const align = blocks.settings.align ? {'text-align': blocks.settings.align} : 'left';
   const header_size_opening = blocks.settings.header_size ? blocks.settings.header_size : 'p';
   const title = blocks.settings.title ? blocks.settings.title : '';
   const title_color = blocks.settings.title_color ? {color:blocks.settings.title_color} : '#fff';
   const font = blocks.settings.typography_font_family ? blocks.settings.typography_font_family : '#fff';
   const font_size = blocks.settings.typography_font_size;
   const fontSizeString = font_size ? `${convertPxToRem(font_size.size,font_size.unit)}` : '';
   const fontSizeStyle = isEmptyObject(font_size) ? {} : { 'font-size': fontSizeString };
   const font_weight = blocks.settings.typography_font_weight ? {'font-weight':blocks.settings.typography_font_weight} : '';
   const line_height = blocks.settings.typography_line_height ? {'line-height':`${convertPxToRem(blocks.settings.typography_line_height.size, blocks.settings.typography_line_height.unit)}`} : '';
   const margin = blocks.settings._margin;
   const marginString = margin ? `${convertPxToRem(margin.top,margin.unit)} ${convertPxToRem(margin.right,margin.unit)} ${convertPxToRem(margin.bottom,margin.unit)} ${convertPxToRem(margin.left,margin.unit)}` : '';
   const marginStyle = isEmptyObject(margin) ? {} : { margin: marginString };

   const padding = blocks.settings._padding;
   const paddingString = padding ? `${convertPxToRem(padding.top,padding.unit)} ${convertPxToRem(padding.right,padding.unit)} ${convertPxToRem(padding.bottom,padding.unit)} ${convertPxToRem(padding.left,padding.unit)}` : {};
   const paddingStyle = isEmptyObject(paddingString) ? {} : { padding: paddingString };
   
   const style = {
      ...line_height,
      ...title_color,
      ...align,
      ...fontSizeStyle,
      ...font_weight,
      ...paddingStyle,
      ...marginStyle
    };

    return React.createElement(header_size_opening, { style }, title);
}