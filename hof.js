const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submitVotes = document.querySelector('.button-votes')
const popup = document.querySelector(".votes-popup")

checkboxes.forEach(checkbox => checkbox.addEventListener('change', (e) => {
    e.target.classList.add('checked')
}))

submitVotes.addEventListener("click", (e) => {
    const votedPlayers = document.querySelectorAll('.checked');
    
    let paragraph = document.createElement('p');
    var text = "You voted for: ";
    const playerVoted = [];
    votedPlayers.forEach(player => {
        playerVoted.push(player.name)
    })
    const result = playerVoted.join(", ")
    text += result;
    paragraph.textContent = text;
    popup.appendChild(paragraph)

    let button = document.createElement('button');
    button.textContent = "Close"
    button.classList.add('close-popup')
    popup.appendChild(button)

    popup.style.display = "flex";
});

document.body.addEventListener("click", (e) => {
    if ((e.target.classList.contains('close-popup'))) {
        const votesPopup = document.querySelector(".votes-popup");
        votesPopup.style.display = "none";

        while (votesPopup.firstChild) {
            votesPopup.removeChild(votesPopup.firstChild)
        }

        const votedPlayers = document.querySelectorAll('.checked');
        votedPlayers.forEach(player => {
            player.classList.remove("checked")
            player.checked = false;
        })
    }
});




