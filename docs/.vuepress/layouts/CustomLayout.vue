<template>
  <div class="container">
    <header>

      <nav class="custom-navbar">
        <router-link
          v-for="link in navbarLinks"
          :key="link.text"
          :to="link.link"
        >
          {{ link.text }}
        </router-link>
      </nav>
    </header>
    <main>
      <h1>Services</h1>
      <Content />
      <Gallery/>
    </main>
    <footer>
      <p>&copy; {{ currentYear }} My Company</p>
    </footer>
  </div>
</template>

<script>
import Gallery from "../components/Gallery.vue";

export default {
  data() {
    return {
      navbarLinks: [
        { text: "Home", link: "/" },
        { text: "Services", link: "/services" },
        { text: "Contact", link: "/contact" },
      ],
    };
  },

  components: { Gallery },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
h1,
footer {
  text-align: center;
}

.custom-navbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  column-gap: 10px;
}
</style>
