<template>
  <main>
    <div :class="success ? '' : 'hide'">
      <img src="../assets/success.svg" alt="teacher" />
      <P>Document Received Successfully</P>
      <P>Check your Email for payment Link</P>
      <router-link to="/home"
        ><button><b>Back to Homepage</b></button></router-link
      >
    </div>
    <form action="" @submit.prevent="handleSubmit" class="fadeRight" :class="success ? 'hide' : ''">
      <span class="err">{{ error }}</span>
      <div>
        <label for="name" class="active">Name</label>
        <input v-model="name" name="Name" type="text" placeholder="Enter Your Full Name" required />
      </div>

      <div>
        <label for="phone">Phone Num</label>
        <input v-model="number" name="Phone" type="text" placeholder="WhatsApp Prefered" required />
      </div>

      <div style=" margin-bottom: 8px;">
        <label for="">Urgent?</label>
        <select v-model="urgent" name="Colored" required style="display: block;">
          <option value="No" selected>No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
      <div style=" margin-bottom: 8px;">
        <label for="">Colored?</label>
        <select v-model="colored" name="Colored" required style="display: block;">
          <option value="No" selected>No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div style=" margin-bottom: 8px;">
        <label for="">Pick Up?</label>
        <select v-model="pickup" name="Faculty" required="" style="display: block;">
          <option value="No" selected>No</option>
          <option value="Yes" selected>Yes</option>
        </select>
      </div>

      <div>
        <label for="dept">Description</label>
        <textarea v-model="description" name="Department" type="text" placeholder="Enter Detailed description on how you want the document" required></textarea>
      </div>

      <div>
        <label for="book" id="uploadbtn" class="upload">{{ title }}</label>
        <input @change="update" class="custom-upload__input" id="book" type="file" style="display: none;" data-behaviour="custom-upload-input" name="file" required="" />
      </div>

      <div class="btnC">
        <button type="submit" id="btn" style="margin-top: 50px;">{{ print }}</button>
        <button id="btn" style="margin-top: 50px;">Save</button>
      </div>
    </form>
  </main>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/storage';
  import 'firebase/auth';
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  const up = db.collection('users').doc(user.uid);
  export default {
    data() {
      return {
        success: false,
        print: 'Print',
        title: 'Upload',
        name: '',
        number: '',
        urgent: 'No',
        colored: 'No',
        pickup: 'Yes',
        description: '',
        error: ''
      };
    },
    created() {
      this.success = false;
    },
    methods: {
      handleSubmit() {
        const object = {
          title: this.title,
          name: this.name,
          urgent: this.urgent,
          number: this.number,
          colored: this.colored,
          pickup: this.pickup,
          description: this.description
        };
        this.print = 'Loading...';
        console.log(document.getElementById('book').files[0]);
        const ref = db.collection('toPrint').doc(`${this.title} by ${this.name}`);
        console.log(this.title, this.name, this.number, this.colored, this.pickup, this.description);
        ref
          .set(object)
          .then(() => {
            up.update({
              inProgress: firebase.firestore.FieldValue.arrayUnion(object)
            });
          })
          .then(() => {
            console.log('UPLOAD-FILE called!');
            const storageReference = firebase.storage().ref();
            const file = document.getElementById('book').files[0];
            const uploadTask = storageReference
              .child('toPrint/' + `${this.title} by ${this.name}`)
              .put(file)
              .then(() => {
                this.success = true;
              });
          })
          .catch((err) => {
            this.error = err.message;
          });
      },
      update(evt) {
        const input = evt.currentTarget.value.split('\\').pop();
        console.log(input);
        this.title = input;
      }
    }
  };
</script>

<style scoped>
  .hide {
    display: none;
  }
  p {
    color: green;
  }
  img {
    height: auto;
    max-width: 50%;
  }
  .err {
    color: red;
  }
  .btnC {
    width: 60vw;
    display: flex;
    justify-content: space-between;
  }
  form {
    padding: 10px;
    margin: 0px !important;
    width: 50vw;
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  select {
    background-color: rgba(255, 255, 255, 0.9);
    width: 65vw;
    padding: 5px;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
    height: 3rem;
    outline: none;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 65vw;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
    box-shadow: none;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
  }

  textarea {
    resize: vertical;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 65vw;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
    box-shadow: none;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
  }
  input:focus {
    border-bottom: 1px solid var(--primary-color);
  }
  textarea:focus {
    border-bottom: 1px solid var(--primary-color);
  }
  label {
    cursor: default;
    color: #9e9e9e;
    font-size: larger;
    display: block;
  }
  .con {
    margin-top: 5rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  .upload {
    text-transform: uppercase;
    margin: 5px 0px !important;
    padding: 0.5rem;
    color: var(--primary-color);
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--background-color);
    width: fit-content;
  }

  .upload:hover {
    margin: 5px 0px !important;
    padding: 0.5rem;
    color: white;
    background-color: var(--primary-color);
    outline: none;
    border-radius: 5px;
    border: transparent;
    width: fit-content;
  }
  main button {
    text-transform: uppercase;
    margin: 5px 0px !important;
    padding: 0.5rem;
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

  * {
    transition: 0.3s linear;
  }

  main {
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    main {
      width: 100vw;
      margin-bottom: 4rem !important;
      overflow-y: auto;
    }
  }

  @media screen and (max-width: 613px) {
    main {
      overflow-y: auto;
    }
    main {
      margin-bottom: 4rem !important;
      overflow-y: auto;
    }
  }
</style>
