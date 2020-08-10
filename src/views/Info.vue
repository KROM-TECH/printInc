<template>
  <main>
    <div class="main">
        <div>
        <h2>About</h2>
        <p>
          PrintInc is a Kromtech powered Platform that focuses on reducing the stress it takes to get simple printing done in Nigerian Universities <br />
          So Instead of searching for a printing shop early in the morning to print your assignment or searching up and down for cheaper rates, we get it done for you all from the comfort of your
          mobile device and you can either get it delivered to you or come to pick it up
        </p>
        </div>
        <div>
        <h2>How It Works</h2>
        <p>
        <ul>
          <li>Login</li>
          <li>Navigate to the printing screen and fill in the form</li>
          <li>A price will be auto generated after filling the form (we currently do not offer pay on delivery)</li>
          <li>Make Payment or save file in order to print later</li>
        </ul>
        </p>
        </div>
        <div>
        <h2>Pricing</h2>
        <p>
        <ul>
          <li>Black and white ~ <span class="price">15naira per page</span></li>
          <li>Colored ~ <span class="price">35naira per page </span></li>
          <li>Black and white ~  <span class="price">10naira per page</span> (10 pages and above)</li>
          <li>Colored ~  <span class="price">30naira per page</span> (10 pages and above)</li>          
        </ul>
        </p>
        </div>


   </div>


  </main>
</template>

<script>
  export default {};
</script>

<style scoped>
.price{
 color: tomato;
}
ul{
  text-align: start !important;
}
  * {
    margin: 0 !important;
    transition: 1s linear;
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
  main  h2 {
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
    main{
      overflow-y: auto;    
    }
    .main{
      margin-bottom: 4rem !important;  
      overflow-y: auto;    
    }
  }
</style>
