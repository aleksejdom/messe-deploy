function callToAction(index) {

    document.querySelector('.intro').style.display="none";
    
    document.querySelectorAll('.cta_block div').forEach(item => {
        item.classList.remove('cta_active')
    })
    const cta = document.querySelectorAll('.cta_block')[0].children
    cta[index].classList.add('cta_active')
    

}
       
export default callToAction;