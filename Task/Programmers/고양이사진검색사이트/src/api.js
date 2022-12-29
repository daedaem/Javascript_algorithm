const API_ENDPOINT =
  "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: async (keyword) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}/api.fetchCats.search?q=${keyword}`
      );

      //response.ok – 응답 상태가 200과 299 사이에 있는 경우 true
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {
      console.error(e);
    }
  },

  // [D] 자세히보기
  catsId: async (id) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
      if (response.ok) return await response.json();
    } catch (e) {
      console.error(e);
    }
  },

  // [D] random50
  //50개 랜덤 고양이 사진 목록
  random50: async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}/api/cats/random50`);
      if (response.ok) return await response.json();
    } catch (e) {
      console.error(e);
    }
  },
};
