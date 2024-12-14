"use server";

export const uploadPhoto = async (form: FormData) => {
  const IMG_BB_KEY = process.env.IMG_BB_KEY;
  const photoUpUrl = `https://api.imgbb.com/1/upload?key=${IMG_BB_KEY}`;
  const photoUpOptions = {
    method: "POST",
    body: form,
  };

  let result: string | undefined;
  try {
    const photoUpResponse = await fetch(photoUpUrl, photoUpOptions);
    const photoUpResult = await photoUpResponse.json();
    console.log("PHOTO UP RESPONSE", photoUpResponse.status);
    if (!photoUpResult.success) {
      return;
    }
    // Setting photo URL in payload
    //console.log("photoUpResult", photoUpResult);
    result = String(photoUpResult.data.url);
    //------ ---------- ----------- ----------

    // Posting Item data in database ------------
    //------ ---------- ----------- ----------
  } catch (error) {
    console.error(error);
  }

  return result;
};
