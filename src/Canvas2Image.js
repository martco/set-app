import { saveAs } from 'file-saver';

export default ({canvas, filename, cb}) => {
  canvas.toBlob((blob) => {
    saveAs(blob, filename);
    cb(filename);
  });
};
