export type ARScene = {
  id: number;
  nextPage: string;
  previousPage: string;
  notificationText: string;
  buttonText: string;
};

export const arScenes: ARScene[] = [
  {
    id: 1,
    previousPage: "/safariPages/scene/11",
    nextPage: "/safariPages/AR/2",
    notificationText: "Point your camera at the zebras and take a picture.",
    buttonText: "Take a picture",
  },
  {
    id: 2,
    previousPage: "/safariPages/AR/1",
    nextPage: "/safariPages/scene/13",
    notificationText: "Point your camera at the lions and take a picture.",
    buttonText: "Take a picture",
  }
];
