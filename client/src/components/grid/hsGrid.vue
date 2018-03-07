<template lang="pug">
-var n = 1
div
  mixin rowBasic(rowClass, final)
    div(class=rowClass)
      while n < final+1
        div(class="hs-col")
          span= 'Columna ' + n++
      - n = 1

  mixin column(final)
    while n < final+1
      div(class="hs-col")
        span= 'Columna ' + n++
    - n = 1

  +rowBasic('hs-row hs-row__twelve', 12)
  +rowBasic('hs-row hs-row__six', 6)
  +rowBasic('hs-row hs-row__four', 4)
  +rowBasic('hs-row hs-row__three', 3)
  +rowBasic('hs-row hs-row__two', 2)
  +rowBasic('hs-row hs-row__one', 1)

  // Grillas Especiales

  div(class="hs-row hs-row__header")
    +column(3)

  div(class="hs-row hs-row__maria")
    +column(3)
</template>
