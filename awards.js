
document.body.addEventListener('click', (e) => {
    const iscollapseTitle = !!e.target.closest('.collapse-header');
    const collapse = e.target.closest('.collapse')

    if (!iscollapseTitle) {
        return;
    }

    collapse.classList.toggle('collapse-open');
})




