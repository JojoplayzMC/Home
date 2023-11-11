window.addEventListener('DOMContentLoaded', () => {
    var close = document.getElementsByClassName("closeLoginPrompt")[0];
    var modal = document.getElementById("loginPrompt");

    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Pass modal as an argument to the function
    function openModal(modal) {
        modal.style.display = "block";
    }

    function helpPopup() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    // Assign the openModal function to a global variable
    window.openModal = openModal;
    window.helpPopup = helpPopup;
    fetch('uuids.txt')
        .then(response => response.text())
        .then(data => {
            function checkUUID() {
                var enteredUUID = document.getElementById("uuidInput").value;
                var enteredFirst8 = enteredUUID.substring(0, 8);

                // Check if enteredFirst8 matches the first 8 characters of any UUID in the list
                for (var i = 0; i < uuidList.length; i++) {
                    if (uuidList[i].startsWith(enteredFirst8)) {
                        // Redirect to a certain website (replace 'your_website_url' with the actual URL)
                        window.location.href = 'your_website_url';
                        return;
                    }
                }

                // If no match is found, display an error or handle it accordingly
                alert("Invalid UUID. Please try again or contact support.");
            }
        })
        .catch(error => console.error('Error reading file:', error));
});
