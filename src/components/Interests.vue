<template>
  <section class="resume-section  p-3 p-lg-5 d-flex align-items-center" id="interests">
    <div class="container sub-content">
      <h2 class="mb-5">Interests</h2>
      <p>When I'm not busy helping clients grow their businesses I will likely be found outdoors.  I'm an avid Mountain Biker and spend as much time as I can in the saddle.  Also, as weather permits I will spend most weekends camping with my wife and two daughters in the Colorado Wilderness.</p>
      <p
        class="mb-0"
      >I thoroughly enjoy web development as technology in this space is always changing and I have yet to get bored.  Web Development is my passion and I love being able to utilize my passion to help others pursue their passions.</p>
    </div>
  </section>
</template>


<style scoped>
.resume-section {
  background: url("../assets/images/bike.jpg") center / cover no-repeat;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: rgba(255, 255, 255, .8);
    left: 0;
    right: 0;
  }
}

</style>