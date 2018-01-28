<template>
  <div class="card">
    <div class="card-image">
      <img v-once :src="`/static/images/${type}/${project.image}`">
      <div class="awards">
      <span v-for="(award, index) in project.awards" :key="index" class="badge award amber darken-1"><i class="fa fa-trophy"></i> {{award}}</span>
      </div>
    </div>
    <div class="card-content">
      <span class="card-title orange-text">{{project.name}}<span class="badge" :class="statusColor">{{project.status}}</span>&nbsp;<iframe v-if="project.reponame" :src="`https://ghbtns.com/github-btn.html?user=josephharveyangeles&repo=${project.reponame}&type=star&count=false`" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></span>
      <p v-html="project.description"></p>
      <div class="skill-group left">
        <p class="skill" v-for="(skill, index) in project.skills" :key="index" :class="skillColor(skill)">{{skill}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Skills } from '@/components/configuration.conf'
export default {
  props: ['project', 'type'],
  computed: {
    statusColor() {
      switch(this.project.status.toLowerCase()) {
        case "completed": return 'teal darken-4'
        case "in progress": return 'blue darken-1'
        default: return 'grey darken-2'
      }
    }
  },
  methods: {
    skillColor(skill) {
      const foundSkill = Skills.find(s=>s.name.toLowerCase() === skill.toLowerCase())
      if (foundSkill) {
        return foundSkill.color
      }
      return 'teal'
    }
  }
}
</script>
<style scoped>
.card {
  margin-bottom: 5%;
}
.awards {
  position: absolute;
  right: -2px;
  top: 5px;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
.award {
  margin: 2px 2px;
}
.badge {
  font-weight: 300;
  font-size: 0.8rem;
  color: #fff;
  border-radius: 2px;
}
.chip {
  height: 24px;
  padding: 0 10px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  vertical-align: middle;
}
.skill {
  color: white;
  font-weight: bold;
  font-size: 0.8em;
  border-radius: 2px;
  text-align: center;
  padding: 3px 10px;
  text-indent: 0;
  cursor: context-menu;
  float: left;
}
.skill-group {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-top: 3%;
}
.skill-group>.skill:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.skill-group>.skill:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.skill-group>.skill:last-child:not(:first-child), .skill-group>.dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
