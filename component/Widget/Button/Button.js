import { convertPxToRem, isEmptyObject } from "utils/convertPxtoRem";
import { generateStyle } from "utils/generateStyle";

export const Button = ({blocks}) => {
  //  console.log("Button", blocks);
   const fetchStyle = generateStyle({blocks});
   const textContain = blocks.settings.text ? blocks.settings.text : '';
   const title_color = blocks.settings.button_text_color ? {color:blocks.settings.button_text_color} : {color:'#fff'};
   const borderRadius = blocks.settings.border_radius;
   const borderRadiusString = borderRadius ? `${convertPxToRem(borderRadius.top,borderRadius.unit)} ${convertPxToRem(borderRadius.right,borderRadius.unit)} ${convertPxToRem(borderRadius.bottom,borderRadius.unit)} ${convertPxToRem(borderRadius.left,borderRadius.unit)}` : '';
   const borderRadiusStyle = isEmptyObject(borderRadiusString) ? {} : { 'border-radius': borderRadiusString };
   const padding = blocks.settings.text_padding;
   const paddingString = padding ? `${convertPxToRem(padding.top,padding.unit)} ${convertPxToRem(padding.right,padding.unit)} ${convertPxToRem(padding.bottom,padding.unit)} ${convertPxToRem(padding.left,padding.unit)}` : {};
   const paddingStyle = isEmptyObject(paddingString) ? {} : { padding: paddingString };
  
   const style = {
      ...fetchStyle,
      ...title_color,
      ...borderRadiusStyle,
      ...paddingStyle
    };

 return(
   <button type="button" style={style}>{textContain}</button>
 )
}