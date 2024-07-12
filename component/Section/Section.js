export const Section = ({children,backgroundImageUrl, background_repeat,background_size, margin, padding}) => {
    // console.log("backgroundImageUrl", backgroundImageUrl);
    const backgroundImage = backgroundImageUrl.url ? {'backgroundImage': `url(${backgroundImageUrl.url})`} : {};
    const backroundrepeat = background_repeat ? {backgroundRepeat : background_repeat} : {};
    const backgroundSize = background_size ? {backgroundSize : background_size} : {};
  //  console.log("Section", backgroundImage);
    return(
        <div style={{...backgroundImage,...backroundrepeat,...backgroundSize}}> 
            {children}
        </div>
    )
}