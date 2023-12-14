<template>
  <h2 class="gallery-title">Check our work</h2>
  <div>
    <div class="gallery">
      <div class="card">
        <img src="/images/brandone.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/brandtwo.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/brandthree.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/brandfour.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/famone.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/famtwo.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/famthree.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/famfour.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/wedone.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/wedtwo.png" alt="" />
      </div>
      <div class="card">
        <img src="/images/wedthree.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}
.gallery .card {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery-title {
  text-align: center;
  margin: 20px 0;
  border-bottom: 1px solid #ccc;
}
</style>
