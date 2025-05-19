import apiRequest from "./api-request";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest(`/posts/${params.id}`);
  return res.data;
};
