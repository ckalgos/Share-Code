export function InitFireBase() {
  // Initialize the Firebase SDK.
  firebase.initializeApp({
    apiKey: "AIzaSyBRRDRtb2l9ahn0v3qTTv3Cmd-gw4Eu70s",
    databaseURL: "https://share-code-3dd38-default-rtdb.firebaseio.com/",
  });

  // Get Firebase Database reference.
  var firepadRef = firebase.database().ref();

  const urlparams = new URLSearchParams(window.location.search);
  const roomId = urlparams.get("id");

  if (roomId) {
    firepadRef = firepadRef.child(roomId);
  } else {
    firepadRef = firepadRef.push();
    window.history.replaceState(null, "Share Code", "?id=" + firepadRef.key);
  }

  return firepadRef;
}
