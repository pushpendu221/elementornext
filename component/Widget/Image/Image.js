export const Image = ({blocks}) => {
     // console.log("image",{blocks});

      const url = blocks.settings.image ? blocks.settings.image.url : '';
    //  console.log("images",url);
      const alt = blocks.settings.image ? blocks.settings.image.alt : '';
      const { width, align, padding } = blocks.settings;
      const widthStyle = width ? `${width.size}${width.unit}` : '100%';
      const paddingStyle = padding ? `${padding.top}${padding.unit} ${padding.right}${padding.unit} ${padding.bottom}${padding.unit} ${padding.left}${padding.unit}`
        : '0';
    
 return(
   <div>
      <img src={url} alt={alt} style={{ width: widthStyle }} />
   </div>
 )
}