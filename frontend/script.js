// REGISTER DONOR

async function registerDonor() {

    const name = document.getElementById("name").value;
    const blood = document.getElementById("blood").value;

    if (!name || !blood) {
        alert("Please fill all fields");
        return;
    }

    try {

        const response = await fetch(
            "https://lifelinkai-8rn4.onrender.com/register-donor",
            
            {
                method: "POST",
            
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    blood_group: blood
                })
            }
        );

        const data = await response.json();

        alert(data.message);

        document.getElementById("name").value = "";
        document.getElementById("blood").value = "";

    } catch (error) {

        alert("Backend Connection Error");
        console.log(error);

    }
}


// SEARCH DONOR

async function searchDonor() {

    const blood =

        document.getElementById("searchBlood").value;

    try {

        const response = await fetch(
            "https://lifelinkai-8rn4.onrender.com/donors"
        );

        const donors = await response.json();

        const filtered = donors.filter(
            donor =>
                donor.blood_group &&
                donor.blood_group
                    .toLowerCase()
                    .includes(
                        blood.toLowerCase()
                    )
        );

        let output = "";

        if (filtered.length === 0) {

            output =
                "<p>No donors found.</p>";

        } else {

            filtered.forEach(donor => {

                output += `
                <p>
                    👤 ${donor.name}
                    <br>
                    🩸 ${donor.blood_group}
                </p>
                `;

            });

        }

        document.getElementById(
            "searchResults"
        ).innerHTML = output;

    } catch (error) {

        console.log(error);

        document.getElementById(
            "searchResults"
        ).innerHTML =
            "<p>Error loading donors.</p>";

    }
}


// AI ASSISTANT

async function askAI() {

    const question =
        document.getElementById("question").value;


    if (!question) {
        return;
    }

    try {

        const response = await fetch(
            "https://lifelinkai-8rn4.onrender.com/ask-ai",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: question
                })
            }
        );

        const data = await response.json();

        document.getElementById(
            "answer"
        ).innerHTML = `
            <div class="ai-message">
                🤖 ${data.answer}
            </div>
        `;

    } catch (error) {

        console.log(error);

        document.getElementById(
            "answer"
        ).innerHTML =
            "Unable to connect to LifeLink AI.";

    }
}
function checkCompatibility(){

    const blood =
        document.getElementById("bloodType").value;

    const compatibility = {

        "O-":"Universal Donor",
        "O+":"Can donate to O+, A+, B+, AB+",
        "A-":"Can donate to A-, A+, AB-, AB+",
        "A+":"Can donate to A+, AB+",
        "B-":"Can donate to B-, B+, AB-, AB+",
        "B+":"Can donate to B+, AB+",
        "AB-":"Can donate to AB-, AB+",
        "AB+":"Universal Receiver"

    };

    document.getElementById(
        "compatibilityResult"
    ).innerHTML =
        compatibility[blood];
}
