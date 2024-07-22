"use client";
// import { Column } from "component/Column";
// import { Section } from "component/Section";
import { Widget } from "component/Widget";
import { convertPxToRem, isEmptyObject } from "utils/convertPxtoRem";


export const BlockRenderer = ({ blocks }) => {
  //console.log("props",{blocks});
    let elementorData=blocks;
    if(blocks.elementorData){
      elementorData = JSON.parse(blocks.elementorData);
    }
  console.log("props", elementorData);
  return( elementorData.map((row) => {
    // console.log("rows",{ row });
     const {background_image,background_repeat,background_size,margin,padding,_column_size,content_width} = row.settings;
     console.log('padding',padding);
     const backgroundImageUrl = background_image ? {'backgroundImage': `url(${background_image.url})`} : {};
     const backroundrepeat = background_repeat ? {'background-repeat' : background_repeat} : {};
     const backgroundSize = background_size ? {'background-size' : background_size} : {};
     const marginString = margin ? `${convertPxToRem(margin.top,margin.unit)} ${convertPxToRem(margin.right,margin.unit)} ${convertPxToRem(margin.bottom,margin.unit)} ${convertPxToRem(margin.left,margin.unit)}` : '';
     const marginStyle = isEmptyObject(marginString) ? {} : { margin: marginString };
     const paddingString = padding ? `${convertPxToRem(padding.top,padding.unit)} ${convertPxToRem(padding.right,padding.unit)} ${convertPxToRem(padding.bottom,padding.unit)} ${convertPxToRem(padding.left,padding.unit)}` : '';
    // console.log('paddingString',paddingString);
     const paddingStyle = isEmptyObject(paddingString) ? {} : { padding: paddingString };
     const contentWidth = content_width ? { width:`${convertPxToRem(content_width.size,padding.unit)}`} : {};
     const widthStyle = _column_size ? { width:`${_column_size}%`}:{ width:'100%'}
     const width = isEmptyObject(contentWidth) ? widthStyle :contentWidth;

    const style = {
      ...backgroundImageUrl,
      ... backroundrepeat,
      ...backgroundSize,
    //   ...marginStyle,
      ...paddingStyle,
     }
          switch(row.elType){
            case 'section':
            {
              return(
                <section style={style} key={row.id} className={`nextsec_${row.id}`}>
                  <div className="section-container">
                      <BlockRenderer key={row.id} blocks={row.elements} />
                 </div>
                </section>

              )
            }
            case 'column':
              {
                   //console.log("column",row);
                return( 
                    <div key={row.id} class={`nextcol_${row.id}`} style={widthStyle}>
                      <BlockRenderer key={row.id} blocks={row.elements} />
                    </div>  
                )
              }
            case 'widget':
              {
                return(
                  <Widget key={row.id} widget={row} />
                )
              }  
            default:
              console.log("unknown", row);
              return null;
          }
  }));
  // return {Page};
};
