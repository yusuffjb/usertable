function openModal(userID,userName,usertype,LastAccessedTime,ContactNo,Email) {
    
    document.getElementById("modal-userid").innerHTML = userID; 
    document.getElementById("modal-username").innerHTML = userName;
    document.getElementById("modal-usertype").innerHTML = usertype;
    document.getElementById("modal-Time").innerHTML = LastAccessedTime;
    document.getElementById("modal-contact").innerHTML=ContactNo;
    document.getElementById("modal-email").innerHTML=Email;
  
  
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
  
    document.getElementById("modal").style.display = "none";
  }
