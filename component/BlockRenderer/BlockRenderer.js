"use client";

import { Column } from "component/Column";
import { Section } from "component/Section";
import { Widget } from "component/Widget";

export const BlockRenderer = ({ blocks }) => {
  //  console.log("props",{blocks});
  const elementorData = JSON.parse(blocks.elementorData);
  console.log("props", elementorData);
  const Page = elementorData.map((row) => {
    // console.log({ row });
    return (
      <section key={row.id} className="row">
        {row.elements.map((column) => {
          // console.log({ column });
          return (
            <div
              key={column.id}
              className={`col-${column.settings._column_size}`}
            >
              {column.elements.map((widget) => {
               // console.log({ widget });
                switch(widget.elType){
                  case 'section':
                  {
                    return(
                      <Section key={widget.id} section={widget.elements} />
                    )
                  }
                  case 'column':
                    {
                      return(
                        <Column key={widget.id} column={widget.elements} />
                      )
                    }
                  case 'widget':
                    {
                      return(
                        <Widget key={widget.id} widget={widget.elements} />
                      )
                    }  
                  default:
                    console.log("unknown", widget);
                    return null;
                }
              })}
            </div>
          );
        })}
      </section>
    );
  });
  return <div>{Page}</div>;
};
