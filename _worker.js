export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    //url.host = "api.openai.com";
    url.host = "testapi-9e5.pages.dev/api"
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}
