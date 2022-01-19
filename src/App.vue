<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/basic">Basic</router-link> |
      <router-link to="/event">Event</router-link>
      <router-link to="/basic">Basic</router-link> |
      <router-link to="/computed">Computed</router-link>
      <router-link to="/basic">Basic</router-link> |
      <router-link to="/sampleSearch">Sample_Search</router-link> |
      <router-link to="/sampleSave">Sample_Save</router-link> |
      <router-link to="/example">Example</router-link> |
      <router-link to="/slot">Slot</router-link> |
      <router-link to="/provideInject">ProvideInject</router-link> |
      <router-link to="/calculator">Calculator</router-link> |
      <router-link to="/compositionAPI">CompositionAPI</router-link> |
      <router-link to="/compositionAPI2">CompositionAPI2</router-link> |
      <router-link to="/compositionAPI3">CompositionAPI3</router-link> |
      <router-link to="/compositionAPI4">CompositionAPI4</router-link> |
      <router-link to="/compositionAPIProvide">CompositionAPIProvide</router-link> |
      <router-link to="/customDirective">CustomDirective</router-link> |
      <router-link to="/plugins">Plugins</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

