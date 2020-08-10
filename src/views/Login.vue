<template>
  <main>
    <div class="main">
      <h2>Login</h2>
      <div class="social">
        <div class="bod"><img src="https://img.icons8.com/color/48/000000/google-logo.png" /></div>
        <div class="bod"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" /></div>
        <div class="bod"><img src="https://img.icons8.com/fluent/48/000000/twitter.png" /></div>
      </div>

      <div class="form">
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>

        <button>Submit</button>
      </div>
    </div>
  </main>
</template>

<script>
  export default {};
</script>

<style scoped>
button{
    margin: 5px 0px !important;
  padding: 1rem;
  background-color: var(--primary-color);
  outline: none;
  border-radius: 5px;
  border: transparent;
  width: fit-content;
  color: white !important;
}
button:hover{
    padding: 1rem;
  color: var(--primary-color) !important;
  background-color:transparent;
  outline: none;
  border-radius: 5px;
  border: 1px solid var(--background-color) ;
}
.form{
  margin-top:5rem !important;
  /* border: 1px solid black; */
}
input{
  padding:7px;
  margin: 4px !important;
}
  img {
    max-width: 100%;
    height: auto;
  }
  .bod {
    border: 1px solid black;
    width: 30px;
    height: 30px;
    margin: 0px 3px !important;
    border-radius: 15%;
    padding: 2px;
  }
  .social {
    display: flex;
    justify-content: center;
  }

  * {
    margin: 0 !important;
    transition: 0.6s linear;
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

  main p {
    padding: 5px;
  }
  main h2 {
    color: var(--primary-color);
    font-size: 2.1rem;
    font-weight: 600 !important;
    margin: 1rem 0rem !important;
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
