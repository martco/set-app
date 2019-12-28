import JSZip from "jszip";
import { saveAs } from "file-saver";

export default async ({
  files = [
    {
      filename: "hello.txt",
      data: "Hello World"
    }
  ],
  folderName = "1"
}) => {
  let zip = new JSZip();
  let folder = zip.folder(folderName);
  files.forEach(f => {
    folder.file(f.filename, f.data);
  });

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "files.zip");
};
