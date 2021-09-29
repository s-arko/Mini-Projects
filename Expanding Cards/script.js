const panels = document.querySelectorAll('.panel');

// panels.forEach((panel) => {
//     panel.addEventListener('click',()=>{
//         console.log(removeActiveClasses);
//         panel.classList.add('active');
//     })
// })

// const removeActiveClasses = () =>{
//     panels.forEach((panel) => {
//         panel.classList.remove('active');
//     })
//     return 1;
// }

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}