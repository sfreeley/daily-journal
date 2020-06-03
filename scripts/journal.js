//journal entry object listing individual journal entries
const journalEntries = [
    {
    date: "5/19/20",
    concepts: "Cohort 39's front-end Demo Day, fixed issues with our bashrc and zshrc files, took the 16 Personalities quiz",
    mood: "nervous, hopeful, excited",
    entry: "I was so amazed by the demos this morning; it is absolutely amazing how creative everyone’s projects were and how much effort and hard work everyone put into them. I do not know enough right now to understand all the technologies they used, but it is very inspiring. I am humbled, nervous, and just a plethora of emotions. I hope to be able to do something even a little bit close to what I have seen. We all took the 16Personalities quiz; I was not surprised about the result, but I was surprised at just how accurate it was as I continued to read further. We were split into our “results group” and asked to discuss what the most effective and most ineffective way of communicating was for our group. I think the consensus was we all really disliked aggressive styles. For homework, I tried working on the CSS Selectors practice… after hours of trying everything to use CSS parent-child relationships to reach the nested elements, I realized I mistyped my closing </h4> tag in HTML. This whole experience enlightened me about how we should be troubleshooting our issues and having fresh eyes look at our code really does help  (thank you to the lovely classmates in the zoom room)!"
    },

    {
    date: "5/20/20",
    concepts: "CSS Selectors, HTML Components, how to create a flex-container in HTML and style with CSS, usefulness of CSSTricks website",
    mood: "appreciative, nervous",
    entry: "We coded along with Brenda on VSCode to recreate the Wizard of Oz page she showed us on figma. There is so much we can do with CSS! Learned to open Network CTRL-SHIFT-J and make sure to click “Disable Cache” in order to see the latest changes you have made to the webpage. Learned about semantic HTML components and CSS selector usage; integrated VSCode into our workflow and used serve -n to serve the webpage.We met out Big Sibs today; she is so down-to-earth and gave really great advice. I am sure she will be a great resource in the future. Started working on flexbox concepts with Flexbox Froggy; finished HTML Practice exercise. Reflecting on the past few days, I am grateful for the classmates who are so giving and willing to help. I think part of my nervousness stems from not having very much previous experience in this field- that’s why we’re here!. I feel like I do not have to be embarrassed about asking what I think may be stupid questions or if I don’t understand something… the learning style is very different from grad/professional school where there was not very much room to make mistakes or fail."
    },

    {
    date: "5/21/20",
    concepts: "Git, GitHub Workflow, initiating a repository on GH, creating a new branch to edit or add changes to current WoZ project",
    mood: "appreciative, embarrassed, hopeful",
    entry: "We pushed our Wizard of Oz project up to GitHub and went through the whole process for the initial commit. Created new branch in our WoZ project in order to add a new “witches.html” page; pushed the updates up to GH, confirmed pull request, merged files to master. Embarrassed that I could not get pictures saved into my Linux folder (one classmate had a really good idea about creating a shortcut from my Linux folder to my Desktop); Realized how powerful flexbox can be and how much simpler it is to use that to create organization and structure on your webpage. Finished Flexbox Froggy and started working on Flexbox practice. Committed my initial versions of HTML Practice, CSS Selectors. Learned about .gitignore- once added will not track any unnecessary files, therefore will not be uploaded to GH. README.md explains what your project is about; how to run your code."
    },

    {
    date: "5/22/20",
    concepts: "Git clone a repository, Git fetch, Git pull master origin",
    mood: "appreciative, embarrassed, nervous",
    entry: "Brenda created an HTML page with her favorite things and we cloned her repository on GH and each group came up with their favorite things list. We created pull requests for them to be reviewed; took turns approving each other’s pull requests after viewing their code. After any changes were made we “pulled” it to review it once more and if everything was good to go, we allowed the merge of their branch to the master. I embarrassingly realized I submitted my commits for my practice problems onto cohort41’s page rather than my own, but thanks to Audrey we got on the right track again! Finished UI/UX  Challenge for HTML Practice and created new branch sf-styling? in GitHub to update it. Started updating my LinkedIn page after four or more years of inactivity… To reset or change the URL for a remote git repository: git remote set-url origin URL from GH (SSH key not HTTP) after you create a new repository. git remote -v  will display URLs of your remote repositories connected to your local computer’s repository."
    }
];

//using a function to represent the HTML code that will go into index.html
const journalConversion = (journalObject) => {
    const journalHTMLRepresentation = `
    <div class="entryLog__components">
        <ul>
            <li> <strong>Date:</strong> ${journalObject.date}</li>
            <li> <strong>Concepts:</strong> ${journalObject.concepts}</li>
            <li> <strong>Mood:</strong> ${journalObject.mood}</li>
            <li> <strong>Entry:</strong> ${journalObject.entry}</li>
        </ul>
    </div>
    `
    return journalHTMLRepresentation;
}
//using function to loop through the journalEntries array in order to display all the object's values in the HTML;

const entryLog = () => {
    for (currentJournalObject of journalEntries) {
        // calling the journalConversion function and running the individual objects as arguments
        const journalHTML = journalConversion(currentJournalObject);

        // selecting the <article> element in order to put our HTML code in there
        const journalArticleElement = document.querySelector(".entryLog");

        // changing the <article> element's content by inserting the value of journalHTML which is a callback function to journalConversion(which returns the HTML code)
        journalArticleElement.innerHTML += journalHTML;
    }
}

//calling the entryLog function which will allow everything to run 
entryLog();