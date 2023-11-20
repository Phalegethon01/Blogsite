// Simulated comments data for the first blog post
let comments = [
    "This is a great post!",
    "Nice content. Keep it up!"
  ];
  
  // Simulated comments data for the second blog post ("Why 'eval' Should Not Be Used")
  let commentsForEval = [
    "Interesting topic!",
    "I didn't know about the risks of 'Ev'. Thanks for sharing."
  ];
  
  // Function to display comments for the first blog post
  function displayComments() {
    const commentList = document.getElementById("commentList");
    commentList.innerHTML = ""; // Clear existing comments
  
    comments.forEach((comment, index) => {
      const li = document.createElement("li");
      li.textContent = comment;
      li.classList.add("comment");
      li.style.animationDelay = `${index * 0.1}s`;
      commentList.appendChild(li);
    });
  }
  
  // Function to handle form submission for the first blog post
  document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const commentInput = document.getElementById("commentInput");
    const newComment = commentInput.value.trim();
  
    if (newComment !== "") {
      comments.push(newComment);
      displayComments();
      commentInput.value = ""; // Clear input field after adding comment
    }
  });
  
  // Function to display comments for the second blog post
  function displayCommentsForEval() {
    const commentListForEval = document.getElementById("commentListForEval");
    commentListForEval.innerHTML = ""; // Clear existing comments
  
    commentsForEval.forEach((comment, index) => {
      const li = document.createElement("li");
      li.textContent = comment;
      li.classList.add("comment");
      li.style.animationDelay = `${index * 0.1}s`;
      commentListForEval.appendChild(li);
    });
  }
  
  // Function to handle form submission for the second blog post ("Why 'eval' Should Not Be Used")
  document.getElementById("commentFormForEval").addEventListener("submit", function(event) {
    event.preventDefault();
    const commentInputForEval = document.getElementById("commentInputForEval");
    const newCommentForEval = commentInputForEval.value.trim();
  
    if (newCommentForEval !== "") {
      commentsForEval.push(newCommentForEval);
      displayCommentsForEval();
      commentInputForEval.value = ""; // Clear input field after adding comment
    }
  });

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  
  // Display initial comments for both blog posts
  displayComments();
  displayCommentsForEval();
  