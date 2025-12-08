import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// --- Existing Tailwind Utility ---
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- New Meta Pixel Utility ---
export const trackInitiateCheckout = () => {
  // Check if we are on the client-side and if Pixel is loaded
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'AI Masterclass Course', 
      currency: 'INR',
      value: 4999, // Ensure this matches your actual price
    });
    console.log("FB Pixel: InitiateCheckout event fired");
  } else {
    console.log("FB Pixel: Not loaded or blocked");
  }
};