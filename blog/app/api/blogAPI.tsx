const API_URL = `http://10.0.0.13:3000/api/v1/`;

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface NewPostPayload {
  title: string;
  body: string;
}

export async function getPosts() {
  console.log(`${API_URL}posts`);
  const requestInfo = {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_URL}posts`, requestInfo);
  const posts = await response.json();
  console.log("API -> Get");
  console.log(posts);
  return posts;
}

export async function createPost(payload: NewPostPayload) {
  const requestInfo = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(`${API_URL}posts`, requestInfo);
  const post = await response.json();
  console.log("API -> Post");
  console.log(payload);
  return post;
}
