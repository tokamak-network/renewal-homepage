<template>
  <div class="header">
    <div class="header-title">
      <img
        src="@/assets/tokamak-symbol.svg"
        class="tokamak-logo"
        style="width: 45px; height: 30px"
      />
      <img src="@/assets/tokamak-text.svg" class="tokamak-text" />
      <div class="language">EN | CN | KR</div>
    </div>
    <div style="display: flex; flex: 1; justify-content: center">
      <div class="menu">
        <router-link
          :to="'/'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('/'),
          }"
        >
          Home
        </router-link>
        <router-link
          :to="'/solutions'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('solutions'),
          }"
        >
          Solutions
        </router-link>
        <router-link
          :to="'/services'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('services'),
          }"
        >
          Services
        </router-link>
        <router-link
          :to="'/developers'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('developers'),
          }"
        >
          Developers
        </router-link>
        <router-link
          :to="'/about'"
          class="menu-item"
          :class="{
            selected: $route.path.includes('about'),
          }"
        >
          About
        </router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "Header.scss";
</style>
