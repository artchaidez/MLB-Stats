const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submitVotes = document.querySelector('.button-votes')
const fixVotesPopup = document.querySelector(".fix-votes-popup")
const validVotesPopup = document.querySelector(".votes-popup")

checkboxes.forEach(checkbox => checkbox.addEventListener('change', (e) => {
    const ballotChecked = e.target.classList.contains('checked');
    ballotChecked ? e.target.classList.remove('checked') : e.target.classList.add('checked');

    const totalVotes = document.querySelectorAll('.checked').length;

    if (totalVotes > 10) {
        let paragraph = document.createElement('p');
        paragraph.textContent = "You cannot vote for more than 10 candidates. Please reconsider your votes.";
        fixVotesPopup.appendChild(paragraph)
        let button = document.createElement('button');
        button.textContent = "Close"
        button.classList.add('close-popup')
        fixVotesPopup.appendChild(button)
        fixVotesPopup.style.display = "flex";

        e.target.checked = false;
        e.target.classList.remove('checked')
    } 
}))

submitVotes.addEventListener("click", () => {    
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
    validVotesPopup.appendChild(paragraph)

    let button = document.createElement('button');
    button.textContent = "Close"
    button.classList.add('close-popup')
    validVotesPopup.appendChild(button)

    validVotesPopup.style.display = "flex";
});

fixVotesPopup.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-popup")) {
        fixVotesPopup.style.display = "none";

        while (fixVotesPopup.firstChild) {
            fixVotesPopup.removeChild(fixVotesPopup.firstChild)
        }
    }
})

validVotesPopup.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-popup")) {
        validVotesPopup.style.display = "none";

        while (validVotesPopup.firstChild) {
            validVotesPopup.removeChild(validVotesPopup.firstChild)
        }

        const votedPlayers = document.querySelectorAll('.checked');
        votedPlayers.forEach(player => {
            player.classList.remove("checked")
            player.checked = false;
        })
    }
});




