import Client from './client';

export default {
  getFrontPage() {
    return Client.get('/').then(resp => resp.data);
  },
  getSubreddit(subreddit, mode) {
    let url = `/r/${subreddit}`;

    if (typeof (mode) !== 'undefined') {
      url += mode;
    }

    return Client.get(url).then(resp => resp.data);
  },
  getPostDetail(subreddit, id) {
    return Client.get(`/r/${subreddit}/comments/${id}`).then(resp => ({
      post: resp.data[0].children[0],
      comments: resp.data[1],
    }));
  },
  getUserComments(username) {
    return Client.get(`/user/${username}/`).then(resp => resp.data);
  },
};
