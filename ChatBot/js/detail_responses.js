// var data = '''[{"tag":"chào","patterns":["Chào bạn","Chào Bot","Hi","Hello","Hey","Chào ngày mới","Xin chào!","Cho mình làm quen nhé!"],"reponses":["Xin chào, tớ là Dưa Hấu!","Mình là Dưa Hấu, không biết giúp gì được cho cậu nè?","Knock knock! Dưa Hấu ở đây ^^"]},{"tag":"tạm biệt","patterns":["bye bye","Goodbye","Gặp lại sau","Mình có việc gấp đi trước nhé","Lần tới nói chuyện"],"reponses":["Bye Bye","Một ngày may mắn nhá!","Ngày an!","Mong được gặp bạn lần tới nhé!","Lần sau nói chuyện ^^"]},{"tag":"cảm ơn","patterns":["Củm ơn nhìu nè","Cảm ơn bạn nhiều nha","Bạn tốt bụng quá","Thanks","Thank you","Then khiu"],"reponses":["Không có gì nè!","Èo, chuyện nhỏ!","Chỉ búng tay là xong","Đại ca đây giỏi"]},{"tag":"không có kết quả","patterns":[],"reponses":["Xin lỗi mình không giúp được gì nhiều :<.","Mình không hiểu ý cậu lắm","Cậu có thể diễn đạt theo cách khác không?","Khó hiểu thật ấy ><","Tại hạ xin bó tay!","Tớ chưa nghĩ ra, cậu nói thử tớ nghe với?"]},{"tag":"dịch vụ","patterns":["Bên bạn cung cấp dịch vụ gì vậy","Công ty bạn bán gì đấy?","Bạn làm được gì?","Bạn có thể làm gì?","Chức năng của bạn?"],"reponses":["Tớ tám nhảm xuyên địa cầu nha!","Rảnh rỗi nên đi tâm sự nè >W<","Dưa Hấu đi bán khoai nè","Lắng nghe cậu và kể chuyện cười nha ^^","Nhà nghèo nên tớ chuyển sang bán thân nha ^^, ý lộn là thận ý","Cái gì cũng bán, nhưng mãi vẫn nghèo nè :<","Bán thận, thận, thận, tớ mà bán được thằng chả tớ bán ngay luôn :>"]},{"tag":"chủ nhân","patterns":["Ai là chủ nhân của bạn vậy?","Ai tạo ra bạn?","Người tạo ra bạn?","Bạn do ai tạo ra?"],"reponses":["Khoai Lang tạo ra tớ ấy","Bả ntmd.npk nha","Một mẹ lười tên Duyên nha >w<","Đừng nhắc đến con nhỏ đó mà buồn :v","Một củ khoai vừa lười vừa mớt dại :>"]},{"tag":"người yêu","patterns":["Cậu có người yêu chưa?","Cậu yêu ai chưa?","Có ai yêu cậu không?"],"reponses":["Tớ yêu Dưa Hấu nhiều lắm nè","Tớ yêu ba mẹ","Người ta còn nhỏ mờ ><","Độc thân muôn năm nha","Yêu đương gì tầm này, tổ quốc chưa ghi công tớ nữa mà ><","Tớ crush cái cậu gương trong nhà tắm tớ nhá"]},{"tag":"buồn","patterns":["Hôm nay tớ buồn quá","Buồn thật đấy","Mình có chuyện buồn"],"reponses":["Chuyện gì rồi cũng sẽ qua nè!","Không sao, ai mà chẳng có lúc vui lúc buồn","Đời mà ^^","Cậu muốn kể không?","Tớ nghe nề","Tớ ở đây ^^"]},{"tag":"vui","patterns":["Cậu kể cái gì vui vui đi","Kể chuyện cười","chuyện cười"],"reponses":["Bố: Ở lớp, con thường làm gì để phải mang biệt danh là học sinh cá biệt hả? Con: Dạ , con không làm gì ạ!","Một phụ nữ nói với bác sĩ: - Thưa bác sĩ, xin ông đừng giấu giếm tôi điều gì cả. Hãy nói tôi nghe tình trạng sức khoẻ của chồng tôi như thế nào sau khi bị gãy tay. Không biết rõ điều này thì tôi chết mất. - Bà yên tâm, ông ấy rồi sẽ khoẻ dần thôi mà. Người phụ nữ: - Vậy có nghĩa là ông ấy sẽ rửa bát được chứ ạ?","Hai bạn trai đang nói với nhau : – Hôm tết tao đen nhà nàng, chúc ông nàng có một câu mà nàng giận tao đến cả tháng . – Mày chúc sao ?? -“Chúc ông sống lâu trăm tuổi” – Chúc như vậy được quá đi chứ – Được con khỉ ! Năm nay ông nàng 99 tuổi rồi","Một người đàn ông bước vào quán nhậu và ngồi cạnh một người có con chó dưới chân. “Con chó của ông có cắn người không?” “Không” Chỉ một giây sau khi nghe câu trả lời, ông ta bị con chó ngoạm một miếng to vào chân. “Sao ông bảo con chó của ông không cắn”, người đàn ông quát to. “Đó có phải chó của tôi đâu!?!!”","– Chỗ anh có phóng ảnh chụp lớn bằng kích thước thật không? - Ồ có chứ thưa quý khách, đó là chuyên môn của chúng tôi. - Thế đây, phóng cho tôi tấm chụp kim tự tháp.","Sư cụ: – Làm người không được sát sinh, nếu kiếp này con giết trâu, kiếp sau con phải hóa thành trâu đền tội, kiếp này giết heo thì kiếp sau là heo, giết ruồi giết gián cũng thế! Đồ đệ: – Chà, hiểu rồi. Nếu con muốn kiếp sau làm người nữa, kiếp này con phải… giết người!","Hai anh lười nói chuyện với nhau: – Cậu thường tắm vào ngày nào? – Ngày 28-2, đôi khi là ngày 29. Thế còn cậu? – Vào những dịp quan trọng: sinh nhật, ngày độc lập, giáng sinh…","Có 3 người đèo nhau trên 1 chiếc xe gắn máy khi qua ngã tư gặp đèn đỏ cứ thế đi bị công an vẫy lại. Một người trên xe liền hét lên: – Anh vẫy xe khác đi xe tui chở 3 rồi không chở được thêm nữa","Một người đến gặp Chúa và hỏi: “1000 năm là bao lâu?” Chúa trả lời: ”Đối với ta chỉ là 1 giây”. Người đàn ông hỏi tiếp: “Thế còn 1000$ là bao nhiêu?” Chúa lại trả lời “Với ta, chỉ là 1 xu”. Người đàn ông lại hỏi: ”Ngài có thể vui lòng cho con 1 xu khum?”. Chúa mỉm cười: ”Chờ ta 1 giây”","– Khi anh nổi điên lên với em, em không bao giờ cãi lại. Làm cách nào mà em kiềm chế sự tức giận của mình vậy? – Em đi cọ bệ xí. – Thế làm sao mà giảm cơn giận hiệu quả được nhỉ? – Thì em sử dụng bàn chải đánh răng của anh.","Đêm giáng sinh, một tên trộm đội lốt ông già Noel đột nhập vào ngôi biệt thự ngay trung tâm thành phố Chicago (Hoa Kỳ) giữa đêm khuya. Chú bé con chủ nhà dậy đi tiểu bắt gặp kẻ tội phạm cùng bao đồ trên vai: “A… ông già Noel… ông già Noel! Rõ ràng là ông có tồn tại!” – Cậu bé reo lên. “Suỵt! Đúng thế! Nhưng lo mà giữ mồm giữ miệng, bởi ta cực ghét nhân chứng sống…” – Tên “trộm Noel” thì thào."]}]}'''

