export const cloudinaryConfig = {
  cloudName: "dayayd4lv",
  apiKey: "376526173972156",
  apiSecret: "7uCF6SUCRSbI4A8MdEdDnCy_wXo",
};

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  url: string;
}

interface CloudinaryResponse {
  resources: CloudinaryResource[];
  error?: string;
  details?: string;
}

export async function getAllImages() {
  try {
    const response = await fetch("/api/cloudinary");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch images");
    }

    if (!data.resources || !Array.isArray(data.resources)) {
      throw new Error("Invalid response format");
    }

    return data.resources.map((resource: CloudinaryResource) => ({
      url: `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/w_600,q_auto,f_auto/${resource.public_id}`,
      public_id: resource.public_id,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
