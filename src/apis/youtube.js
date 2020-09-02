import axios from 'axios';

const KEY = 'AIzaSyAZLFntd8JlIHbqQySp1rzMFJBVq0ACZwI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
