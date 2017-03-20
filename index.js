function addComment(){
  event.preventDefault();
  var bodyText = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}

function createCommentBody(comment){
  var bodyDiv = document.createElement("div");
  var bodyPara = document.createElement("p");

  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);
}

function createCommenterLabel(commenter){
  var commenterDiv = document.createElement("div");

  var commenterLabel = document.createElement("p");
  commenterLabel.innerHTML = "posted by: ";

  var commenterName = document.createElement("span");

  commenterName = commenter;
  commenterLabel.appendChild(commenterName);
  commenterDiv.appendChild(commenterLabel);
}

function postNewComment(commentBody, commenterLabel){
  var commentsDiv = document.findElementById("comments");
  var newCommentsDiv = document.createElement("div");

  newCommentsDiv.appendChild(commentBody);
  newCommentsDiv.appendChild(commenterLabel);
  commentsDiv.appendChild(newCommentsDiv);
}
