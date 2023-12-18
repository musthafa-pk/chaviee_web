// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(11.2754878, 75.7779126),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function toggleDetails(id){
    var moreDetails = document.getElementById(id);
    moreDetails.style.display = moreDetails.style.display === 'none' ? 'block' : 'none';
}

    function toggleChat() {
        var chatContainer = document.getElementById("chatContainer");
        chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
    }
    
    var lastMessages = [];

function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    // Add the user's message to the lastMessages array
    lastMessages.push(userInput);

    // Limit the array to store only the last 5 messages
    if (lastMessages.length > 5) {
        lastMessages.shift();
    }

    // Display the messages in the chat log
    displayMessages();

    // Clear the input field
    document.getElementById("userInput").value = "";

    // Simulate a response from the chatbot (replace with your logic)
    var botResponse = "Received: " + userInput;
    appendMessage("Bot", botResponse);
}

function displayMessages() {
    var chatLog = document.getElementById("chatLog");
    chatLog.innerHTML = ""; // Clear previous messages

    for (var i = 0; i < lastMessages.length; i++) {
        var messageElement = document.createElement("div");
        messageElement.className = "user-message";
        messageElement.innerHTML = `<strong>User:</strong> ${lastMessages[i]}`;
        
        // Add a click event to each message to send it as input
        messageElement.addEventListener("click", function () {
            var clickedMessage = this.innerText.replace("User:", "").trim();
            document.getElementById("userInput").value = clickedMessage;
        });

        chatLog.appendChild(messageElement);
    }

    chatLog.scrollTop = chatLog.scrollHeight;
}

function appendMessage(sender, message) {
    var chatLog = document.getElementById("chatLog");
    var messageElement = document.createElement("div");
    messageElement.className = sender === "User" ? "user-message" : "bot-message";
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Initial display of last 5 messages
displayMessages();

//transition
// Function to check if the element is in the viewport
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to handle the scroll event
        function handleScroll() {
            var container = document.getElementById('lottie-container9');

            if (isInViewport(container)) {
                container.classList.add('visible');
            } else {
                container.classList.remove('visible');
            }
        }

        // Attach the handleScroll function to the scroll event
        window.addEventListener('scroll', handleScroll);

        // Trigger the initial check
        handleScroll();

        //make dragable
        var draggableElement = document.getElementById('lottie-container8');
    var offsetX, offsetY, isDragging = false;

    draggableElement.addEventListener('mousedown', function (e) {
      isDragging = true;
      offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
      offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
      draggableElement.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function (e) {
      if (isDragging) {
        var x = e.clientX - offsetX;
        var y = e.clientY - offsetY;

        draggableElement.style.left = x + 'px';
        draggableElement.style.top = y + 'px';
      }
    });

    document.addEventListener('mouseup', function () {
      isDragging = false;
      draggableElement.style.cursor = 'grab';
    });
    // end of dragable

  AOS.init();

  //q and ans
  function showAnswer(question) {
    var answer = getAnswer(question); // Replace with a function that retrieves the answer based on the question
    var chatLog = document.getElementById("chatLog");
    chatLog.innerHTML += '<div class="chat-message">Answer: ' + answer + '</div>';
  }

  function sendEmail(question){
    if(question == 'Q3'){
        var emailAddress = 'support@chaavie.com';
        var subject = 'Support Request';
        var body = 'I need support';
        var mailtoLink = 'mailto:' +emailAddress + '?subject' + encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
        window.location.href = mailtoLink;
    }else{
        showAnswer(question);
    }
  }

  function getAnswer(question) {
    switch (question) {
      case 'Q1':
        return '+91 8086730010';
      case 'Q2':
        return 'contact@chaaviesolutions.com';
      case 'Q3':
        return 'Digital Marketing, <br> Web Development, <br> Digital Transformation, <br> Mobile App Development.';
      default:
        return 'I don\'t have an answer for that question.';
    }
  }