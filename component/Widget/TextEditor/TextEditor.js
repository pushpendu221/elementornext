import { generateStyle } from "utils/generateStyle";

export const TextEditor = ({blocks}) => {
   //console.log("Text Editor", {blocks});
   const fetchStyle = generateStyle({blocks});
   const textContain = blocks.settings.editor ? blocks.settings.editor : '';
   const title_color = blocks.settings.text_color ? {color:blocks.settings.text_color} : {color:'#fff'};
   const style = {
      ...fetchStyle,
      ...title_color
    };
 return(
       <div style={style} dangerouslySetInnerHTML={{ __html: textContain }} />
 )
}