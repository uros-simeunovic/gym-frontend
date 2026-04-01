import { db } from "@/firebase";
import { useDialog } from "./useDialog";
import { addDoc, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";

const AZURE_ACCOUNT = import.meta.env.VITE_AZURE_STORAGE_ACCOUNT;
const AZURE_CONTAINER = import.meta.env.VITE_AZURE_CONTAINER;
const AZURE_SAS = import.meta.env.VITE_AZURE_SAS_TOKEN;

export const useHandleUpload = () => {
  const {
    videoFile,
    setUploadProgress,
    exerciseDescription,
    exerciseTitle,
    setError,
  } = useDialog();

  const params = useParams();

  const { planId } = params;

  const handleUpload = async () => {
    if (!videoFile) {
      setError("Izaberite fajl za upload");
      return;
    }

    if (!planId) {
      return;
    }

    if (!exerciseDescription && !exerciseTitle) {
      return;
    }

    try {
      const file = videoFile[0];
      const blobName = `${Date.now()}_${file.name}`;
      const uploadUrl = `https://${AZURE_ACCOUNT}.blob.core.windows.net/${AZURE_CONTAINER}/${blobName}?${AZURE_SAS}`;

      const xhr = new XMLHttpRequest();

      await new Promise<void>((resolve, reject) => {
        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            setUploadProgress((e.loaded / e.total) * 100);
          }
        });

        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve();
          } else {
            reject(new Error(`Upload failed: ${xhr.status} ${xhr.statusText}`));
          }
        });

        xhr.addEventListener("error", () => reject(new Error("Upload failed")));

        xhr.open("PUT", uploadUrl);
        xhr.setRequestHeader("x-ms-blob-type", "BlockBlob");
        xhr.setRequestHeader("Content-Type", file.type || "video/mp4");
        xhr.send(file);
      });

      const videoUrl = `https://${AZURE_ACCOUNT}.blob.core.windows.net/${AZURE_CONTAINER}/${blobName}`;

      await addDoc(collection(db, `trainingPlans/${planId}/exercises`), {
        name: exerciseTitle,
        description: exerciseDescription,
        videoUrl: videoUrl,
        thumbnail: "thumbnail",
        order: 1,
      });

      alert("Video uploaded and data saved successfully!");
      setUploadProgress(0);
    } catch (error) {
      console.error("Error uploading video: ", error);
    }
  };

  return {
    handleUpload,
  };
};
