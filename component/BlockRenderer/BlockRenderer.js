"use client";
import { Column } from "component/Column";
import { Section } from "component/Section";
import { Widget } from "component/Widget";

export const BlockRenderer = ({ blocks }) => {
  //console.log("props",{blocks});
    let elementorData=blocks;
    if(blocks.elementorData){
      elementorData = JSON.parse(blocks.elementorData);
    }
  console.log("props", elementorData);
  return( elementorData.map((row) => {
    // console.log("rows",{ row });
     const {background_image,background_repeat,background_size } = row.settings;
     console.log('background_image',background_image);
     const backgroundImageUrl = background_image ? {'backgroundImage': `url(${background_image.url})`} : {};
     const backroundrepeat = background_repeat ? {'background-repeat' : background_repeat} : {};
     const backgroundSize = background_size ? {'background-size' : background_size} : {};
    const style = {
      ...backgroundImageUrl,
      ... backroundrepeat,
      ...backgroundSize
     }
          switch(row.elType){
            case 'section':
            {
              
             console.log("blCoks",row.id);
              return(
                <section style={style} key={row.id}>
                  <Section rows={row.elements} key={row.id} />
                </section>

              )
            }
            case 'column':
              {
                   //console.log("column",row);
                return( 
                  <Column key={row.id} 
                  padding={row.settings.padding ? row.settings.margin : {}}
                  columnSize={row.settings._column_size}
                  >
                      <BlockRenderer key={row.id} blocks={row.elements} />
                  </Column>
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
