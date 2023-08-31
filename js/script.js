document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blog.html'
});

const phYtCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const manyData = await res.json();
    const datas = manyData.data;
    const tabsContainer = document.getElementById('tabs-container');

    for (const data of datas) {
        // console.log(data);
        const tab = document.createElement('a');
        tab.innerHTML = `
        <a onclick="specificTab('${data.category_id}')" class="btn mx-4 my-2">${data.category}</a>
        `
        tabsContainer.appendChild(tab);
    }
};

const specificTab = async (categoryId) => {
    // console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const manyData = await res.json();
    const datas = manyData.data;
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    for (const data of datas) {
        console.log(data);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
        <figure>
            <img src="${data?.thumbnail}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <div>
                <img src="" alt="">
            </div>
            <div>
                <h2 class="card-title">${data?.title}</h2>
                <p>${data?.authors[0].profile_name} ${data?.authors[0]?.verified}</p>
                <p>${data?.others?.views}</p>
            </div>
                </div>

        </div>
        `
        cardContainer.appendChild(div);
    }

}

phYtCategory();
specificTab('1000');