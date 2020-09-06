(…)
export const updatePost = ({ id, title, body, tags }) =>
  client.patch(/api/posts/</span><span class="co49">${</span><span class="cd2 co33">id</span><span class="co33">}</span><span class="cd2 co31">, {
    title,
    body,
    tags,
  });