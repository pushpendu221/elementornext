import { convertPxToRem, isEmptyObject } from "./convertPxtoRem";

export const generateStyle = ({blocks}) => {
   const align = blocks.settings.align ? {'text-align': blocks.settings.align} : {'text-align': 'left'};
   const font_size = blocks.settings.typography_font_size;
   const fontSizeString = font_size ? `${convertPxToRem(font_size.size,font_size.unit)}` : '';
   const fontSizeStyle = isEmptyObject(font_size) ? {} : { 'font-size': fontSizeString };
   const font_weight = blocks.settings.typography_font_weight ? {'font-weight':blocks.settings.typography_font_weight} : '';
   const line_height = blocks.settings.typography_line_height ? {'line-height':`${convertPxToRem(blocks.settings.typography_line_height.size, blocks.settings.typography_line_height.unit)}`} : '';
   const margin = blocks.settings._margin;
   const marginString = margin ? `${convertPxToRem(margin.top,margin.unit)} ${convertPxToRem(margin.right,margin.unit)} ${convertPxToRem(margin.bottom,margin.unit)} ${convertPxToRem(margin.left,margin.unit)}` : '';
   const marginStyle = isEmptyObject(marginString) ? {} : { margin: marginString };

   const padding = blocks.settings._padding;
   const paddingString = padding ? `${convertPxToRem(padding.top,padding.unit)} ${convertPxToRem(padding.right,padding.unit)} ${convertPxToRem(padding.bottom,padding.unit)} ${convertPxToRem(padding.left,padding.unit)}` : {};
   const paddingStyle = isEmptyObject(paddingString) ? {} : { padding: paddingString };
   const font = blocks.settings.typography_font_family ? {'font-family':blocks.settings.typography_font_family} : {'font-family':'sans-serif'};
   const title_color = blocks.settings.title_color ? {color:blocks.settings.title_color} : {color:'#fff'};
   
   return {
    ...font,
    ...title_color,
    ...align,
    ...fontSizeStyle,
    ...font_weight,
    ...line_height,
    ...marginStyle,
    ...paddingStyle
};
};