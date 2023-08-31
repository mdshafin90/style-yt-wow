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
        const verifiedBadge = data?.authors[0]?.verified;
        console.log(verifiedBadge);
        div.innerHTML = `
        <div class="card h-[300px] bg-base-100 shadow-xl">
        <figure>
            <img src="${data?.thumbnail}" alt="Shoes" />
        </figure>
        <div class="flex p-4 items-start">
            <div>
                <img class="rounded-full w-[50px] h-[50px]" src="${data?.authors[0]?.profile_picture}" alt="">
            </div>
            <div class="ml-5">
                <h2 class="card-title">${data?.title}</h2>
                <div class="flex items-center">
                   <div>
                      <p>${data?.authors[0].profile_name}</p>
                   </div>
                <img class="w-[20px] h-[20px] ml-2" src="${verifiedBadge === true ? './logo-icon/badge.png' : ""}">
                </div>
                <p>${data?.others?.views} Views</p>
            </div>
        </div>
        `
        cardContainer.appendChild(div);
    }

}

phYtCategory();
specificTab('1000');