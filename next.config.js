// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         hostname: '**',
//       },

//     ],
//   },
// }


// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https" || "http",
        hostname: '**',
      },

    ],
  },
}
 
module.exports = nextConfig