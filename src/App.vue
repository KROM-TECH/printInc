<template>
  <body>
 <Nav/>
   <!-- <Home/> -->
   <router-view></router-view>
  </body>
</template>

<script>
import Nav from './components/Nav'
// import Home from './views/Home'
// import Home from './views/Info'
// import Home from './views/Services'
export default {
components:{
  Nav,
  // Home
}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');
:root {
  --primary-color: #142e54;
   --background-color:#002540;
}

body {
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  font-family: 'Titillium Web', sans-serif;
  transition: 0.6s;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin:0;
  padding: 0;
}

/* a{
  text-decoration: none;
  display: flex;
  align-items: center;

}
a:hover{
  color: var(--primary-color);
} */
</style>