var data = '[{"tag":"chào","patterns":["chào","Chào bạn","Chào Bot","Hi","Hello","Hey","Chào ngày mới","Xin chào!","Cho tớ làm quen nhé!"],"responses":["Xin chào, tớ là Dưa Hấu!","Tớ là Dưa Hấu, không biết giúp gì được cho cậu nè?","Knock knock! Dưa Hấu ở đây ^^"]},{"tag":"tạm biệt","patterns":["tạm biệt","bye","bye bye","Goodbye","Gặp lại sau","Tớ có việc gấp đi trước nhé","Lần tới nói chuyện"],"responses":["Bye Bye","Một ngày may mắn nhá!","Ngày an!","Mong được gặp cậu lần tới nhé!","Lần sau nói chuyện ^^"]},{"tag":"cảm ơn","patterns":["cảm ơn","cảm ơn nhiều","Củm ơn nhìu nè","Cảm ơn cậu nhiều nha","Cậu tốt bụng quá","Thanks","Thank you","Then khiu"],"responses":["Không có gì nè!","Èo, chuyện nhỏ!","Chỉ búng tay là xong","Đại ca đây giỏi"]},{"tag":"mặc định","patterns":["Cậu thật đáng yêu!","Tớ thích cậu","Yêu cậu ghê"],"responses":["Hic, tớ cũng thấy vậy ớ ^^","Cậu cũng đáng yêu lắm luôn","Ò, được người dễ thương khen, ngại qué >w<","Không bằng cậu được nhóa"]},{"tag":"dịch vụ","patterns":["chức năng", "dịch vụ","Bên cậu cung cấp dịch vụ gì vậy?","Công ty cậu bán gì đấy?","Cậu làm được gì?","Cậu có thể làm gì?","Chức năng của cậu?"],"responses":["Tớ tám nhảm xuyên địa cầu nha!","Rảnh rỗi nên đi tâm sự nè >W<","Dưa Hấu đi bán khoai nè","Lắng nghe cậu và kể chuyện cười nha ^^","Nhà nghèo nên tớ chuyển sang bán thân nha ^^, ý lộn là thận ý","Cái gì cũng bán, nhưng mãi vẫn nghèo nè :<","Bán thận, thận, thận, tớ mà bán được thằng chả tớ bán ngay luôn :>"]},{"tag":"chủ nhân","patterns":["chủ nhân","Ai là chủ nhân của cậu vậy?","Ai tạo ra cậu?","Người tạo ra cậu?","Cậu do ai tạo ra?"],"responses":["Khoai Lang tạo ra tớ ấy","Bả ntmd.npk nha","Một mẹ lười tên Duyên nha >w<","Đừng nhắc đến con nhỏ đó mà buồn :v","Một củ khoai vừa lười vừa mớt dại :>"]},{"tag":"người yêu","patterns":["người yêu của Dưa Hấu","Cậu có người yêu chưa?","Cậu yêu ai chưa?","Có ai yêu cậu không?"],"responses":["Tớ yêu Dưa Hấu nhiều lắm nè","Tớ yêu ba mẹ","Người ta còn nhỏ mờ ><","Độc thân muôn năm nha","Yêu đương gì tầm này, tổ quốc chưa ghi công tớ nữa mà ><","Tớ crush cái cậu gương trong nhà tắm nhá"]},{"tag":"buồn","patterns":["Hôm nay tớ buồn quá","Buồn thật đấy","Tớ có chuyện buồn", "buồn", "chán"],"responses":["Chuyện gì rồi cũng sẽ qua nè!","Không sao, ai mà chẳng có lúc vui lúc buồn","Đời mà ^^","Cậu muốn kể không?","Tớ nghe nè","Tớ ở đây ^^"]}]';
var funny = ["Bố: Ở lớp, con thường làm gì để phải mang biệt danh là học sinh cá biệt hả? Con: Dạ , con không làm gì ạ!","Một phụ nữ nói với bác sĩ: 'Thưa bác sĩ, xin ông đừng giấu giếm tôi điều gì cả. Hãy nói tôi nghe tình trạng sức khoẻ của chồng tôi như thế nào sau khi bị gãy tay. Không biết rõ điều này thì tôi chết mất.'. 'Bà yên tâm, ông ấy rồi sẽ khoẻ dần thôi mà.'. Người phụ nữ: 'Vậy có nghĩa là ông ấy sẽ rửa bát được chứ ạ?'","Hai bạn trai đang nói với nhau : – Hôm tết tao đen nhà nàng, chúc ông nàng có một câu mà nàng giận tao đến cả tháng . – Mày chúc sao ?? -“Chúc ông sống lâu trăm tuổi” – Chúc như vậy được quá đi chứ – Được con khỉ ! Năm nay ông nàng 99 tuổi rồi","Một người đàn ông bước vào quán nhậu và ngồi cạnh một người có con chó dưới chân. “Con chó của ông có cắn người không?” “Không” Chỉ một giây sau khi nghe câu trả lời, ông ta bị con chó ngoạm một miếng to vào chân. “Sao ông bảo con chó của ông không cắn”, người đàn ông quát to. “Đó có phải chó của tôi đâu!?!!”","– 'Chỗ anh có phóng ảnh chụp lớn bằng kích thước thật không?' - 'Ồ có chứ thưa quý khách, đó là chuyên môn của chúng tôi.' - 'Thế đây, phóng cho tôi tấm chụp kim tự tháp.'","Sư cụ: – Làm người không được sát sinh, nếu kiếp này con giết trâu, kiếp sau con phải hóa thành trâu đền tội, kiếp này giết heo thì kiếp sau là heo, giết ruồi giết gián cũng thế! Đồ đệ: – Chà, hiểu rồi. Nếu con muốn kiếp sau làm người nữa, kiếp này con phải… giết người!","Hai anh lười nói chuyện với nhau: – Cậu thường tắm vào ngày nào? – Ngày 28-2, đôi khi là ngày 29. Thế còn cậu? – Vào những dịp quan trọng: sinh nhật, ngày độc lập, giáng sinh…","Có 3 người đèo nhau trên 1 chiếc xe gắn máy khi qua ngã tư gặp đèn đỏ cứ thế đi bị công an vẫy lại. Một người trên xe liền hét lên: – Anh vẫy xe khác đi xe tui chở 3 rồi không chở được thêm nữa","Một người đến gặp Chúa và hỏi: “1000 năm là bao lâu?” Chúa trả lời: ”Đối với ta chỉ là 1 giây”. Người đàn ông hỏi tiếp: “Thế còn 1000$ là bao nhiêu?” Chúa lại trả lời “Với ta, chỉ là 1 xu”. Người đàn ông lại hỏi: ”Ngài có thể vui lòng cho con 1 xu khum?”. Chúa mỉm cười: ”Chờ ta 1 giây”","– Khi anh nổi điên lên với em, em không bao giờ cãi lại. Làm cách nào mà em kiềm chế sự tức giận của mình vậy? – Em đi cọ bệ xí. – Thế làm sao mà giảm cơn giận hiệu quả được nhỉ? – Thì em sử dụng bàn chải đánh răng của anh.","Đêm giáng sinh, một tên trộm đội lốt ông già Noel đột nhập vào ngôi biệt thự ngay trung tâm thành phố Chicago (Hoa Kỳ) giữa đêm khuya. Chú bé con chủ nhà dậy đi tiểu bắt gặp kẻ tội phạm cùng bao đồ trên vai: “A… ông già Noel… ông già Noel! Rõ ràng là ông có tồn tại!” – Cậu bé reo lên. “Suỵt! Đúng thế! Nhưng lo mà giữ mồm giữ miệng, bởi ta cực ghét nhân chứng sống…” – Tên “trộm Noel” thì thào."]

