<template>
  <button
    @click="toggleTheme"
    class="theme-toggler"
    :title="`Toggle theme to ${theme === 'light' ? 'dark' : 'light'}`"
  >
    <span
      id="spot"
      :style="{
        fontSize: theme === 'light' ? '1.5rem' : '1.75rem',
      }"
    >
      {{ theme === 'light' ? '🌙' : '🌞' }}
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import getTheme from '@/helpers/getTheme'

const theme = ref(getTheme())

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  window.location = 'https://8ogdanovv.github.io/abcd-sign/'
}

const setTheme = theme => {
  sessionStorage.setItem('theme', theme)
  document.documentElement.setAttribute('data-theme', theme)
  document.getElementById('favicon').href =
    theme === 'dark' ? '/logo-white.ico' : '/logo-black.ico'
}

onMounted(() => setTheme(theme.value))

watch(theme, newTheme => setTheme(newTheme))
</script>

<style lang="scss">
[data-theme='dark'] {
  --is-dark: 1;
  --is-white: 0;

  --bg0: #000000;
  --color0: #ffffff;

  --scrollbar-thumb: rgb(54, 54, 54);
  --scrollbar-track: rgb(90, 90, 90);
  --scrollbar-thumb_hover: rgb(21, 21, 21);
  --scrollbar-track_hover: rgb(106, 106, 106);
}

[data-theme='light'] {
  --is-dark: 0;
  --is-white: 1;

  --bg0: #ffffff;
  --color0: #000000;

  --scrollbar-thumb: rgb(145, 145, 145);
  --scrollbar-track: rgb(242, 242, 242);
  --scrollbar-thumb_hover: rgb(45, 45, 45);
  --scrollbar-track_hover: rgb(226, 226, 226);
}

.theme-toggler {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  z-index: 1;
  transition: transform 0.5s;
  cursor: pointer;
  opacity: 0.75;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  #spot {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color0);
    line-height: 100%;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    border: 1px solid var(--bg0);
    background-color: var(--color0);
  }
}
</style>