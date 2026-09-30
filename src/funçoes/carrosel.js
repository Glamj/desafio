const wrapper = document.getElementById('slider-wrapper');
const prevBtn = document.getElementById('previous-button');
const nextBtn = document.getElementById('next-button');

const items = wrapper.querySelectorAll('.container-imgs');
const itemWidth = items[0].offsetWidth + 20;
const totalItems = items.length;


nextBtn.addEventListener('click', () => {
    wrapper.scrollBehavior = 'smooth';
    wrapper.scrollLeft += itemWidth;
});

prevBtn.addEventListener('click', () => {
    wrapper.scrollBehavior = 'smooth';
    wrapper.scrollLeft -= itemWidth;
});