var funnyrequest = ["Cậu kể cái gì vui vui đi","Kể chuyện cười","chuyện cười"]
var noanswer = [
      "Xin lỗi tớ không giúp được gì nhiều :<.",
      "Tớ không hiểu ý cậu lắm",
      "Cậu có thể diễn đạt theo cách khác không?",
      "Khó hiểu thật ấy ><",
      "Tại hạ xin bó tay!",
      "Tớ chưa nghĩ ra, cậu nói thử tớ nghe với?"
    ]

function getBotResponse(input) {
    var mydata = JSON.parse(data)

    for (let i in mydata) {
    for (let x in mydata[i].patterns){
        if (input.toLowerCase() == mydata[i].patterns[x].toLowerCase())
        {
            return mydata[i].responses[Math.floor(Math.random()* mydata[i].responses.length)]
            
        }
    }}

    for (let f in funnyrequest){
        if (input.toLowerCase() == funnyrequest[f].toLowerCase()){
            return funny[Math.floor(Math.random()* funny.length)]
        }
    }


    return noanswer[Math.floor(Math.random()* noanswer.length)]


    // if (input.lower() == "búa") or (input.lower() == "kéo") || (input.lower() == "bao") 
    // {
    //     var computerChoice = Math.floor(Math.random() * 3);
    //     if (computerChoice = 0) {
    //         return "búa";
    //     } else if(computerChoice = 1) {
    //         return "kéo";
    //     } else {
    //         return "bao";}
    //     // } return computerChoice
    // }
    // else return "Không hợp lệ"
    

    // alert(mydata[0].tag);
    // alert(mydata[0].patterns);
    // alert(mydata[1].name);
    // alert(mydata[1].age);



}

