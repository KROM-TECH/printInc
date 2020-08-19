<template>
  <main>
    <div class="main">
      <hr />
      <h5>You have {{ progress }} Document in progress</h5>
      <div class="container" v-for="document in documents" :key="document.time">
        <div class="card">
            <span>Title: {{document.title}}</span>
            <span>Date: {{document.time}} </span>
            <span>status: {{document.status}} </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  const user = firebase.auth().currentUser;
  const docRef = firebase
    .firestore()
    .collection('users')
    .doc(user.uid);
  export default {
    data() {
      return {
        documents: []
      };
    },
    created() {
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data().inProgress);
            this.documents = doc.data().inProgress;
          } else {
            console.log('No such document!');
          }
        })
        .catch(function(error) {
          console.log('Error getting document:', error);
        });
    },
    computed: {
      progress() {
        if (this.documents.length < 1) {
          return 'zero';
        } else {
          return this.documents.length;
        }
      }
    }
  };
</script>

<style scoped>
  .row {
    display: flex;
    justify-content: space-between;
  }
  .card {
    margin: 1.5rem 2rem !important;
    text-align: start !important;
    background-color: burlywood;
    padding: 1rem;
    width: fill-available !important;
    display: flex;
    flex-direction: column;
    margin-top: 1rem !important;
  }
  h5 {
    color: grey;
    margin-top: 1rem !important;
  }
  hr {
    width: 100%;
    background-color: var(--primary-color);
    height: 0.2rem;
  }
  main button {
    text-transform: uppercase;
    margin: 5px 0px !important;
    padding: 1rem;
    color: var(--primary-color);
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--background-color);
    width: fit-content;
  }

  main button:hover {
    margin: 5px 0px !important;
    padding: 1rem;
    color: white;
    background-color: var(--primary-color);
    outline: none;
    border-radius: 5px;
    border: transparent;
    width: fit-content;
  }

  ul {
    text-align: start !important;
  }
  * {
    margin: 0 !important;
    transition: 0.3s linear;
  }

  main {
    background-color: white;
    height: 100vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    letter-spacing: 1px;
    word-spacing: 0.4rem;
  }

  @media screen and (max-width: 813px) {
    body {
      overflow: auto;
    }
    main {
      width: 100vw;
      overflow-y: auto;
    }
    .main {
      width: 100vw;
      margin-bottom: 4rem !important;
      overflow-y: auto;
    }
  }

  @media screen and (max-width: 613px) {
    main {
      overflow-y: auto;
    }
    .main {
      margin-bottom: 4rem !important;
      overflow-y: auto;
    }
  }
</style>
