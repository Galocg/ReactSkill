// html을 없애고 내용이 너무 길면 200자로 제한하는 함수
const removeHtmlAndShorten = body => {
    const filtered = sanitizeHtml(body, {
      allowedTags: [],
    });
    return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
  };
  
  /*
    GET /api/posts?username=&tag=&page=
  */
  export const list = async ctx => {
    (...)
      ctx.body = posts.map(post => ({
        ...post,
        body: removeHtmlAndShorten(post.body),
      }));
    } catch (e) {
      ctx.throw(500, e);
    }
  };