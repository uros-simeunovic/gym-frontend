import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/firebase";
import { useDialog } from "./useDialog";
import { addDoc, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";

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
    try {
      // Upload video to Firebase Storage
      const videoRef = ref(storage, `videos/${videoFile[0].name}`);

      const uploadTask = uploadBytesResumable(videoRef, videoFile[0]);

      if (!planId) {
        return;
      }

      if (!exerciseDescription && !exerciseTitle) {
        return;
      }

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.log("Error uploading video: ", error);
        },
        async () => {
          const videoUrl = await getDownloadURL(videoRef);

          await addDoc(collection(db, `trainingPlans/${planId}/exercises`), {
            name: exerciseTitle,
            description: exerciseDescription,
            videoUrl: videoUrl,
            thumbnail: "thumbnail",
            order: 1,
          });

          alert("Video uploaded and data saved successfully!");
          setUploadProgress(0);
        }
      );
    } catch (error) {
      console.error("Error uploading video: ", error);
    }
  };

  return {
    handleUpload,
  };
};
