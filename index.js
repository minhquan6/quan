// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

const firebaseConfig = {
  apiKey: "AIzaSyDoh_EV27L-RTGJyAhnjMuXIeacrpQnMdc",
  authDomain: "minh-quan-ef383.firebaseapp.com",
  databaseURL: "https://minh-quan-ef383-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "minh-quan-ef383",
  storageBucket: "minh-quan-ef383.appspot.com",
  messagingSenderId: "123235041928",
  appId: "1:123235041928:web:33a113ffea5fd7c8f2d53d"
};

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
