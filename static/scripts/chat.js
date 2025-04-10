var coll = document.getElementsByClassName("collapsible");

// Variable yang akan dapatkan input
var inputUser;
var bilanganAnak;

var nisab = 20361.59;
var gajiTahunan = 0;
var bonusTahunan = 0;
var elaunDanLainLain = 0;
var gajiBulanan = 0;
var pendapatanTahunan = 0;
var bilanganAnakAnda = 0;
var kifayahDewasaBekerja = 0;
var kifayahDewasaTidakBekerja = 0;
var kifayahSekolahMenengah = 0;
var kifayahSekolahRendah = 0;
var kifayahPraSekolah = 0;
var kifayahBayi = 0;
var kifayahUniversiti = 0;
var kifayahSakitKronik = 0;
var kifayahOKU = 0;
var hadKifayah = 0;

// Boolean untuk determine fungsi 'Enter'
var kira_zakat_ada_tanggungan = false;
var isteri_bekerja = false;
var first_bot_message = false;
var kira_zakat_tiada_tanggungan = false;
var isteri_tidak_bekerja = false;
var enterRumahSendiri = false;
var enterGetDewasaBekerja = false;
var enterKifayahDewasaTidakBekerja = false;
var enterGetSekolahMenengah = false;
var enterGetSekolahRendah = false;
var enterGetPraSekolah = false;
var enterGetBayi = false;
var enterGetUniversiti = false;
var enterGetSakitKronik = false;
var enterGetOKU = false;
var enterRumahSewa = false;
var input_gaji_bulanan = false;
var input_elaun_dan_lainlain = false;
var enterSelainFakirMiskin = false;

// Boolean untuk bantu dalam calculation
var getIsteriBekerja = false;

var jenisRumah = true; // true = rumah sendiri , false = rumah sewa

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

sebelumFirstBotMessage();

function sebelumFirstBotMessage() {
    let firstMessage = "Assalamualaikum, boleh saya bantu?"
    document.getElementById("botStarterMessage").innerHTML = '<div class="botText"><span>' + firstMessage +'</p></span></div>';
    firstBotMessage();
}

