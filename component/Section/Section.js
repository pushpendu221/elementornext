export const Section = ({children,backgroundImageUrl, background_repeat,background_size, margin, padding}) => {
    // console.log("backgroundImageUrl", backgroundImageUrl);
    const backgroundImage = backgroundImageUrl.url ? {'backgroundImage': `url(${backgroundImageUrl.url})`} : {};
    const backroundrepeat = background_repeat ? {backgroundRepeat : background_repeat} : {};
    const backgroundSize = background_size ? {backgroundSize : background_size} : {};
   //console.log("padd", padding);
    // Conversion factor from px to rem
    const pxToRemFactor = 16;

    // Convert margin values from px to rem
    const convertPxToRem = (value) => {
        const numberValue = parseFloat(value);
        return isNaN(numberValue) ? '' : `${numberValue / pxToRemFactor}rem`;
    };

    const isEmptyObject = (obj) => {
        return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    };

    // Construct margin string from the margin object and convert to rem
     const marginString = margin ? `${convertPxToRem(margin.top)} ${convertPxToRem(margin.right)} ${convertPxToRem(margin.bottom)} ${convertPxToRem(margin.left)}` : '';
    const marginStyle = isEmptyObject(margin) ? {} : { margin: marginString };
    const paddingString = padding ? `${convertPxToRem(padding.top)} ${convertPxToRem(padding.right)} ${convertPxToRem(padding.bottom)} ${convertPxToRem(padding.left)}` : {};
    const paddingStyle = isEmptyObject(padding) ? {} : { padding: paddingString };

    return(
        <div style={{...backgroundImage,...backroundrepeat,...backgroundSize, ...marginStyle, ...paddingStyle,width:""}}> 
            {children}
        </div>
    )
}