class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();

    // 작성 코드  스크롤 하면
    window.addEventListener("scroll", (e) => {
      let scrollLocation = document.documentElement.scrollTop;
      let windowHeight = window.innerHeight;
      let fullHeight = document.body.scrollHeight;

      if (scrollLocation + windowHeight >= fullHeight) {
        console.log("페이지내려가");
        this.appendPage();
      }
    });
  }
  //페이지 추가 함수
  appendPage() {
    const list = this.data.map((cat) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <img src=${cat.url} alt=${cat.name} />
        <div class="hover">${cat.name}</div>
      `;
      this.$searchResult.appendChild(div);
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.length !== 0) {
      this.$searchResult.innerHTML = this.data
        .map(
          (cat) => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
            <div class="hover">${cat.name}</div>
          </div>
        `
        )
        .join("");

      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data[index]);
        });
      });
    } else {
      this.$searchResult.innerHTML = `
      <strong>검색된 결과가 없습니다.</strong>
      `;
    }
  }
}
