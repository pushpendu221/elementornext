"use client";

import { Column } from "component/Column";
import { Section } from "component/Section";
import { Widget } from "component/Widget";

export const BlockRenderer = ({ blocks }) => {
    console.log("props1",{blocks});
    let elementorData=blocks;
    if(blocks.elementorData){
      elementorData = JSON.parse(blocks.elementorData);
    }
  //console.log("props", elementorData);
  return( elementorData.map((row) => {
     //console.log({ row });
          // console.log({ column });
               // console.log({ widget });
                switch(row.elType){
                  case 'section':
                  {
                  //  console.log("blCoks",blockstr);
                    return(
                      <section key={row.id} className="row">
                          <BlockRenderer key={row.id} blocks={row.elements} />
                      </section>
                    )
                  }
                  case 'column':
                    {
                      return( 
                        <div key={row.id} className={`col-${row.settings._column_size}`}>
                            <BlockRenderer key={row.id} blocks={row.elements} />
                        </div>
                      )
                    }
                  case 'widget':
                    {
                      return(
                        <Widget key={row.id} widget={row.elements} />
                      )
                    }  
                  default:
                    console.log("unknown", row);
                    return null;
                }
  }));
  // return {Page};
};
