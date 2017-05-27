const axios = require('axios');

// const env = process.env;
// <platform>:<app ID>:<version string> (by /u/<reddit username>)
// User-Agent: android:com.example.myredditapp:v1.2.3 (by /u/kemitche)
// const userAgent = `${env.PLATFORM}:${env.APP_ID}:${env.VERSION} (by /u/${env.REDDIT_USERNAME})`;

const client = axios.create({
  baseURL: 'https://www.reddit.com/',
});

client.interceptors.request.use((req) => {
  req.url += '.json';
  return req;
});

export default client;
