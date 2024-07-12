import { Button } from "./Button";
import { Heading } from "./Heading";
import { Image } from "./Image";
import { TextEditor } from "./TextEditor";

export const Widget = ({widget}) => {
   // console.log("Widget",widget);
    switch(widget.widgetType)
    {
        case 'heading': {
            return(
                <Heading blocks={widget}/>
            )
          }
        case 'text-editor': {
            return(
                <div>
                    <TextEditor blocks={widget}/>
                </div>
            )
        }
        case 'button': {
            return(
                <div>
                    <Button blocks={widget}/>
                </div>
            )
        }   
        case 'image': {
            return(
                <div>
                    <Image blocks={widget}/>
                </div>
            )
        } 
        case 'image-box': {
            return(
                <div>
                    <Image blocks={widget}/>
                </div>
            )
        } 
        case 'testimonial-carousel': {
            return(
                <div>
                    <Image blocks={widget}/>
                </div>
            )
        } 
        default :
        console.log("unknown widget", widget.widgetType);
        return null;
        }
    }
