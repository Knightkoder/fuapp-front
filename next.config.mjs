/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
      images: {
          remotePatterns: [
            {
              protocol: "https",
              hostname: "*.googleusercontent.com",
              port: "",
              pathname: "/**",
            },
            {
              protocol: "https",
              hostname: "*.googleapis.com",
              port: "",
              pathname: "/**",
            },
            {
              protocol: "https",
              hostname: "*.gstatic.com",
              port: "",
              pathname: ""
            },
            {
              protocol: "https",
              hostname: "*.appspot.com",
              port: "",
              pathname: "/**",
            } ,
            {
              protocol: "https",
              hostname: "*.firebaseapp.com",
              port: "",
              pathname: "/**",
            },
            {
              protocol: "https",
              hostname: "*.placeholder.com",
              port: "",
              pathname: "/**",
            },
            {
              protocol: "https",
              hostname: "*.unsplash.com",
              port: "",
              pathname: "/**",
            },
            {
              protocol: "https",
              hostname: "*.pexels.com",
              port: "",
              pathname: "/**",
            },
            {
              protocol: "https",
              hostname: "*.funerariapp.cl",
              port: "",
              pathname: "/**",
            },
            {
              protocol: "https",
              hostname: "*.asistencia.funerariapp.cl",
              port: "",
              pathname: "/**",
            },
            {
              protocol: "https",
              hostname: "asistencia.funerariapp.cl",
              port: "",
              pathname: "/**",
            }
          ],
  
        }
  };
  
  export default nextConfig;
  