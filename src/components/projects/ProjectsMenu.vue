<template>
<div class="container">
  <div class="row">

    <div class="col s12 m4">
      <div class="card" @click="$emit('click', 'work')">
        <div class="card-image">
          <img src="../../assets/images/projects/workprojects.png">
        </div>
        <div class="card-content">
          <span class="card-title">
            <span class="orange-text">getWorkProjects</span><span class="bluegreen-text">()</span>;
          </span>
          <p>Company projects, Freelance projects, and devLabs stuff.</p>
        </div>
      </div>
    </div>

    <div class="col s12 m4">
      <div class="card" @click="$emit('click', 'misc')">
        <div class="card-image">
          <img src="../../assets/images/projects/miscprojects.png">
        </div>
        <div class="card-content">
          <span class="card-title">
            <span class="orange-text">getMiscProjects</span><span class="bluegreen-text">()</span>;
          </span>
          <p>Miscellaneous works, experiments, prototypes and tools.</p>
        </div>
      </div>
    </div>

    <div class="col s12 m4">
      <div class="card" @click="$emit('click', 'uni')">
        <div class="card-image">
          <img src="../../assets/images/projects/uniprojects.png">
        </div>
        <div class="card-content">
          <span class="card-title">
            <span class="orange-text">getUniStuff</span><span class="bluegreen-text">()</span>;
          </span>
          <p>Projects that were mostly done during my undergrad.</p>
        </div>
      </div>
    </div>

  </div>
</div>
</template>
<style scoped>
  .card {
    cursor: pointer;
  }
  .card:hover {
    -webkit-box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
    box-shadow: 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2);
  }
</style>