function firstBotMessage() {
    console.log("Sekarang di 'function firstBotMessage()'");

    enterSelainFakirMiskin = true;
    kira_zakat_ada_tanggungan = false;
    isteri_bekerja = false;
    first_bot_message = true;
    kira_zakat_tiada_tanggungan = false;
    isteri_tidak_bekerja = false;
    enterRumahSendiri = false;
    enterGetDewasaBekerja = false;
    enterKifayahDewasaTidakBekerja = false;
    enterGetSekolahMenengah = false;
    enterGetSekolahRendah = false;
    enterGetPraSekolah = false;
    enterGetBayi = false;
    enterGetUniversiti = false;
    enterGetSakitKronik = false;
    enterGetOKU = false;
    enterRumahSewa = false;
    input_gaji_bulanan = false;
    input_elaun_dan_lainlain = false;
    
    let botHtml = '<div class="botText"><span>Anda boleh tekan butang di bawah untuk bertanyakan perkara yang anda ingin bertanya kepada saya.</span></div>';
    $("#chatbox").append(botHtml);
    
    document.getElementById("buttonChatBox").innerHTML = 
    '<div class="botText"><button onClick="infoZakatButton()" class="buttonChatBot">Info Zakat</button></div>'+
    '<div class="botText"><button onClick="kiraZakatButton()" class="buttonChatBot">Kira Zakat</button></div>'+
    '<div class="botText"><button onClick="kelayakanZakatButton()" class="buttonChatBot">Kelayakan Zakat</button></div>';

    let time = getTime();
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

function getHardResponse(userText) {
    let botResponse = getAIResponse(userText);
}

// function getAIResponse(input) {
//     console.log("lalu sini?")
//     let msg1 = { name: "User", message: input }
//     messages.push(msg1);

//     fetch($SCRIPT_ROOT + '/predict', {
//         method: 'POST',
//         body: JSON.stringify({ message: input}),
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//     .then(r => r.json())
//     .then(r => {
//         //console.log(r.answer)
//         let botHtml = '<p class="botText"><span>' + r.answer + '</span></p>';
//         $("#chatbox").append(botHtml);

//         document.getElementById("chat-bar-bottom").scrollIntoView(true);
//         //let msg2 = { name: "Sam", message: r.answer};
//         //console.log(msg2['message']);
//         //messages.push(msg2['message']);
//         //return msg2['message'];
//         // updateChatText()
//         // textField.value = ''

//     }).catch((error) => {
//         console.error('Error:', error);
//         //updateChatText()
//         textField.value = ''
//     });
// }

// function getResponse() {
//     console.log("Sekarang di 'function getResponse()'");
//     let userText = $("#textInput").val();

//     if (userText == "") {
//         console.log("userText kosong dia akan lalu sini");
//         userText = "I love Code Palace!";
//         let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    
//         $("#textInput").val("");
//         $("#chatbox").append(userHtml);
//         document.getElementById("chat-bar-bottom").scrollIntoView(true);
//     }
//     else if (typeof Number(userText) === 'number' && !isNaN(userText)) {
//         console.log("userText ada nombor dia lalu sini");
//         let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
//         $("#textInput").val("");
//         $("#chatbox").append(userHtml);
//         document.getElementById("chat-bar-bottom").scrollIntoView(true);
//         inputUser = userText;
//     }
//     else {
//         console.log("userText perkataan dia lalu sini");
//         let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

//         $("#textInput").val("");
//         $("#chatbox").append(userHtml);
//         document.getElementById("chat-bar-bottom").scrollIntoView(true);
//         inputUser = userText;
//         //getHardResponse(userText);
//     }
// }

function getResponse() {
    console.log("Sekarang di 'function getResponse()'");
    let userText = $("#textInput").val().trim(); // Fix: Match HTML ID

    if (userText === "") {
        console.log("userText kosong dia akan lalu sini");
        userText = "I love Code Palace!";
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#chatbox").append(userHtml);
        $("#textInput").val("");
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        inputUser = userText;
    } else {
        console.log("userText ada input dia lalu sini");
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#chatbox").append(userHtml);
        $("#textInput").val("");
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        inputUser = userText;
    }
    return inputUser; // Return for use in sendButton
}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// function sendButton() {
//     if (first_bot_message == true) {
//         getResponse();
//     } else if (kira_zakat_ada_tanggungan == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             gajiBulanan = inputUser;
//             console.log("gajiBulanan = "+gajiBulanan);
//             inputGajiBulanan();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             kiraZakatAdaTanggungan();
//         }
//     } else if (kira_zakat_tiada_tanggungan == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             gajiBulanan = inputUser;
//             console.log("gajiBulanan = "+gajiBulanan);
//             inputGajiBulanan();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             kiraZakatTiadaTanggungan();
//         }
//     } else if (input_gaji_bulanan == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             elaunDanLainLain = inputUser;
//             console.log("elaunDanLainLain = "+elaunDanLainLain);
//             inputElaunDanLainLain();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             inputGajiBulanan();
//         }
//     } else if (input_elaun_dan_lainlain == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             bonusTahunan = inputUser;
//             console.log("bonusTahunan = "+bonusTahunan);
//             inputBonusTahunan();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             inputElaunDanLainLain();
//         }
//     } else if (isteri_bekerja == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             bilanganAnakAnda = inputUser;
//             console.log("bilanganAnakAnda = "+bilanganAnakAnda);
//             inputBilanganAnakAnda();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             isteriBekerja();
//         }
//     } else if (isteri_tidak_bekerja == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             bilanganAnakAnda = inputUser;
//             console.log("bilanganAnakAnda = "+bilanganAnakAnda);
//             inputBilanganAnakAnda();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             isteriTidakBekerja();
//         }
//     } else if (enterRumahSendiri == true) { // Bermulahnya untuk hadKifayahCalculator.js
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahDewasaBekerja = inputUser;
//             getDewasaBekerja();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             rumahSendiri();
//         }
//     } else if (enterGetDewasaBekerja == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahDewasaTidakBekerja = inputUser;
//             getDewasaTidakBekerja();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             getDewasaBekerja();
//         } 
//     } else if (enterKifayahDewasaTidakBekerja == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahSekolahMenengah = inputUser;
//             getSekolahMenengah();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             getDewasaTidakBekerja();
//         } 
//     } else if (enterGetSekolahMenengah == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahSekolahRendah = inputUser;
//         getSekolahRendah();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             getSekolahMenengah();
//         }
//     } else if (enterGetSekolahRendah == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahPraSekolah = inputUser;
//             getPraSekolah();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             getSekolahRendah();
//         }
//     } else if (enterGetPraSekolah == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahBayi = inputUser;
//             getBayi();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             getPraSekolah();
//         }
//     } else if (enterGetBayi == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahUniversiti = inputUser;
//             getUnivesiti();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             getBayi();
//         }
//     } else if (enterGetUniversiti == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahSakitKronik = inputUser;
//         getSakitKronik();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             getUnivesiti();
//         }
//     } else if (enterGetSakitKronik == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahOKU = inputUser;
//             getOKU();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             getSakitKronik();
//         }
//     } else if (enterRumahSewa == true) {
//         getResponse();
//         if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
//             kifayahDewasaBekerja = inputUser;
//             getDewasaBekerja();
//         }
//         else {
//             let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
//             $("#chatbox").append(botHtml);
//             document.getElementById("chat-bar-bottom").scrollIntoView(true);
//             rumahSewa();
//         }
//     } else if (enterSelainFakirMiskin == true) {
//         getResponse();
//         getHardResponse(inputUser);
//         semakSelainFakirMiskin();
//     }
// }

function sendButton() {
    let userText = getResponse(); // Get input and display it
    if (userText !== "") {
        // Handle specific flows
        if (first_bot_message == true) {
            // No action needed beyond displaying initial message
        } else if (kira_zakat_ada_tanggungan == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                gajiBulanan = userText;
                console.log("gajiBulanan = " + gajiBulanan);
                inputGajiBulanan();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                kiraZakatAdaTanggungan();
            }
        } else if (kira_zakat_tiada_tanggungan == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                gajiBulanan = userText;
                console.log("gajiBulanan = " + gajiBulanan);
                inputGajiBulanan();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                kiraZakatTiadaTanggungan();
            }
        } else if (input_gaji_bulanan == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                elaunDanLainLain = userText;
                console.log("elaunDanLainLain = " + elaunDanLainLain);
                inputElaunDanLainLain();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                inputGajiBulanan();
            }
        } else if (input_elaun_dan_lainlain == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                bonusTahunan = userText;
                console.log("bonusTahunan = " + bonusTahunan);
                inputBonusTahunan();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                inputElaunDanLainLain();
            }
        } else if (isteri_bekerja == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                bilanganAnakAnda = userText;
                console.log("bilanganAnakAnda = " + bilanganAnakAnda);
                inputBilanganAnakAnda();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                isteriBekerja();
            }
        } else if (isteri_tidak_bekerja == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                bilanganAnakAnda = userText;
                console.log("bilanganAnakAnda = " + bilanganAnakAnda);
                inputBilanganAnakAnda();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                isteriTidakBekerja();
            }
        } else if (enterRumahSendiri == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahDewasaBekerja = userText;
                getDewasaBekerja();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                rumahSendiri();
            }
        } else if (enterGetDewasaBekerja == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahDewasaTidakBekerja = userText;
                getDewasaTidakBekerja();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getDewasaBekerja();
            }
        } else if (enterKifayahDewasaTidakBekerja == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahSekolahMenengah = userText;
                getSekolahMenengah();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getDewasaTidakBekerja();
            }
        } else if (enterGetSekolahMenengah == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahSekolahRendah = userText;
                getSekolahRendah();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getSekolahMenengah();
            }
        } else if (enterGetSekolahRendah == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahPraSekolah = userText;
                getPraSekolah();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getSekolahRendah();
            }
        } else if (enterGetPraSekolah == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahBayi = userText;
                getBayi();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getPraSekolah();
            }
        } else if (enterGetBayi == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahUniversiti = userText;
                getUnivesiti();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getBayi();
            }
        } else if (enterGetUniversiti == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahSakitKronik = userText;
                getSakitKronik();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getUnivesiti();
            }
        } else if (enterGetSakitKronik == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahOKU = userText;
                getOKU();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getSakitKronik();
            }
        } else if (enterRumahSewa == true) {
            if (typeof Number(userText) === 'number' && !isNaN(userText)) {
                kifayahDewasaBekerja = userText;
                getDewasaBekerja();
            } else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                rumahSewa();
            }
        } else if (enterSelainFakirMiskin == true) {
            getAIResponse(userText); // Send to GPT-2
            semakSelainFakirMiskin();
        } else {
            // Default case: Send free-text to GPT-2
            getAIResponse(userText);
        }
    }
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

