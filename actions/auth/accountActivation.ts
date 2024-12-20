"use server";

export const accountActivation = async (uid64: string, token: string) => {
  try {
    const SERVER_ADDRESS =
      process.env.SERVER_ADDRESS || process.env.NEXT_PUBLIC_SERVER_ADDRESS;
    const res = await fetch(`${SERVER_ADDRESS}/auth/active/${uid64}/${token}`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const d = await res.json();
    return d;
  } catch (error) {
    console.log(error);
    return null;
  }
};
