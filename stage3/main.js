const sm = document.getElementById('small')
const big = document.getElementById('big')
const mdm = document.getElementById('medium')

function onClickHandler(e) {
    e.stopPropagation()
    console.dir(e.currentTarget.id)
}

sm.onclick = onClickHandler
mdm.onclick = onClickHandler
big.onclick =  () => alert('yo!!!')
