import { saveAs } from 'file-saver';

export default ({canvas}) => {
  canvas.toBlob((blob) => {
    saveAs(blob, "test.png");
  });
};
