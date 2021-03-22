import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  description,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
  label,
  tagline,
  
`;

const logos = 
`image1{asset{_ref}},
image2{asset{_ref}},
image3{asset{_ref}},
image4{asset{_ref}},
image5{asset{_ref}},
image6{asset{_ref}},
image7{asset{_ref}},
image8{asset{_ref}}`


const getClient = (preview) => (preview ? previewClient : client);

console.log(postFields);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true)
    .fetch(
      `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body[]{...,"asset": asset->url}
    }`,
      { slug }
    )
    .then((res) => res?.[0]);
  return data;
}

export async function getAllPostsWithSlug(slug) {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug]
  {

    ${postFields}
  
  body[]
  {

    ...,
    markDefs[]
    {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug,
        "url":"https://theidcgroup.com/blog/" + @.reference->slug.current 
      }
      
    }
  }
  }`,
    { slug }
  );

  return data;
}

console.log(postFields);

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}

//faq

export const getFaqData = async (preview) => {
  const data = await getClient(preview).fetch(
    `*[_type == 'page'&& page =='FAQ']{pageBuilder[]{text[0]{children[0]{text}},label,tagline}}`
  );

  return data;
};

//team-header

export const getTeamHeaderData = async (preview) => {
  const data = await getClient(preview).fetch(
    `*[_type =="page" && page =='Team']{pageBuilder[] { tagline1,tagline2,image{asset{_ref}},heading1,spanHeading,heading2,Bigheading,heading,designation,tagline,label}}`
  );

  return data;
};

export const getTeamProfileData = async (preview) => {
  const data = await getClient(preview).fetch(
    `*[_type =="page" && page =='Team']{pageBuilder[] { heading,designation,description[0]{ children[0]{text} },image{asset{_ref}}, }}`
  );

  return data;
};

export const getHomeData = async (preview) => {
  const data = await getClient(preview)
    .fetch(`*[_type =="page" && page =='Home']
   {
     pageBuilder[]{heading,description,backgroundImage{asset{_ref}},label,tagline}
   }
     `);

  return data;
};

export const getServicesData = async (preview) => {
  const data = await getClient(preview)
    .fetch(`*[_type =="page" && page =='Services']
   {
     pageBuilder[]{description,backgroundImage{asset{_ref}},heading,label,tagline}
   }
     `);

  return data;
};



export const getEdiData = async (preview) => {
  const data = await getClient(preview)
    .fetch(`*[_type =="page" && page =='EDI']
   {
     pageBuilder[]{${logos},heading,description,backgroundImage{asset}}
   }
     `);

  return data;
};


export const getLandingPageData = async (preview) => {
  const data = await getClient(preview)
    .fetch(`*[_type =="page" && page =='LandingPage']
   {
     pageBuilder[]{heading,description,backgroundImage{asset},label,tagline,heading1,spanHeading,listing1,listing2,listing3,listing4,listing5,listing6}
   }
     `);

  return data;
};
/*create function to pull data from sanity 

FETCHING FROM SANITY

1.import client
2. create a fn to pull data
3. use the imported client inside and fetch sanity data using GROQ (sanity API language)

EXPORTING THE FETCHED DATA INTO PAGES (STAATIC)

1. using getstaticprops get the exported fn from here as props and use it in the pages


*/
