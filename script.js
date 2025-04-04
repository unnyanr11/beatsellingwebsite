// Filtering logic for beats  
document.getElementById("apply-filters").addEventListener("click", function () {  
    const bpm = document.getElementById("bpm").value;  
    const genre = document.getElementById("genre").value;  
    const mood = document.getElementById("mood").value;  

    const beats = document.querySelectorAll(".beat-card");  

    beats.forEach(beat => {  
        const beatBpm = beat.getAttribute("data-bpm");  
        const beatGenre = beat.getAttribute("data-genre");  
        const beatMood = beat.getAttribute("data-mood");  

        // Show/hide beats based on filters  
        if (  
            (bpm === "" || beatBpm.includes(bpm)) &&  
            (genre === "" || beatGenre === genre) &&  
            (mood === "" || beatMood === mood)  
        ) {  
            beat.style.display = "block";  
        } else {  
            beat.style.display = "none";  
        }  
    });  
});  