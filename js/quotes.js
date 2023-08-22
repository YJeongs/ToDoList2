const quotes = [
    {
        quote : "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
        author : "-나딘 스테어-"
    },
    {
        quote : "최고에 도달하려면 최저에서 시작해라.",
        author: "-시루스-"
    },
    {
        quote: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
        author: "-칭기즈칸-"
    },
    {
        quote: "When you have faults, do not fear to abandon them",
        author: "-Confucius-"
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "-Jim Rohn-"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "-Winston-"
    }, 
    {
        quote: "아무도 당신이 될 수 없다. 그것이 당신의 힘이다.",
        author: "-Anonymous-"
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;