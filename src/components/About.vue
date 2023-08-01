<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="container sub-content">
      <h1 class="mb-0">
        Dillon Lara
      </h1>
      <div class="subheading mb-5">
        Colorado Springs, CO 80920 · (573) 256-9991 ·
        <a
          href="mailto:dillonlara115@gmail.com"
        >dillonlara115@gmail.com</a>
      </div>
      <p
        class="lead mb-5"
      >      I'm a <strong>Web Developer</strong> currently working as a freelance developer specializing in <strong>UX design best practices</strong> for ecommerce sites and a <strong>technical SEO developer</strong> helping clients improve their search engine rankings.  Previously I was a Web Development Manager for a Creative Agency.  When I'm not <strong>helping clients grow their online presence</strong>, I can be found building out my own apps or mountain biking with my family.</p>
      <p class="lead mb-2">
        Get in touch with me here:
        <a
      </p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/dillon-lara/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/dillonlara115" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://www.instagram.com/dillonlara115/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
          <font-awesome :icon="['fab', 'instagram']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>


.resume-section {
  background: url("../assets/images/about.jpg") center / cover no-repeat;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(255, 255, 255, .9);
    left: 0;
    right: 0;
  }
}

.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
