import { BlockRenderer } from "component/BlockRenderer";
import { Column } from "component/Column";

export const Section = ({backgroundImageUrl, background_repeat,background_size, margin, padding, rows}) => {
    console.log("row",rows);
    // const allElements= rows.elements;
    return(rows.map((row) => {
        switch(row.elType)
        {
            case 'column':
                {
                    return(
                        <section>
                            {row.id}
                        </section>
                    );
                }        
                default :
                console.log("unknown widget", rows.elType);
                return null;
        }
    }) 
)



//     // console.log("backgroundImageUrl", backgroundImageUrl);
//     const backgroundImage = backgroundImageUrl.url ? {'backgroundImage': `url(${backgroundImageUrl.url})`} : {};
//     const backroundrepeat = background_repeat ? {'background-repeat' : background_repeat} : {};
//     const backgroundSize = background_size ? {'background-size' : background_size} : {};
//    //console.log("padd", padding);
//     // Conversion factor from px to rem
//     const pxToRemFactor = 16;

//     // Convert margin values from px to rem
//     const convertPxToRem = (value) => {
//         const numberValue = parseFloat(value);
//         return isNaN(numberValue) ? '' : `${numberValue / pxToRemFactor}rem`;
//     };

//     const isEmptyObject = (obj) => {
//         return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
//     };

//     // Construct margin string from the margin object and convert to rem
//      const marginString = margin ? `${convertPxToRem(margin.top)} ${convertPxToRem(margin.right)} ${convertPxToRem(margin.bottom)} ${convertPxToRem(margin.left)}` : '';
//     const marginStyle = isEmptyObject(margin) ? {} : { margin: marginString };
//     const paddingString = padding ? `${convertPxToRem(padding.top)} ${convertPxToRem(padding.right)} ${convertPxToRem(padding.bottom)} ${convertPxToRem(padding.left)}` : {};
//     const paddingStyle = isEmptyObject(padding) ? {} : { padding: paddingString };

//     return(
//         <section style={{...backgroundImage,...backroundrepeat,...backgroundSize, ...marginStyle, ...paddingStyle,width:""}}> 
//             {children}
//         </section>
//     )
}