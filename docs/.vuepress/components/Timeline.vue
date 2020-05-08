<template>
  <div class="timeline">
    <div class="title">Timeline</div>
    <ul class="timeline-item">
      <slot name="timeline-content" />
    </ul>
  </div>
</template>

<style lang="stylus">
.timeline
  overflow-y auto
  position fixed
  max-width 280px
  top 58px
  right 0
  bottom 0
  font-size 12px
  border-left 1px solid $borderColor

  .title
    font-size 18px
    font-weight bold
    padding 16px

.timeline-item
  margin 0
  padding 0 16px 16px
  list-style none

  li
    display flex

  span
    min-width 36px

  a
    color $subTextColor
  a.router-link-exact-active.router-link-active
    color $accentColor
    background-color aliceblue


@media (max-width: $MQNarrow)
  .timeline
    position static
</style>