import html2canvas from "html2canvas";

export const    exportAsImage = async (el:any, imageFileName:any,backgroundColor:string,color:string) => {
    const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
let htmlWidth = html.clientWidth;
let bodyWidth = body.clientWidth;
const newWidth = el.scrollWidth - el.clientWidth;
if (newWidth > el.clientWidth) {
htmlWidth += newWidth;
bodyWidth += newWidth;
}
html.style.width = htmlWidth + "px";
body.style.width = bodyWidth + "px";
const canvas = await html2canvas(el, {
    allowTaint: true,
    useCORS: true,
    scale: 2,
    backgroundColor,
    // color:"red",
    logging: true,
    width: el.scrollWidth,
    height: el.scrollHeight,
});
const image = canvas.toDataURL("image/png", 1.0);
// download the image
downloadImage(image,imageFileName);

};

export const downloadImage = (blob:any, fileName:any) => {
    const fakeLink = window.document.createElement("a");
    // fakeLink.style = "display:none;";
    fakeLink.download = fileName ?? "onepager";
    
    fakeLink.href = blob;
    
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    
    fakeLink.remove();
    };