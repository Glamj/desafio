const wrapper = document.getElementById('slider-wrapper');
const prevBtn = document.getElementById('previous-button');
const nextBtn = document.getElementById('next-button');

const items = wrapper.querySelectorAll('.container-imgs');
const itemWidth = items[0].offsetWidth + 20;
const totalItems = items.length;

items.forEach(item => {
    wrapper.appendChild(item.cloneNode(true));
});

nextBtn.addEventListener('click', () => {
    wrapper.scrollBehavior = 'smooth';
    wrapper.scrollLeft += itemWidth;
});

prevBtn.addEventListener('click', () => {
    wrapper.scrollBehavior = 'smooth';
    wrapper.scrollLeft -= itemWidth;
});

wrapper.addEventListener('scroll', () => {
    const maxScroll = itemWidth * totalItems;

    if (wrapper.scrollLeft >= maxScroll) {
        wrapper.scrollBehavior = 'auto';
        wrapper.scrollLeft -= maxScroll;
    }

    if (wrapper.scrollLeft <= 0) {
        wrapper.scrollBehavior = 'auto';
        wrapper.scrollLeft += maxScroll;
    }
});