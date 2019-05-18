import styles from "./config/styles";

export function getObjectKeys(obj, CustomError) {
  try {

    if (obj === undefined) {
      throw new CustomError('Passed object is undefined');
    }

    if (Object.keys(obj).length === 0) {
      throw new CustomError('Passed object is an empty object. There are no properties present inside the passed object');
    }

    return Object.keys(obj);
  } catch (err) {

    console.groupCollapsed('%c' + err.name, styles);
    // Start grouping

    console.log('%c' + err.message, styles, '\n Passed object:', obj);
    /* 
        Both the trace and stack options look good
        - You can customise the err.stack as per requirements
        - No customisations in console.trace()
    */
    console.log(err.stack);
    // console.trace();

    // End grouping
    console.groupEnd();
  }
}