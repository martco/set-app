import { saveAs } from 'file-saver';

export default ({canvas, index, treatment, cb}) => {
  canvas.toBlob((blob) => {
    const filename = index + "/" + treatment + ".jpeg";
    saveAs(blob, filename);
    cb(filename);
  });
};
