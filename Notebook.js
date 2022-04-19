const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent =[]

//新增按鈕程式設定
addedBtn.addEventListener('click', function () {    
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)

    listContent.unshift({
        content : content.value,
        date : date.value,
        time : time.value
    })
    render()
}) 

//刪除按鈕程式設定
deletedBtn.addEventListener('click', function () {
    listContent.shift()
    render()
})


function render() {
    // 渲染頁面的list
    let htmlStr = ''
 
    listContent.forEach(function (item) {    //forEach為JaveScript的用法，可以省略for range in list.lengh的功用
        htmlStr = htmlStr + `
        <div class="item">
            <div>
            <p>內容：${item.content}</p>
            <p>時間：${item.date} ${item.time}</p>
            </div>
        </div>
        ` 
    }) 
    list.innerHTML = htmlStr 
}