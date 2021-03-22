import {
    createClient,
    createImageUrlBuilder,
    createPreviewSubscriptionHook,
  } from "next-sanity";
  
  import imageUrlBuilder from '@sanity/image-url'
  
  const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
  };
  
  export const imageBuilder = (source) =>
    createImageUrlBuilder(config).image(source);
  export const usePreviewSubscription = createPreviewSubscriptionHook(config);
  export const client = createClient(config);
  export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  });

  const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}
  
  export const getClient = (usePreview) => (usePreview ? previewClient : client);
  export default client;
  