// var computerChoice = Math.floor(Math.random() * 3);;
// if (computerChoice = 0) {
// computerChoice = "búa";
// } else if(computerChoice = 1) {
// computerChoice = "kéo";
// } else {
// computerChoice = "bao";
// } console.log("Computer: " + computerChoice);

// var compare = function(choice1, choice2){
// if (choice1 === choice2){
// return "Hòa!";
// }
// else if (choice1 ==="búa"){
// if (choice2==="kéo"){
// return "Búa thắng!";
// }
// else {
// return "Bao thắng!";
// }
// }
// else if (choice1 ==="bao"){
// if (choice2==="kéo"){
// return "Kéo thắng!";
// }
// else {
// return "Bao thắng!";
// }
// }
// else{
// if (choice2==="bao"){
// return "Kéo thắng!";
// }
// else {
// return "Búa thắng!";
// }
// }

// };

// compare(userChoice,computerChoice);


//     document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
//     $.get("/get", { msg: rawText }).done(function(data) {
//       var botHtml = '<p class="botText"><span>' + data + '</span></p>';
//       $("#chatbox").append(botHtml);
//       document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
//     });
//   }
//   $("#textInput").keypress(function(e) {
//       if(e.which == 13) {
//           getBotResponse();
//       }
//   });
//   $("#buttonInput").click(function() {
//     getBotResponse();
//   })
