import html2canvas from "html2canvas";

export default async (el) => {
  return await html2canvas(el, {foreignObjectRendering: true, logging: true, allowTaint: true})
};
