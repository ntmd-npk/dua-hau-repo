var collapse = document.getElementsByClassName("chatbot-name")

function collapse() {
    alert('Hello my girl!')
    // $("#click").prop("checked", false )
}
// for(let i = 0; i<collapse.length; i++){
//     collapse[i].addEventListener("click", function(){
//         this.classList.toggle("active");

//         // var content = document.getElementById("click")
        
//     })
// }


var input = document.getElementById("textInput");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        getResponse()
    }
});

function getTime(){
    let today = new Date()
    hours = today.getHours()
    minutes = today.getMinutes()
    if (hours < 10){
        hours = "0" + hours
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes
    return time

}

function firstBotMessage(){
    let firstMessage = "Đây là ứng dụng trả lời tin nhắn tự động (fa ke), thử gõ hi hoặc chào để kiểm tra."
    document.getElementById("botStarterMessage").innerHTML = '<p class = "botText"><span>' + firstMessage+ '</span></p>'
    let time = getTime()

    $("#chat-timestamp").append(time)
    document.getElementById("userInput").scrollIntoView(false)
    // setTimeout()
}

firstBotMessage()

function getFurtherResponse(userText){
    let botResponse = getBotResponse(userText)
    let botHtml = '<p class = "botText"> <span>'+ botResponse +'</span> </p>'
    $("#chatbox").append(botHtml)
    document.getElementById("chat-bar-bottom").scrollIntoView(true)
}

function getResponse(){
    let userText = $("#textInput").val()
    if (userText == ""){
        userText = "Cậu thật đáng yêu!"
    }
    let userHtml = '<p class = "userText"> <span>'+userText+'</span> </p>'
    $("#textInput").val("")
    $("#chatbox").append(userHtml)
    document.getElementById("chat-bar-bottom").scrollIntoView(true)

    setTimeout(() => {
        getFurtherResponse(userText)
    }, 1000)
}

function buttonSendText(sampleText){
    let userHtml = '<p class = "userText"> <span>'+sampleText+'</span> </p>'
    $("#textInput").val("")
    $("#chatbox").append(userHtml)
    document.getElementById("chat-bar-bottom").scrollIntoView(true)
}

function sendButton(){
    getResponse()
}
function heartButton(){
    buttonSendText("❤️ ❤️ ❤️")
}



