<template>
    <div class="top-nav">
        <div class="top-nav__inner m-auto d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <img alt="Logo" src="@/assets/logo-horizontal-1.svg" class="logo">
            </div>

            <button
                class="hamburger hamburger--collapse"
                :class="{'is-active': hamburgerActive}"
                type="button"
                @click="toggleHamburger"
            >
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>

            <div class="top-nav__inner-controls">
                <div class="item">
                    SO FUNKTIONIERT’S
                </div>
                <div class="item">
                    SONDERANGEBOTE
                </div>
                <div class="item ph3" ref="showDropdown">
                    <img alt="user" src="@/assets/image/user.svg" class="mr2">
                    MEIN BEREICH
                    <img alt="dropdown" src="@/assets/image/triangle-down.svg" class="ml4">
                </div>
            </div>
            <div class="dropdown-menu" ref="dropdown">
                <div data-popper-arrow></div>
                <account-popup />
            </div>
        </div>
    </div>
</template>

<script>
  import {createPopper} from '@popperjs/core'
  import AccountPopup from './components/AccountPopup';

  export default {
    name: "TopNav",
    components: {AccountPopup},
    data() {
      return {
        hamburgerActive: false
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs["showDropdown"].addEventListener('click', this.showDropdown);
        document.addEventListener('click', this.hideDropdown);
        setTimeout(() => { // workaround to fix width issue
          createPopper(this.$refs["showDropdown"], this.$refs["dropdown"], {
            placement: 'bottom-start',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 12],
                },
              },
              {
                name: "sameWidth",
                enabled: true,
                fn: ({ state }) => {
                  state.styles.popper.width = `${state.rects.reference.width}px`;
                },
                phase: "beforeWrite",
                requires: ["computeStyles"],
              }
            ]
          });
        }, 500);
      });
    },
    beforeDestroy() {
      this.$refs["showDropdown"].removeEventListener('click', this.showDropdown);
      document.removeEventListener('click', this.hideDropdown);
    },
    methods: {
      showDropdown(e) {
        e.stopPropagation();
        this.$refs["dropdown"].setAttribute('data-show', '');
      },
      hideDropdown() {
        this.$refs["dropdown"].removeAttribute('data-show');
      },
      toggleHamburger() {
        this.hamburgerActive = !this.hamburgerActive;
      }
    }
  }
</script>

<style scoped>
    div[data-popper-arrow] {
        left: auto!important;
        right: 42px;
    }
</style>
