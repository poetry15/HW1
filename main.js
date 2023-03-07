const progressBar = document.querySelector('.progress');
const img = document.querySelector('.img');
const waitCountElem = document.querySelector('.waiting-count');
let progress = 0;
const totalWaitCount = Math.floor(Math.random()*1000);
function updateProgress(){
    img.style.minWidth = '50px';
    img.style.minHeight = '50px';
    progressBar.style.minHeight = '10px';
    progress += 1;
    img.style.left = progressBar.offsetWidth - img.offsetWidth/2+ 'px';
    progressBar.style.width = progress+'%';
    const remainingWaitCount = Math.floor(totalWaitCount * progress / 100);
    waitCountElem.innerText = `目前還有 ${totalWaitCount-remainingWaitCount} 個人正在等待進入\n\n請勿跳轉頁面`;
    if (progress < 100) {
        setTimeout(updateProgress, 700); // 增加 setTimeout 的觸發頻率
    }
    else {
        window.location.href = "https://www.ubereats.com/tw";
    }
}


updateProgress();