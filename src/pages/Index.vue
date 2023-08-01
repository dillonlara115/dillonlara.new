<template>
  <Layout>
    <div class="container-fluid p-0 main">
      <About/>
      <hr class="m-0">
      <Experience/>
      <hr class="m-0">
      <Education/>
      <hr class="m-0">
      <Work/>
      <hr class="m-0">
      <Skills/>
      <hr class="m-0">
     <Packages/>
      <hr class="m-0">
      <Contact/>
    </div>
  </Layout>
</template>

<script>
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Packages from "../components/Packages";

export default {
  components: {
    About,
    Experience,
    Education,
    Skills,
    Interests,
    Contact,
    Work,
    Packages
  },
  metaInfo: {
    title: "Dillon Lara - Colorado Springs Web Developer and ecommerce Consultant",
    titleTemplate: "%s - Colorado Springs Web Developer and ecommerce Consultant"
  }
};
</script>

<style>
.subheading {
  font-size: 1.5rem;
}

.fa-ul > li {
  display: flex;
  align-items: center;
}

.dev-icons {
  font-size: 3rem;
}

.dev-icons .list-inline-item svg:hover {
  color: var(--primary);
}

section.resume-section {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>
