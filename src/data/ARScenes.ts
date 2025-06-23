import sceneVideo from "../assets/lion-scene.mp4";

export type ARScene = {
  id: number;
  nextPage: string;
  previousPage: string;
  notificationText: string;
  successText: string;
  failText: string;
  buttonText: string;
  videoUrl?: string; // Optional video URL for the scene
};

export const arScenes: ARScene[] = [
  {
    id: 1,
    previousPage: "/safariPages/scene/11",
    nextPage: "/safariPages/ar/2",
    notificationText: "Point your camera at the zebras and take a picture.",
    successText: "Remember the zebras in the savannah!",
    failText: "You missed the zebras!",
    buttonText: "Take a picture",
    videoUrl: sceneVideo, // Local test video
  },
  {
    id: 2,
    previousPage: "/safariPages/ar/1",
    nextPage: "/safariPages/scene/13",
    notificationText: "Point your camera at the lions and take a picture.",
    successText: "Remember the hungry lions!",
    failText: "You missed the lions!",
    buttonText: "Take a picture",
    videoUrl: sceneVideo, // Local test video
  },
];
