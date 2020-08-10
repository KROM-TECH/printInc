<template>
    <aside>
    <ul class="aside nav">
      <li class="logo">
        <!-- <img src="./img/logo2.png" alt="logo" > -->
        <!-- <h5>Orbit Tutor</h5> -->
      </li>
      <li class="nav-item"><router-link  to="/"><i class="material-icons-outlined ">home</i><span class="nav-name">Home</span></router-link></li> 
      <li class="nav-item"><router-link to="/info"><i class="material-icons-outlined ">info</i><span class="nav-name">Info</span></router-link></li>
      <li class="nav-item"><router-link to="/login"><i class="material-icons-outlined">perm_identity</i><span class="nav-name">Login</span></router-link></li>
      <li class="nav-item"><router-link to="/services"><i class="material-icons-outlined">adjust</i><span class="nav-name">Services</span></router-link></li>
      <li class="nav-item">Powered by Kromtech</li>
    </ul>
  </aside>
</template>

<script>
export default {

}
</script>

<style scoped>
router-link{
  color:red !important
}
@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v22/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
}

.material-icons-outlined {
  font-family: 'Material Icons Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
.logo {
  display: flex;
  /* flex-direction: row-reverse;   */
  margin-left: 2px !important;
  color: white;
}

.logo img {
  transition: 2s;
}

.logo img:hover {
  transform: rotate(360deg);
}

aside {
  /* background-color: brown; */
  height: 100vh;
  width: 20vw;
  padding-top: 15vh;
  margin-left: 3rem;
}

.aside {
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.nav-item {
  padding: 1rem;
  color: black !important;
  margin: 1rem;
  /* background-color: white; */
  width: 20vw;
  text-align: center;
  border-radius: 50px 0px 0px 50px;
  font-size: 20px;
  z-index: 0;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  transition: 0.9s;
}

.nav-item:hover {
  color: black;
  padding: 1rem;
  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.524);
  width: 20vw;
  text-align: center;
  border-radius: 50px 0px 0px 50px;
  font-size: 20px;
  z-index: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

li:last-child {
  margin-bottom: auto;
  position: fixed;
  bottom: 0;
  background-color: transparent;
  font-size: large;
  padding: 0 !important;
}

li:last-child:hover {
  margin-bottom: auto;
  position: fixed;
  bottom: 0;
  background-color: transparent;
}

li:first-child:hover {
  font-size: 300px !important;
  background-color: transparent;
}

.nav-item .material-icons-outlined {
  font-size: 36px !important;
}

.nav-item .nav-name {
  margin-left: 1.5rem;
}

/* media queries */

@media screen and (max-width: 1024px) {
  li:last-child {
    display: none;
  }
  .logo h5 {
    display: none;
  }
}

@media screen and (max-width: 813px) {
  body {
    overflow: hidden;
  }
  .logo img {
    display: none;
  }
  main {
    padding-bottom: 50rem;
  }
  .aside {
    position: fixed;
    bottom: 0px;
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    margin-bottom: 0;
    width: 100vw;
    height: 4rem;
    z-index: 3;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 !important;
  }
  aside {
    margin: 0;
    width: 0;
  }
    .nav-item:hover {
    color: var(--primary-color);
    padding: 0.7rem;
    margin: 1rem;
    background-color: transparent;
    width: 20vw;
    text-align: center;
    border-radius: 0px;
    font-size: 20px;
    z-index: 0;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }
}

@media screen and (max-width: 613px) {
  .nav-item .nav-name {
    display: none;
  }
  main {
    background-color: white;
    height: 93vh;
    width: 100vw;
    z-index: 1;
    margin: 0rem 0rem 0rem 0rem;
    border-radius: 0px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center !important;
  }
}

@media screen and (max-width: 400px) {
  .aside {
    height: 4rem;
  }
}
</style>