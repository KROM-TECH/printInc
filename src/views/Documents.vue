<template>
  <main>
    <div class="main">
      <hr />
      <h5>Save your documents online and print later</h5>
      <h1>Coming Soon </h1>
      <div style="display:none">
  <h5>You have no Saved Document</h5>

      <div class="card">
        <div class="row">
          <span>Title: One boring Engineering text</span>
          <span><a href='gooogle.com' download='Name'>Download</a></span>
        </div>
        <div class="row">
          <span>Date: 17/02/1960 </span>
          <span>Print </span>
        </div>       
      </div>
      <div class="card">
        <div class="row">
          <span>Title</span>
          <span>download</span>
        </div>
        <div class="row">
          <span>Date </span>
          <span>Print </span>
        </div>       
      </div>
      <div class="card">
        <div class="row">
          <span>Title</span>
          <span>download</span>
        </div>
        <div class="row">
          <span>Date </span>
          <span>Print </span>
        </div>       
      </div>
      </div>
    

    </div>
  </main>
</template>

<script>
  export default {};
</script>

<style scoped>
.row{
  display: flex;
  justify-content: space-between;
}
.card{
  margin: 1.5rem 2rem !important;
  text-align: start !important;
  background-color: burlywood;
  padding: 1rem;
  width: fill-available !important;
  display: flex;
  flex-direction: column;
  margin-top: 1rem !important;
}
 h1 {
    color: grey;
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

  .main {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
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
    overflow-x: hidden;
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
      overflow-x: hidden;
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