function home() {
    let userHtml = '<p class="userText"><span>Home</span></p>';
    $("#chatbox").append(userHtml);
    firstBotMessage();
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (first_bot_message == true) {
            getResponse();
        } else if (kira_zakat_ada_tanggungan == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                gajiBulanan = inputUser;
                console.log("gajiBulanan = "+gajiBulanan);
                inputGajiBulanan();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                kiraZakatAdaTanggungan();
            }
        } else if (kira_zakat_tiada_tanggungan == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                gajiBulanan = inputUser;
                console.log("gajiBulanan = "+gajiBulanan);
                inputGajiBulanan();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                kiraZakatTiadaTanggungan();
            }
        } else if (input_gaji_bulanan == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                elaunDanLainLain = inputUser;
                console.log("elaunDanLainLain = "+elaunDanLainLain);
                inputElaunDanLainLain();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                inputGajiBulanan();
            }
        } else if (input_elaun_dan_lainlain == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                bonusTahunan = inputUser;
                console.log("bonusTahunan = "+bonusTahunan);
                inputBonusTahunan();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                inputElaunDanLainLain();
            }
        } else if (isteri_bekerja == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                bilanganAnakAnda = inputUser;
                console.log("bilanganAnakAnda = "+bilanganAnakAnda);
                inputBilanganAnakAnda();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                isteriBekerja();
            }
        } else if (isteri_tidak_bekerja == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                bilanganAnakAnda = inputUser;
                console.log("bilanganAnakAnda = "+bilanganAnakAnda);
                inputBilanganAnakAnda();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                isteriTidakBekerja();
            }
        } else if (enterRumahSendiri == true) { // Bermulahnya untuk hadKifayahCalculator.js
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahDewasaBekerja = inputUser;
                getDewasaBekerja();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                rumahSendiri();
            }
        } else if (enterGetDewasaBekerja == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahDewasaTidakBekerja = inputUser;
                getDewasaTidakBekerja();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getDewasaBekerja();
            } 
        } else if (enterKifayahDewasaTidakBekerja == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahSekolahMenengah = inputUser;
                getSekolahMenengah();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getDewasaTidakBekerja();
            } 
        } else if (enterGetSekolahMenengah == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahSekolahRendah = inputUser;
            getSekolahRendah();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getSekolahMenengah();
            }
        } else if (enterGetSekolahRendah == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahPraSekolah = inputUser;
                getPraSekolah();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getSekolahRendah();
            }
        } else if (enterGetPraSekolah == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahBayi = inputUser;
                getBayi();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getPraSekolah();
            }
        } else if (enterGetBayi == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahUniversiti = inputUser;
                getUnivesiti();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getBayi();
            }
        } else if (enterGetUniversiti == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahSakitKronik = inputUser;
            getSakitKronik();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getUnivesiti();
            }
        } else if (enterGetSakitKronik == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahOKU = inputUser;
                getOKU();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                getSakitKronik();
            }
        } else if (enterRumahSewa == true) {
            getResponse();
            if (typeof Number(inputUser) === 'number' && !isNaN(inputUser)) {
                kifayahDewasaBekerja = inputUser;
                getDewasaBekerja();
            }
            else {
                let botHtml = '<p class="botText"><span>Nombor sahaja dibenarkan!</span></p>';
                $("#chatbox").append(botHtml);
                document.getElementById("chat-bar-bottom").scrollIntoView(true);
                rumahSewa();
            }
        } else if (enterSelainFakirMiskin == true) {
            getResponse();
            getHardResponse(inputUser);
            semakSelainFakirMiskin();
        }
    }
});