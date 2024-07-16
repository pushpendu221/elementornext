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
     //console.log({ row });
          switch(row.elType){
            case 'section':
            {
            //  console.log("blCoks",blockstr);
              return(
                <Section key={row.id} 
                  backgroundImageUrl= {row.settings.background_image ? row.settings.background_image : {} }
                  background_repeat={row.settings.background_repeat ? row.settings.background_repeat: {}}
                  background_size={row.settings.background_size ? row.settings.background_size: {}}
                  margin={row.settings.margin ? row.settings.margin : {}}
                  padding={row.settings.padding ? row.settings.margin : {}}
                  >
                    <BlockRenderer key={row.id} blocks={row.elements} />
                </Section>
              )
            }
            case 'column':
              {
                   console.log("column",row);
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
                  <div key={row.id} className="widget-class">
                  <Widget key={row.id} widget={row} />
                 </div>
                )
              }  
            default:
              console.log("unknown", row);
              return null;
          }
  }));
  // return {Page};
};
