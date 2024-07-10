"use client";
import { useEffect, useState } from "react"

export const filterContent = (contentobj) => {
    const content = JSON.parse(JSON.stringify(contentobj));
    //console.log("REACC",content);
    // const [cleanedHtml, setCleanedHtml] = useState('');
    // useEffect(() => {
    //     const parser = new DOMParser();
    //     const doc = parser.parseFromString(content, 'text/html');
    //     // Manipulate the parsed HTML if needed
    //     setCleanedHtml(doc.body.innerHTML);
    //   }, [content]);

    //   return (
    //     <div dangerouslySetInnerHTML={{ __html: cleanedHtml }} />
    //   );
    return content;
}