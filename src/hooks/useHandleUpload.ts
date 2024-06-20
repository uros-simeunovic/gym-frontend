import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

export const useHandleUpload = () => {
  const [videoFile, setVideoFile] = useState<FileList | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseDescription, setExerciseDescription] = useState("");

  const handleUpload = async () => {
    if (!videoFile) {
      console.log("Please select a video file");
      return;
    }
    try {
      // Upload video to Firebase Storage
      const videoRef = ref(storage, `videos/${videoFile[0].name}`);

      const uploadTask = uploadBytesResumable(videoRef, videoFile[0]);

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
          // Dodajte podatke u Firestore
          // const planRef = await addDoc(collection(db, "trainingPlans"), {
          //   name: planName,
          //   description: planDescription,
          // });

          // await addDoc(collection(planRef, "exercises"), {
          //   name: exerciseName,
          //   description: exerciseDescription,
          //   videoUrl: videoUrl,
          // });

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
    setVideoFile,
    setExerciseName,
    setExerciseDescription,
    uploadProgress,
  };
};
