<template>
  <section class="resume-section education-section p-3 p-lg-5 d-flex align-items-center" id="education">
    <div class="container sub-content">
      <h2 class="mb-5">Education</h2>

      <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">Full Sail University</h3>
          <div class="subheading mb-3">Web Design and Development</div>
          <div>Bachelor's degree</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">July 2013</span>
        </div>
      </div>

      <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
        <div class="resume-content">
          <h3 class="mb-0">Berklee College of Music</h3>
          <div class="subheading mb-3">Music Production and Technology</div>
          <div>Masters Certificate</div>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">July 2008</span>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.education-section {
  background: url("../assets/images/experience.jpg") center / cover no-repeat;
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
</style>