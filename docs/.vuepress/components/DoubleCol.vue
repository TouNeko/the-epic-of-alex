<template>
  <div class="double-col">
    <div class="col-content">
      <slot name="col-left" />
    </div>
    <div class="col-content">
      <slot name="col-right" />
    </div>
  </div>
</template>

<style lang="stylus">
.double-col
  display flex
  justify-content space-between
  margin: 1rem 0

  .col-content
    width calc(50% - 1rem)
    background-color red

@media (max-width: $MQMobile)
  .col-2
    display block
</style>