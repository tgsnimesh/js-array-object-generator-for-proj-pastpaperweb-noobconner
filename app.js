const subjects = [];

function saveSubjects() {
  const subjectsContainer = document.getElementById("subjectsContainer");

  subjectsContainer.querySelectorAll(".subject").forEach((subjectElement) => {
    const subjectName = subjectElement.querySelector(".subjectName").value;
    const subtopics = [];

    subjectElement.querySelectorAll(".subtopic").forEach((subtopicElement) => {
      const subtopicName = subtopicElement.querySelector(".subtopicName").value;
      const topics = [];

      subtopicElement.querySelectorAll(".topic").forEach((topicElement) => {
        const topicName = topicElement.querySelector(".topicName").value;
        const links = [];

        topicElement.querySelectorAll(".link").forEach((linkElement) => {
          const linkName = linkElement.querySelector(".linkName").value;
          const linkUrl = linkElement.querySelector(".linkUrl").value;
          links.push({ name: linkName, url: linkUrl });
        });

        topics.push({ name: topicName, links });
      });

      subtopics.push({ name: subtopicName, topics });
    });

    subjects.push({ name: subjectName, subtopics });
  });

  displayArray();
  clearForm();
}

function displayArray() {
  document.getElementById("arrayOutput").textContent = JSON.stringify(
    subjects,
    null,
    2
  );
}

function clearForm() {
  document.getElementById("subjectForm").reset();
  document.getElementById("subjectsContainer").innerHTML = `
        <div class="subject">
            <h2>Add Subject</h2>
            <label for="subjectName">Subject Name:</label>
            <input type="text" class="subjectName" required><br>

            <div class="subtopicsContainer">
                <div class="subtopic">
                    <h2>Add Subtopic</h2>
                    <label for="subtopicName">Subtopic Name:</label>
                    <input type="text" class="subtopicName" required><br>

                    <div class="topicsContainer">
                        <div class="topic">
                            <h3>Add Topic</h3>
                            <label for="topicName">Topic Name:</label>
                            <input type="text" class="topicName" required><br>
                            <div class="linksContainer">
                                <h4>Add Link</h4>
                                <div class="link">
                                    <label for="linkName">Link Name:</label>
                                    <input type="text" class="linkName" required><br>
                                    <label for="linkUrl">Link URL:</label>
                                    <input type="text" class="linkUrl" required><br>
                                    <button type="button" onclick="removeLink(this)" class="remove-btn">Remove Link</button>
                                </div>
                            </div>
                            <button type="button" onclick="addLink(this)" class="add-btn">Add Another Link</button><br>
                            <button type="button" onclick="removeTopic(this)" class="remove-btn">Remove Topic</button>
                        </div>
                    </div>
                    <button type="button" onclick="addTopic(this)" class="add-btn">Add Another Topic</button><br>
                    <button type="button" onclick="removeSubtopic(this)" class="remove-btn">Remove Subtopic</button>
                </div>
            </div>
            <button type="button" onclick="addSubtopic(this)" class="add-btn">Add Another Subtopic</button><br>
            <button type="button" onclick="removeSubject(this)" class="remove-btn">Remove Subject</button>
        </div>`;
}

function addSubject() {
  const subjectHTML = `
        <div class="subject">
            <h2>Add Subject</h2>
            <label for="subjectName">Subject Name:</label>
            <input type="text" class="subjectName" required><br>

            <div class="subtopicsContainer">
                <div class="subtopic">
                    <h2>Add Subtopic</h2>
                    <label for="subtopicName">Subtopic Name:</label>
                    <input type="text" class="subtopicName" required><br>

                    <div class="topicsContainer">
                        <div class="topic">
                            <h3>Add Topic</h3>
                            <label for="topicName">Topic Name:</label>
                            <input type="text" class="topicName" required><br>
                            <div class="linksContainer">
                                <h4>Add Link</h4>
                                <div class="link">
                                    <label for="linkName">Link Name:</label>
                                    <input type="text" class="linkName" required><br>
                                    <label for="linkUrl">Link URL:</label>
                                    <input type="text" class="linkUrl" required><br>
                                    <button type="button" onclick="removeLink(this)" class="remove-btn">Remove Link</button>
                                </div>
                            </div>
                            <button type="button" onclick="addLink(this)" class="add-btn">Add Another Link</button><br>
                            <button type="button" onclick="removeTopic(this)" class="remove-btn">Remove Topic</button>
                        </div>
                    </div>
                    <button type="button" onclick="addTopic(this)" class="add-btn">Add Another Topic</button><br>
                    <button type="button" onclick="removeSubtopic(this)" class="remove-btn">Remove Subtopic</button>
                </div>
            </div>
            <button type="button" onclick="addSubtopic(this)" class="add-btn">Add Another Subtopic</button><br>
            <button type="button" onclick="removeSubject(this)" class="remove-btn">Remove Subject</button>
        </div>`;

  document
    .getElementById("subjectsContainer")
    .insertAdjacentHTML("beforeend", subjectHTML);
}

