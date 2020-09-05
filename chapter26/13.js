import qs from ‘qs‘;
import client from ‘./client‘;


export const writePost = ({ title, body, tags }) =>
  client.post(‘/api/posts‘, { title, body, tags });



export const readPost = id => client.get(/api/posts/</span><span class="co49">${</span><span class="co33">id</span><span class="co49">}</span><span class="co31">);



export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(/api/posts?</span><span class="co49">${</span><span class="cd2 co33">queryString</span><span class="co33">}</span><span class="cd2 co31">);
};