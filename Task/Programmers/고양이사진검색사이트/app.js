const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
};

const container = document.getElementById("App");
container.innerHTML = `
    <div>
        <h1> 되는건가? </h1>
        <div class="searchResult">
            <div>결과 1</div>
            <div>결과 2</div>
            <div>결과 3</div>
            <div>결과 4</div>
            <div>결과 5</div>
            <div>결과 6</div>
        </div>
    </div>

`;
