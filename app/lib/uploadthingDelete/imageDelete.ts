"use server";

import { utapi } from "./uploadthingDelete";

export async function utDeleteImage(imageUrl: string) {
  try {
    const imageKey = imageUrl.replace("https://d493bit18e.ufs.sh/f/", ""); // Remove the prefix
    await utapi.deleteFiles(imageKey);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
