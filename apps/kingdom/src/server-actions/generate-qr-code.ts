"use server";

import { toDataURL } from "qrcode";

export const generateQrCode = async (input: string) => {
  const qrCode = await toDataURL(input, { width: 512 });

  return qrCode;
};
