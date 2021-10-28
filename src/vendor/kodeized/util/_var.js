 /*!
Global Variables
*/
export const htmlTag = document.getElementsByTagName("html")[0];
export const bodyTag = document.getElementsByTagName("body")[0];

const VarFunc = function() {
    console.log("VarFunc()... works", [htmlTag, bodyTag])
}

export default VarFunc;