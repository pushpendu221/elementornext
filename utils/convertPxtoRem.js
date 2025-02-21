 // Conversion factor from px to rem
 const pxToRemFactor = 10;

 // Convert margin values from px to rem
    export const convertPxToRem = (value,unit = "px") => {
    if(unit == 'rem'){
        return isNaN(value) ? '' : `${(value * 10)/16}rem`;
    } else {
    const numberValue = parseFloat(value);
    return isNaN(numberValue) ? '' : `${numberValue / pxToRemFactor}rem`;
    }
};

    // if object is empty
    export const isEmptyObject = (obj) => {
        return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    };