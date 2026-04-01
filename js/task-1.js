const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const title = category.querySelector('h2');
    const list = category.querySelector('ul');
    const items = list.querySelectorAll('li');

    title.classList.add('categories-title');
    list.classList.add('categories-list');
    items.forEach(li => li.classList.add('categories-item'));

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${items.length}`);
});
