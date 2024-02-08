"use server";

const fetchAnime = async (page: number) => {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}`);

  const data = await response.json();

  return data;
};
