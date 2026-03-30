/* import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

// 
export const multiFormatDateString = (timestamp: string = ""): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Converts a file to a URL (for displaying images or other files)
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// Formats the date string in a user-friendly way
export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

// Function to calculate and format the time difference based on the user's local time
export const multiFormatDateString = (timestamp: string = ""): string => {
  const date: Date = new Date(timestamp); // Post timestamp
  const now: Date = new Date(); // User's current local time

  // Calculate the time difference in various units
  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  // Return the formatted time difference
  switch (true) {
    case Math.floor(diffInDays) >= 30:
      return formatDateString(timestamp); // Show full date if more than 30 days
    case Math.floor(diffInDays) === 1:
      return `${Math.floor(diffInDays)} day ago`; // 1 day ago
    case Math.floor(diffInDays) > 1 && diffInDays < 30:
      return `${Math.floor(diffInDays)} days ago`; // 2-29 days ago
    case Math.floor(diffInHours) >= 1:
      return `${Math.floor(diffInHours)} hours ago`; // 1+ hours ago
    case Math.floor(diffInMinutes) >= 1:
      return `${Math.floor(diffInMinutes)} minutes ago`; // 1+ minutes ago
    default:
      return "Just now"; // Less than a minute ago
  }
};

// Function to check if a user has liked a post
export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};
