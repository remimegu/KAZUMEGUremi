'use strict';
const makeKazumeguButton = document.getElementById('make-kazumegu-button');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

window.onerror = TigilError;

makeKazumeguButton.onclick = () => {
  removeAllChildren(resultDivided);
  //文章の作成
  const header = document.createElement('h3');
  header.innerText = 'カズめぐ製作中・・・';
  resultDivided.appendChild(header);

  setTimeout(function() {
    //結果表示エリアの作成
    const paragraph = document.createElement('p');
    const countResult = document.createElement('h3');
    const [str, count] = getRandomChar();
    paragraph.innerText = str;
    countResult.innerText = count + "回目でカズめぐをつくれました！";
    resultDivided.appendChild(paragraph);
    resultDivided.appendChild(countResult);

    // ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
      + encodeURIComponent('カズめぐをつくれ！')
      + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', count + "回目でカズめぐをつくれました！" +"https://remimegu.github.io/KAZUMEGUremi");
    anchor.innerText = 'Tweet #カズめぐをつくれ！';
    tweetDivided.appendChild(anchor);

    // widgets.js の設定
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);

  },800);


}

function getRandomChar(){
  const kazumegu = "カズめぐ";
  let str = "";
  let count = 0;
  let limit = 3000;

  while(count <= limit){
    if (str.match(/カズめぐ/)){
      return [str, count];
    }
    str += kazumegu[Math.floor(Math.random() * kazumegu.length)];
    count += 1;
  }
}

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function TigilError() {
	return true;
}