const mainDiv = document.querySelector(".main");

const handleApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      data.map((data) => {
        const card = document.createElement("div");
        card.className = "card";
        const h1 = document.createElement("h1");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const span = document.createElement("span");
        card.appendChild(h1);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(span);
        mainDiv.appendChild(card);

        h1.innerHTML = data.username;
        h3.innerHTML = data.name;
        p.innerHTML = data.email;
        span.innerHTML = data.address.city;
      });
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }
};
handleApi();
