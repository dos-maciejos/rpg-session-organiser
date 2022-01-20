import ky from "ky";

const apiClient = ky.create({
  prefixUrl: "https://rpg-session-organiser-server.herokuapp.com",
});

export const apiGetDates = () => apiClient.get("dates").json();

export const apiGetPropositions = () => apiClient.get("dates").json();

export const apiPostDate = (accessToken) =>
  apiClient.post("date", { json: { accessToken: accessToken } }).json();

export const apiPostProposition = (accessToken) =>
  apiClient.post("proposition", { json: { accessToken: accessToken } }).json();

export const apiSignIn = (username, isGm) =>
  apiClient
    .post("session", { json: { username: username, is_gm: isGm } })
    .json();
