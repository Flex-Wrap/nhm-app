import notification1 from "../assets/notification1.jpg";
import notification2 from "../assets/notification2.jpg";
import notification3 from "../assets/notification3.jpg";
import notification4 from "../assets/notification4.jpg";

export type Notification = {
  id: number;
  image: string;
  header: string;
  text: string;
  nextPage: string;
  previousPage: string;
  buttonText: string;
  progress: string; 
};

export const notifications = [
  {
    id: 1,
    image: notification1,
    header: "You feel stressed!",
    text: "Make sure you got everything.",
    nextPage: "/safariPages/checkbox",
    previousPage: "/safariPages/scene/2",
    buttonText: "Continue",
    progress: "15%"
  },
  {
    id: 2,
    image: notification2,
    header: "You are really interested!",
    text: "Check Jokobsen’s notebook that lay on the table",
    nextPage: "/safariPages/scene/11",
    previousPage: "/safariPages/scene/10", // or "safariPages/scene/8",
    buttonText: "I checked it",
    progress: "59%"
  },
  {
    id: 3,
    image: notification3,
    header: "A new day begins.",
    text: "Jakobsen is busy with taxidermy",
    nextPage: "/safariPages/scene/14", 
    previousPage: "/safariPages/dialog", 
    buttonText: "Continue",
    progress: "86%"
  },
  {
    id: 4,
    image: notification4,
    header: "They're not just bones.",
    text: "Step close - see what they reveal.",
    nextPage: "/safariPages/scene/16",
    previousPage: "/safariPages/scene/15",
    buttonText: "Continue",
    progress: "97%"
  }
];