function addSubtopic(button) {
  const subtopicHTML = `
        <div class="subtopic">
            <h2>Add Subtopic</h2>
            <label for="subtopicName">Subtopic Name:</label>
            <input type="text" class="subtopicName" required><br>
            <div class="topicsContainer">
                <div class="topic">
                    <h3>Add Topic</h3>
                    <label for="topicName">Topic Name:</label>
                    <input type="text" class="topicName" required><br>
                    <div class="linksContainer">
                        <h4>Add Link</h4>
                        <div class="link">
                            <label for="linkName">Link Name:</label>
                            <input type="text" class="linkName" required><br>
                            <label for="linkUrl">Link URL:</label>
                            <input type="text" class="linkUrl" required><br>
                            <button type="button" onclick="removeLink(this)" class="remove-btn">Remove Link</button>
                        </div>
                    </div>
                    <button type="button" onclick="addLink(this)" class="add-btn">Add Another Link</button><br>
                    <button type="button" onclick="removeTopic(this)" class="remove-btn">Remove Topic</button>
                </div>
            </div>
            <button type="button" onclick="addTopic(this)" class="add-btn">Add Another Topic</button><br>
            <button type="button" onclick="removeSubtopic(this)" class="remove-btn">Remove Subtopic</button>
        </div>`;

  button.parentElement
    .querySelector(".subtopicsContainer")
    .insertAdjacentHTML("beforeend", subtopicHTML);
}

function addTopic(button) {
  const topicHTML = `
        <div class="topic">
            <h3>Add Topic</h3>
            <label for="topicName">Topic Name:</label>
            <input type="text" class="topicName" required><br>
            <div class="linksContainer">
                <h4>Add Link</h4>
                <div class="link">
                    <label for="linkName">Link Name:</label>
                    <input type="text" class="linkName" required><br>
                    <label for="linkUrl">Link URL:</label>
                    <input type="text" class="linkUrl" required><br>
                    <button type="button" onclick="removeLink(this)" class="remove-btn">Remove Link</button>
                </div>
            </div>
            <button type="button" onclick="addLink(this)" class="add-btn">Add Another Link</button><br>
            <button type="button" onclick="removeTopic(this)" class="remove-btn">Remove Topic</button>
        </div>`;

  button.previousElementSibling.insertAdjacentHTML("beforeend", topicHTML);
}

function addLink(button) {
  const linkHTML = `
        <div class="link">
            <label for="linkName">Link Name:</label>
            <input type="text" class="linkName" required><br>
            <label for="linkUrl">Link URL:</label>
            <input type="text" class="linkUrl" required><br>
            <button type="button" onclick="removeLink(this)" class="remove-btn">Remove Link</button>
        </div>`;

  button.previousElementSibling.insertAdjacentHTML("beforeend", linkHTML);
}

function removeLink(button) {
  button.parentElement.remove();
}

function removeTopic(button) {
  button.parentElement.remove();
}

function removeSubtopic(button) {
  button.parentElement.remove();
}

function removeSubject(button) {
  button.parentElement.remove();
}

function downloadJSFile() {
  const blob = new Blob(
    [`const subjects = ${JSON.stringify(subjects, null, 2)};`],
    { type: "text/javascript" }
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "subjects.js";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
